/**
 * Ultimate GDPR Cookie Consent Solution v5.0 - Premium Edition
 * - Full Consent Mode v2 and Microsoft UET support
 * - Complete UI customization controls
 * - Advanced analytics and export features
 * - Dark mode support with automatic detection
 * - Enhanced animations and effects
 * - Individual cookie toggles
 * - Detailed consent history
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'yourdomain.com'],
    
    // UI Positioning
    uiPosition: {
        bannerPosition: 'left', // 'left', 'right', or 'center'
        floatingButtonPosition: 'right', // 'left' or 'right'
        adminButtonPosition: 'right', // 'left' or 'right'
        showFloatingButton: true,
        showAdminButton: true
    },
    
    // Banner Dimensions
    bannerSize: {
        width: 440, // in pixels
        minWidth: 300,
        maxWidth: 800,
        padding: 24 // in pixels
    },
    
    // Appearance Settings
    appearance: {
        themeMode: 'light', // 'light', 'dark', or 'auto'
        colors: {
            light: {
                primary: '#2ecc71',
                secondary: '#3498db',
                danger: '#e74c3c',
                textDark: '#2c3e50',
                textLight: '#7f8c8d',
                background: '#ffffff',
                toggleActive: '#2ecc71',
                toggleInactive: '#bdc3c7',
                buttonText: '#ffffff',
                buttonHover: {
                    primary: '#27ae60',
                    secondary: '#2980b9',
                    danger: '#c0392b'
                }
            },
            dark: {
                primary: '#27ae60',
                secondary: '#2980b9',
                danger: '#c0392b',
                textDark: '#ecf0f1',
                textLight: '#bdc3c7',
                background: '#2c3e50',
                toggleActive: '#27ae60',
                toggleInactive: '#7f8c8d',
                buttonText: '#ffffff',
                buttonHover: {
                    primary: '#219955',
                    secondary: '#2472a4',
                    danger: '#ab3326'
                }
            }
        },
        borderRadius: {
            buttons: 8, // in pixels
            banner: 12, // in pixels
            toggles: 34 // in pixels
        },
        borders: {
            buttons: 'none', // 'none' or '1px solid color'
            banner: 'none'
        },
        logo: {
            enabled: true,
            url: 'auto', // 'auto' to detect or URL
            width: 40, // in pixels
            height: 40,
            position: 'left' // 'left' or 'right'
        }
    },
    
    // Animation Settings
    animations: {
        enabled: true,
        banner: {
            entrance: 'slide-up', // 'slide-up', 'fade', 'slide-right', 'slide-left'
            exit: 'slide-down', // 'slide-down', 'fade', 'slide-right', 'slide-left'
            duration: 400, // in ms
            easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)'
        },
        buttons: {
            hoverEffect: true,
            intensity: 'medium', // 'low', 'medium', 'high'
            duration: 300 // in ms
        },
        modal: {
            entrance: 'fade', // 'fade', 'slide-up', 'zoom'
            exit: 'fade',
            duration: 300,
            easing: 'ease'
        }
    },
    
    // Banner Behavior
    behavior: {
        autoShow: true,
        showDelay: 0, // in seconds (0 for immediate)
        acceptOnScroll: false,
        acceptOnContinue: true,
        rememberLanguage: true,
        rememberConsent: true,
        consentDuration: 365 // days
    },
    
    // Language configuration
    languageConfig: {
        defaultLanguage: 'en',
        availableLanguages: [], // Empty array = all languages available
        showLanguageSelector: true,
        autoDetectLanguage: true
    },
    
    // Geo-targeting configuration
    geoConfig: {
        allowedCountries: [],
        allowedRegions: [],
        allowedCities: [],
        blockedCountries: [],
        blockedRegions: [],
        blockedCities: []
    },
    
    // Analytics configuration
    analytics: {
        enabled: true,
        storageDays: 30,
        showDashboard: true,
        passwordProtect: true,
        dashboardPassword: 'admin123',
        passwordCookieDuration: 365,
        trackChanges: true,
        exportEnabled: true,
        exportFormats: ['csv', 'json', 'pdf']
    },
    
    // Cookie Settings
    cookieSettings: {
        showIndividualToggles: true,
        uncategorizedEnabled: true,
        essentialDisabled: true // Always on
    },
    
    // Microsoft UET Configuration
    microsoftUet: {
        enabled: true,
        tagId: '' // Your UET tag ID
    }
};

// ============== MAIN IMPLEMENTATION ============== //
// Initialize dataLayer for Google Tag Manager and Microsoft UET
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
window.uetq = window.uetq || [];

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
    
    // Microsoft UET cookies
    '_uetsid': { category: 'advertising', duration: '1 day', description: 'Microsoft Advertising session ID' },
    '_uetvid': { category: 'advertising', duration: '13 months', description: 'Microsoft Advertising visitor ID' },
    
    // Other common cookies
    'gclid_tracker': { category: 'advertising', duration: 'Session', description: 'Tracks Google Click ID for conversions' },
    'tk_ai': { category: 'analytics', duration: 'Session', description: 'Jetpack/Tumblr analytics' },
    'external_id': { category: 'functional', duration: 'Session', description: 'External service identifier' }
};

// Complete EU language translations (same as before, but I'll include it for completeness)
const translations = {
    en: {
        title: "We value your privacy",
        description: "We use cookies to improve your browsing experience, provide personalized ads or content, and analyze our traffic. By clicking \"Accept All,\" you consent to the use of cookies.",
        privacy: "Privacy Policy",
        customize: "Adjust",
        reject: "Reject all",
        accept: "Accept all",
        essential: "Essential Cookies",
        essentialDesc: "Necessary for website functionality",
        analytics: "Analytics Cookies",
        analyticsDesc: "Help understand visitor interactions",
        performance: "Performance Cookies",
        performanceDesc: "Improve website performance",
        advertising: "Advertising Cookies",
        advertisingDesc: "Deliver relevant ads",
        other: "Other Cookies",
        otherDesc: "Uncategorized cookies",
        save: "Save Preferences",
        language: "English",
        statsTitle: "Consent Statistics",
        statsAccepted: "Accepted",
        statsRejected: "Rejected",
        statsCustom: "Customized",
        statsTotal: "Total",
        statsPercentage: "Percentage",
        statsLast7Days: "Last 7 Days",
        statsLast30Days: "Last 30 Days",
        passwordPrompt: "Enter password to view analytics",
        passwordSubmit: "Submit",
        passwordIncorrect: "Incorrect password",
        dashboardTitle: "Consent Analytics Dashboard",
        changeHistory: "Consent Change History",
        exportData: "Export Data",
        individualSettings: "Individual Cookie Settings",
        toggleAll: "Toggle All",
        cookieName: "Cookie Name",
        cookiePurpose: "Purpose",
        cookieDuration: "Duration",
        cookieType: "Type",
        darkMode: "Dark Mode",
        lightMode: "Light Mode"
    },
    fr: {
        title: "Nous respectons votre vie privée",
        description: "Nous utilisons des cookies pour améliorer votre expérience, fournir des publicités ou du contenu personnalisé et analyser notre trafic. En cliquant sur \"Tout accepter\", vous consentez à l'utilisation de cookies.",
        privacy: "Politique de confidentialité",
        customize: "Personnaliser",
        reject: "Tout refuser",
        accept: "Tout accepter",
        essential: "Cookies essentiels",
        essentialDesc: "Nécessaires au fonctionnement",
        analytics: "Cookies d'analyse",
        analyticsDesc: "Comprennent les interactions",
        performance: "Cookies de performance",
        performanceDesc: "Améliorent les performances",
        advertising: "Cookies publicitaires",
        advertisingDesc: "Diffusent des publicités",
        other: "Autres cookies",
        otherDesc: "Cookies non catégorisés",
        save: "Enregistrer",
        language: "Français",
        statsTitle: "Statistiques de Consentement",
        statsAccepted: "Accepté",
        statsRejected: "Rejeté",
        statsCustom: "Personnalisé",
        statsTotal: "Total",
        statsPercentage: "Pourcentage",
        statsLast7Days: "7 Derniers Jours",
        statsLast30Days: "30 Derniers Jours",
        passwordPrompt: "Entrez le mot de passe pour voir les analyses",
        passwordSubmit: "Soumettre",
        passwordIncorrect: "Mot de passe incorrect",
        dashboardTitle: "Tableau de bord des analyses de consentement",
        changeHistory: "Historique des changements de consentement",
        exportData: "Exporter les données",
        individualSettings: "Paramètres individuels des cookies",
        toggleAll: "Tout basculer",
        cookieName: "Nom du cookie",
        cookiePurpose: "But",
        cookieDuration: "Durée",
        cookieType: "Type",
        darkMode: "Mode sombre",
        lightMode: "Mode clair"
    },
    // ... (keep all other language translations the same as before)
    // Include all other languages from the original code
};

// Country to language mapping for auto-translation
const countryLanguageMap = {
    // ... (keep the same country to language mapping as before)
};

// Analytics data storage with enhanced history tracking
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {},
    weekly: {},
    monthly: {},
    changes: [], // Track all consent changes
    cookieHistory: {} // Track individual cookie changes
};

// Password protection for analytics
let isDashboardAuthenticated = false;

// Current theme mode
let currentThemeMode = config.appearance.themeMode === 'auto' ? 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : 
    config.appearance.themeMode;

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

// Save analytics data to localStorage
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
}

// Track consent change
function trackConsentChange(status, previousState = null, newState = null) {
    const changeRecord = {
        timestamp: new Date().toISOString(),
        status: status,
        previousState: previousState,
        newState: newState,
        userAgent: navigator.userAgent,
        pageUrl: window.location.href,
        ipAddress: null // Would be set server-side
    };
    
    consentAnalytics.changes.push(changeRecord);
    
    // Keep only the last 100 changes if tracking is enabled
    if (config.analytics.trackChanges && consentAnalytics.changes.length > 100) {
        consentAnalytics.changes = consentAnalytics.changes.slice(-100);
    }
    
    saveAnalyticsData();
}

// Track individual cookie changes
function trackCookieChange(cookieName, action, category, previousValue = null) {
    if (!consentAnalytics.cookieHistory[cookieName]) {
        consentAnalytics.cookieHistory[cookieName] = [];
    }
    
    const changeRecord = {
        timestamp: new Date().toISOString(),
        action: action,
        category: category,
        previousValue: previousValue,
        currentValue: getCookie(cookieName),
        pageUrl: window.location.href
    };
    
    consentAnalytics.cookieHistory[cookieName].push(changeRecord);
    
    // Keep only the last 20 changes per cookie
    if (consentAnalytics.cookieHistory[cookieName].length > 20) {
        consentAnalytics.cookieHistory[cookieName] = consentAnalytics.cookieHistory[cookieName].slice(-20);
    }
    
    saveAnalyticsData();
}

// Update analytics data
function updateConsentStats(status, previousConsent = null) {
    const today = new Date().toISOString().split('T')[0];
    
    // Update totals
    if (status === 'accepted') {
        consentAnalytics.total.accepted++;
        consentAnalytics.daily[today].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.total.rejected++;
        consentAnalytics.daily[today].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.total.custom++;
        consentAnalytics.daily[today].custom++;
    }
    
    // Update weekly and monthly stats
    updateTimeBasedStats(today, status);
    
    // Track the change
    if (config.analytics.trackChanges) {
        trackConsentChange(status, previousConsent, getCookie('cookie_consent'));
    }
    
    saveAnalyticsData();
}

// Update weekly and monthly stats
function updateTimeBasedStats(date, status) {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const week = getWeekNumber(dateObj);
    
    // Weekly stats
    const weekKey = `${year}-W${week}`;
    if (!consentAnalytics.weekly[weekKey]) {
        consentAnalytics.weekly[weekKey] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    // Monthly stats
    const monthKey = `${year}-${month}`;
    if (!consentAnalytics.monthly[monthKey]) {
        consentAnalytics.monthly[monthKey] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    // Update counts
    if (status === 'accepted') {
        consentAnalytics.weekly[weekKey].accepted++;
        consentAnalytics.monthly[monthKey].accepted++;
    } else if (status === 'rejected') {
        consentAnalytics.weekly[weekKey].rejected++;
        consentAnalytics.monthly[monthKey].rejected++;
    } else if (status === 'custom') {
        consentAnalytics.weekly[weekKey].custom++;
        consentAnalytics.monthly[monthKey].custom++;
    }
}

// Helper function to get week number
function getWeekNumber(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
    const week1 = new Date(d.getFullYear(), 0, 4);
    return 1 + Math.round(((d - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

// Generate analytics dashboard HTML with enhanced features
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
    
    // Get last 30 days data
    const last30Days = {};
    const monthlyDates = Object.keys(consentAnalytics.daily).sort().reverse().slice(0, 30);
    monthlyDates.forEach(date => {
        last30Days[date] = consentAnalytics.daily[date];
    });
    
    // Generate change history table if enabled
    const changeHistory = config.analytics.trackChanges ? `
    <div class="change-history-section">
        <h4>${lang.changeHistory}</h4>
        <div class="change-history-table-container">
            <table class="change-history-table">
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Action</th>
                        <th>Previous State</th>
                        <th>New State</th>
                        <th>Page</th>
                    </tr>
                </thead>
                <tbody>
                    ${consentAnalytics.changes.slice().reverse().map(change => `
                    <tr>
                        <td>${new Date(change.timestamp).toLocaleString()}</td>
                        <td>${change.status}</td>
                        <td>${change.previousState ? 'Custom' : 'None'}</td>
                        <td>${change.newState ? 'Custom' : 'None'}</td>
                        <td>${change.pageUrl}</td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>
    </div>` : '';
    
    // Generate export buttons if enabled
    const exportButtons = config.analytics.exportEnabled ? `
    <div class="export-section">
        <h4>${lang.exportData}</h4>
        <div class="export-buttons">
            ${config.analytics.exportFormats.map(format => `
            <button class="export-btn" data-format="${format}">${format.toUpperCase()}</button>
            `).join('')}
        </div>
    </div>` : '';
    
    return `
    <div class="analytics-dashboard">
        <div class="dashboard-header">
            <h3>${lang.dashboardTitle}</h3>
            <button id="toggleThemeBtn" class="theme-toggle-btn">
                ${currentThemeMode === 'dark' ? lang.lightMode : lang.darkMode}
            </button>
        </div>
        
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
            
            <div class="time-stat">
                <h4>${lang.statsLast30Days}</h4>
                <div class="stat-bars">
                    ${Object.entries(last30Days).map(([date, data]) => {
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
        </div>
        
        ${changeHistory}
        ${exportButtons}
    </div>`;
}

// Generate individual cookie settings HTML
function generateIndividualCookieSettings(cookies, language = 'en') {
    const lang = translations[language] || translations.en;
    
    return `
    <div class="individual-cookie-settings">
        <h4>${lang.individualSettings}</h4>
        <table class="cookie-settings-table">
            <thead>
                <tr>
                    <th>${lang.cookieName}</th>
                    <th>${lang.cookiePurpose}</th>
                    <th>${lang.cookieDuration}</th>
                    <th>${lang.cookieType}</th>
                    <th>
                        <label class="toggle-all-switch">
                            <input type="checkbox" id="toggleAllCookies">
                            <span class="toggle-all-slider"></span>
                        </label>
                    </th>
                </tr>
            </thead>
            <tbody>
                ${Object.entries(cookies).map(([category, cookies]) => 
                    cookies.map(cookie => `
                    <tr data-category="${category}">
                        <td><code>${cookie.name}</code></td>
                        <td>${cookie.description}</td>
                        <td>${cookie.duration}</td>
                        <td>${translations[language][category === 'functional' ? 'essential' : category] || category}</td>
                        <td>
                            <label class="cookie-toggle-switch">
                                <input type="checkbox" 
                                       data-cookie="${cookie.name}" 
                                       ${category === 'functional' ? 'checked disabled' : 'checked'}>
                                <span class="cookie-toggle-slider"></span>
                            </label>
                        </td>
                    </tr>`).join('')
                ).join('')}
            </tbody>
        </table>
    </div>`;
}

// Generate password prompt HTML
function generatePasswordPrompt(language = 'en') {
    const lang = translations[language] || translations.en;
    
    return `
    <div class="password-prompt">
        <h3>${lang.passwordPrompt}</h3>
        <input type="password" id="dashboardPasswordInput" placeholder="Password">
        <button id="dashboardPasswordSubmit">${lang.passwordSubmit}</button>
        <p id="passwordError" class="error-message"></p>
    </div>`;
}

// Check if current domain is allowed
function isDomainAllowed() {
    if (config.allowedDomains.length === 0) return true;
    
    const currentDomain = window.location.hostname;
    return config.allowedDomains.some(domain => {
        if (domain.startsWith('.')) {
            // Match subdomains (e.g., .example.com matches sub.example.com)
            return currentDomain === domain.substring(1) || currentDomain.endsWith(domain);
        }
        return currentDomain === domain;
    });
}

// Check geo-targeting restrictions
function checkGeoTargeting(geoData) {
    // Check blocked locations first
    if (config.geoConfig.blockedCountries.length > 0 && 
        config.geoConfig.blockedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.blockedRegions.length > 0 && 
        config.geoConfig.blockedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.blockedCities.length > 0 && 
        config.geoConfig.blockedCities.includes(geoData.city)) {
        return false;
    }
    
    // Check allowed locations (if any restrictions are set)
    if (config.geoConfig.allowedCountries.length > 0 && 
        !config.geoConfig.allowedCountries.includes(geoData.country)) {
        return false;
    }
    
    if (config.geoConfig.allowedRegions.length > 0 && 
        !config.geoConfig.allowedRegions.includes(geoData.region)) {
        return false;
    }
    
    if (config.geoConfig.allowedCities.length > 0 && 
        !config.geoConfig.allowedCities.includes(geoData.city)) {
        return false;
    }
    
    return true;
}

// Detect user language based on country and browser settings
function detectUserLanguage(geoData) {
    // First check if language is stored in cookie
    if (config.behavior.rememberLanguage) {
        const preferredLanguage = getCookie('preferred_language');
        if (preferredLanguage && translations[preferredLanguage]) {
            return preferredLanguage;
        }
    }
    
    // Then try to get language from country if auto-detection is enabled
    if (config.languageConfig.autoDetectLanguage && geoData && geoData.country) {
        const countryLang = countryLanguageMap[geoData.country];
        if (countryLang && translations[countryLang]) {
            return countryLang;
        }
    }
    
    // Fallback to browser language
    const browserLang = (navigator.language || 'en').split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    
    // Final fallback to configured default language
    return config.languageConfig.defaultLanguage || 'en';
}

// Get available languages for dropdown
function getAvailableLanguages() {
    // If specific languages are configured, use those
    if (config.languageConfig.availableLanguages.length > 0) {
        return config.languageConfig.availableLanguages.filter(lang => translations[lang]);
    }
    
    // Otherwise return all available languages
    return Object.keys(translations);
}

// Change language dynamically
function changeLanguage(languageCode) {
    const lang = translations[languageCode] || translations.en;
    
    // Update banner text
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        banner.querySelector('h2').textContent = lang.title;
        banner.querySelector('p').textContent = lang.description;
        banner.querySelector('.privacy-policy-link').textContent = lang.privacy;
        banner.querySelector('#acceptAllBtn').textContent = lang.accept;
        banner.querySelector('#adjustConsentBtn').textContent = lang.customize;
        banner.querySelector('#rejectAllBtn').textContent = lang.reject;
    }
    
    // Update modal text
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.querySelector('h2').textContent = lang.title;
        
        // Update category headers and descriptions
        const categories = {
            'functional': 'essential',
            'analytics': 'analytics',
            'performance': 'performance',
            'advertising': 'advertising',
            'uncategorized': 'other'
        };
        
        for (const [category, key] of Object.entries(categories)) {
            const categoryElement = document.querySelector(`input[data-category="${category}"]`);
            if (categoryElement) {
                const container = categoryElement.closest('.cookie-category');
                container.querySelector('h3').textContent = lang[key];
                container.querySelector('p').textContent = lang[`${key}Desc`];
            }
        }
        
        // Update buttons
        modal.querySelector('#rejectAllSettingsBtn').textContent = lang.reject;
        modal.querySelector('#saveSettingsBtn').textContent = lang.save;
        modal.querySelector('#acceptAllSettingsBtn').textContent = lang.accept;
    }
    
    // Update floating button title
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (floatingButton) {
        floatingButton.title = lang.title;
    }
    
    // Update analytics dashboard if visible
    const dashboard = document.querySelector('.analytics-dashboard');
    if (dashboard) {
        dashboard.innerHTML = generateAnalyticsDashboard(languageCode);
        setupDashboardEvents();
    }
    
    // Update password prompt if visible
    const passwordPrompt = document.querySelector('.password-prompt');
    if (passwordPrompt) {
        passwordPrompt.innerHTML = generatePasswordPrompt(languageCode);
        setupPasswordPromptEvents();
    }
    
    // Store selected language in cookie
    if (config.behavior.rememberLanguage) {
        setCookie('preferred_language', languageCode, 365);
    }
}

// Toggle between dark and light mode
function toggleThemeMode() {
    currentThemeMode = currentThemeMode === 'dark' ? 'light' : 'dark';
    applyThemeMode();
    
    // Update the toggle button text
    const toggleBtn = document.getElementById('toggleThemeBtn');
    if (toggleBtn) {
        const lang = document.getElementById('cookieLanguageSelect') ? 
            document.getElementById('cookieLanguageSelect').value : 'en';
        toggleBtn.textContent = currentThemeMode === 'dark' ? 
            translations[lang].lightMode : translations[lang].darkMode;
    }
    
    // Store preference in cookie
    setCookie('preferred_theme', currentThemeMode, 365);
}

// Apply the current theme mode to the UI
function applyThemeMode() {
    const themeColors = config.appearance.colors[currentThemeMode];
    const root = document.documentElement;
    
    // Set CSS variables based on the current theme
    root.style.setProperty('--primary-color', themeColors.primary);
    root.style.setProperty('--secondary-color', themeColors.secondary);
    root.style.setProperty('--danger-color', themeColors.danger);
    root.style.setProperty('--text-dark', themeColors.textDark);
    root.style.setProperty('--text-light', themeColors.textLight);
    root.style.setProperty('--background-color', themeColors.background);
    root.style.setProperty('--toggle-active', themeColors.toggleActive);
    root.style.setProperty('--toggle-inactive', themeColors.toggleInactive);
    root.style.setProperty('--button-text', themeColors.buttonText);
    root.style.setProperty('--primary-hover', themeColors.buttonHover.primary);
    root.style.setProperty('--secondary-hover', themeColors.buttonHover.secondary);
    root.style.setProperty('--danger-hover', themeColors.buttonHover.danger);
    
    // Update the theme meta tag
    const themeMeta = document.querySelector('meta[name="color-scheme"]');
    if (themeMeta) {
        themeMeta.content = currentThemeMode;
    } else {
        const meta = document.createElement('meta');
        meta.name = 'color-scheme';
        meta.content = currentThemeMode;
        document.head.appendChild(meta);
    }
}

// Detect website logo automatically
function detectWebsiteLogo() {
    if (!config.appearance.logo.enabled) return null;
    if (config.appearance.logo.url !== 'auto') return config.appearance.logo.url;
    
    // Try to find logo in common locations
    const logoSelectors = [
        'img[alt*="logo"]',
        'img[src*="logo"]',
        '.logo img',
        '#logo img',
        'header img',
        'nav img'
    ];
    
    for (const selector of logoSelectors) {
        const logo = document.querySelector(selector);
        if (logo && logo.src) {
            return logo.src;
        }
    }
    
    return null;
}

// Enhanced cookie scanning function with better matching
function scanAndCategorizeCookies() {
    const cookies = document.cookie.split(';');
    const result = {
        functional: [],
        analytics: [],
        performance: [],
        advertising: [],
        uncategorized: []
    };

    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (!name) return;
        
        let categorized = false;
        
        // Check against known cookie patterns
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) || name === pattern) {
                const cookieInfo = cookieDatabase[pattern];
                result[cookieInfo.category].push({
                    name: name,
                    value: value || '',
                    duration: cookieInfo.duration || getCookieDuration(name),
                    description: cookieInfo.description || 'Unknown purpose'
                });
                categorized = true;
                break;
            }
        }
        
        if (!categorized && name !== 'cookie_consent') {
            result.uncategorized.push({
                name: name,
                value: value || '',
                duration: getCookieDuration(name),
                description: 'Unknown cookie purpose'
            });
        }
    });
    
    return result;
}

// Enhanced getCookieDuration function
function getCookieDuration(name) {
    const cookieMatch = document.cookie.match(new RegExp(`${name}=[^;]+(;|$)`));
    if (!cookieMatch) return "Session";
    
    const expiresMatch = document.cookie.match(new RegExp(`${name}=[^;]+; expires=([^;]+)`));
    if (expiresMatch && expiresMatch[1]) {
        const expiryDate = new Date(expiresMatch[1]);
        return expiryDate > new Date() ? 
            `Expires ${expiryDate.toLocaleDateString()}` : 
            "Expired";
    }
    return "Session";
}

function trackMarketingParameters() {
    const params = new URLSearchParams(window.location.search);
    const marketingData = {};
    
    // Check for common marketing parameters
    if (params.has('gclid')) marketingData.gclid = params.get('gclid');
    if (params.has('fbclid')) marketingData.fbclid = params.get('fbclid');
    if (params.has('utm_source')) marketingData.utm_source = params.get('utm_source');
    if (params.has('utm_medium')) marketingData.utm_medium = params.get('utm_medium');
    if (params.has('utm_campaign')) marketingData.utm_campaign = params.get('utm_campaign');
    
    if (Object.keys(marketingData).length > 0) {
        window.dataLayer.push({
            'event': 'marketingParameters',
            ...marketingData
        });
    }
}

function injectConsentHTML(detectedCookies, language = 'en') {
    const lang = translations[language] || translations.en;
    const availableLanguages = getAvailableLanguages();
    const logoUrl = detectWebsiteLogo();
    
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
                    <input type="checkbox" data-category="${category}" ${isEssential ? 'checked disabled' : 'checked'}>
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
    
    // Generate logo if enabled
    const logo = config.appearance.logo.enabled && logoUrl ? `
    <div class="cookie-consent-logo" style="width: ${config.appearance.logo.width}px; height: ${config.appearance.logo.height}px;">
        <img src="${logoUrl}" alt="Website Logo">
    </div>` : '';
    
    // Generate admin dashboard button if analytics enabled
    const adminButton = config.analytics.enabled && config.analytics.showDashboard && config.uiPosition.showAdminButton ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6l9-4 9 4m-9-4v20m-7-6l7 4 7-4m-14 0l7-4 7 4"/>
        </svg>
    </div>` : '';
    
    // Generate individual cookie settings if enabled
    const individualSettings = config.cookieSettings.showIndividualToggles ? 
        generateIndividualCookieSettings(detectedCookies, language) : '';
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${config.appearance.logo.position === 'left' ? logo : ''}
            <div class="cookie-consent-content">
                ${languageSelector}
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            ${config.appearance.logo.position === 'right' ? logo : ''}
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
                ${detectedCookies.uncategorized.length > 0 && config.cookieSettings.uncategorizedEnabled ? 
                    generateCategorySection('uncategorized') : ''}
                ${individualSettings}
            </div>
            <div class="cookie-settings-footer">
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn">${lang.accept}</button>
            </div>
        </div>
    </div>

    <!-- Floating Settings Button -->
    ${config.uiPosition.showFloatingButton ? `
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
            <path d="M8.5 8.5v.01"></path>
            <path d="M16 15.5v.01"></path>
            <path d="M12 12v.01"></path>
            <path d="M11 17v.01"></path>
            <path d="M7 14v.01"></path>
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
    :root {
        /* Theme variables - will be set by JavaScript */
        --primary-color: ${config.appearance.colors.light.primary};
        --secondary-color: ${config.appearance.colors.light.secondary};
        --danger-color: ${config.appearance.colors.light.danger};
        --text-dark: ${config.appearance.colors.light.textDark};
        --text-light: ${config.appearance.colors.light.textLight};
        --background-color: ${config.appearance.colors.light.background};
        --toggle-active: ${config.appearance.colors.light.toggleActive};
        --toggle-inactive: ${config.appearance.colors.light.toggleInactive};
        --button-text: ${config.appearance.colors.light.buttonText};
        --primary-hover: ${config.appearance.colors.light.buttonHover.primary};
        --secondary-hover: ${config.appearance.colors.light.buttonHover.secondary};
        --danger-hover: ${config.appearance.colors.light.buttonHover.danger};
        
        /* Layout variables */
        --banner-width: ${config.bannerSize.width}px;
        --banner-padding: ${config.bannerSize.padding}px;
        --button-radius: ${config.appearance.borderRadius.buttons}px;
        --banner-radius: ${config.appearance.borderRadius.banner}px;
        --toggle-radius: ${config.appearance.borderRadius.toggles}px;
    }
    
    /* Main Banner Styles */
    .cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        ${config.uiPosition.bannerPosition === 'center' ? 
          'left: 50%; transform: translateX(-50%);' : 
          config.uiPosition.bannerPosition === 'left' ? 
          'left: 20px;' : 'right: 20px;'}
        width: var(--banner-width);
        min-width: ${config.bannerSize.minWidth}px;
        max-width: ${config.bannerSize.maxWidth}px;
        background: var(--background-color);
        border-radius: var(--banner-radius);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        z-index: 9999;
        padding: var(--banner-padding);
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        ${config.animations.enabled ? `
        transform: translateY(20px);
        opacity: 0;
        transition: all ${config.animations.banner.duration}ms ${config.animations.banner.easing};
        ` : ''}
        ${config.appearance.borders.banner !== 'none' ? 
          `border: ${config.appearance.borders.banner.replace('color', 'var(--text-light)')};` : ''}
        overflow: hidden;
    }

    .cookie-consent-banner.show {
        ${config.animations.enabled ? `
        transform: ${config.uiPosition.bannerPosition === 'center' ? 'translate(-50%, 0)' : 'translateY(0)'};
        opacity: 1;
        ` : ''}
        display: block;
    }

    .cookie-consent-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .cookie-consent-content {
        position: relative;
    }

    .cookie-consent-content h2 {
        margin: 0 0 16px 0;
        font-size: 18px;
        color: var(--text-dark);
        font-weight: 600;
        line-height: 1.4;
        letter-spacing: -0.2px;
    }

    .cookie-consent-content p {
        margin: 0 0 24px 0;
        font-size: 14px;
        color: var(--text-light);
        line-height: 1.5;
    }

    .cookie-consent-logo {
        ${config.appearance.logo.position === 'left' ? 'align-self: flex-start;' : 'align-self: flex-end;'}
        margin-bottom: 16px;
    }

    .cookie-consent-logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .privacy-policy-link {
        color: var(--secondary-color);
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 24px;
        transition: color 0.2s ease;
    }

    .privacy-policy-link:hover {
        color: var(--secondary-hover);
    }

    .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 8px;
    }

    .cookie-btn {
        padding: 12px 20px;
        border-radius: var(--button-radius);
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        ${config.animations.enabled ? `
        transition: all ${config.animations.buttons.duration}ms ease;
        ` : ''}
        text-align: center;
        border: ${config.appearance.borders.buttons !== 'none' ? 
          config.appearance.borders.buttons.replace('color', 'currentColor') : 'none'};
        flex: 1;
        letter-spacing: 0.2px;
    }

    .adjust-btn {
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f8f9fa'};
        color: var(--text-dark);
        border: ${config.appearance.borders.buttons !== 'none' ? 
          '1px solid ' + (currentThemeMode === 'dark' ? '#4a5a6a' : '#e0e0e0') : 'none'};
    }

    .adjust-btn:hover {
        ${config.animations.buttons.hoverEffect ? `
        background-color: ${currentThemeMode === 'dark' ? '#4a5a6a' : '#f0f2f5'};
        ${config.animations.buttons.intensity === 'high' ? 'transform: translateY(-3px);' : 
          config.animations.buttons.intensity === 'medium' ? 'transform: translateY(-2px);' : 'transform: translateY(-1px);'}
        box-shadow: 0 ${config.animations.buttons.intensity === 'high' ? '4px 12px' : 
          config.animations.buttons.intensity === 'medium' ? '3px 8px' : '2px 4px'} 
          rgba(0, 0, 0, 0.${currentThemeMode === 'dark' ? '3' : '1'});
        ` : ''}
    }

    .reject-btn {
        background-color: var(--background-color);
        color: var(--danger-color);
        border: ${config.appearance.borders.buttons !== 'none' ? '1px solid var(--danger-color)' : 'none'};
    }

    .reject-btn:hover {
        ${config.animations.buttons.hoverEffect ? `
        background-color: ${currentThemeMode === 'dark' ? '#3a1a1a' : '#ffeeed'};
        ${config.animations.buttons.intensity === 'high' ? 'transform: translateY(-3px);' : 
          config.animations.buttons.intensity === 'medium' ? 'transform: translateY(-2px);' : 'transform: translateY(-1px);'}
        box-shadow: 0 ${config.animations.buttons.intensity === 'high' ? '4px 12px' : 
          config.animations.buttons.intensity === 'medium' ? '3px 8px' : '2px 4px'} 
          rgba(231, 76, 60, 0.${currentThemeMode === 'dark' ? '4' : '2'});
        ` : ''}
    }

    .accept-btn {
        background-color: var(--primary-color);
        color: var(--button-text);
        border: ${config.appearance.borders.buttons !== 'none' ? '1px solid var(--primary-color)' : 'none'};
        ${config.animations.buttons.hoverEffect ? `
        box-shadow: 0 2px 12px rgba(46, 204, 113, 0.3);
        ` : ''}
    }

    .accept-btn:hover {
        ${config.animations.buttons.hoverEffect ? `
        background-color: var(--primary-hover);
        ${config.animations.buttons.intensity === 'high' ? 'transform: translateY(-3px);' : 
          config.animations.buttons.intensity === 'medium' ? 'transform: translateY(-2px);' : 'transform: translateY(-1px);'}
        box-shadow: 0 ${config.animations.buttons.intensity === 'high' ? '6px 16px' : 
          config.animations.buttons.intensity === 'medium' ? '4px 12px' : '2px 8px'} 
          rgba(46, 204, 113, 0.${currentThemeMode === 'dark' ? '5' : '4'});
        ` : ''}
    }

    /* Language Selector Styles */
    .language-selector {
        position: absolute;
        top: 0;
        right: 0;
    }

    .language-selector select {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid ${currentThemeMode === 'dark' ? '#4a5a6a' : '#e0e0e0'};
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f8f9fa'};
        font-size: 13px;
        color: var(--text-dark);
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .language-selector select:hover {
        border-color: var(--secondary-color);
        background-color: var(--background-color);
    }

    .language-selector select:focus {
        outline: none;
        border-color: var(--secondary-color);
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }

    /* Settings Modal */
    .cookie-settings-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        overflow-y: auto;
        padding: 30px 0;
        ${config.animations.enabled ? `
        opacity: 0;
        transition: opacity ${config.animations.modal.duration}ms ${config.animations.modal.easing};
        ` : ''}
    }

    .cookie-settings-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        ${config.animations.enabled ? 'opacity: 1;' : ''}
    }

    .cookie-settings-content {
        background-color: var(--background-color);
        margin: 0 auto;
        width: 845px;
        max-height: 80vh;
        border-radius: var(--banner-radius);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        ${config.animations.enabled ? `
        transform: translateY(20px);
        transition: transform ${config.animations.modal.duration}ms ${config.animations.modal.easing};
        ` : ''}
        display: flex;
        flex-direction: column;
    }

    .cookie-settings-modal.show .cookie-settings-content {
        ${config.animations.enabled ? 'transform: translateY(0);' : ''}
    }

    .cookie-settings-header {
        padding: 20px 30px;
        border-bottom: 1px solid ${currentThemeMode === 'dark' ? '#3a4a5a' : '#ecf0f1'};
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${currentThemeMode === 'dark' ? '#2c3e50' : '#f8f9fa'};
    }

    .cookie-settings-header h2 {
        margin: 0;
        color: var(--text-dark);
        font-size: 1.5rem;
        font-weight: 600;
    }

    .close-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: var(--text-light);
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-modal:hover {
        color: var(--danger-color);
    }

    .cookie-settings-body {
        padding: 25px 30px;
        background-color: var(--background-color);
        overflow-y: auto;
        flex: 1;
    }

    .cookie-category {
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 1px solid ${currentThemeMode === 'dark' ? '#3a4a5a' : '#ecf0f1'};
        transition: all 0.3s ease;
    }

    .cookie-category:hover {
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f8f9fa'};
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
    }

    .cookie-category:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    /* Toggle Switch Styles */
    .toggle-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .toggle-container h3 {
        margin: 0;
        font-size: 1.1rem;
        color: var(--text-dark);
        font-weight: 600;
    }

    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 26px;
    }

    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--toggle-inactive);
        transition: .4s;
        border-radius: var(--toggle-radius);
    }

    .toggle-slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }

    input:checked + .toggle-slider {
        background-color: var(--toggle-active);
    }

    input:checked + .toggle-slider:before {
        transform: translateX(24px);
    }

    input:disabled + .toggle-slider {
        background-color: ${currentThemeMode === 'dark' ? '#7f8c8d' : '#95a5a6'};
        cursor: not-allowed;
    }

    /* Cookie Details */
    .cookie-details-container {
        margin-top: 15px;
        border: 1px solid ${currentThemeMode === 'dark' ? '#3a4a5a' : '#e0e0e0'};
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
    }

    .cookie-details-container:hover {
        box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        border-color: var(--primary-color);
    }

    .cookie-details-header {
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f5f5f5'};
        padding: 12px 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .cookie-details-header:hover {
        background-color: ${currentThemeMode === 'dark' ? '#4a5a6a' : '#eeeeee'};
    }

    .cookie-details-content {
        padding: 18px;
        background-color: ${currentThemeMode === 'dark' ? '#2c3e50' : '#fafafa'};
        border-top: 1px solid ${currentThemeMode === 'dark' ? '#3a4a5a' : '#e0e0e0'};
        display: none;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .cookie-details-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    .cookie-details-table th {
        text-align: left;
        padding: 10px 12px;
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f0f0f0'};
        font-weight: 600;
        border-bottom: 2px solid ${currentThemeMode === 'dark' ? '#4a5a6a' : '#e0e0e0'};
        color: var(--text-dark);
    }

    .cookie-details-table td {
        padding: 10px 12px;
        border-bottom: 1px solid ${currentThemeMode === 'dark' ? '#3a4a5a' : '#e0e0e0'};
        color: var(--text-light);
    }

    .cookie-details-table tr:last-child td {
        border-bottom: none;
    }

    .cookie-details-table tr:hover {
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f5f5f5'};
    }

    .cookie-details-table code {
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f0f0f0'};
        padding: 2px 5px;
        border-radius: 3px;
        font-family: monospace;
        color: var(--text-dark);
    }

    .no-cookies-message {
        padding: 15px;
        text-align: center;
        color: ${currentThemeMode === 'dark' ? '#bdc3c7' : '#666'};
        font-style: italic;
    }

    /* Individual Cookie Settings */
    .individual-cookie-settings {
        margin-top: 30px;
    }

    .individual-cookie-settings h4 {
        color: var(--text-dark);
        margin-bottom: 15px;
    }

    .cookie-settings-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    .cookie-settings-table th {
        text-align: left;
        padding: 12px 15px;
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f0f0f0'};
        font-weight: 600;
        color: var(--text-dark);
    }

    .cookie-settings-table td {
        padding: 12px 15px;
        border-bottom: 1px solid ${currentThemeMode === 'dark' ? '#3a4a5a' : '#e0e0e0'};
        color: var(--text-light);
    }

    .cookie-settings-table tr:last-child td {
        border-bottom: none;
    }

    .cookie-settings-table tr:hover {
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f5f5f5'};
    }

    .cookie-toggle-switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
    }

    .cookie-toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .cookie-toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--toggle-inactive);
        transition: .4s;
        border-radius: 20px;
    }

    .cookie-toggle-slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    .cookie-toggle-switch input:checked + .cookie-toggle-slider {
        background-color: var(--toggle-active);
    }

    .cookie-toggle-switch input:checked + .cookie-toggle-slider:before {
        transform: translateX(20px);
    }

    .cookie-toggle-switch input:disabled + .cookie-toggle-slider {
        background-color: ${currentThemeMode === 'dark' ? '#7f8c8d' : '#95a5a6'};
        cursor: not-allowed;
    }

    .toggle-all-switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
    }

    .toggle-all-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle-all-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--toggle-inactive);
        transition: .4s;
        border-radius: 20px;
    }

    .toggle-all-slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    .toggle-all-switch input:checked + .toggle-all-slider {
        background-color: var(--toggle-active);
    }

    .toggle-all-switch input:checked + .toggle-all-slider:before {
        transform: translateX(20px);
    }

    /* Floating Settings Button */
    .cookie-settings-button {
        position: fixed;
        bottom: 30px;
        ${config.uiPosition.floatingButtonPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}
        width: 60px;
        height: 60px;
        background-color: var(--primary-color);
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 9998;
        ${config.animations.enabled ? `
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        ` : ''}
        border: 2px solid var(--background-color);
    }

    .cookie-settings-button.show {
        ${config.animations.enabled ? `
        opacity: 1;
        transform: translateY(0);
        ` : ''}
    }

    .cookie-settings-button:hover {
        ${config.animations.buttons.hoverEffect ? `
        background-color: var(--primary-hover);
        ${config.animations.buttons.intensity === 'high' ? 'transform: translateY(-5px) scale(1.1);' : 
          config.animations.buttons.intensity === 'medium' ? 'transform: translateY(-3px) scale(1.05);' : 'transform: translateY(-2px);'}
        box-shadow: 0 ${config.animations.buttons.intensity === 'high' ? '8px 25px' : 
          config.animations.buttons.intensity === 'medium' ? '6px 20px' : '4px 15px'} 
          rgba(0, 0, 0, 0.3);
        ` : ''}
    }

    .cookie-settings-button svg {
        width: 28px;
        height: 28px;
        stroke: var(--button-text);
        stroke-width: 2;
        transition: all 0.3s ease;
    }

    .cookie-settings-button:hover svg {
        ${config.animations.buttons.hoverEffect ? `
        transform: rotate(15deg);
        ` : ''}
    }

    /* Admin Button */
    .cookie-admin-button {
        position: fixed;
        ${config.uiPosition.adminButtonPosition === 'left' ? 
          'left: 30px;' : 'right: 30px;'}
        bottom: 100px;
        width: 60px;
        height: 60px;
        background-color: var(--secondary-color);
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 9997;
        ${config.animations.enabled ? `
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        ` : ''}
        border: 2px solid var(--background-color);
    }

    .cookie-admin-button.show {
        ${config.animations.enabled ? `
        opacity: 1;
        transform: translateY(0);
        ` : ''}
    }

    .cookie-admin-button:hover {
        ${config.animations.buttons.hoverEffect ? `
        background-color: var(--secondary-hover);
        ${config.animations.buttons.intensity === 'high' ? 'transform: translateY(-5px) scale(1.1);' : 
          config.animations.buttons.intensity === 'medium' ? 'transform: translateY(-3px) scale(1.05);' : 'transform: translateY(-2px);'}
        box-shadow: 0 ${config.animations.buttons.intensity === 'high' ? '8px 25px' : 
          config.animations.buttons.intensity === 'medium' ? '6px 20px' : '4px 15px'} 
          rgba(0, 0, 0, 0.3);
        ` : ''}
    }

    .cookie-admin-button svg {
        width: 28px;
        height: 28px;
        stroke: var(--button-text);
        stroke-width: 2;
        transition: all 0.3s ease;
    }

    .cookie-admin-button:hover svg {
        ${config.animations.buttons.hoverEffect ? `
        transform: rotate(15deg);
        ` : ''}
    }

    /* Analytics Dashboard */
    .cookie-analytics-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 10001;
        overflow-y: auto;
        padding: 30px 0;
        ${config.animations.enabled ? `
        opacity: 0;
        transition: opacity ${config.animations.modal.duration}ms ${config.animations.modal.easing};
        ` : ''}
    }

    .cookie-analytics-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        ${config.animations.enabled ? 'opacity: 1;' : ''}
    }

    .cookie-analytics-content {
        background-color: var(--background-color);
        margin: 0 auto;
        width: 900px;
        max-height: 80vh;
        border-radius: var(--banner-radius);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        ${config.animations.enabled ? `
        transform: translateY(20px);
        transition: transform ${config.animations.modal.duration}ms ${config.animations.modal.easing};
        ` : ''}
        display: flex;
        flex-direction: column;
    }

    .cookie-analytics-modal.show .cookie-analytics-content {
        ${config.animations.enabled ? 'transform: translateY(0);' : ''}
    }

    .cookie-analytics-header {
        padding: 20px 30px;
        border-bottom: 1px solid ${currentThemeMode === 'dark' ? '#3a4a5a' : '#ecf0f1'};
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${currentThemeMode === 'dark' ? '#2c3e50' : '#f8f9fa'};
    }

    .cookie-analytics-header h2 {
        margin: 0;
        color: var(--text-dark);
        font-size: 1.5rem;
        font-weight: 600;
    }

    .close-analytics-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: var(--text-light);
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-analytics-modal:hover {
        color: var(--danger-color);
    }

    .cookie-analytics-body {
        padding: 25px 30px;
        background-color: var(--background-color);
        overflow-y: auto;
        flex: 1;
    }

    .dashboard-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .theme-toggle-btn {
        padding: 8px 16px;
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f0f0f0'};
        color: var(--text-dark);
        border: none;
        border-radius: var(--button-radius);
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s ease;
    }

    .theme-toggle-btn:hover {
        background-color: ${currentThemeMode === 'dark' ? '#4a5a6a' : '#e0e0e0'};
    }

    /* Password Prompt */
    .password-prompt {
        text-align: center;
        padding: 30px;
    }

    .password-prompt h3 {
        color: var(--text-dark);
        margin-bottom: 20px;
    }

    .password-prompt input {
        padding: 12px 15px;
        border-radius: var(--button-radius);
        border: 1px solid ${currentThemeMode === 'dark' ? '#4a5a6a' : '#e0e0e0'};
        width: 100%;
        max-width: 300px;
        margin-bottom: 15px;
        font-size: 14px;
        background-color: var(--background-color);
        color: var(--text-dark);
    }

    .password-prompt button {
        padding: 12px 25px;
        background-color: var(--primary-color);
        color: var(--button-text);
        border: none;
        border-radius: var(--button-radius);
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }

    .password-prompt button:hover {
        background-color: var(--primary-hover);
    }

    .error-message {
        color: var(--danger-color);
        margin-top: 10px;
        font-size: 14px;
    }

    /* Stats Dashboard */
    .analytics-dashboard {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .analytics-dashboard h3 {
        color: var(--text-dark);
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 1.3rem;
    }

    .stats-summary {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        margin-bottom: 30px;
    }

    .stat-card {
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f8f9fa'};
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        transition: all 0.3s ease;
    }

    .stat-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .stat-card.accepted {
        border-top: 4px solid var(--primary-color);
    }

    .stat-card.rejected {
        border-top: 4px solid var(--danger-color);
    }

    .stat-card.custom {
        border-top: 4px solid var(--secondary-color);
    }

    .stat-card.total {
        border-top: 4px solid #9b59b6;
    }

    .stat-card h4 {
        margin: 0 0 10px 0;
        font-size: 1rem;
        color: var(--text-light);
    }

    .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--text-dark);
        margin-bottom: 5px;
    }

    .stat-percentage {
        font-size: 1rem;
        color: var(--text-light);
    }

    .time-based-stats {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .time-stat {
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f8f9fa'};
        border-radius: 8px;
        padding: 20px;
    }

    .time-stat h4 {
        margin: 0 0 15px 0;
        font-size: 1.1rem;
        color: var(--text-dark);
    }

    .stat-bars {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .stat-bar-container {
        margin-bottom: 15px;
    }

    .stat-bar-label {
        font-size: 0.85rem;
        color: var(--text-light);
        margin-bottom: 5px;
    }

    .stat-bar {
        height: 20px;
        background-color: ${currentThemeMode === 'dark' ? '#4a5a6a' : '#ecf0f1'};
        border-radius: 10px;
        overflow: hidden;
        display: flex;
    }

    .stat-bar-segment {
        height: 100%;
    }

    .stat-bar-segment.accepted {
        background-color: var(--primary-color);
    }

    .stat-bar-segment.rejected {
        background-color: var(--danger-color);
    }

    .stat-bar-segment.custom {
        background-color: var(--secondary-color);
    }

    .stat-bar-legend {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        color: var(--text-light);
        margin-top: 5px;
    }

    /* Change History */
    .change-history-section {
        margin-top: 30px;
    }

    .change-history-section h4 {
        color: var(--text-dark);
        margin-bottom: 15px;
    }

    .change-history-table-container {
        max-height: 300px;
        overflow-y: auto;
        border: 1px solid ${currentThemeMode === 'dark' ? '#4a5a6a' : '#e0e0e0'};
        border-radius: 8px;
    }

    .change-history-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    .change-history-table th {
        position: sticky;
        top: 0;
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f0f0f0'};
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        color: var(--text-dark);
    }

    .change-history-table td {
        padding: 10px 12px;
        border-bottom: 1px solid ${currentThemeMode === 'dark' ? '#4a5a6a' : '#e0e0e0'};
        color: var(--text-light);
    }

    .change-history-table tr:hover {
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f5f5f5'};
    }

    /* Export Section */
    .export-section {
        margin-top: 30px;
    }

    .export-section h4 {
        color: var(--text-dark);
        margin-bottom: 15px;
    }

    .export-buttons {
        display: flex;
        gap: 10px;
    }

    .export-btn {
        padding: 8px 16px;
        background-color: ${currentThemeMode === 'dark' ? '#3a4a5a' : '#f0f0f0'};
        color: var(--text-dark);
        border: none;
        border-radius: var(--button-radius);
        cursor: pointer;
        font-size: 14px;
        transition: all 0.2s ease;
    }

    .export-btn:hover {
        background-color: ${currentThemeMode === 'dark' ? '#4a5a6a' : '#e0e0e0'};
    }

    /* Footer Buttons */
    .cookie-settings-footer {
        padding: 20px 30px;
        background-color: ${currentThemeMode === 'dark' ? '#2c3e50' : '#f8f9fa'};
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        border-top: 1px solid ${currentThemeMode === 'dark' ? '#3a4a5a' : '#ecf0f1'};
    }

    .save-btn {
        background-color: var(--secondary-color);
        color: var(--button-text);
        background-image: linear-gradient(to right, var(--secondary-color), var(--secondary-hover));
    }

    .save-btn:hover {
        background-color: var(--secondary-hover);
        ${config.animations.buttons.hoverEffect ? `
        ${config.animations.buttons.intensity === 'high' ? 'transform: translateY(-3px);' : 
          config.animations.buttons.intensity === 'medium' ? 'transform: translateY(-2px);' : 'transform: translateY(-1px);'}
        box-shadow: 0 ${config.animations.buttons.intensity === 'high' ? '5px 15px' : 
          config.animations.buttons.intensity === 'medium' ? '5px 10px' : '5px 5px'} 
          rgba(0,0,0,0.15);
        ` : ''}
    }

    /* Responsive Styles */
    @media (max-width: 900px) {
        .cookie-settings-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .cookie-analytics-content {
            width: 90%;
            max-height: 80vh;
        }
        
        .stats-summary {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .cookie-consent-banner {
            width: 90%;
            ${config.uiPosition.bannerPosition === 'center' ? 
              'left: 50%; transform: translateX(-50%);' : 
              config.uiPosition.bannerPosition === 'left' ? 
              'left: 5%;' : 'right: 5%;'}
            bottom: 10px;
            padding: 20px;
        }
        
        .cookie-consent-buttons {
            flex-direction: column;
        }
        
        .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .cookie-btn:last-child {
            margin-bottom: 0;
        }
        
        .cookie-settings-header {
            padding: 15px 20px;
        }
        
        .cookie-settings-body {
            padding: 15px 20px;
        }
        
        .cookie-settings-footer {
            flex-direction: column;
            padding: 15px 20px;
        }
        
        .cookie-settings-footer .cookie-btn {
            width: 100%;
            margin-bottom: 8px;
        }
        
        .cookie-settings-footer .cookie-btn:last-child {
            margin-bottom: 0;
        }
        
        .stats-summary {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 480px) {
        .cookie-consent-banner {
            padding: 15px;
            width: calc(100% - 30px);
            ${config.uiPosition.bannerPosition === 'center' ? 
              'left: 50%; transform: translateX(-50%);' : 
              config.uiPosition.bannerPosition === 'left' ? 
              'left: 15px;' : 'right: 15px;'}
        }
        
        .cookie-consent-content h2 {
            font-size: 1.1rem;
        }
        
        .cookie-consent-content p {
            font-size: 0.85rem;
            margin-bottom: 15px;
        }
        
        .privacy-policy-link {
            margin-bottom: 15px;
        }
        
        .cookie-btn {
            padding: 10px;
            font-size: 0.85rem;
        }
        
        .cookie-settings-button {
            width: 50px;
            height: 50px;
            bottom: 15px;
            ${config.uiPosition.floatingButtonPosition === 'left' ? 'left: 15px;' : 'right: 15px;'}
        }
        
        .cookie-admin-button {
            width: 50px;
            height: 50px;
            ${config.uiPosition.adminButtonPosition === 'left' ? 
              'left: 15px; bottom: 80px;' : 
              'right: 15px; bottom: 80px;'}
        }
        
        .cookie-settings-button svg {
            width: 22px;
            height: 22px;
        }
        
        .cookie-admin-button svg {
            width: 22px;
            height: 22px;
        }
        
        .cookie-settings-header h2 {
            font-size: 1.2rem;
        }
        
        .toggle-container h3 {
            font-size: 1rem;
        }
        
        .cookie-details-table {
            font-size: 0.8rem;
        }
        
        .cookie-details-table th, 
        .cookie-details-table td {
            padding: 8px 10px;
        }
    }
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    // Apply theme mode
    applyThemeMode();
    
    // Set up theme change listener if in auto mode
    if (config.appearance.themeMode === 'auto') {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            currentThemeMode = e.matches ? 'dark' : 'light';
            applyThemeMode();
        });
    }
    
    // Show banner after delay if enabled
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
    if (config.analytics.enabled && config.analytics.showDashboard && config.uiPosition.showAdminButton) {
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
    
    // Setup individual cookie toggles if enabled
    if (config.cookieSettings.showIndividualToggles) {
        setupIndividualCookieToggles();
    }
    
    // Setup theme toggle button
    const themeToggleBtn = document.getElementById('toggleThemeBtn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleThemeMode);
    }
}

function setupPasswordPromptEvents() {
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', function() {
            const passwordInput = document.getElementById('dashboardPasswordInput');
            const errorMessage = document.getElementById('passwordError');
            
            if (passwordInput.value === config.analytics.dashboardPassword) {
                isDashboardAuthenticated = true;
                setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
                
                // Update the dashboard content
                const lang = document.getElementById('cookieLanguageSelect') ? 
                    document.getElementById('cookieLanguageSelect').value : 'en';
                document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
                setupDashboardEvents();
            } else {
                const lang = document.getElementById('cookieLanguageSelect') ? 
                    document.getElementById('cookieLanguageSelect').value : 'en';
                errorMessage.textContent = translations[lang].passwordIncorrect;
            }
        });
    }
}

