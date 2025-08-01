// Menü Konfigürasyonu
const CONFIG = {
    // CSV dosyasının URL'si
    // Yerel geliştirme için: 'menu_data.csv'
    // Uzak sunucu için: 'https://example.com/menu_data.csv'
    CSV_URL: 'menu_data.csv',
    
    // Otomatik yenileme süresi (milisaniye) - 0 = devre dışı
    AUTO_REFRESH_INTERVAL: 300000, // 5 dakikada bir menüyü yenile
    
    // Debug modu - Production'da false olmalı
    DEBUG: false,
    
    // Analytics ayarları
    ANALYTICS: {
        ENABLED: true,
        GA_MEASUREMENT_ID: 'G-RCS7KRQP5L' // Güvenli şekilde config'de saklanıyor
    }
};