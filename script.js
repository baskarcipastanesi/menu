// Menu Data - Gerçek menü verilerinizle değiştirebilirsiniz
const menuData = {
    tatlilar: [
        {
            name: "Çikolatalı Sufle",
            description: "Sıcak çikolata sosu ile servis edilen yumuşak sufle",
            price: 45.00
        },
        {
            name: "Tiramisu",
            description: "İtalyan usulü kahveli tiramisu, kakao tozu ile",
            price: 55.00
        },
        {
            name: "Cheesecake",
            description: "New York usulü krem peynirli cheesecake",
            price: 50.00
        },
        {
            name: "Profiterol",
            description: "Çikolata sosu ile kaplı 6 adet profiterol",
            price: 40.00
        },
        {
            name: "Baklava",
            description: "Geleneksel Türk baklavası, fıstık ile",
            price: 60.00
        },
        {
            name: "Künefe",
            description: "Antep fıstığı ile süslenmiş künefe",
            price: 65.00
        },
        {
            name: "Kazandibi",
            description: "Geleneksel Türk tatlısı kazandibi",
            price: 45.00
        },
        {
            name: "Sütlaç",
            description: "Fırında pişirilmiş geleneksel sütlaç",
            price: 35.00
        },
        {
            name: "Aşure",
            description: "Geleneksel aşure, kuru meyveler ile",
            price: 30.00
        },
        {
            name: "Kemalpaşa",
            description: "Şerbetli tatlı kemalpaşa",
            price: 25.00
        },
        {
            name: "Künefe",
            description: "Antep fıstığı ile süslenmiş künefe",
            price: 65.00
        },
        {
            name: "Revani",
            description: "Şerbetli revani tatlısı",
            price: 30.00
        }
    ],
    "soguk-icecekler": [
        {
            name: "Limonata",
            description: "Taze sıkılmış limon suyu ile hazırlanmış limonata",
            price: 25.00
        },
        {
            name: "Ayran",
            description: "Taze ve soğuk ayran",
            price: 15.00
        },
        {
            name: "Meyve Suyu",
            description: "Portakal, elma veya şeftali suyu",
            price: 20.00
        },
        {
            name: "Soğuk Çay",
            description: "Limon dilimi ile servis edilen soğuk çay",
            price: 18.00
        },
        {
            name: "Milkshake",
            description: "Çikolata, vanilya veya çilek aromalı milkshake",
            price: 35.00
        },
        {
            name: "Smoothie",
            description: "Taze meyveler ile hazırlanmış smoothie",
            price: 40.00
        },
        {
            name: "Buzlu Kahve",
            description: "Soğuk demlenmiş buzlu kahve",
            price: 32.00
        },
        {
            name: "Kola",
            description: "Soğuk kola",
            price: 18.00
        },
        {
            name: "Gazoz",
            description: "Geleneksel Türk gazozu",
            price: 16.00
        },
        {
            name: "Şalgam Suyu",
            description: "Acılı şalgam suyu",
            price: 14.00
        },
        {
            name: "Boza",
            description: "Geleneksel boza içeceği",
            price: 22.00
        },
        {
            name: "Sahlep",
            description: "Tarçın ile servis edilen sahlep",
            price: 28.00
        }
    ],
    "sicak-icecekler": [
        {
            name: "Türk Çayı",
            description: "Demli Türk çayı, şeker ile servis edilir",
            price: 12.00
        },
        {
            name: "Espresso",
            description: "Tek shot espresso",
            price: 18.00
        },
        {
            name: "Cappuccino",
            description: "Süt köpüğü ile hazırlanmış cappuccino",
            price: 25.00
        },
        {
            name: "Latte",
            description: "Süt ile hazırlanmış yumuşak latte",
            price: 28.00
        },
        {
            name: "Sıcak Çikolata",
            description: "Krema ile servis edilen sıcak çikolata",
            price: 30.00
        },
        {
            name: "Americano",
            description: "Sıcak su ile inceltilmiş espresso",
            price: 20.00
        },
        {
            name: "Mocha",
            description: "Çikolata sosu ile hazırlanmış mocha",
            price: 32.00
        },
        {
            name: "Macchiato",
            description: "Süt köpüğü ile işaretlenmiş espresso",
            price: 22.00
        },
        {
            name: "Filtre Kahve",
            description: "Geleneksel filtre kahve",
            price: 16.00
        },
        {
            name: "Türk Kahvesi",
            description: "Geleneksel Türk kahvesi",
            price: 24.00
        },
        {
            name: "Sahlep",
            description: "Tarçın ile servis edilen sıcak sahlep",
            price: 28.00
        },
        {
            name: "Ada Çayı",
            description: "Şifalı ada çayı",
            price: 15.00
        },
        {
            name: "Ihlamur",
            description: "Doğal ıhlamur çayı",
            price: 14.00
        },
        {
            name: "Kuşburnu",
            description: "C vitamini deposu kuşburnu çayı",
            price: 16.00
        }
    ],
    pastalar: [
        {
            name: "Çikolatalı Pasta",
            description: "Çikolata kreması ile kaplı katmanlı pasta",
            price: 75.00
        },
        {
            name: "Meyveli Pasta",
            description: "Taze meyveler ile süslenmiş krema pastası",
            price: 70.00
        },
        {
            name: "Red Velvet",
            description: "Krem peynir kreması ile red velvet pasta",
            price: 80.00
        },
        {
            name: "Karışık Pasta",
            description: "Çeşitli meyve ve kremalarla hazırlanmış pasta",
            price: 85.00
        },
        {
            name: "Tiramisu Pasta",
            description: "Kahveli tiramisu pastası",
            price: 90.00
        },
        {
            name: "Cheesecake Pasta",
            description: "Krem peynirli cheesecake pastası",
            price: 88.00
        },
        {
            name: "Meyve Pasta",
            description: "Çilek, böğürtlen ve ahududu ile",
            price: 82.00
        },
        {
            name: "Çikolata Fındık Pasta",
            description: "Fındık kreması ile çikolata pastası",
            price: 78.00
        },
        {
            name: "Vanilya Pasta",
            description: "Vanilya kreması ile sade pasta",
            price: 72.00
        },
        {
            name: "Kahve Pasta",
            description: "Kahve aromalı krema pastası",
            price: 76.00
        },
        {
            name: "Limon Pasta",
            description: "Limon kreması ile ferahlatıcı pasta",
            price: 74.00
        },
        {
            name: "Muzlu Pasta",
            description: "Muz ve karamel soslu pasta",
            price: 80.00
        }
    ],
    kurabiyeler: [
        {
            name: "Çikolatalı Kurabiye",
            description: "Çikolata parçacıklı yumuşak kurabiye",
            price: 8.00
        },
        {
            name: "Yulaflı Kurabiye",
            description: "Sağlıklı yulaflı kurabiye",
            price: 6.00
        },
        {
            name: "Kurabiye Karışımı",
            description: "6 adet karışık kurabiye",
            price: 35.00
        },
        {
            name: "Fındıklı Kurabiye",
            description: "Fındık ezmesi ile hazırlanmış kurabiye",
            price: 10.00
        },
        {
            name: "Cevizli Kurabiye",
            description: "Ceviz parçacıklı geleneksel kurabiye",
            price: 9.00
        },
        {
            name: "Bademli Kurabiye",
            description: "Badem unu ile hazırlanmış kurabiye",
            price: 12.00
        },
        {
            name: "Limonlu Kurabiye",
            description: "Limon aromalı ferahlatıcı kurabiye",
            price: 7.00
        },
        {
            name: "Tarçınlı Kurabiye",
            description: "Tarçın aromalı kurabiye",
            price: 8.00
        },
        {
            name: "Kakao Kurabiye",
            description: "Kakao tozu ile hazırlanmış kurabiye",
            price: 9.00
        },
        {
            name: "Hindistan Cevizi Kurabiye",
            description: "Hindistan cevizi ile süslenmiş kurabiye",
            price: 11.00
        },
        {
            name: "Muzlu Kurabiye",
            description: "Muz parçacıklı yumuşak kurabiye",
            price: 10.00
        },
        {
            name: "Kurabiye Seti",
            description: "12 adet karışık kurabiye seti",
            price: 65.00
        },
        {
            name: "Glutensiz Kurabiye",
            description: "Gluten alerjisi olanlar için özel kurabiye",
            price: 15.00
        },
        {
            name: "Vegan Kurabiye",
            description: "Vegan beslenme için özel kurabiye",
            price: 13.00
        }
    ]
};

