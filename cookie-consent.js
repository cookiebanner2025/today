/**
 * Advanced Cookie Consent Banner with Consent Mode v2 and Microsoft UET Support
 * Features:
 * - Automatic translation based on user's country
 * - Domain restriction controls
 * - Geo-targeting (country/city/state level controls)
 * - Complete EU language support
 * - Built-in analytics dashboard with password protection
 * - Consent Mode v2 and future-proof compliance
 * - Premium UI with enhanced UX
 * - Microsoft UET support
 * - Full customization controls
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'yourdomain.com'],
    
    // Language configuration
    languageConfig: {
        defaultLanguage: 'en', // Default language if auto-detection fails
        availableLanguages: [], // Empty array = all languages available
        showLanguageSelector: true, // Show/hide language dropdown
        autoDetectLanguage: true // Auto-detect language based on country/browser
    },
    
    // Geo-targeting configuration
    geoConfig: {
        // Only show in these countries (empty array = all countries)
        allowedCountries: [],
        
        // Only show in these regions/states (empty array = all regions)
        allowedRegions: [],
        
        // Only show in these cities (empty array = all cities)
        allowedCities: [],
        
        // Countries where banner should be hidden
        blockedCountries: [],
        
        // Regions where banner should be hidden
        blockedRegions: [],
        
        // Cities where banner should be hidden
        blockedCities: []
    },
    
    // Analytics configuration
    analytics: {
        enabled: true,
        storageDays: 30, // How long to keep analytics data
        showDashboard: true, // Show analytics dashboard button
        passwordProtect: true, // Enable password protection
        dashboardPassword: 'admin123', // Default password (should be changed per site)
        passwordCookieDuration: 365, // Days to remember password
        floatingButtonPosition: 'right', // 'left' or 'right'
        showFloatingButton: true // Show/hide analytics floating button
    },
    
    // Banner behavior
    behavior: {
        autoShow: true, // Automatically show banner on page load
        floatingButton: true, // Show floating settings button
        floatingButtonPosition: 'right', // 'left' or 'right'
        showFloatingButton: true, // Show/hide cookie floating button
        rememberLanguage: true, // Remember user's language preference
        acceptOnScroll: false, // Accept cookies when user scrolls
        acceptOnContinue: true, // Implicit consent when continuing to browse
        bannerPosition: 'right', // 'left', 'right' or 'center'
        showDelay: 0, // Delay in seconds before showing banner (0 = immediate)
        bannerWidth: 440, // Width in pixels
        bannerHeight: 'auto', // Height in pixels or 'auto'
        animationDuration: 0.4, // Animation duration in seconds
        animationEasing: 'cubic-bezier(0.25, 0.8, 0.25, 1)', // CSS easing function
        hoverEffects: true // Enable hover animations
    },

    // UI Theme customization
    uiTheme: 'default', // 'default' or 'classic'
    uiCustomization: {
        // Banner styles
        bannerBackground: '#ffffff',
        bannerTextColor: '#2c3e50',
        bannerBorderRadius: 12,
        bannerBorder: 'none',
        bannerShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        
        // Button styles
        acceptBtnBg: '#2ecc71',
        acceptBtnText: '#ffffff',
        acceptBtnHover: '#27ae60',
        acceptBtnBorderRadius: 8,
        acceptBtnShadow: '0 2px 12px rgba(46, 204, 113, 0.3)',
        
        rejectBtnBg: '#ffffff',
        rejectBtnText: '#e74c3c',
        rejectBtnHover: '#ffeeed',
        rejectBtnBorderRadius: 8,
        rejectBtnBorder: '1px solid #e74c3c',
        
        customizeBtnBg: '#f8f9fa',
        customizeBtnText: '#333333',
        customizeBtnHover: '#f0f2f5',
        customizeBtnBorderRadius: 8,
        customizeBtnBorder: '1px solid #e0e0e0',
        
        saveBtnBg: '#3498db',
        saveBtnText: '#ffffff',
        saveBtnHover: '#2980b9',
        saveBtnBorderRadius: 8,
        saveBtnGradient: 'linear-gradient(to right, #3498db, #2980b9)',
        
        // Toggle styles
        toggleActive: '#2ecc71',
        toggleInactive: '#bdc3c7',
        
        // Logo settings
        showLogo: false,
        logoUrl: '', // Auto-detect if empty
        logoWidth: 40,
        logoHeight: 40,
        logoPosition: 'left' // 'left' or 'right'
    },

    // Microsoft UET configuration
    microsoftUET: {
        enabled: true,
        autoDetect: true // Auto-detect UET tag if present
    }
};

// ============== MAIN IMPLEMENTATION ============== //
// Initialize dataLayer for Google Tag Manager
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Set default consent (deny all except security)
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'personalization_storage': 'denied',
    'functionality_storage': 'denied',
    'security_storage': 'granted'
});

// Color scheme - easily customizable
const colorScheme = {
    primary: config.uiCustomization.acceptBtnBg || '#2ecc71',
    secondary: config.uiCustomization.saveBtnBg || '#3498db',
    danger: config.uiCustomization.rejectBtnText || '#e74c3c',
    textDark: config.uiCustomization.bannerTextColor || '#2c3e50',
    textLight: '#7f8c8d',
    background: config.uiCustomization.bannerBackground || '#ffffff',
    toggleActive: config.uiCustomization.toggleActive || '#2ecc71',
    toggleInactive: config.uiCustomization.toggleInactive || '#bdc3c7'
};

// Classic theme color scheme
const classicColorScheme = {
    primary: '#4CAF50',
    secondary: '#2196F3',
    danger: '#f44336',
    textDark: '#212121',
    textLight: '#757575',
    background: '#ffffff',
    toggleActive: '#4CAF50',
    toggleInactive: '#9E9E9E'
};

// Enhanced cookie database with detailed descriptions
const cookieDatabase = {
    // Google Analytics/GA4
    '_ga': { category: 'analytics', duration: '2 years', description: 'Google Analytics user distinction' },
    '_gid': { category: 'analytics', duration: '24 hours', description: 'Google Analytics user distinction' },
    '_gat': { category: 'analytics', duration: '1 minute', description: 'Google Analytics throttle rate' },
    '_ga_': { category: 'analytics', duration: '2 years', description: 'GA4 session state' },
    
    // Facebook Pixel
    '_fbp': { category: 'advertising', duration: '3 months', description: 'Facebook conversion tracking' },
    'fr': { category: 'advertising', duration: '3 months', description: 'Facebook targeted ads' },
    
    // Microsoft UET
    '_uetvid': { category: 'advertising', duration: '1 year', description: 'Microsoft Advertising unique visitor ID' },
    '_uetsid': { category: 'advertising', duration: 'Session', description: 'Microsoft Advertising session ID' },
    '_uetmsclkid': { category: 'advertising', duration: '1 year', description: 'Microsoft Advertising click ID' },
    
    // Functional cookies
    'wordpress_': { category: 'functional', duration: 'Session', description: 'WordPress authentication' },
    'wp-settings': { category: 'functional', duration: '1 year', description: 'WordPress preferences' },
    'PHPSESSID': { category: 'functional', duration: 'Session', description: 'PHP session' },
    'cookie_consent': { category: 'functional', duration: '1 year', description: 'Stores cookie consent preferences' },
    
    // WooCommerce cookies
    'woocommerce_items_in_cart': { category: 'functional', duration: 'Session', description: 'WooCommerce cart items tracking' },
    'woocommerce_cart_hash': { category: 'functional', duration: 'Session', description: 'WooCommerce cart hash' },
    
    // Advertising cookies
    '_gcl_au': { category: 'advertising', duration: '3 months', description: 'Google Ads conversion' },
    'IDE': { category: 'advertising', duration: '1 year', description: 'Google DoubleClick' },
    'NID': { category: 'advertising', duration: '6 months', description: 'Google user tracking' },
    
    // Other common cookies
    'gclid_tracker': { category: 'advertising', duration: 'Session', description: 'Tracks Google Click ID for conversions' },
    'tk_ai': { category: 'analytics', duration: 'Session', description: 'Jetpack/Tumblr analytics' },
    'external_id': { category: 'functional', duration: 'Session', description: 'External service identifier' }
};

// [Keep all the existing translations and countryLanguageMap exactly as they were]

// Analytics data storage with history tracking
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {},
    weekly: {},
    monthly: {},
    history: [] // Track all consent changes
};

// Password protection for analytics
let isDashboardAuthenticated = false;

// Load analytics data from localStorage
function loadAnalyticsData() {
    const savedData = localStorage.getItem('consentAnalytics');
    if (savedData) {
        consentAnalytics = JSON.parse(savedData);
    }
    
    // Initialize today's data if not exists
    const today = new Date().toISOString().split('T')[0];
    if (!consentAnalytics.daily[today]) {
        consentAnalytics.daily[today] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    // Check if dashboard is authenticated
    if (config.analytics.passwordProtect) {
        isDashboardAuthenticated = getCookie('dashboard_auth') === 'true';
    } else {
        isDashboardAuthenticated = true;
    }
}

// [Keep all existing functions like saveAnalyticsData, updateConsentStats, etc.]

// Generate analytics dashboard HTML with history tracking
function generateAnalyticsDashboard(language = 'en') {
    const lang = translations[language] || translations.en;
    
    // Calculate totals
    const total = consentAnalytics.total.accepted + 
                 consentAnalytics.total.rejected + 
                 consentAnalytics.total.custom;
    
    const acceptedPercent = total > 0 ? Math.round((consentAnalytics.total.accepted / total) * 100) : 0;
    const rejectedPercent = total > 0 ? Math.round((consentAnalytics.total.rejected / total) * 100) : 0;
    const customPercent = total > 0 ? Math.round((consentAnalytics.total.custom / total) * 100) : 0;
    
    // Get last 7 days data
    const last7Days = {};
    const dates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 7);
    dates.forEach(date => {
        last7Days[date] = consentAnalytics.daily[date];
    });
    
    // Generate history table
    const historyTable = config.analytics.enabled ? `
    <div class="time-stat">
        <h4>Consent Change History</h4>
        <div class="history-table-container">
            <table class="history-table">
                <thead>
                    <tr>
                        <th>Date/Time</th>
                        <th>Action</th>
                        <th>Categories</th>
                        <th>User Agent</th>
                    </tr>
                </thead>
                <tbody>
                    ${consentAnalytics.history.slice(0, 10).map(entry => `
                    <tr>
                        <td>${new Date(entry.timestamp).toLocaleString()}</td>
                        <td class="action-${entry.status}">${entry.status}</td>
                        <td>${Object.entries(entry.categories)
                            .filter(([cat, val]) => cat !== 'uncategorized' && val)
                            .map(([cat]) => cat).join(', ')}</td>
                        <td>${entry.userAgent ? entry.userAgent.substring(0, 30) + '...' : ''}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>
    </div>` : '';
    
    return `
    <div class="analytics-dashboard">
        <h3>${lang.dashboardTitle}</h3>
        
        <div class="stats-summary">
            <div class="stat-card accepted">
                <h4>${lang.statsAccepted}</h4>
                <div class="stat-value">${consentAnalytics.total.accepted}</div>
                <div class="stat-percentage">${acceptedPercent}%</div>
            </div>
            
            <div class="stat-card rejected">
                <h4>${lang.statsRejected}</h4>
                <div class="stat-value">${consentAnalytics.total.rejected}</div>
                <div class="stat-percentage">${rejectedPercent}%</div>
            </div>
            
            <div class="stat-card custom">
                <h4>${lang.statsCustom}</h4>
                <div class="stat-value">${consentAnalytics.total.custom}</div>
                <div class="stat-percentage">${customPercent}%</div>
            </div>
            
            <div class="stat-card total">
                <h4>${lang.statsTotal}</h4>
                <div class="stat-value">${total}</div>
                <div class="stat-percentage">100%</div>
            </div>
        </div>
        
        <div class="time-based-stats">
            <div class="time-stat">
                <h4>${lang.statsLast7Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last7Days).map(([date, data]) => {
                        const dayTotal = data.accepted + data.rejected + data.custom;
                        const dayAcceptedPercent = dayTotal > 0 ? (data.accepted / dayTotal) * 100 : 0;
                        const dayRejectedPercent = dayTotal > 0 ? (data.rejected / dayTotal) * 100 : 0;
                        const dayCustomPercent = dayTotal > 0 ? (data.custom / dayTotal) * 100 : 0;
                        
                        return `
                        <div class="stat-bar-container">
                            <div class="stat-bar-label">${date}</div>
                            <div class="stat-bar">
                                <div class="stat-bar-segment accepted" style="width: ${dayAcceptedPercent}%"></div>
                                <div class="stat-bar-segment custom" style="width: ${dayCustomPercent}%"></div>
                                <div class="stat-bar-segment rejected" style="width: ${dayRejectedPercent}%"></div>
                            </div>
                            <div class="stat-bar-legend">
                                <span>${data.accepted} ${lang.statsAccepted}</span>
                                <span>${data.custom} ${lang.statsCustom}</span>
                                <span>${data.rejected} ${lang.statsRejected}</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>
            </div>
            
            ${historyTable}
        </div>
    </div>`;
}

// Track consent change in history
function trackConsentHistory(status, categories) {
    if (!config.analytics.enabled) return;
    
    consentAnalytics.history.unshift({
        timestamp: new Date().getTime(),
        status: status,
        categories: categories,
        userAgent: navigator.userAgent,
        url: window.location.href
    });
    
    // Keep only last 100 entries
    if (consentAnalytics.history.length > 100) {
        consentAnalytics.history = consentAnalytics.history.slice(0, 100);
    }
    
    saveAnalyticsData();
}

// [Keep all existing functions like isDomainAllowed, checkGeoTargeting, etc.]

// Main initialization with enhanced cookie scanning
document.addEventListener('DOMContentLoaded', function() {
    // First check if we should run on this domain
    if (!isDomainAllowed()) {
        console.log('Cookie consent banner disabled for this domain');
        return;
    }
    
    // Load analytics data
    if (config.analytics.enabled) {
        loadAnalyticsData();
    }
    
    // Get geo data from dataLayer or detect
    let geoData = {};
    if (window.dataLayer && window.dataLayer.length > 0) {
        const geoItem = window.dataLayer.find(item => item.country || item.region || item.city);
        if (geoItem) {
            geoData = {
                country: geoItem.country || '',
                region: geoItem.region || '',
                city: geoItem.city || '',
                language: geoItem.language || ''
            };
        }
    }
    
    // Check geo-targeting restrictions
    if (!checkGeoTargeting(geoData)) {
        console.log('Cookie consent banner disabled for this location');
        return;
    }
    
    // Detect language
    const detectedLanguage = detectUserLanguage(geoData);
    
    const detectedCookies = scanAndCategorizeCookies();
    if (detectedCookies.uncategorized.length > 0) {
        console.log('Uncategorized cookies found:', detectedCookies.uncategorized);
        // Try to automatically categorize unknown cookies
        autoCategorizeCookies(detectedCookies.uncategorized).forEach(cookie => {
            const category = determineCookieCategory(cookie.name);
            if (category && category !== 'uncategorized') {
                detectedCookies[category].push(cookie);
                detectedCookies.uncategorized = detectedCookies.uncategorized.filter(c => c.name !== cookie.name);
            }
        });
    }
    
    injectConsentHTML(detectedCookies, detectedLanguage);
    initializeCookieConsent(detectedCookies, detectedLanguage);
    
    if (getCookie('cookie_consent')) {
        showFloatingButton();
    }
    
    // Track marketing parameters
    trackMarketingParameters();
    
    // Enhanced periodic cookie scan with validation
    setInterval(() => {
        const newCookies = scanAndCategorizeCookies();
        if (JSON.stringify(newCookies) !== JSON.stringify(detectedCookies)) {
            updateCookieTables(newCookies);
        }
    }, 30000); // Scan every 30 seconds
    
    // Handle scroll-based acceptance
    if (config.behavior.acceptOnScroll) {
        window.addEventListener('scroll', handleScrollAcceptance);
    }
});

// [Keep all existing functions like handleScrollAcceptance, autoCategorizeCookies, etc.]

// Inject consent HTML with all customizations
function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    const currentTheme = config.uiTheme === 'classic' ? classicColorScheme : colorScheme;
    
    // Try to detect website logo if enabled
    let logoHtml = '';
    if (config.uiCustomization.showLogo) {
        let logoUrl = config.uiCustomization.logoUrl;
        if (!logoUrl) {
            // Try to auto-detect logo
            const favicon = document.querySelector('link[rel="icon"]') || 
                          document.querySelector('link[rel="shortcut icon"]');
            const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
            const ogImage = document.querySelector('meta[property="og:image"]');
            
            if (appleTouchIcon) logoUrl = appleTouchIcon.href;
            else if (ogImage) logoUrl = ogImage.content;
            else if (favicon) logoUrl = favicon.href;
            else logoUrl = '/favicon.ico';
        }
        
        logoHtml = `
        <div class="cookie-consent-logo" style="order: ${config.uiCustomization.logoPosition === 'left' ? '0' : '2'};">
            <img src="${logoUrl}" alt="Website Logo" 
                 width="${config.uiCustomization.logoWidth}" 
                 height="${config.uiCustomization.logoHeight}">
        </div>`;
    }
    
    // Generate cookie tables for each category
    const generateCategorySection = (category) => {
        const cookies = detectedCookies[category];
        const categoryKey = category === 'functional' ? 'essential' : category;
        const isEssential = category === 'functional';
        
        return `
        <div class="cookie-category">
            <div class="toggle-container">
                <h3>${lang[categoryKey]}</h3>
                <label class="toggle-switch">
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : ''}>
                    <span class="toggle-slider"></span>
                </label>
            </div>
            <p>${lang[`${categoryKey}Desc`]}</p>
            <div class="cookie-details-container">
                <div class="cookie-details-header">
                    <span>Cookie Details</span>
                    <span class="toggle-details">+</span>
                </div>
                <div class="cookie-details-content" style="display: none;">
                    ${cookies.length > 0 ? 
                        generateCookieTable(cookies) : 
                        `<p class="no-cookies-message">No cookies in this category detected.</p>`}
                </div>
            </div>
        </div>`;
    };
    
    // Generate language selector dropdown if enabled
    const languageSelector = config.languageConfig.showLanguageSelector ? `
    <div class="language-selector">
        <select id="cookieLanguageSelect">
            ${availableLanguages.map(code => `
                <option value="${code}" ${code === language ? 'selected' : ''}>${translations[code].language}</option>
            `).join('')}
        </select>
    </div>` : '';
    
    // Generate admin dashboard button if analytics enabled
    const adminButton = config.analytics.enabled && config.analytics.showDashboard && config.analytics.showFloatingButton ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}" 
         style="${config.analytics.floatingButtonPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM95.4 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.4 399.4C48.6 355.1 17.3 304 2.5 268.3C-.8 260.4-.8 251.6 2.5 243.7C17.3 207.1 48.6 156 95.4 112.6V112.6zM288 80C218.6 80 160 138.6 160 208C160 277.4 218.6 336 288 336C357.4 336 416 277.4 416 208C416 138.6 357.4 80 288 80zM44.96 256C56.53 286.1 83.51 329.2 124.4 368C165.3 406.8 219.1 432 288 432C356.9 432 410.7 406.8 451.6 368C492.5 329.2 519.5 286.1 531 256C519.5 225.9 492.5 182.8 451.6 144C410.7 105.2 356.9 80 288 80C219.1 80 165.3 105.2 124.4 144C83.51 182.8 56.53 225.9 44.96 256V256z"/>
        </svg>
    </div>` : '';
    
    // Determine banner position
    let bannerPositionStyle;
    switch (config.behavior.bannerPosition) {
        case 'left':
            bannerPositionStyle = 'left: 20px; right: auto;';
            break;
        case 'right':
            bannerPositionStyle = 'right: 20px; left: auto;';
            break;
        case 'center':
            bannerPositionStyle = 'left: 50%; transform: translateX(-50%);';
            break;
        default:
            bannerPositionStyle = config.behavior.floatingButtonPosition === 'left' ? 'left: 20px;' : 'right: 20px;';
    }
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${logoHtml}
            <div class="cookie-consent-content">
                ${languageSelector}
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            <div class="cookie-consent-buttons">
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
            </div>
        </div>
    </div>

    <!-- Settings Modal -->
    <div id="cookieSettingsModal" class="cookie-settings-modal">
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h2>${lang.title}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="cookie-settings-body">
                ${generateCategorySection('functional')}
                ${generateCategorySection('analytics')}
                ${generateCategorySection('performance')}
                ${generateCategorySection('advertising')}
                ${detectedCookies.uncategorized.length > 0 ? generateCategorySection('uncategorized') : ''}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>

    <!-- Floating Settings Button -->
    ${config.behavior.showFloatingButton ? `
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}" 
         style="${config.behavior.floatingButtonPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
        </svg>
    </div>` : ''}
    
    ${adminButton}
    
    <!-- Analytics Dashboard -->
    <div id="cookieAnalyticsModal" class="cookie-analytics-modal">
        <div class="cookie-analytics-content">
            <div class="cookie-analytics-header">
                <h2>${lang.dashboardTitle}</h2>
                <span class="close-analytics-modal">&times;</span>
            </div>
            <div class="cookie-analytics-body">
                ${config.analytics.passwordProtect && !isDashboardAuthenticated ? 
                    generatePasswordPrompt(language) : 
                    generateAnalyticsDashboard(language)}
            </div>
        </div>
    </div>
    
    <style>
    /* Main Banner Styles - Updated with all customizations */
    .cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        ${bannerPositionStyle}
        width: ${config.behavior.bannerWidth}px;
        height: ${config.behavior.bannerHeight === 'auto' ? 'auto' : config.behavior.bannerHeight + 'px'};
        background: ${currentTheme.background};
        border-radius: ${config.uiCustomization.bannerBorderRadius}px;
        border: ${config.uiCustomization.bannerBorder};
        box-shadow: ${config.uiCustomization.bannerShadow};
        z-index: 9999;
        padding: 24px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        transform: translateY(20px);
        opacity: 0;
        transition: all ${config.behavior.animationDuration}s ${config.behavior.animationEasing};
        border: none;
        overflow: hidden;
        max-height: 90vh;
    }

    .cookie-consent-container {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    .cookie-consent-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }

    .cookie-consent-logo img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
    }

    .cookie-consent-content {
        flex: 1;
        min-width: 200px;
    }

    .cookie-consent-banner.show {
        transform: ${config.behavior.bannerPosition === 'center' ? 'translate(-50%, 0)' : 'translateY(0)'};
        opacity: 1;
        display: block;
    }

    .cookie-consent-content h2 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: ${currentTheme.textDark};
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: -0.2px;
    }

    .cookie-consent-content p {
        margin: 0 0 24px 0;
        font-size: 14px;
        color: ${currentTheme.textLight};
        line-height: 1.5;
    }

    .privacy-policy-link {
        color: ${currentTheme.secondary};
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 24px;
        transition: color 0.2s ease;
    }

    .privacy-policy-link:hover {
        color: #1d6fa5;
    }

    .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 8px;
        width: 100%;
    }

    .cookie-btn {
        padding: 12px 20px;
        border-radius: ${config.uiCustomization.acceptBtnBorderRadius}px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        transition: all ${config.behavior.hoverEffects ? '0.3s' : '0s'} cubic-bezier(0.25, 0.8, 0.25, 1);
        text-align: center;
        border: none;
        flex: 1;
        letter-spacing: 0.2px;
    }

    .adjust-btn {
        background-color: ${config.uiCustomization.customizeBtnBg};
        color: ${config.uiCustomization.customizeBtnText};
        border: ${config.uiCustomization.customizeBtnBorder};
    }

    .adjust-btn:hover {
        background-color: ${config.behavior.hoverEffects ? config.uiCustomization.customizeBtnHover : config.uiCustomization.customizeBtnBg};
        ${config.behavior.hoverEffects ? 'transform: translateY(-1px);' : ''}
        ${config.behavior.hoverEffects ? 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);' : ''}
    }

    .reject-btn {
        background-color: ${config.uiCustomization.rejectBtnBg};
        color: ${config.uiCustomization.rejectBtnText};
        border: ${config.uiCustomization.rejectBtnBorder};
    }

    .reject-btn:hover {
        background-color: ${config.behavior.hoverEffects ? config.uiCustomization.rejectBtnHover : config.uiCustomization.rejectBtnBg};
        ${config.behavior.hoverEffects ? 'transform: translateY(-1px);' : ''}
        ${config.behavior.hoverEffects ? 'box-shadow: 0 2px 8px rgba(231, 76, 60, 0.15);' : ''}
    }

    .accept-btn {
        background-color: ${config.uiCustomization.acceptBtnBg};
        color: ${config.uiCustomization.acceptBtnText};
        border: 1px solid ${config.uiCustomization.acceptBtnBg};
        box-shadow: ${config.uiCustomization.acceptBtnShadow};
    }

    .accept-btn:hover {
        background-color: ${config.behavior.hoverEffects ? config.uiCustomization.acceptBtnHover : config.uiCustomization.acceptBtnBg};
        ${config.behavior.hoverEffects ? 'transform: translateY(-1px);' : ''}
        ${config.behavior.hoverEffects ? 'box-shadow: 0 4px 16px rgba(46, 204, 113, 0.4);' : ''}
    }

    .save-btn {
        background-color: ${config.uiCustomization.saveBtnBg};
        color: ${config.uiCustomization.saveBtnText};
        background-image: ${config.uiCustomization.saveBtnGradient};
    }

    .save-btn:hover {
        background-color: ${config.behavior.hoverEffects ? config.uiCustomization.saveBtnHover : config.uiCustomization.saveBtnBg};
        ${config.behavior.hoverEffects ? 'transform: translateY(-2px);' : ''}
        ${config.behavior.hoverEffects ? 'box-shadow: 0 5px 10px rgba(0,0,0,0.15);' : ''}
    }

    /* [Keep all other CSS styles from the original code, they remain the same] */
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    if (!consentGiven && config.behavior.autoShow) {
        if (config.behavior.showDelay > 0) {
            setTimeout(showCookieBanner, config.behavior.showDelay * 1000);
        } else {
            showCookieBanner();
        }
    } else if (consentGiven) {
        const consentData = JSON.parse(consentGiven);
        updateConsentMode(consentData);
        loadCookiesAccordingToConsent(consentData);
        showFloatingButton();
    }
    
    // Set up event listeners
    setupEventListeners();
    
    // Setup cookie details toggles
    document.querySelectorAll('.cookie-details-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const toggle = this.querySelector('.toggle-details');
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggle.textContent = '−';
            } else {
                content.style.display = 'none';
                toggle.textContent = '+';
            }
        });
    });
    
    // Setup language selector change event
    const languageSelect = document.getElementById('cookieLanguageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }
    
    // Setup admin button if enabled
    if (config.analytics.enabled && config.analytics.showDashboard && config.analytics.showFloatingButton) {
        const adminButton = document.getElementById('cookieAdminButton');
        if (adminButton) {
            adminButton.addEventListener('click', showAnalyticsDashboard);
            setTimeout(() => {
                adminButton.style.display = 'flex';
                adminButton.classList.add('show');
            }, 100);
        }
    }
    
    // Setup password prompt events if needed
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        setupPasswordPromptEvents();
    }
}