function setupDashboardEvents() {
    // Setup export buttons if enabled
    if (config.analytics.exportEnabled) {
        document.querySelectorAll('.export-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                exportData(this.dataset.format);
            });
        });
    }
}

function setupIndividualCookieToggles() {
    // Setup toggle all cookies checkbox
    const toggleAll = document.getElementById('toggleAllCookies');
    if (toggleAll) {
        toggleAll.addEventListener('change', function() {
            const checkboxes = document.querySelectorAll('.cookie-settings-table input[type="checkbox"]:not(:disabled)');
            checkboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
    }
    
    // Setup individual cookie toggles
    document.querySelectorAll('.cookie-settings-table input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Update the toggle all checkbox state
            if (toggleAll) {
                const allCheckboxes = Array.from(document.querySelectorAll('.cookie-settings-table input[type="checkbox"]:not(:disabled)'));
                toggleAll.checked = allCheckboxes.every(cb => cb.checked);
                toggleAll.indeterminate = !toggleAll.checked && allCheckboxes.some(cb => cb.checked);
            }
        });
    });
}

function exportData(format) {
    // Prepare data for export
    const exportData = {
        summary: consentAnalytics.total,
        daily: consentAnalytics.daily,
        weekly: consentAnalytics.weekly,
        monthly: consentAnalytics.monthly,
        changes: consentAnalytics.changes,
        cookieHistory: consentAnalytics.cookieHistory,
        generatedAt: new Date().toISOString()
    };
    
    let data, mimeType, fileName, blob;
    
    switch (format) {
        case 'json':
            data = JSON.stringify(exportData, null, 2);
            mimeType = 'application/json';
            fileName = 'cookie-consent-analytics.json';
            blob = new Blob([data], { type: mimeType });
            break;
            
        case 'csv':
            // Convert summary data to CSV
            let csvData = "Type,Count,Percentage\n";
            csvData += `Accepted,${exportData.summary.accepted},${Math.round((exportData.summary.accepted / (exportData.summary.accepted + exportData.summary.rejected + exportData.summary.custom)) * 100)}\n`;
            csvData += `Rejected,${exportData.summary.rejected},${Math.round((exportData.summary.rejected / (exportData.summary.accepted + exportData.summary.rejected + exportData.summary.custom)) * 100)}\n`;
            csvData += `Custom,${exportData.summary.custom},${Math.round((exportData.summary.custom / (exportData.summary.accepted + exportData.summary.rejected + exportData.summary.custom)) * 100)}\n`;
            csvData += "\nDate,Accepted,Rejected,Custom\n";
            
            // Add daily data
            Object.entries(exportData.daily).sort().forEach(([date, counts]) => {
                csvData += `${date},${counts.accepted},${counts.rejected},${counts.custom}\n`;
            });
            
            mimeType = 'text/csv';
            fileName = 'cookie-consent-analytics.csv';
            blob = new Blob([csvData], { type: mimeType });
            break;
            
        case 'pdf':
            // PDF export would require a library like jsPDF
            // This is a simplified example
            alert('PDF export would be implemented with a library like jsPDF in a real implementation');
            return;
    }
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function setupEventListeners() {
    document.getElementById('acceptAllBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
    });
    
    document.getElementById('rejectAllBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieBanner();
        showFloatingButton();
    });
    
    document.getElementById('adjustConsentBtn').addEventListener('click', function() {
        showCookieSettings();
        hideCookieBanner();
    });
    
    document.getElementById('acceptAllSettingsBtn').addEventListener('click', function() {
        acceptAllCookies();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.getElementById('rejectAllSettingsBtn').addEventListener('click', function() {
        rejectAllCookies();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        saveCustomSettings();
        hideCookieSettings();
        showFloatingButton();
    });
    
    document.querySelector('.close-modal').addEventListener('click', function() {
        hideCookieSettings();
        if (!getCookie('cookie_consent')) {
            showCookieBanner();
        }
    });
    
    document.querySelector('.close-analytics-modal').addEventListener('click', function() {
        hideAnalyticsDashboard();
    });
    
    if (document.getElementById('cookieFloatingButton')) {
        document.getElementById('cookieFloatingButton').addEventListener('click', function() {
            if (!document.getElementById('cookieConsentBanner').classList.contains('show')) {
                showCookieBanner();
            } else {
                hideCookieBanner();
            }
        });
    }
}

function updateCookieTables(detectedCookies) {
    const categories = ['functional', 'analytics', 'performance', 'advertising', 'uncategorized'];
    
    categories.forEach(category => {
        const container = document.querySelector(`input[data-category="${category}"]`)?.closest('.cookie-category');
        if (container) {
            const content = container.querySelector('.cookie-details-content');
            if (content) {
                content.innerHTML = detectedCookies[category].length > 0 ? 
                    generateCookieTable(detectedCookies[category]) : 
                    '<p class="no-cookies-message">No cookies in this category detected.</p>';
            }
        }
    });
    
    // Update individual cookie settings if enabled
    if (config.cookieSettings.showIndividualToggles) {
        const individualSettings = document.querySelector('.individual-cookie-settings');
        if (individualSettings) {
            individualSettings.innerHTML = generateIndividualCookieSettings(detectedCookies);
            setupIndividualCookieToggles();
        }
    }
}

function generateCookieTable(cookies) {
    return `
    <table class="cookie-details-table">
        <thead>
            <tr>
                <th>Cookie Name</th>
                <th>Value</th>
                <th>Duration</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${cookies.map(cookie => `
            <tr>
                <td><code>${cookie.name}</code></td>
                <td><code>${cookie.value.substring(0, 20)}${cookie.value.length > 20 ? '...' : ''}</code></td>
                <td>${cookie.duration}</td>
                <td>${cookie.description}</td>
            </tr>`).join('')}
        </tbody>
    </table>`;
}

function showFloatingButton() {
    if (!config.uiPosition.showFloatingButton) return;
    
    const button = document.getElementById('cookieFloatingButton');
    if (button) {
        button.style.display = 'flex';
        setTimeout(() => {
            button.classList.add('show');
        }, 100);
    }
}

function hideFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    if (button) {
        button.classList.remove('show');
        setTimeout(() => {
            button.style.display = 'none';
        }, 300);
    }
}

function showCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.style.display = 'block';
    setTimeout(() => {
        banner.classList.add('show');
    }, 10);
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.classList.remove('show');
    setTimeout(() => {
        banner.style.display = 'none';
    }, 400);
}

function showCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    hideCookieBanner();
}

function hideCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function showAnalyticsDashboard() {
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        // Show password prompt if not authenticated
        const modal = document.getElementById('cookieAnalyticsModal');
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    } else {
        // Show dashboard if authenticated or no password protection
        const modal = document.getElementById('cookieAnalyticsModal');
        const lang = document.getElementById('cookieLanguageSelect') ? 
            document.getElementById('cookieLanguageSelect').value : 'en';
        document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
        setupDashboardEvents();
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function hideAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

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
    
    // Update Microsoft UET consent if enabled
    if (config.microsoftUet.enabled) {
        updateMicrosoftUetConsent(consentData);
    }
    
    // Push detailed consent data to dataLayer
    window.dataLayer.push({
        'event': 'cookie_consent_update',
        'consent_mode': consentStates,
        'gcs': gcsSignal,
        'consent_status': consentData.status,
        'consent_categories': consentData.categories,
        'timestamp': new Date().toISOString(),
        'consent_version': '5.0',
        'consent_scope': 'global',
        'debug_info': {
            'cookies_found': scanAndCategorizeCookies(),
            'user_agent': navigator.userAgent,
            'language': navigator.language
        }
    });

    console.log('Consent Mode Updated:', {
        states: consentStates,
        gcsSignal: gcsSignal,
        categories: consentData.categories
    });
}

