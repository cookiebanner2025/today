/**
 * Advanced Cookie Consent Banner with Consent Mode v2 and Microsoft UET Support
 * 
 * Features:
 * - Automatic translation based on user's country
 * - Domain restriction controls
 * - Geo-targeting (country/city/state level controls)
 * - Complete EU language support
 * - Built-in analytics dashboard with password protection
 * - Consent Mode v2 and Microsoft UET support
 * - Premium UI with enhanced UX
 * - Advanced positioning controls
 * - Complete styling customization
 * - Animation controls
 * - Detailed consent history
 * - Delayed banner display
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['dev-rpractice.pantheonsite.io', 'yourdomain.com'],
    
    // Banner display settings
    bannerDisplay: {
        position: 'right', // 'left', 'right', or 'center'
        width: 440, // Base width in pixels
        height: 'auto', // 'auto' or specific height in pixels
        delay: 0, // Delay in seconds before showing banner (0 for immediate)
        animationDuration: 0.4, // Animation duration in seconds
        animationEasing: 'cubic-bezier(0.25, 0.8, 0.25, 1)', // CSS easing function
        hoverIntensity: 'medium', // 'low', 'medium', 'high', or 'off'
        borderRadius: 12, // Border radius in pixels
        borderWidth: 0, // Border width in pixels
        borderColor: '#e0e0e0', // Border color
        shadow: '0 8px 32px rgba(0, 0, 0, 0.12)', // Box shadow
        background: '#ffffff', // Background color
        textColor: '#2c3e50', // Text color
        linkColor: '#3498db', // Link color
        logoUrl: 'auto', // 'auto' to detect, URL, or false to hide
    },
    
    // Button settings
    buttonSettings: {
        borderRadius: 8, // Border radius in pixels
        borderWidth: 1, // Border width in pixels
        acceptButton: {
            bgColor: '#2ecc71', // Background color
            hoverBgColor: '#27ae60', // Hover background color
            textColor: '#ffffff', // Text color
            shadow: '0 2px 12px rgba(46, 204, 113, 0.3)', // Box shadow
            hoverShadow: '0 4px 16px rgba(46, 204, 113, 0.4)', // Hover shadow
        },
        rejectButton: {
            bgColor: '#ffffff', // Background color
            hoverBgColor: '#ffeeed', // Hover background color
            textColor: '#e74c3c', // Text color
            borderColor: '#e74c3c', // Border color
            shadow: 'none', // Box shadow
            hoverShadow: '0 2px 8px rgba(231, 76, 60, 0.15)', // Hover shadow
        },
        customizeButton: {
            bgColor: '#f8f9fa', // Background color
            hoverBgColor: '#f0f2f5', // Hover background color
            textColor: '#333333', // Text color
            borderColor: '#e0e0e0', // Border color
            shadow: 'none', // Box shadow
            hoverShadow: '0 2px 8px rgba(0, 0, 0, 0.08)', // Hover shadow
        },
        saveButton: {
            bgColor: '#3498db', // Background color
            hoverBgColor: '#2980b9', // Hover background color
            textColor: '#ffffff', // Text color
            shadow: '0 2px 8px rgba(52, 152, 219, 0.3)', // Box shadow
            hoverShadow: '0 5px 10px rgba(0,0,0,0.15)', // Hover shadow
            gradient: 'linear-gradient(to right, #3498db, #2980b9)', // Gradient
        }
    },
    
    // Floating buttons settings
    floatingButtons: {
        consentButton: {
            enabled: true, // Enable/disable floating consent button
            position: 'right', // 'left' or 'right'
            color: '#2ecc71', // Button color
            hoverColor: '#27ae60', // Hover color
            size: 60, // Size in pixels
        },
        adminButton: {
            enabled: true, // Enable/disable admin dashboard button
            position: 'right', // 'left' or 'right'
            color: '#3498db', // Button color
            hoverColor: '#2980b9', // Hover color
            size: 60, // Size in pixels
            offset: 70, // Vertical offset from consent button
        }
    },
    
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
        trackConsentChanges: true, // Track detailed consent changes
    },
    
    // Banner behavior
    behavior: {
        autoShow: true, // Automatically show banner on page load
        rememberLanguage: true, // Remember user's language preference
        acceptOnScroll: false, // Accept cookies when user scrolls
        acceptOnContinue: true, // Implicit consent when continuing to browse
    },

    // UI Theme (can be 'default' or 'classic')
    uiTheme: 'default',
    
    // Microsoft UET configuration
    microsoftUET: {
        enabled: true, // Enable Microsoft UET support
        autoDetect: true, // Automatically detect UET tag
        tagId: '', // Optional: Specific UET tag ID to use
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

// Initialize Microsoft UET if enabled
if (config.microsoftUET.enabled && config.microsoftUET.autoDetect && typeof window.uetq === 'function') {
    window.uetq = window.uetq || [];
    window.uetq.push('setConsent', false); // Default to no consent
}

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
    '_uetsid': { category: 'advertising', duration: 'Session', description: 'Microsoft Advertising session ID' },
    '_uetvid': { category: 'advertising', duration: '1 year', description: 'Microsoft Advertising visitor ID' },
    
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

// Complete EU language translations (same as before, but included for completeness)
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
        timestamp: "Timestamp",
        previousState: "Previous State",
        newState: "New State",
        source: "Source",
        browser: "Browser",
        device: "Device",
        location: "Location"
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
        timestamp: "Horodatage",
        previousState: "État précédent",
        newState: "Nouvel état",
        source: "Source",
        browser: "Navigateur",
        device: "Appareil",
        location: "Emplacement"
    },
    // ... (keep all other language translations the same as before)
    // Note: For brevity, I've kept only English and French translations here
    // In the actual implementation, you should include all the translations from your original code
};

// Country to language mapping for auto-translation
const countryLanguageMap = {
    // ... (keep all country to language mappings the same as before)
    // Note: Include all the country mappings from your original code
};

// Analytics data storage with consent change history
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {},
    weekly: {},
    monthly: {},
    changeHistory: [] // Track detailed consent changes
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

// Save analytics data to localStorage
function saveAnalyticsData() {
    localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
}

// Track consent change for history
function trackConsentChange(previousState, newState, source = 'manual') {
    if (!config.analytics.trackConsentChanges) return;
    
    const changeEntry = {
        timestamp: new Date().toISOString(),
        previousState: previousState,
        newState: newState,
        source: source,
        browser: navigator.userAgent,
        device: getDeviceType(),
        location: window.location.href,
        language: navigator.language,
        screenResolution: `${window.screen.width}x${window.screen.height}`
    };
    
    consentAnalytics.changeHistory.push(changeEntry);
    
    // Keep only the last 100 changes if history gets too large
    if (consentAnalytics.changeHistory.length > 100) {
        consentAnalytics.changeHistory = consentAnalytics.changeHistory.slice(-100);
    }
    
    saveAnalyticsData();
}

// Get device type
function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "Tablet";
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "Mobile";
    }
    return "Desktop";
}

// Update analytics data
function updateConsentStats(status) {
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

// Generate analytics dashboard HTML with change history
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
    const changeHistoryTable = config.analytics.trackConsentChanges ? `
    <div class="change-history-section">
        <h4>${lang.changeHistory}</h4>
        <div class="change-history-table-container">
            <table class="change-history-table">
                <thead>
                    <tr>
                        <th>${lang.timestamp}</th>
                        <th>${lang.previousState}</th>
                        <th>${lang.newState}</th>
                        <th>${lang.source}</th>
                        <th>${lang.browser}</th>
                        <th>${lang.device}</th>
                        <th>${lang.location}</th>
                    </tr>
                </thead>
                <tbody>
                    ${consentAnalytics.changeHistory.slice().reverse().map(change => `
                    <tr>
                        <td>${new Date(change.timestamp).toLocaleString()}</td>
                        <td>${change.previousState || 'N/A'}</td>
                        <td>${change.newState || 'N/A'}</td>
                        <td>${change.source}</td>
                        <td>${change.browser ? change.browser.substring(0, 20) + (change.browser.length > 20 ? '...' : '') : 'N/A'}</td>
                        <td>${change.device || 'N/A'}</td>
                        <td>${change.location ? change.location.substring(0, 20) + (change.location.length > 20 ? '...' : '') : 'N/A'}</td>
                    </tr>
                    `).join('')}
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
        
        ${changeHistoryTable}
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
    
    // Try to detect logo automatically if set to 'auto'
    let logoHtml = '';
    if (config.bannerDisplay.logoUrl === 'auto') {
        // Try to find favicon or logo in the page
        const favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
        const logo = document.querySelector('img.logo, .logo img, header img, .header img');
        
        if (logo) {
            logoHtml = `<img src="${logo.src}" alt="Logo" class="cookie-consent-logo">`;
        } else if (favicon) {
            logoHtml = `<img src="${favicon.href}" alt="Logo" class="cookie-consent-logo">`;
        }
    } else if (config.bannerDisplay.logoUrl) {
        logoHtml = `<img src="${config.bannerDisplay.logoUrl}" alt="Logo" class="cookie-consent-logo">`;
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
    const adminButton = config.analytics.enabled && config.analytics.showDashboard && config.floatingButtons.adminButton.enabled ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}" style="
        ${config.floatingButtons.adminButton.position === 'left' ? 'left: 30px;' : 'right: 30px;'}
        bottom: ${config.floatingButtons.adminButton.offset}px;
        width: ${config.floatingButtons.adminButton.size}px;
        height: ${config.floatingButtons.adminButton.size}px;
        background-color: ${config.floatingButtons.adminButton.color};
        border: 2px solid white;
    ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160zM95.4 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.4 399.4C48.6 355.1 17.3 304 2.5 268.3C-.8 260.4-.8 251.6 2.5 243.7C17.3 207.1 48.6 156 95.4 112.6V112.6zM288 80C218.6 80 160 138.6 160 208C160 277.4 218.6 336 288 336C357.4 336 416 277.4 416 208C416 138.6 357.4 80 288 80zM44.96 256C56.53 286.1 83.51 329.2 124.4 368C165.3 406.8 219.1 432 288 432C356.9 432 410.7 406.8 451.6 368C492.5 329.2 519.5 286.1 531 256C519.5 225.9 492.5 182.8 451.6 144C410.7 105.2 356.9 80 288 80C219.1 80 165.3 105.2 124.4 144C83.51 182.8 56.53 225.9 44.96 256V256z"/>
        </svg>
    </div>` : '';
    
    // Calculate banner position styles
    let bannerPositionStyle = '';
    if (config.bannerDisplay.position === 'center') {
        bannerPositionStyle = `
            left: 50%;
            transform: translateX(-50%) translateY(20px);
        `;
    } else {
        bannerPositionStyle = `
            ${config.bannerDisplay.position}: 20px;
            transform: translateY(20px);
        `;
    }
    
    // Generate hover intensity styles
    let hoverIntensity = '0.3s ease';
    switch (config.bannerDisplay.hoverIntensity) {
        case 'low':
            hoverIntensity = '0.1s ease';
            break;
        case 'medium':
            hoverIntensity = '0.3s ease';
            break;
        case 'high':
            hoverIntensity = '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            break;
        case 'off':
            hoverIntensity = 'none';
            break;
    }
    
    const html = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner" style="
        ${bannerPositionStyle}
        width: ${config.bannerDisplay.width}px;
        ${config.bannerDisplay.height !== 'auto' ? `height: ${config.bannerDisplay.height}px;` : ''}
        border-radius: ${config.bannerDisplay.borderRadius}px;
        ${config.bannerDisplay.borderWidth > 0 ? `border: ${config.bannerDisplay.borderWidth}px solid ${config.bannerDisplay.borderColor};` : ''}
        box-shadow: ${config.bannerDisplay.shadow};
        background: ${config.bannerDisplay.background};
        transition: all ${config.bannerDisplay.animationDuration}s ${config.bannerDisplay.animationEasing};
    ">
        <div class="cookie-consent-container">
            ${languageSelector}
            <div class="cookie-consent-content">
                ${logoHtml}
                <h2 style="color: ${config.bannerDisplay.textColor}">${lang.title}</h2>
                <p style="color: ${config.bannerDisplay.textColor}">${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link" style="color: ${config.bannerDisplay.linkColor}">${lang.privacy}</a>
            </div>
            <div class="cookie-consent-buttons">
                <button id="acceptAllBtn" class="cookie-btn accept-btn" style="
                    border-radius: ${config.buttonSettings.borderRadius}px;
                    border: ${config.buttonSettings.borderWidth}px solid ${config.buttonSettings.acceptButton.bgColor};
                    background-color: ${config.buttonSettings.acceptButton.bgColor};
                    color: ${config.buttonSettings.acceptButton.textColor};
                    box-shadow: ${config.buttonSettings.acceptButton.shadow};
                    transition: ${hoverIntensity};
                ">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn" style="
                    border-radius: ${config.buttonSettings.borderRadius}px;
                    border: ${config.buttonSettings.borderWidth}px solid ${config.buttonSettings.customizeButton.borderColor};
                    background-color: ${config.buttonSettings.customizeButton.bgColor};
                    color: ${config.buttonSettings.customizeButton.textColor};
                    box-shadow: ${config.buttonSettings.customizeButton.shadow};
                    transition: ${hoverIntensity};
                ">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn" style="
                    border-radius: ${config.buttonSettings.borderRadius}px;
                    border: ${config.buttonSettings.borderWidth}px solid ${config.buttonSettings.rejectButton.borderColor};
                    background-color: ${config.buttonSettings.rejectButton.bgColor};
                    color: ${config.buttonSettings.rejectButton.textColor};
                    box-shadow: ${config.buttonSettings.rejectButton.shadow};
                    transition: ${hoverIntensity};
                ">${lang.reject}</button>
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
                <button id="rejectAllSettingsBtn" class="cookie-btn reject-btn" style="
                    border-radius: ${config.buttonSettings.borderRadius}px;
                    border: ${config.buttonSettings.borderWidth}px solid ${config.buttonSettings.rejectButton.borderColor};
                    background-color: ${config.buttonSettings.rejectButton.bgColor};
                    color: ${config.buttonSettings.rejectButton.textColor};
                    box-shadow: ${config.buttonSettings.rejectButton.shadow};
                    transition: ${hoverIntensity};
                ">${lang.reject}</button>
                <button id="saveSettingsBtn" class="cookie-btn save-btn" style="
                    border-radius: ${config.buttonSettings.borderRadius}px;
                    border: ${config.buttonSettings.borderWidth}px solid ${config.buttonSettings.saveButton.bgColor};
                    background: ${config.buttonSettings.saveButton.gradient};
                    background-color: ${config.buttonSettings.saveButton.bgColor};
                    color: ${config.buttonSettings.saveButton.textColor};
                    box-shadow: ${config.buttonSettings.saveButton.shadow};
                    transition: ${hoverIntensity};
                ">${lang.save}</button>
                <button id="acceptAllSettingsBtn" class="cookie-btn accept-btn" style="
                    border-radius: ${config.buttonSettings.borderRadius}px;
                    border: ${config.buttonSettings.borderWidth}px solid ${config.buttonSettings.acceptButton.bgColor};
                    background-color: ${config.buttonSettings.acceptButton.bgColor};
                    color: ${config.buttonSettings.acceptButton.textColor};
                    box-shadow: ${config.buttonSettings.acceptButton.shadow};
                    transition: ${hoverIntensity};
                ">${lang.accept}</button>
            </div>
        </div>
    </div>

    <!-- Floating Settings Button -->
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}" style="
        ${config.floatingButtons.consentButton.position === 'left' ? 'left: 30px;' : 'right: 30px;'}
        width: ${config.floatingButtons.consentButton.size}px;
        height: ${config.floatingButtons.consentButton.size}px;
        background-color: ${config.floatingButtons.consentButton.color};
        border: 2px solid white;
        transition: all ${hoverIntensity};
    ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M257.5 27.6c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9-64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.7-5.9-9.9-11.6-9.9c-51.5 0-101.5-14.7-144.9-42.3l-61.2-42.4c-10.1-7-21.8-11.1-33.9-11.9c-12.1-.9-24.1 1.6-34.9 7.2l-61.2 35.1c-6.4 3.7-14.6 1.9-19.3-4.1s-4.7-13.7 1.1-18.4l61.2-42.4c43.4-30.1 97.1-46.4 151.8-46.4c5.7 0 10.7-4.1 11.6-9.8zM133.4 303.6c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9s46.9 21 46.9 46.9s-21 46.9-46.9 46.9zm116.1-90.3c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48zm92.3 99.7c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48z"/>
        </svg>
    </div>
    
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
    /* Main Banner Styles */
    .cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        z-index: 9999;
        padding: 24px;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        display: none;
        opacity: 0;
        max-width: 90%;
    }

    .cookie-consent-banner.show {
        opacity: 1;
        display: block;
        transform: ${config.bannerDisplay.position === 'center' ? 'translateX(-50%) translateY(0)' : 'translateY(0)'};
    }

    .cookie-consent-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .cookie-consent-content {
        position: relative;
    }

    .cookie-consent-logo {
        height: 40px;
        margin-bottom: 16px;
    }

    .cookie-consent-content h2 {
        margin: 0 0 16px 0;
        font-size: 18px;
        line-height: 1.4;
        letter-spacing: -0.2px;
    }

    .cookie-consent-content p {
        margin: 0 0 24px 0;
        font-size: 14px;
        line-height: 1.5;
    }

    .privacy-policy-link {
        text-decoration: none;
        font-size: 13px;
        font-weight: 500;
        display: inline-block;
        margin-bottom: 24px;
        transition: color 0.2s ease;
    }

    .privacy-policy-link:hover {
        text-decoration: underline;
    }

    .cookie-consent-buttons {
        display: flex;
        gap: 12px;
        margin-top: 8px;
    }

    .cookie-btn {
        padding: 12px 20px;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        text-align: center;
        flex: 1;
        letter-spacing: 0.2px;
    }

    .cookie-btn:hover {
        transform: translateY(-2px);
    }

    .accept-btn:hover {
        background-color: ${config.buttonSettings.acceptButton.hoverBgColor} !important;
        box-shadow: ${config.buttonSettings.acceptButton.hoverShadow} !important;
    }

    .reject-btn:hover {
        background-color: ${config.buttonSettings.rejectButton.hoverBgColor} !important;
        box-shadow: ${config.buttonSettings.rejectButton.hoverShadow} !important;
    }

    .adjust-btn:hover {
        background-color: ${config.buttonSettings.customizeButton.hoverBgColor} !important;
        box-shadow: ${config.buttonSettings.customizeButton.hoverShadow} !important;
    }

    .save-btn:hover {
        background: ${config.buttonSettings.saveButton.hoverBgColor} !important;
        box-shadow: ${config.buttonSettings.saveButton.hoverShadow} !important;
    }

    /* Language Selector Styles */
    .language-selector {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    .language-selector select {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
        background-color: #f8f9fa;
        font-size: 13px;
        color: #333;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .language-selector select:hover {
        border-color: ${config.bannerDisplay.linkColor};
        background-color: #fff;
    }

    .language-selector select:focus {
        outline: none;
        border-color: ${config.bannerDisplay.linkColor};
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
        opacity: 0;
        transition: opacity ${config.bannerDisplay.animationDuration}s ${config.bannerDisplay.animationEasing};
    }

    .cookie-settings-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-settings-content {
        background-color: ${config.bannerDisplay.background};
        margin: 0 auto;
        width: 845px;
        max-height: 470px;
        border-radius: ${config.bannerDisplay.borderRadius}px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform ${config.bannerDisplay.animationDuration}s ${config.bannerDisplay.animationEasing};
        display: flex;
        flex-direction: column;
    }

    .cookie-settings-modal.show .cookie-settings-content {
        transform: translateY(0);
    }

    .cookie-settings-header {
        padding: 20px 30px;
        border-bottom: 1px solid #ecf0f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f9fa;
    }

    .cookie-settings-header h2 {
        margin: 0;
        color: ${config.bannerDisplay.textColor};
        font-size: 1.5rem;
        font-weight: 600;
    }

    .close-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${config.bannerDisplay.textColor};
        background: none;
        border: none;
        padding: 0 10px;
        transition: color 0.2s ease;
    }

    .close-modal:hover {
        color: ${config.buttonSettings.rejectButton.borderColor};
    }

    .cookie-settings-body {
        padding: 25px 30px;
        background-color: #fefefe;
        overflow-y: auto;
        flex: 1;
    }

    .cookie-category {
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 1px solid #ecf0f1;
        transition: all ${hoverIntensity};
    }

    .cookie-category:hover {
        background-color: #f8f9fa;
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
        color: ${config.bannerDisplay.textColor};
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
        background-color: #bdc3c7;
        transition: .4s;
        border-radius: 34px;
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
        background-color: ${config.buttonSettings.acceptButton.bgColor};
    }

    input:checked + .toggle-slider:before {
        transform: translateX(24px);
    }

    input:disabled + .toggle-slider {
        background-color: #95a5a6;
        cursor: not-allowed;
    }

    /* Cookie Details */
    .cookie-details-container {
        margin-top: 15px;
        border: 1px solid #e0e0e0;
        border-radius: ${config.bannerDisplay.borderRadius}px;
        overflow: hidden;
        transition: all ${hoverIntensity};
    }

    .cookie-details-container:hover {
        box-shadow: 0 3px 12px rgba(0,0,0,0.1);
        border-color: ${config.buttonSettings.acceptButton.bgColor};
    }

    .cookie-details-header {
        background-color: #f5f5f5;
        padding: 12px 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .cookie-details-header:hover {
        background-color: #eeeeee;
    }

    .cookie-details-content {
        padding: 18px;
        background-color: #fafafa;
        border-top: 1px solid #e0e0e0;
        display: none;
        animation: fadeIn ${config.bannerDisplay.animationDuration}s ${config.bannerDisplay.animationEasing};
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
        background-color: #f0f0f0;
        font-weight: 600;
        border-bottom: 2px solid #e0e0e0;
        color: ${config.bannerDisplay.textColor};
    }

    .cookie-details-table td {
        padding: 10px 12px;
        border-bottom: 1px solid #e0e0e0;
        color: ${config.bannerDisplay.textColor};
    }

    .cookie-details-table tr:last-child td {
        border-bottom: none;
    }

    .cookie-details-table tr:hover {
        background-color: #f5f5f5;
    }

    .cookie-details-table code {
        background-color: #f0f0f0;
        padding: 2px 5px;
        border-radius: 3px;
        font-family: monospace;
        color: ${config.bannerDisplay.textColor};
    }

    .no-cookies-message {
        padding: 15px;
        text-align: center;
        color: #666;
        font-style: italic;
    }

    /* Floating Settings Button */
    .cookie-settings-button {
        position: fixed;
        bottom: 30px;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 9998;
        opacity: 0;
        transform: translateY(20px);
        border-radius: 50%;
    }

    .cookie-settings-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-settings-button:hover {
        background-color: ${config.floatingButtons.consentButton.hoverColor} !important;
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .cookie-settings-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform ${hoverIntensity};
    }

    .cookie-settings-button:hover svg {
        transform: rotate(15deg);
    }

    /* Admin Button */
    .cookie-admin-button {
        position: fixed;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 9997;
        opacity: 0;
        transform: translateY(20px);
        border-radius: 50%;
    }

    .cookie-admin-button.show {
        opacity: 1;
        transform: translateY(0);
    }

    .cookie-admin-button:hover {
        background-color: ${config.floatingButtons.adminButton.hoverColor} !important;
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .cookie-admin-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform ${hoverIntensity};
    }

    .cookie-admin-button:hover svg {
        transform: rotate(15deg);
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
        opacity: 0;
        transition: opacity ${config.bannerDisplay.animationDuration}s ${config.bannerDisplay.animationEasing};
    }

    .cookie-analytics-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .cookie-analytics-content {
        background-color: ${config.bannerDisplay.background};
        margin: 0 auto;
        width: 900px;
        max-height: 600px;
        border-radius: ${config.bannerDisplay.borderRadius}px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform ${config.bannerDisplay.animationDuration}s ${config.bannerDisplay.animationEasing};
        display: flex;
        flex-direction: column;
    }

    .cookie-analytics-modal.show .cookie-analytics-content {
        transform: translateY(0);
    }

    .cookie-analytics-header {
        padding: 20px 30px;
        border-bottom: 1px solid #ecf0f1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f8f9fa;
    }

    .cookie-analytics-header h2 {
        margin: 0;
        color: ${config.bannerDisplay.textColor};
        font-size: 1.5rem;
        font-weight: 600;
    }

    .close-analytics-modal {
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        color: ${config.bannerDisplay.textColor;



    .cookie-analytics-body {
        padding: 25px 30px;
        background-color: #fefefe;
        overflow-y: auto;
        flex: 1;
    }

    /* Password Prompt */
    .password-prompt {
        text-align: center;
        padding: 30px;
    }

    .password-prompt h3 {
        color: ${config.bannerDisplay.textColor};
        margin-bottom: 20px;
    }

    .password-prompt input {
        padding: 12px 15px;
        border-radius: ${config.buttonSettings.borderRadius}px;
        border: 1px solid #e0e0e0;
        width: 100%;
        max-width: 300px;
        margin-bottom: 15px;
        font-size: 14px;
    }

    .password-prompt button {
        padding: 12px 25px;
        background-color: ${config.buttonSettings.acceptButton.bgColor};
        color: white;
        border: none;
        border-radius: ${config.buttonSettings.borderRadius}px;
        cursor: pointer;
        font-weight: 600;
        transition: all ${hoverIntensity};
    }

    .password-prompt button:hover {
        background-color: ${config.buttonSettings.acceptButton.hoverBgColor};
    }

    .error-message {
        color: ${config.buttonSettings.rejectButton.borderColor};
        margin-top: 10px;
        font-size: 14px;
    }

    /* Stats Dashboard */
    .analytics-dashboard {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .analytics-dashboard h3 {
        color: ${config.bannerDisplay.textColor};
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
        background-color: #f8f9fa;
        border-radius: ${config.bannerDisplay.borderRadius}px;
        padding: 15px;
        text-align: center;
        transition: all ${hoverIntensity};
    }

    .stat-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }

    .stat-card.accepted {
        border-top: 4px solid ${config.buttonSettings.acceptButton.bgColor};
    }

    .stat-card.rejected {
        border-top: 4px solid ${config.buttonSettings.rejectButton.borderColor};
    }

    .stat-card.custom {
        border-top: 4px solid ${config.buttonSettings.saveButton.bgColor};
    }

    .stat-card.total {
        border-top: 4px solid #9b59b6;
    }

    .stat-card h4 {
        margin: 0 0 10px 0;
        font-size: 1rem;
        color: ${config.bannerDisplay.textColor};
    }

    .stat-value {
        font-size: 1.8rem;
        font-weight: 700;
        color: ${config.bannerDisplay.textColor};
        margin-bottom: 5px;
    }

    .stat-percentage {
        font-size: 1rem;
        color: ${config.bannerDisplay.textColor};
    }

    .time-based-stats {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .time-stat {
        background-color: #f8f9fa;
        border-radius: ${config.bannerDisplay.borderRadius}px;
        padding: 20px;
    }

    .time-stat h4 {
        margin: 0 0 15px 0;
        font-size: 1.1rem;
        color: ${config.bannerDisplay.textColor};
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
        color: ${config.bannerDisplay.textColor};
        margin-bottom: 5px;
    }

    .stat-bar {
        height: 20px;
        background-color: #ecf0f1;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
    }

    .stat-bar-segment {
        height: 100%;
    }

    .stat-bar-segment.accepted {
        background-color: ${config.buttonSettings.acceptButton.bgColor};
    }

    .stat-bar-segment.rejected {
        background-color: ${config.buttonSettings.rejectButton.borderColor};
    }

    .stat-bar-segment.custom {
        background-color: ${config.buttonSettings.saveButton.bgColor};
    }

    .stat-bar-legend {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        color: ${config.bannerDisplay.textColor};
        margin-top: 5px;
    }

    /* Change History */
    .change-history-section {
        margin-top: 30px;
    }

    .change-history-section h4 {
        color: ${config.bannerDisplay.textColor};
        margin-bottom: 15px;
        font-size: 1.1rem;
    }

    .change-history-table-container {
        max-height: 300px;
        overflow-y: auto;
        border: 1px solid #e0e0e0;
        border-radius: ${config.bannerDisplay.borderRadius}px;
    }

    .change-history-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 13px;
    }

    .change-history-table th {
        position: sticky;
        top: 0;
        background-color: #f5f5f5;
        padding: 10px 12px;
        text-align: left;
        font-weight: 600;
        color: ${config.bannerDisplay.textColor};
        border-bottom: 2px solid #e0e0e0;
    }

    .change-history-table td {
        padding: 10px 12px;
        border-bottom: 1px solid #e0e0e0;
        color: ${config.bannerDisplay.textColor};
    }

    .change-history-table tr:hover {
        background-color: #f9f9f9;
    }

    /* Footer Buttons */
    .cookie-settings-footer {
        padding: 20px 30px;
        background-color: #f8f9fa;
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        border-top: 1px solid #ecf0f1;
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
            ${config.bannerDisplay.position === 'center' ? 
              'left: 50%; transform: translateX(-50%) translateY(20px);' : 
              config.bannerDisplay.position === 'left' ? 'left: 5%;' : 'right: 5%;'}
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
            ${config.bannerDisplay.position === 'center' ? 
              'left: 50%; transform: translateX(-50%) translateY(20px);' : 
              config.bannerDisplay.position === 'left' ? 'left: 15px;' : 'right: 15px;'}
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
            ${config.floatingButtons.consentButton.position === 'left' ? 'left: 15px;' : 'right: 15px;'}
        }
        
        .cookie-admin-button {
            width: 50px;
            height: 50px;
            ${config.floatingButtons.adminButton.position === 'left' ? 
              'left: 15px;' : 'right: 15px;'}
            bottom: ${config.floatingButtons.adminButton.offset - 20}px;
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
        
        .change-history-table {
            font-size: 0.7rem;
        }
    }
    </style>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
}

function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    // Set up delayed banner display if configured
    if (!consentGiven && config.behavior.autoShow) {
        if (config.bannerDisplay.delay > 0) {
            setTimeout(showCookieBanner, config.bannerDisplay.delay * 1000);
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
    if (config.analytics.enabled && config.analytics.showDashboard && config.floatingButtons.adminButton.enabled) {
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

function setupPasswordPromptEvents() {
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', function() {
            const passwordInput = document.getElementById('dashboardPasswordInput');
            const errorMessage = document.getElementById('passwordError');
            const lang = document.getElementById('cookieLanguageSelect') ? 
                document.getElementById('cookieLanguageSelect').value : 'en';
            const translations = window.translations || {};
            const langData = translations[lang] || translations.en || {};
            
            if (passwordInput.value === config.analytics.dashboardPassword) {
                isDashboardAuthenticated = true;
                setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
                
                // Update the dashboard content
                document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
            } else {
                errorMessage.textContent = langData.passwordIncorrect || 'Incorrect password';
            }
        });
    }
}

function setupEventListeners() {
    document.getElementById('acceptAllBtn').addEventListener('click', function() {
        const previousConsent = getCookie('cookie_consent');
        acceptAllCookies();
        hideCookieBanner();
        showFloatingButton();
        
        // Track consent change
        if (previousConsent) {
            trackConsentChange(JSON.parse(previousConsent).status, 'accepted', 'accept-button');
        }
    });
    
    document.getElementById('rejectAllBtn').addEventListener('click', function() {
        const previousConsent = getCookie('cookie_consent');
        rejectAllCookies();
        hideCookieBanner();
        showFloatingButton();
        
        // Track consent change
        if (previousConsent) {
            trackConsentChange(JSON.parse(previousConsent).status, 'rejected', 'reject-button');
        }
    });
    
    document.getElementById('adjustConsentBtn').addEventListener('click', function() {
        showCookieSettings();
        hideCookieBanner();
    });
    
    document.getElementById('acceptAllSettingsBtn').addEventListener('click', function() {
        const previousConsent = getCookie('cookie_consent');
        acceptAllCookies();
        hideCookieSettings();
        showFloatingButton();
        
        // Track consent change
        if (previousConsent) {
            trackConsentChange(JSON.parse(previousConsent).status, 'accepted', 'modal-accept-button');
        }
    });
    
    document.getElementById('rejectAllSettingsBtn').addEventListener('click', function() {
        const previousConsent = getCookie('cookie_consent');
        rejectAllCookies();
        hideCookieSettings();
        showFloatingButton();
        
        // Track consent change
        if (previousConsent) {
            trackConsentChange(JSON.parse(previousConsent).status, 'rejected', 'modal-reject-button');
        }
    });
    
    document.getElementById('saveSettingsBtn').addEventListener('click', function() {
        const previousConsent = getCookie('cookie_consent');
        saveCustomSettings();
        hideCookieSettings();
        showFloatingButton();
        
        // Track consent change
        if (previousConsent) {
            trackConsentChange(JSON.parse(previousConsent).status, 'custom', 'modal-save-button');
        }
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
    
    document.getElementById('cookieFloatingButton').addEventListener('click', function() {
        if (!document.getElementById('cookieConsentBanner').classList.contains('show')) {
            showCookieBanner();
        } else {
            hideCookieBanner();
        }
    });
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
    if (!config.floatingButtons.consentButton.enabled) return;
    
    const button = document.getElementById('cookieFloatingButton');
    button.style.display = 'flex';
    setTimeout(() => {
        button.classList.add('show');
    }, 100);
}

function hideFloatingButton() {
    const button = document.getElementById('cookieFloatingButton');
    button.classList.remove('show');
    setTimeout(() => {
        button.style.display = 'none';
    }, 300);
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
    if (config.microsoftUET.enabled && typeof window.uetq === 'function') {
        const uetConsent = consentData.categories.advertising;
        window.uetq.push('setConsent', uetConsent);
    }
    
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

    console.log('Consent Mode Updated:', {
        states: consentStates,
        gcsSignal: gcsSignal,
        categories: consentData.categories,
        microsoftUET: config.microsoftUET.enabled ? (consentData.categories.advertising ? 'granted' : 'denied') : 'not configured'
    });
}

function acceptAllCookies() {
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
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('accepted');
    }
}

function rejectAllCookies() {
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
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    clearNonEssentialCookies();
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('rejected');
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
    
    setCookie('cookie_consent', JSON.stringify(consentData), 365);
    updateConsentMode(consentData);
    loadCookiesAccordingToConsent(consentData);
    
    // Clear cookies if categories were disabled
    if (!consentData.categories.analytics) clearCategoryCookies('analytics');
    if (!consentData.categories.performance) clearCategoryCookies('performance');
    if (!consentData.categories.advertising) clearCategoryCookies('advertising');
    if (!consentData.categories.uncategorized) clearCategoryCookies('uncategorized');
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('custom');
    }
}

function clearCategoryCookies(category) {
    const cookies = scanAndCategorizeCookies()[category];
    cookies.forEach(cookie => {
        document.cookie = `${cookie.name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
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
    
    // Load Microsoft UET if enabled and advertising is allowed
    if (config.microsoftUET.enabled && typeof window.uetq === 'function') {
        window.uetq.push('setConsent', true);
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

// Initialize Microsoft UET if enabled
if (config.microsoftUET.enabled && config.microsoftUET.autoDetect && typeof window.uetq === 'undefined') {
    // Only initialize UET if not already loaded
    (function(w,d,t,r,u){
        w[u]=w[u]||[];w[u].push({'uid':(new Date().getTime())});
        var s=d.createElement(t);
        s.src=r;
        s.async=1;
        var f=d.getElementsByTagName(t)[0];
        f.parentNode.insertBefore(s,f);
    })(window,document,'script','https://bat.bing.com/bat.js','uetq');
    
    // Set default consent to false until user accepts
    window.uetq = window.uetq || [];
    window.uetq.push('setConsent', false);
}