// [Keep all existing functions like setupPasswordPromptEvents, setupEventListeners, etc.]

function updateConsentMode(consentData) {
    const consentStates = {
        'ad_storage': consentData.categories.advertising ? 'granted' : 'denied',
        'analytics_storage': consentData.categories.analytics ? 'granted' : 'denied',
        'ad_user_data': consentData.categories.advertising ? 'granted' : 'denied',
        'ad_personalization': consentData.categories.advertising ? 'granted' : 'denied',
        'personalization_storage': consentData.categories.performance ? 'granted' : 'denied',
        'functionality_storage': consentData.categories.functional ? 'granted' : 'denied',
        'security_storage': 'granted'
    };

    // Determine GCS signal
    let gcsSignal = 'G100'; // Default to denied
    
    if (consentData.status === 'accepted') {
        gcsSignal = 'G111';
    } else if (consentData.status === 'custom') {
        gcsSignal = 'G101';
    }

    // Update consent mode immediately
    gtag('consent', 'update', consentStates);
    
    // Push detailed consent data to dataLayer
    window.dataLayer.push({
        'event': 'cookie_consent_update',
        'consent_mode': consentStates,
        'gcs': gcsSignal,
        'consent_status': consentData.status,
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'consent_version': '4.0',
        'consent_scope': 'global',
        'debug_info': {
            'cookies_found': scanAndCategorizeCookies(),
            'user_agent': navigator.userAgent,
            'language': navigator.language
        }
    });

    // Track consent history
    trackConsentHistory(consentData.status, consentData.categories);

    // Microsoft UET consent update if enabled
    if (config.microsoftUET.enabled && window.uetq) {
        const uetConsent = consentData.categories.advertising ? 'granted' : 'denied';
        window.uetq = window.uetq || [];
        window.uetq.push('consent', uetConsent);
    }

    console.log('Consent Mode Updated:', {
        states: consentStates,
        gcsSignal: gcsSignal,
        categories: consentData.categories
    });
}