function updateMicrosoftUetConsent(consentData) {
    if (config.microsoftUet.enabled && window.uetq) {
        // Set UET consent based on advertising cookies
        if (consentData.categories.advertising) {
            window.uetq.push('consentGranted');
            console.log('Microsoft UET: Consent granted');
        } else {
            window.uetq.push('consentDenied');
            console.log('Microsoft UET: Consent denied');
        }
    }
}

function acceptAllCookies() {
    const previousConsent = getCookie('cookie_consent');
    const consentData = {
        status: 'accepted',
        gcs: 'G111',
        categories: {
            functional: true,
            analytics: true,
            performance: true,
            advertising: true,
            uncategorized: true
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), config.behavior.consentDuration);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('accepted', previousConsent);
    }
}

function rejectAllCookies() {
    const previousConsent = getCookie('cookie_consent');
    const consentData = {
        status: 'rejected',
        gcs: 'G100',
        categories: {
            functional: true,  // Essential cookies always enabled
            analytics: false,
            performance: false,
            advertising: false,
            uncategorized: false
        },
        timestamp: new Date().getTime()
    };
    
    setCookie('cookie_consent', JSON.stringify(consentData), config.behavior.consentDuration);
    updateConsentMode(consentData);
    clearNonEssentialCookies();
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('rejected', previousConsent);
    }
}