// DOM Elements
const menuItemsContainer = document.getElementById('menu-items');
const categoryTabs = document.querySelectorAll('.category-tab');

// Current active category
let currentCategory = 'tatlilar';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadMenuItems(currentCategory);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            switchCategory(category);
        });
    });
}

// Switch between categories
function switchCategory(category) {
    // Update active tab
    categoryTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-category') === category) {
            tab.classList.add('active');
        }
    });

    // Update current category
    currentCategory = category;

    // Load menu items for the selected category
    loadMenuItems(category);

    // Scroll active tab into view
    scrollActiveTabIntoView();

    // Smooth scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll active tab into view
function scrollActiveTabIntoView() {
    const activeTab = document.querySelector('.category-tab.active');
    const categoryTabsContainer = document.querySelector('.category-tabs');
    
    if (activeTab && categoryTabsContainer) {
        const containerRect = categoryTabsContainer.getBoundingClientRect();
        const tabRect = activeTab.getBoundingClientRect();
        
        // Check if tab is outside the visible area
        const isTabLeftOfContainer = tabRect.left < containerRect.left;
        const isTabRightOfContainer = tabRect.right > containerRect.right;
        
        if (isTabLeftOfContainer || isTabRightOfContainer) {
            // Calculate scroll position to center the active tab
            const scrollLeft = activeTab.offsetLeft - (categoryTabsContainer.offsetWidth / 2) + (activeTab.offsetWidth / 2);
            
            categoryTabsContainer.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }
}

// Load menu items for a specific category
function loadMenuItems(category) {
    // Show loading state
    showLoading();

    // Simulate loading delay for better UX
    setTimeout(() => {
        const items = menuData[category] || [];
        
        if (items.length === 0) {
            showEmptyState();
        } else {
            renderMenuItems(items);
        }
    }, 300);
}

// Show loading state
function showLoading() {
    menuItemsContainer.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

// Show empty state
function showEmptyState() {
    menuItemsContainer.innerHTML = `
        <div class="empty-state">
            <h3>Bu kategoride henüz ürün bulunmuyor</h3>
            <p>Lütfen başka bir kategori seçin.</p>
        </div>
    `;
}

// Render menu items
function renderMenuItems(items) {
    const itemsHTML = items.map(item => `
        <div class="menu-item" tabindex="0">
            <div class="menu-item-header">
                <h3 class="menu-item-name">${escapeHtml(item.name)}</h3>
                <span class="menu-item-price">${formatPrice(item.price)} ₺</span>
            </div>
            <p class="menu-item-description">${escapeHtml(item.description)}</p>
        </div>
    `).join('');

    menuItemsContainer.innerHTML = itemsHTML;
}

// Format price with Turkish Lira symbol
function formatPrice(price) {
    return price.toFixed(2).replace('.', ',');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add touch support for mobile devices
function addTouchSupport() {
    let startX = 0;
    let endX = 0;
    let isScrolling = false;
    let touchStartTime = 0;

    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        touchStartTime = Date.now();
        isScrolling = false;
    });

    document.addEventListener('touchmove', function(e) {
        // Check if user is scrolling the category tabs
        const categoryNav = document.querySelector('.category-nav');
        if (categoryNav && categoryNav.contains(e.target)) {
            isScrolling = true;
        }
    });

    document.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        const touchDuration = Date.now() - touchStartTime;
        
        // Only handle swipe if not scrolling and touch duration is short (quick swipe)
        if (!isScrolling && touchDuration < 300) {
            handleSwipe();
        }
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            const categories = Object.keys(menuData);
            const currentIndex = categories.indexOf(currentCategory);
            
            if (diff > 0 && currentIndex < categories.length - 1) {
                // Swipe left - next category
                switchCategory(categories[currentIndex + 1]);
            } else if (diff < 0 && currentIndex > 0) {
                // Swipe right - previous category
                switchCategory(categories[currentIndex - 1]);
            }
        }
    }
}

// Initialize touch support
addTouchSupport();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    const categories = Object.keys(menuData);
    const currentIndex = categories.indexOf(currentCategory);

    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        switchCategory(categories[currentIndex - 1]);
    } else if (e.key === 'ArrowRight' && currentIndex < categories.length - 1) {
        e.preventDefault();
        switchCategory(categories[currentIndex + 1]);
    }
});

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

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe menu items for animation
function observeMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Call observe function after rendering
const originalRenderMenuItems = renderMenuItems;
renderMenuItems = function(items) {
    originalRenderMenuItems(items);
    setTimeout(observeMenuItems, 100);
}; 