// [Keep all other functions exactly the same as in the original code]

// Helper function to check for Microsoft UET tag
function checkForUET() {
    if (!config.microsoftUET.enabled || !config.microsoftUET.autoDetect) return;
    
    const uetScripts = Array.from(document.querySelectorAll('script')).filter(script => 
        script.src.includes('bat.bing.com') || script.src.includes('bing.com/uet')
    );
    
    if (uetScripts.length > 0) {
        console.log('Microsoft UET tag detected');
        // If UET is detected, ensure we have the cookie mapping
        if (!cookieDatabase['_uetvid']) {
            cookieDatabase['_uetvid'] = { 
                category: 'advertising', 
                duration: '1 year', 
                description: 'Microsoft Advertising unique visitor ID' 
            };
        }
        if (!cookieDatabase['_uetsid']) {
            cookieDatabase['_uetsid'] = { 
                category: 'advertising', 
                duration: 'Session', 
                description: 'Microsoft Advertising session ID' 
            };
        }
        if (!cookieDatabase['_uetmsclkid']) {
            cookieDatabase['_uetmsclkid'] = { 
                category: 'advertising', 
                duration: '1 year', 
                description: 'Microsoft Advertising click ID' 
            };
        }
    }
}

// Call UET check on initialization
checkForUET();

// Helper function to get cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Helper function to set cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
}