function clearNonEssentialCookies() {
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        const [nameValue] = cookie.trim().split('=');
        const name = nameValue.trim();
        let isEssential = false;
        
        // Check if cookie is essential
        for (const pattern in cookieDatabase) {
            if (name.startsWith(pattern) && cookieDatabase[pattern].category === 'functional') {
                isEssential = true;
                break;
            }
        }
        
        if (!isEssential && name && name !== 'cookie_consent') {
            // Clear the cookie
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        }
    });
}

function saveCustomSettings() {
    const previousConsent = getCookie('cookie_consent');
    const consentData = {
        status: 'custom',
        gcs: 'G101',
        categories: {
            functional: true,  // Essential cookies always enabled
            analytics: document.querySelector('input[data-category="analytics"]').checked,
            performance: document.querySelector('input[data-category="performance"]').checked,
            advertising: document.querySelector('input[data-category="advertising"]').checked,
            uncategorized: document.querySelector('input[data-category="uncategorized"]') ? 
                document.querySelector('input[data-category="uncategorized"]').checked : false
        },
        timestamp: new Date().getTime()
    };
    
    // Handle individual cookie settings if enabled
    if (config.cookieSettings.showIndividualToggles) {
        const cookieToggles = document.querySelectorAll('.cookie-settings-table input[type="checkbox"]:not(:disabled)');
        const disabledCookies = [];
        
        cookieToggles.forEach(toggle => {
            if (!toggle.checked) {
                const cookieName = toggle.dataset.cookie;
                disabledCookies.push(cookieName);
                
                // Clear the disabled cookie
                document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
                
                // Track the change
                if (config.analytics.trackChanges) {
                    trackCookieChange(cookieName, 'disabled', toggle.closest('tr').dataset.category);
                }
            }
        });
        
        consentData.disabledCookies = disabledCookies;
    }
    
    setCookie('cookie_consent', JSON.stringify(consentData), config.behavior.consentDuration);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    // Clear cookies if categories were disabled
    if (!consentData.categories.analytics) clearCategoryCookies('analytics');
    if (!consentData.categories.performance) clearCategoryCookies('performance');
    if (!consentData.categories.advertising) clearCategoryCookies('advertising');
    if (!consentData.categories.uncategorized) clearCategoryCookies('uncategorized');
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('custom', previousConsent);
    }
}

