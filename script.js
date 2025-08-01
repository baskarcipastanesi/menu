// Menu Data - CSV'den dinamik olarak yüklenecek
let menuData = {};
let categories = [];

// CSV dosyasından veri yükleme fonksiyonu
async function loadMenuFromCSV() {
    try {
        // Config'den CSV URL'sini al ve önbellek önlemek için timestamp ekle
        const timestamp = Date.now();
        const csvUrl = CONFIG.CSV_URL + (CONFIG.CSV_URL.includes('?') ? '&' : '?') + 't=' + timestamp;
        
        // Debug logları production'da kaldırıldı
        
        // CSV dosyasını fetch ile yükle - önbellek kontrolü ile
        const response = await fetch(csvUrl, {
            cache: 'no-cache',
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const csvText = await response.text();
        const menuItems = parseCSV(csvText);
        
        // Debug logları production'da kaldırıldı
        
        // Kategorileri ve menü verilerini organize et
        organizeMenuData(menuItems);
        
        // Debug logları production'da kaldırıldı
        
        // Kategorileri yükle ve ilk kategoriyi seç
        loadCategories();
        
    } catch (error) {
        console.error('CSV yükleme hatası:', error);
        
        // Analytics tracking
        trackError('csv_load_error', error.message);
        
        // Daha detaylı hata mesajları
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            showErrorState('Ağ bağlantısı hatası. Lütfen internet bağlantınızı kontrol edin.');
        } else if (error.message.includes('404')) {
            showErrorState('Menü dosyası bulunamadı. Lütfen daha sonra tekrar deneyin.');
        } else {
            showErrorState('Beklenmeyen bir hata oluştu. Lütfen sayfayı yenileyin.');
        }
    }
}

// CSV metnini parse etme fonksiyonu - Tüm alanlar tırnak içinde
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const items = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim());
        
        // İlk satır header ise, header'ı oluştur
        if (i === 0) {
            const headers = values.map(v => v.replace(/"/g, ''));
            continue;
        }
        
        // Veri satırları için
        const item = {};
        const headers = ['kategori', 'urun_adi', 'aciklama', 'fiyat'];
        
        headers.forEach((header, index) => {
            let value = values[index] || '';
            // Tırnak işaretlerini kaldır
            value = value.replace(/"/g, '');
            item[header] = value;
        });
        
        items.push(item);
    }
    
    return items;
}

// Menü verilerini kategorilere göre organize etme
function organizeMenuData(menuItems) {
    menuData = {};
    categories = [];
    
    menuItems.forEach(item => {
        const category = item.kategori;
        
        // Kategori listesine ekle (tekrar etmesin)
        if (!categories.includes(category)) {
            categories.push(category);
        }
        
        // Menü verilerine ekle
        if (!menuData[category]) {
            menuData[category] = [];
        }
        
        const price = parseFloat(item.fiyat);
        
        // Fiyat parse hatası kontrolü
        if (isNaN(price)) {
            console.warn(`Fiyat parse hatası: "${item.urun_adi}" - "${item.fiyat}"`);
        }
        
        menuData[category].push({
            name: item.urun_adi,
            description: item.aciklama,
            price: price
        });
    });
}

// Kategorileri dinamik olarak yükleme
function loadCategories() {
    const categoryTabsContainer = document.querySelector('.category-tabs');
    
    if (!categoryTabsContainer || categories.length === 0) {
        showErrorState();
        return;
    }
    
    // Mevcut kategorileri temizle
    categoryTabsContainer.innerHTML = '';
    
    // Yeni kategorileri ekle
    categories.forEach((category, index) => {
        const categoryTab = document.createElement('button');
        categoryTab.className = 'category-tab';
        categoryTab.setAttribute('data-category', category);
        categoryTab.textContent = category;
        
        // İlk kategoriyi aktif yap
        if (index === 0) {
            categoryTab.classList.add('active');
        }
        
        categoryTabsContainer.appendChild(categoryTab);
    });
    
    // Event listener'ları yeniden ekle
    setupEventListeners();
    
    // İlk kategoriyi yükle
    if (categories.length > 0) {
        switchCategory(categories[0]);
    }
}

// Hata durumu gösterme - Güvenli versiyon
function showErrorState(message = 'Menü yüklenirken hata oluştu. Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.') {
    const menuItemsContainer = document.getElementById('menu-items');
    if (menuItemsContainer) {
        // Önce container'ı temizle
        menuItemsContainer.innerHTML = '';
        
        // Güvenli şekilde DOM oluştur
        const errorDiv = document.createElement('div');
        errorDiv.className = 'empty-state';
        
        const titleH3 = document.createElement('h3');
        titleH3.textContent = 'Hata';
        
        const messageP = document.createElement('p');
        messageP.textContent = message;
        
        const retryButton = document.createElement('button');
        retryButton.className = 'retry-button';
        retryButton.textContent = 'Tekrar Dene';
        retryButton.addEventListener('click', () => location.reload());
        
        errorDiv.appendChild(titleH3);
        errorDiv.appendChild(messageP);
        errorDiv.appendChild(retryButton);
        
        menuItemsContainer.appendChild(errorDiv);
    }
}

// DOM elementlerini seç
const menuItemsContainer = document.getElementById('menu-items');
let categoryTabs = document.querySelectorAll('.category-tab');
let currentCategory = '';

// Event listener'ları kur - Memory leak önlendi
function setupEventListeners() {
    // Önceki event listener'ları temizle
    categoryTabs.forEach(tab => {
        tab.removeEventListener('click', handleCategoryClick);
    });
    
    categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', handleCategoryClick);
    });
}