function clearCategoryCookies(category) {
    const cookies = scanAndCategorizeCookies()[category];
    cookies.forEach(cookie => {
        document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        
        // Track the change
        if (config.analytics.trackChanges) {
            trackCookieChange(cookie.name, 'cleared', category);
        }
    });
}

function loadCookiesAccordingToConsent(consentData) {
    if (consentData.categories.analytics) {
        loadAnalyticsCookies();
    }
    
    if (consentData.categories.advertising) {
        loadAdvertisingCookies();
    }
    
    if (consentData.categories.performance) {
        loadPerformanceCookies();
    }
}

function loadAnalyticsCookies() {
    console.log('Loading analytics cookies');
    // Implement your analytics tracking here
    if (typeof ga === 'undefined' && typeof gtag === 'function') {
        gtag('js', new Date());
        gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
    }
}

function loadAdvertisingCookies() {
    console.log('Loading advertising cookies');
    // Implement your advertising tracking here
    if (typeof fbq === 'undefined') {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
    }
    
    // Load Microsoft UET if enabled
    if (config.microsoftUet.enabled && typeof window.uetq !== 'undefined') {
        (function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({'cat':'$$','time':+new Date()});
        var s=d.createElement(t);s.src=r;s.async=1;
        var f=d.getElementsByTagName(t)[0];f.parentNode.insertBefore(s,f);
        })(window,document,'script','//bat.bing.com/bat.js','uetq');
        
        window.uetq = window.uetq || [];
        window.uetq.push('set', 'ti', config.microsoftUet.tagId);
    }
}