// Event handler fonksiyonu - ayrı tanımlandı
function handleCategoryClick() {
    const category = this.getAttribute('data-category');
    switchCategory(category);
}

// Kategori değiştirme
function switchCategory(category) {
    // Aktif tab'ı güncelle
    categoryTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        }
    });

    // Mevcut kategoriyi güncelle
    currentCategory = category;

    // Analytics tracking
    const itemCount = menuData[category] ? menuData[category].length : 0;
    trackCategoryView(category, itemCount);

    // Menü öğelerini yükle
    loadMenuItems(category);

    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Auto-scroll category tab to center on mobile
    scrollActiveTabToRight();
}

// Menü öğelerini yükle
function loadMenuItems(category) {
    // Loading durumunu göster
    showLoading();

    // Performans için setTimeout kaldırıldı
    const items = menuData[category] || [];
    
    if (items.length === 0) {
        showEmptyState();
    } else {
        renderMenuItems(items);
    }
}

// Loading durumu gösterme - Güvenli versiyon
function showLoading() {
    menuItemsContainer.innerHTML = '';
    
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading';
    
    const spinnerDiv = document.createElement('div');
    spinnerDiv.className = 'spinner';
    
    loadingDiv.appendChild(spinnerDiv);
    menuItemsContainer.appendChild(loadingDiv);
}

// Boş durum gösterme - Güvenli versiyon
function showEmptyState() {
    menuItemsContainer.innerHTML = '';
    
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'empty-state';
    
    const titleH3 = document.createElement('h3');
    titleH3.textContent = 'Bu kategoride henüz ürün bulunmuyor';
    
    const messageP = document.createElement('p');
    messageP.textContent = 'Lütfen başka bir kategori seçin.';
    
    emptyDiv.appendChild(titleH3);
    emptyDiv.appendChild(messageP);
    menuItemsContainer.appendChild(emptyDiv);
}

// Menü öğelerini render etme - Güvenli versiyon
function renderMenuItems(items) {
    // Önce container'ı temizle
    menuItemsContainer.innerHTML = '';
    
    // DocumentFragment kullanarak performansı artır
    const fragment = document.createDocumentFragment();
    
    items.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'menu-item';
        
        const headerDiv = document.createElement('div');
        headerDiv.className = 'menu-item-header';
        
        const nameH3 = document.createElement('h3');
        nameH3.className = 'menu-item-name';
        nameH3.textContent = item.name; // textContent güvenli
        
        const priceSpan = document.createElement('span');
        priceSpan.className = 'menu-item-price';
        priceSpan.textContent = `${formatPrice(item.price)} ₺`;
        
        const descriptionP = document.createElement('p');
        descriptionP.className = 'menu-item-description';
        descriptionP.textContent = item.description; // textContent güvenli
        
        headerDiv.appendChild(nameH3);
        headerDiv.appendChild(priceSpan);
        menuItemDiv.appendChild(headerDiv);
        menuItemDiv.appendChild(descriptionP);
        
        fragment.appendChild(menuItemDiv);
    });
    
    menuItemsContainer.appendChild(fragment);
}

// Fiyat formatı
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// Auto-scroll active category tab to center on mobile
function scrollActiveTabToRight() {
    // Only apply on mobile (screen width < 768px)
    if (window.innerWidth >= 768) return;

    const categoryTabsContainer = document.querySelector('.category-tabs');
    const activeTab = document.querySelector('.category-tab.active');
    
    if (!categoryTabsContainer || !activeTab) return;

    // Get container and tab dimensions
    const containerWidth = categoryTabsContainer.offsetWidth;
    const tabLeft = activeTab.offsetLeft;
    const tabWidth = activeTab.offsetWidth;
    
    // Calculate center position for the active tab
    const centerPosition = (containerWidth - tabWidth) / 2;
    const scrollAmount = tabLeft - centerPosition;
    
    // Scroll the active tab to center
    categoryTabsContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}



// Animation removed - items load all at once

// Analytics Tracking Functions
function trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Console log for debugging - Production'da kaldırıldı
}

function trackCategoryView(categoryName, itemCount) {
    trackEvent('category_view', {
        category_name: categoryName,
        item_count: itemCount,
        event_category: 'menu_interaction'
    });
}

function trackError(errorType, errorMessage) {
    trackEvent('error', {
        error_type: errorType,
        error_message: errorMessage,
        event_category: 'error'
    });
}

function trackPageLoad() {
    trackEvent('page_view', {
        page_title: 'QR Menü - Başkarci Pastanesi',
        page_location: window.location.href,
        event_category: 'engagement'
    });
}

// Sayfa yüklendiğinde CSV'den veri yükle
document.addEventListener('DOMContentLoaded', function() {
    // Analytics tracking
    trackPageLoad();
    
    loadMenuFromCSV().finally(() => {
        // Yükleme tamamlandığında veya hata olduğunda loader'ı kaldır
        document.body.classList.add('loaded');
    });
    
    // Otomatik yenileme (eğer aktifse)
    if (CONFIG.AUTO_REFRESH_INTERVAL > 0) {
        setInterval(() => {
            loadMenuFromCSV();
        }, CONFIG.AUTO_REFRESH_INTERVAL);
    }
}); 