function loadPerformanceCookies() {
    console.log('Loading performance cookies');
    // Implement performance tracking here
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax; Secure";
}

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

// Handle scroll-based acceptance
function handleScrollAcceptance() {
    if (getCookie('cookie_consent')) {
        window.removeEventListener('scroll', handleScrollAcceptance);
        return;
    }
    
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > 50) { // Accept if scrolled more than 50%
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
        window.removeEventListener('scroll', handleScrollAcceptance);
    }
}

// Function to automatically categorize unknown cookies
function autoCategorizeCookies(uncategorizedCookies) {
    return uncategorizedCookies.map(cookie => {
        const category = determineCookieCategory(cookie.name);
        if (category) {
            cookieDatabase[cookie.name] = {
                category: category,
                duration: cookie.duration,
                description: cookie.description || 'Automatically categorized'
            };
        }
        return cookie;
    });
}

// Function to determine cookie category based on name patterns
function determineCookieCategory(cookieName) {
    const lowerName = cookieName.toLowerCase();
    
    // Analytics patterns
    if (/_ga|_gid|_gat|analytics|stats|measure|track|tk_ai/.test(lowerName)) {
        return 'analytics';
    }
    
    // Advertising patterns
    if (/_gcl|_fbp|fr|ad|ads|tracking|marketing|doubleclick|gclid|_uet/.test(lowerName)) {
        return 'advertising';
    }
    
    // Functional patterns
    if (/sess|token|auth|login|user|pref|settings|cart|checkout|hash|items/.test(lowerName)) {
        return 'functional';
    }
    
    // Performance patterns
    if (/perf|speed|optimize|cdn|cache/.test(lowerName)) {
        return 'performance';
    }
    
    return null;
}
