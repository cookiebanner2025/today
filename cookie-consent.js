/**
 * Ultimate GDPR Cookie Consent Solution v5.0 - Premium Edition
 * - Full Consent Mode v2 and Microsoft UET support
 * - Multiple design options
 * - Complete customization controls
 * - Advanced analytics dashboard
 * - Dark/light mode support
 * - Animation controls
 * - Individual cookie toggles
 * - Export functionality
 * - Delayed banner display
 */

// ============== CONFIGURATION SECTION ============== //
const config = {
    // General Settings
    uiTheme: 'default', // 'default' or 'classic'
    uiDesign: 'design1', // 'design1' or 'design2'
    enableDarkMode: true, // Enable dark mode support
    autoDetectColorScheme: true, // Automatically detect user's preferred color scheme
    
    // Banner Position and Appearance
    bannerPosition: 'left', // 'left', 'right', or 'center'
    bannerWidth: 440, // Width in pixels
    bannerHeight: 'auto', // 'auto' or specific height in pixels
    bannerBorderRadius: 12, // Border radius in pixels
    bannerBoxShadow: true, // Enable/disable box shadow
    
    // Floating Buttons
    floatingButtonPosition: 'left', // 'left' or 'right'
    showFloatingButton: true, // Show/hide floating settings button
    showAdminButton: true, // Show/hide admin dashboard button
    
    // Banner Display
    autoShow: true, // Automatically show banner on page load
    showDelay: 0, // Delay in seconds before showing banner (0 for immediate)
    acceptOnScroll: false, // Accept cookies when user scrolls
    acceptOnContinue: true, // Implicit consent when continuing to browse
    
    // Domain restriction - only show on these domains (empty array = all domains)
    allowedDomains: ['practicebdhere.myshopify.com', 'dev-rpractice.pantheonsite.io'],
    
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
        enableExport: true, // Enable data export functionality
        enableChangeLog: true, // Enable consent change history
        enableDetailedLogs: true // Enable detailed logging
    },
    
    // Animation settings
    animations: {
        enabled: true, // Enable/disable all animations
        bannerEntrance: 'slide-up', // 'slide-up', 'fade', or 'none'
        bannerExit: 'slide-down', // 'slide-down', 'fade', or 'none'
        modalEntrance: 'fade-in', // 'fade-in', 'slide-up', or 'none'
        modalExit: 'fade-out', // 'fade-out', 'slide-down', or 'none'
        duration: 0.4, // Animation duration in seconds
        easing: 'ease-out', // CSS easing function
        hoverIntensity: 'medium' // 'low', 'medium', or 'high'
    },
    
    // Color Scheme - Light Mode
    colorsLight: {
        primary: '#2ecc71',      // Green (accept button color)
        primaryHover: '#27ae60', // Green hover state
        secondary: '#3498db',    // Blue (save button color)
        secondaryHover: '#2980b9', // Blue hover state
        danger: '#e74c3c',       // Red (reject button color)
        dangerHover: '#c0392b',  // Red hover state
        textDark: '#2c3e50',     // Dark text
        textLight: '#7f8c8d',    // Light text
        background: '#ffffff',   // White background
        backgroundSecondary: '#f8f9fa', // Secondary background
        toggleActive: '#2ecc71', // Same as primary
        toggleInactive: '#bdc3c7',// Gray for inactive
        border: '#ecf0f1',       // Border color
        shadow: 'rgba(0, 0, 0, 0.1)', // Shadow color
        overlay: 'rgba(0, 0, 0, 0.7)' // Modal overlay
    },
    
    // Color Scheme - Dark Mode
    colorsDark: {
        primary: '#27ae60',      // Darker green
        primaryHover: '#2ecc71', // Lighter green
        secondary: '#2980b9',    // Darker blue
        secondaryHover: '#3498db', // Lighter blue
        danger: '#c0392b',       // Darker red
        dangerHover: '#e74c3c',  // Lighter red
        textDark: '#ecf0f1',     // Light text
        textLight: '#bdc3c7',    // Gray text
        background: '#1a1a1a',   // Dark background
        backgroundSecondary: '#2d2d2d', // Secondary dark background
        toggleActive: '#27ae60', // Darker green
        toggleInactive: '#4a4a4a',// Dark gray
        border: '#3d3d3d',       // Dark border
        shadow: 'rgba(0, 0, 0, 0.3)', // Darker shadow
        overlay: 'rgba(0, 0, 0, 0.85)' // Darker overlay
    },
    
    // Button Styles
    buttonStyles: {
        borderRadius: 8,         // Button border radius
        borderWidth: 1,          // Button border width
        textColor: '#ffffff',    // Default button text color
        textColorDark: '#ffffff',// Dark mode button text color
        paddingVertical: 12,     // Vertical padding
        paddingHorizontal: 20,   // Horizontal padding
        hoverEffect: true,      // Enable hover effects
        hoverTransform: true,    // Enable transform on hover
        hoverShadow: true        // Enable shadow on hover
    },
    
    // Individual Cookie Toggles
    showIndividualCookies: true, // Show individual cookie toggles
    
    // Logo Settings
    showLogo: false,             // Show/hide logo
    logoUrl: '',                 // Logo image URL (empty for automatic detection)
    logoWidth: 40,               // Logo width in pixels
    logoHeight: 40,              // Logo height in pixels
    logoPosition: 'left'         // 'left' or 'right' of banner text
};

// ============== MAIN IMPLEMENTATION ============== //
// Initialize dataLayer for Google Tag Manager and Microsoft UET
window.dataLayer = window.dataLayer || [];
function gtag() { 
    if (window.dataLayer) {
        dataLayer.push(arguments); 
    }
}
window.uetq = window.uetq || [];
window.uetq.push('set', 'consent', 'denied');

// Set default consent (deny all except security)
if (typeof gtag === 'function') {
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'denied',
        'security_storage': 'granted'
    });
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
    '_uetsid': { category: 'advertising', duration: '1 day', description: 'Microsoft Advertising unique visitor ID' },
    '_uetvid': { category: 'advertising', duration: '16 days', description: 'Microsoft Advertising visitor ID' },
    
    // Other common cookies
    'gclid_tracker': { category: 'advertising', duration: 'Session', description: 'Tracks Google Click ID for conversions' },
    'tk_ai': { category: 'analytics', duration: 'Session', description: 'Jetpack/Tumblr analytics' },
    'external_id': { category: 'functional', duration: 'Session', description: 'External service identifier' }
};

// Complete EU language translations
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
        individualCookies: "Individual Cookies",
        cookieName: "Name",
        cookieValue: "Value",
        cookieDuration: "Duration",
        cookiePurpose: "Purpose",
        cookieEnabled: "Enabled",
        exportData: "Export Data",
        exportCSV: "CSV",
        exportJSON: "JSON",
        exportPDF: "PDF",
        changeHistory: "Change History",
        timestamp: "Timestamp",
        action: "Action",
        previousState: "Previous State",
        newState: "New State",
        darkMode: "Dark Mode",
        lightMode: "Light Mode",
        toggleMode: "Toggle Dark/Light Mode"
    },
    // Add other languages as needed
    // ...
};

// Country to language mapping for auto-translation
const countryLanguageMap = {
    // Add country to language mappings as needed
    // 'US': 'en',
    // 'DE': 'de',
    // ...
};

// Analytics data storage
let consentAnalytics = {
    total: {
        accepted: 0,
        rejected: 0,
        custom: 0
    },
    daily: {},
    weekly: {},
    monthly: {},
    changes: [] // Track consent changes
};

// Password protection for analytics
let isDashboardAuthenticated = false;

// Current color scheme based on dark/light mode
let currentColorScheme = {};

// Determine initial color scheme
function initColorScheme() {
    if (config.enableDarkMode && config.autoDetectColorScheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        currentColorScheme = prefersDark ? config.colorsDark : config.colorsLight;
    } else {
        currentColorScheme = config.colorsLight;
    }
}

// Load analytics data from localStorage
function loadAnalyticsData() {
    try {
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
    } catch (e) {
        console.error('Error loading analytics data:', e);
    }
}

// Save analytics data to localStorage
function saveAnalyticsData() {
    try {
        localStorage.setItem('consentAnalytics', JSON.stringify(consentAnalytics));
    } catch (e) {
        console.error('Error saving analytics data:', e);
    }
}

// Track consent changes
function trackConsentChange(action, previousState, newState) {
    if (!config.analytics.enableChangeLog) return;
    
    try {
        consentAnalytics.changes.push({
            timestamp: new Date().toISOString(),
            action: action,
            previousState: previousState,
            newState: newState,
            userAgent: navigator.userAgent,
            pageUrl: window.location.href
        });
        
        // Keep only the last 100 changes if detailed logs are disabled
        if (!config.analytics.enableDetailedLogs && consentAnalytics.changes.length > 100) {
            consentAnalytics.changes = consentAnalytics.changes.slice(-100);
        }
        
        saveAnalyticsData();
    } catch (e) {
        console.error('Error tracking consent change:', e);
    }
}

// Export data
function exportData(format) {
    if (!config.analytics.enableExport) return;
    
    try {
        let data, mimeType, fileName;
        const date = new Date().toISOString().split('T')[0];
        
        switch (format) {
            case 'csv':
                // Convert to CSV
                let csv = 'Timestamp,Action,Previous State,New State,User Agent,Page URL\n';
                consentAnalytics.changes.forEach(change => {
                    csv += `"${change.timestamp}","${change.action}","${JSON.stringify(change.previousState)}","${JSON.stringify(change.newState)}","${change.userAgent}","${change.pageUrl}"\n`;
                });
                data = csv;
                mimeType = 'text/csv';
                fileName = `consent-data-${date}.csv`;
                break;
                
            case 'json':
                data = JSON.stringify(consentAnalytics, null, 2);
                mimeType = 'application/json';
                fileName = `consent-data-${date}.json`;
                break;
                
            case 'pdf':
                // PDF generation would require a library like jsPDF
                // This is a placeholder for actual implementation
                alert('PDF export would be implemented with a library like jsPDF in a real implementation');
                return;
        }
        
        // Create download link
        const blob = new Blob([data], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } catch (e) {
        console.error('Error exporting data:', e);
    }
}

// Generate analytics dashboard HTML
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
    
    // Generate change history if enabled
    const changeHistory = config.analytics.enableChangeLog ? `
    <div class="time-stat">
        <h4>${lang.changeHistory}</h4>
        <div class="change-history-container">
            <table class="change-history-table">
                <thead>
                    <tr>
                        <th>${lang.timestamp}</th>
                        <th>${lang.action}</th>
                        <th>${lang.previousState}</th>
                        <th>${lang.newState}</th>
                    </tr>
                </thead>
                <tbody>
                    ${consentAnalytics.changes.slice().reverse().map(change => `
                    <tr>
                        <td>${new Date(change.timestamp).toLocaleString()}</td>
                        <td>${change.action}</td>
                        <td><pre>${JSON.stringify(change.previousState, null, 2)}</pre></td>
                        <td><pre>${JSON.stringify(change.newState, null, 2)}</pre></td>
                    </tr>`).join('')}
                </tbody>
            </table>
        </div>
    </div>` : '';
    
    // Generate export buttons if enabled
    const exportButtons = config.analytics.enableExport ? `
    <div class="export-buttons">
        <button class="export-btn" data-format="csv">${lang.exportCSV}</button>
        <button class="export-btn" data-format="json">${lang.exportJSON}</button>
        <button class="export-btn" data-format="pdf">${lang.exportPDF}</button>
    </div>` : '';
    
    return `
    <div class="analytics-dashboard">
        <h3>${lang.dashboardTitle}</h3>
        
        ${exportButtons}
        
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
            
            ${changeHistory}
        </div>
    </div>`;
}

// Generate individual cookie toggles
function generateIndividualCookieToggles(cookies, category, language = 'en') {
    const lang = translations[language] || translations.en;
    
    return `
    <div class="individual-cookies-container">
        <h4>${lang.individualCookies}</h4>
        <table class="individual-cookies-table">
            <thead>
                <tr>
                    <th>${lang.cookieName}</th>
                    <th>${lang.cookieValue}</th>
                    <th>${lang.cookieDuration}</th>
                    <th>${lang.cookiePurpose}</th>
                    <th>${lang.cookieEnabled}</th>
                </tr>
            </thead>
            <tbody>
                ${cookies.map(cookie => `
                <tr>
                    <td><code>${cookie.name}</code></td>
                    <td><code>${cookie.value.substring(0, 15)}${cookie.value.length > 15 ? '...' : ''}</code></td>
                    <td>${cookie.duration}</td>
                    <td>${cookie.description}</td>
                    <td>
                        <label class="toggle-switch small">
                            <input type="checkbox" data-cookie="${cookie.name}" checked>
                            <span class="toggle-slider"></span>
                        </label>
                    </td>
                </tr>`).join('')}
            </tbody>
        </table>
    </div>`;
}

// Generate cookie tables for each category
function generateCategorySection(category, cookies, language = 'en') {
    const lang = translations[language] || translations.en;
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
                ${config.showIndividualCookies && cookies.length > 0 ? 
                    generateIndividualCookieToggles(cookies, category, language) : ''}
            </div>
        </div>
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
    const preferredLanguage = getCookie('preferred_language');
    if (preferredLanguage && translations[preferredLanguage]) {
        return preferredLanguage;
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
        setupExportButtons();
    }
    
    // Update password prompt if visible
    const passwordPrompt = document.querySelector('.password-prompt');
    if (passwordPrompt) {
        passwordPrompt.innerHTML = generatePasswordPrompt(languageCode);
        setupPasswordPromptEvents();
    }
    
    // Store selected language in cookie
    setCookie('preferred_language', languageCode, 365);
}

// Toggle dark/light mode
function toggleColorScheme() {
    const isDark = currentColorScheme === config.colorsDark;
    currentColorScheme = isDark ? config.colorsLight : config.colorsDark;
    applyColorScheme();
    
    // Store preference in cookie
    setCookie('color_scheme', isDark ? 'light' : 'dark', 365);
}

// Apply current color scheme to the UI
function applyColorScheme() {
    const isDark = currentColorScheme === config.colorsDark;
    const lang = translations[document.getElementById('cookieLanguageSelect')?.value || 'en'] || translations.en;
    
    // Update the toggle button text
    const modeToggle = document.getElementById('colorSchemeToggle');
    if (modeToggle) {
        modeToggle.textContent = isDark ? lang.lightMode : lang.darkMode;
    }
    
    // Update CSS variables
    document.documentElement.style.setProperty('--primary-color', currentColorScheme.primary);
    document.documentElement.style.setProperty('--primary-hover', currentColorScheme.primaryHover);
    document.documentElement.style.setProperty('--secondary-color', currentColorScheme.secondary);
    document.documentElement.style.setProperty('--secondary-hover', currentColorScheme.secondaryHover);
    document.documentElement.style.setProperty('--danger-color', currentColorScheme.danger);
    document.documentElement.style.setProperty('--danger-hover', currentColorScheme.dangerHover);
    document.documentElement.style.setProperty('--text-dark', currentColorScheme.textDark);
    document.documentElement.style.setProperty('--text-light', currentColorScheme.textLight);
    document.documentElement.style.setProperty('--background', currentColorScheme.background);
    document.documentElement.style.setProperty('--background-secondary', currentColorScheme.backgroundSecondary);
    document.documentElement.style.setProperty('--toggle-active', currentColorScheme.toggleActive);
    document.documentElement.style.setProperty('--toggle-inactive', currentColorScheme.toggleInactive);
    document.documentElement.style.setProperty('--border-color', currentColorScheme.border);
    document.documentElement.style.setProperty('--shadow-color', currentColorScheme.shadow);
    document.documentElement.style.setProperty('--overlay-color', currentColorScheme.overlay);
    document.documentElement.style.setProperty('--button-text-color', isDark ? config.buttonStyles.textColorDark : config.buttonStyles.textColor);
}

// Detect website logo
function detectWebsiteLogo() {
    if (config.logoUrl) return config.logoUrl;
    
    // Try to find logo in common locations
    const logoSelectors = [
        'header img.logo',
        '.logo img',
        'nav img',
        'img[alt*="logo"]',
        'img[src*="logo"]'
    ];
    
    for (const selector of logoSelectors) {
        const logo = document.querySelector(selector);
        if (logo && logo.src) {
            return logo.src;
        }
    }
    
    return '';
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
    if (params.has('msclkid')) marketingData.msclkid = params.get('msclkid');
    
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
    const logoUrl = config.showLogo ? detectWebsiteLogo() : '';
    
    // Generate CSS variables based on current color scheme
    const cssVariables = `
    :root {
        --primary-color: ${currentColorScheme.primary};
        --primary-hover: ${currentColorScheme.primaryHover};
        --secondary-color: ${currentColorScheme.secondary};
        --secondary-hover: ${currentColorScheme.secondaryHover};
        --danger-color: ${currentColorScheme.danger};
        --danger-hover: ${currentColorScheme.dangerHover};
        --text-dark: ${currentColorScheme.textDark};
        --text-light: ${currentColorScheme.textLight};
        --background: ${currentColorScheme.background};
        --background-secondary: ${currentColorScheme.backgroundSecondary};
        --toggle-active: ${currentColorScheme.toggleActive};
        --toggle-inactive: ${currentColorScheme.toggleInactive};
        --border-color: ${currentColorScheme.border};
        --shadow-color: ${currentColorScheme.shadow};
        --overlay-color: ${currentColorScheme.overlay};
        --button-text-color: ${currentColorScheme === config.colorsDark ? config.buttonStyles.textColorDark : config.buttonStyles.textColor};
        
        --banner-width: ${config.bannerWidth}px;
        --banner-height: ${config.bannerHeight === 'auto' ? 'auto' : `${config.bannerHeight}px`};
        --banner-border-radius: ${config.bannerBorderRadius}px;
        --button-border-radius: ${config.buttonStyles.borderRadius}px;
        --button-padding-vertical: ${config.buttonStyles.paddingVertical}px;
        --button-padding-horizontal: ${config.buttonStyles.paddingHorizontal}px;
        --button-border-width: ${config.buttonStyles.borderWidth}px;
        
        --animation-duration: ${config.animations.duration}s;
        --animation-easing: ${config.animations.easing};
    }`;
    
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
                    ${config.showIndividualCookies && cookies.length > 0 ? 
                        generateIndividualCookieToggles(cookies, category, language) : ''}
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
    const adminButton = config.analytics.enabled && config.analytics.showDashboard && config.showAdminButton ? `
    <div id="cookieAdminButton" class="cookie-admin-button" title="${lang.dashboardTitle}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6h18"></path>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
    </div>` : '';
    
    // Generate logo if enabled
    const logo = config.showLogo && logoUrl ? `
    <div class="cookie-consent-logo" style="width: ${config.logoWidth}px; height: ${config.logoHeight}px;">
        <img src="${logoUrl}" alt="Website Logo">
    </div>` : '';
    
    // Generate dark/light mode toggle if enabled
    const modeToggle = config.enableDarkMode ? `
    <button id="colorSchemeToggle" class="color-scheme-toggle">
        ${currentColorScheme === config.colorsDark ? lang.lightMode : lang.darkMode}
    </button>` : '';
    
    // Generate Design 1 (original design)
    const design1 = `
    <!-- Main Consent Banner -->
    <div id="cookieConsentBanner" class="cookie-consent-banner">
        <div class="cookie-consent-container">
            ${logo && config.logoPosition === 'left' ? logo : ''}
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
            </div>
            ${logo && config.logoPosition === 'right' ? logo : ''}
            <div class="cookie-consent-buttons">
                <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
            </div>
            ${languageSelector}
            ${modeToggle}
        </div>
    </div>`;
    
    // Generate Design 2 (alternative design)
    const design2 = `
    <!-- Main Consent Banner - Design 2 -->
    <div id="cookieConsentBanner" class="cookie-consent-banner design2">
        <div class="cookie-consent-container">
            ${logo && config.logoPosition === 'left' ? logo : ''}
            <div class="cookie-consent-content">
                <h2>${lang.title}</h2>
                <p>${lang.description}</p>
                <div class="cookie-consent-buttons">
                    <button id="acceptAllBtn" class="cookie-btn accept-btn">${lang.accept}</button>
                    <button id="adjustConsentBtn" class="cookie-btn adjust-btn">${lang.customize}</button>
                    <button id="rejectAllBtn" class="cookie-btn reject-btn">${lang.reject}</button>
                </div>
                <div class="cookie-consent-footer">
                    <a href="/privacy-policy/" class="privacy-policy-link">${lang.privacy}</a>
                    ${modeToggle}
                </div>
            </div>
            ${logo && config.logoPosition === 'right' ? logo : ''}
            ${languageSelector}
        </div>
    </div>`;
    
    const html = `
    <style>${cssVariables}</style>
    
    ${config.uiDesign === 'design1' ? design1 : design2}

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
    <div id="cookieFloatingButton" class="cookie-settings-button" title="${lang.title}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
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
    /* CSS Variables */
    :root {
        /* Colors */
        --primary-color: ${currentColorScheme.primary};
        --primary-hover: ${currentColorScheme.primaryHover};
        --secondary-color: ${currentColorScheme.secondary};
        --secondary-hover: ${currentColorScheme.secondaryHover};
        --danger-color: ${currentColorScheme.danger};
        --danger-hover: ${currentColorScheme.dangerHover};
        --text-dark: ${currentColorScheme.textDark};
        --text-light: ${currentColorScheme.textLight};
        --background: ${currentColorScheme.background};
        --background-secondary: ${currentColorScheme.backgroundSecondary};
        --toggle-active: ${currentColorScheme.toggleActive};
        --toggle-inactive: ${currentColorScheme.toggleInactive};
        --border-color: ${currentColorScheme.border};
        --shadow-color: ${currentColorScheme.shadow};
        --overlay-color: ${currentColorScheme.overlay};
        --button-text-color: ${currentColorScheme === config.colorsDark ? config.buttonStyles.textColorDark : config.buttonStyles.textColor};
        
        /* Sizes */
        --banner-width: ${config.bannerWidth}px;
        --banner-height: ${config.bannerHeight === 'auto' ? 'auto' : `${config.bannerHeight}px`};
        --banner-border-radius: ${config.bannerBorderRadius}px;
        --button-border-radius: ${config.buttonStyles.borderRadius}px;
        --button-padding-vertical: ${config.buttonStyles.paddingVertical}px;
        --button-padding-horizontal: ${config.buttonStyles.paddingHorizontal}px;
        --button-border-width: ${config.buttonStyles.borderWidth}px;
        
        /* Animations */
        --animation-duration: ${config.animations.duration}s;
        --animation-easing: ${config.animations.easing};
    }
    
    /* Base Styles */
    .cookie-consent-banner,
    .cookie-settings-modal,
    .cookie-analytics-modal,
    .cookie-settings-button,
    .cookie-admin-button {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        box-sizing: border-box;
    }
    
    /* Main Banner Styles - Design 1 */
    .cookie-consent-banner {
        position: fixed;
        bottom: 20px;
        ${config.bannerPosition === 'left' ? 'left: 20px;' : config.bannerPosition === 'right' ? 'right: 20px;' : 'left: 50%; transform: translateX(-50%);'}
        width: var(--banner-width);
        height: var(--banner-height);
        background: var(--background);
        border-radius: var(--banner-border-radius);
        ${config.bannerBoxShadow ? 'box-shadow: 0 8px 32px var(--shadow-color);' : ''}
        z-index: 9999;
        padding: 24px;
        display: none;
        ${config.animations.enabled && config.animations.bannerEntrance === 'slide-up' ? 
            'transform: translateY(20px);' : 
            config.animations.enabled && config.animations.bannerEntrance === 'fade' ? 
            'opacity: 0;' : ''}
        transition: all var(--animation-duration) var(--animation-easing);
        border: none;
        overflow: hidden;
    }
    
    .cookie-consent-banner.design2 {
        padding: 0;
        overflow: visible;
    }
    
    .cookie-consent-banner.design2 .cookie-consent-container {
        display: flex;
        flex-direction: column;
        padding: 24px;
        background: var(--background);
        border-radius: var(--banner-border-radius);
        ${config.bannerBoxShadow ? 'box-shadow: 0 8px 32px var(--shadow-color);' : ''}
        border: 1px solid var(--border-color);
    }
    
    .cookie-consent-banner.show {
        ${config.animations.enabled && config.animations.bannerEntrance === 'slide-up' ? 
            'transform: translateY(0);' : 
            config.animations.enabled && config.animations.bannerEntrance === 'fade' ? 
            'opacity: 1;' : ''}
        display: block;
    }
    
    .cookie-consent-container {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        height: 100%;
    }
    
    .cookie-consent-logo {
        margin-right: 16px;
        flex-shrink: 0;
    }
    
    .cookie-consent-logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    .cookie-consent-content {
        flex: 1;
        min-width: 0;
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
    
    .cookie-consent-banner.design2 .cookie-consent-buttons {
        margin: 16px 0;
    }
    
    .cookie-consent-banner.design2 .cookie-consent-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;
    }
    
    .cookie-btn {
        padding: var(--button-padding-vertical) var(--button-padding-horizontal);
        border-radius: var(--button-border-radius);
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        text-align: center;
        border: ${config.buttonStyles.borderWidth}px solid transparent;
        flex: 1;
        letter-spacing: 0.2px;
        color: var(--button-text-color);
    }
    
    .adjust-btn {
        background-color: var(--background-secondary);
        color: var(--text-dark);
        border-color: var(--border-color);
    }
    
    .adjust-btn:hover {
        ${config.buttonStyles.hoverEffect ? `background-color: ${currentColorScheme === config.colorsDark ? '#3d3d3d' : '#f0f2f5'};` : ''}
        ${config.buttonStyles.hoverTransform ? 'transform: translateY(-1px);' : ''}
        ${config.buttonStyles.hoverShadow ? 'box-shadow: 0 2px 8px var(--shadow-color);' : ''}
    }
    
    .reject-btn {
        background-color: var(--background);
        color: var(--danger-color);
        border-color: var(--danger-color);
    }
    
    .reject-btn:hover {
        ${config.buttonStyles.hoverEffect ? `background-color: ${currentColorScheme === config.colorsDark ? '#3d1a1a' : '#ffeeed'};` : ''}
        ${config.buttonStyles.hoverTransform ? 'transform: translateY(-1px);' : ''}
        ${config.buttonStyles.hoverShadow ? 'box-shadow: 0 2px 8px rgba(231, 76, 60, 0.15);' : ''}
    }
    
    .accept-btn {
        background-color: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
        ${config.buttonStyles.hoverShadow ? 'box-shadow: 0 2px 12px rgba(46, 204, 113, 0.3);' : ''}
    }
    
    .accept-btn:hover {
        ${config.buttonStyles.hoverEffect ? `background-color: var(--primary-hover);` : ''}
        ${config.buttonStyles.hoverTransform ? 'transform: translateY(-1px);' : ''}
        ${config.buttonStyles.hoverShadow ? 'box-shadow: 0 4px 16px rgba(46, 204, 113, 0.4);' : ''}
    }
    
    .save-btn {
        background-color: var(--secondary-color);
        color: white;
        background-image: linear-gradient(to right, var(--secondary-color), var(--secondary-hover));
    }
    
    .save-btn:hover {
        ${config.buttonStyles.hoverEffect ? `background-color: var(--secondary-hover);` : ''}
        ${config.buttonStyles.hoverTransform ? 'transform: translateY(-2px);' : ''}
        ${config.buttonStyles.hoverShadow ? 'box-shadow: 0 5px 10px var(--shadow-color);' : ''}
    }
    
    /* Language Selector Styles */
    .language-selector {
        position: absolute;
        top: 15px;
        right: 15px;
    }
    
    .cookie-consent-banner.design2 .language-selector {
        position: absolute;
        top: -15px;
        right: -15px;
        background: var(--background);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px var(--shadow-color);
        border: 1px solid var(--border-color);
    }
    
    .language-selector select {
        padding: 6px 10px;
        border-radius: 6px;
        border: 1px solid var(--border-color);
        background-color: var(--background-secondary);
        font-size: 13px;
        color: var(--text-dark);
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .cookie-consent-banner.design2 .language-selector select {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        cursor: pointer;
    }
    
    .language-selector select:hover {
        border-color: var(--secondary-color);
        background-color: var(--background);
    }
    
    .language-selector select:focus {
        outline: none;
        border-color: var(--secondary-color);
        box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
    }
    
    /* Color Scheme Toggle */
    .color-scheme-toggle {
        position: absolute;
        bottom: 15px;
        right: 15px;
        background: none;
        border: none;
        color: var(--secondary-color);
        font-size: 12px;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 4px;
        transition: all 0.2s ease;
    }
    
    .color-scheme-toggle:hover {
        background-color: var(--background-secondary);
    }
    
    .cookie-consent-banner.design2 .color-scheme-toggle {
        position: static;
        margin-left: 16px;
    }
    
    /* Settings Modal */
    .cookie-settings-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--overlay-color);
        z-index: 10000;
        overflow-y: auto;
        padding: 30px 0;
        ${config.animations.enabled && config.animations.modalEntrance === 'fade-in' ? 
            'opacity: 0;' : 
            config.animations.enabled && config.animations.modalEntrance === 'slide-up' ? 
            'transform: translateY(20px);' : ''}
        transition: all var(--animation-duration) var(--animation-easing);
    }
    
    .cookie-settings-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        ${config.animations.enabled && config.animations.modalEntrance === 'fade-in' ? 
            'opacity: 1;' : 
            config.animations.enabled && config.animations.modalEntrance === 'slide-up' ? 
            'transform: translateY(0);' : ''}
    }
    
    .cookie-settings-content {
        background-color: var(--background);
        margin: 0 auto;
        width: 845px;
        max-height: 470px;
        border-radius: var(--banner-border-radius);
        box-shadow: 0 10px 30px var(--shadow-color);
        overflow: hidden;
        ${config.animations.enabled ? 'transform: translateY(20px);' : ''}
        transition: all var(--animation-duration) var(--animation-easing);
        display: flex;
        flex-direction: column;
    }
    
    .cookie-settings-modal.show .cookie-settings-content {
        transform: translateY(0);
    }
    
    .cookie-settings-header {
        padding: 20px 30px;
        border-bottom: 1px solid var(--border-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--background-secondary);
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
        background-color: var(--background);
        overflow-y: auto;
        flex: 1;
    }
    
    .cookie-category {
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 1px solid var(--border-color);
        transition: all 0.3s ease;
    }
    
    .cookie-category:hover {
        background-color: var(--background-secondary);
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
    
    .toggle-switch.small {
        width: 40px;
        height: 20px;
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
        border-radius: 34px;
    }
    
    .toggle-switch.small .toggle-slider {
        border-radius: 20px;
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
        box-shadow: 0 2px 5px var(--shadow-color);
    }
    
    .toggle-switch.small .toggle-slider:before {
        height: 16px;
        width: 16px;
        left: 2px;
        bottom: 2px;
    }
    
    input:checked + .toggle-slider {
        background-color: var(--toggle-active);
    }
    
    input:checked + .toggle-slider:before {
        transform: translateX(24px);
    }
    
    .toggle-switch.small input:checked + .toggle-slider:before {
        transform: translateX(20px);
    }
    
    input:disabled + .toggle-slider {
        background-color: #95a5a6;
        cursor: not-allowed;
    }
    
    /* Cookie Details */
    .cookie-details-container {
        margin-top: 15px;
        border: 1px solid var(--border-color);
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
    }
    
    .cookie-details-container:hover {
        box-shadow: 0 3px 12px var(--shadow-color);
        border-color: var(--primary-color);
    }
    
    .cookie-details-header {
        background-color: var(--background-secondary);
        padding: 12px 18px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .cookie-details-header:hover {
        background-color: ${currentColorScheme === config.colorsDark ? '#3d3d3d' : '#eeeeee'};
    }
    
    .cookie-details-content {
        padding: 18px;
        background-color: var(--background);
        border-top: 1px solid var(--border-color);
        display: none;
        animation: fadeIn var(--animation-duration) var(--animation-easing);
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
    
    .individual-cookies-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 12px;
        margin-top: 15px;
    }
    
    .cookie-details-table th,
    .individual-cookies-table th {
        text-align: left;
        padding: 10px 12px;
        background-color: var(--background-secondary);
        font-weight: 600;
        border-bottom: 2px solid var(--border-color);
        color: var(--text-dark);
    }
    
    .cookie-details-table td,
    .individual-cookies-table td {
        padding: 10px 12px;
        border-bottom: 1px solid var(--border-color);
        color: var(--text-light);
    }
    
    .cookie-details-table tr:last-child td,
    .individual-cookies-table tr:last-child td {
        border-bottom: none;
    }
    
    .cookie-details-table tr:hover,
    .individual-cookies-table tr:hover {
        background-color: var(--background-secondary);
    }
    
    .cookie-details-table code,
    .individual-cookies-table code {
        background-color: var(--background-secondary);
        padding: 2px 5px;
        border-radius: 3px;
        font-family: monospace;
        color: var(--text-dark);
    }
    
    .no-cookies-message {
        padding: 15px;
        text-align: center;
        color: var(--text-light);
        font-style: italic;
    }
    
    /* Floating Settings Button */
    .cookie-settings-button {
        position: fixed;
        bottom: 30px;
        ${config.floatingButtonPosition === 'left' ? 'left: 30px;' : 'right: 30px;'}
        width: 60px;
        height: 60px;
        background-color: var(--primary-color);
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px var(--shadow-color);
        z-index: 9998;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: 2px solid var(--background);
    }
    
    .cookie-settings-button.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    .cookie-settings-button:hover {
        ${config.buttonStyles.hoverEffect ? `background-color: var(--primary-hover);` : ''}
        ${config.buttonStyles.hoverTransform ? 'transform: translateY(-3px) scale(1.05);' : ''}
        ${config.buttonStyles.hoverShadow ? 'box-shadow: 0 8px 25px var(--shadow-color);' : ''}
    }
    
    .cookie-settings-button svg {
        width: 28px;
        height: 28px;
        fill: white;
        transition: transform 0.3s ease;
    }
    
    .cookie-settings-button:hover svg {
        ${config.buttonStyles.hoverTransform ? 'transform: rotate(15deg);' : ''}
    }
    
    /* Admin Button */
    .cookie-admin-button {
        position: fixed;
        ${config.floatingButtonPosition === 'left' ? 
          'left: 30px; bottom: 100px;' : 
          'right: 30px; bottom: 100px;'}
        width: 60px;
        height: 60px;
        background-color: var(--secondary-color);
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 6px 20px var(--shadow-color);
        z-index: 9997;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        border: 2px solid var(--background);
    }
    
    .cookie-admin-button.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    .cookie-admin-button:hover {
        ${config.buttonStyles.hoverEffect ? `background-color: var(--secondary-hover);` : ''}
        ${config.buttonStyles.hoverTransform ? 'transform: translateY(-3px) scale(1.05);' : ''}
        ${config.buttonStyles.hoverShadow ? 'box-shadow: 0 8px 25px var(--shadow-color);' : ''}
    }
    
    .cookie-admin-button svg {
        width: 24px;
        height: 24px;
        stroke: white;
        stroke-width: 2;
        transition: transform 0.3s ease;
    }
    
    .cookie-admin-button:hover svg {
        ${config.buttonStyles.hoverTransform ? 'transform: rotate(15deg);' : ''}
    }
    
    /* Analytics Dashboard */
    .cookie-analytics-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--overlay-color);
        z-index: 10001;
        overflow-y: auto;
        padding: 30px 0;
        opacity: 0;
        transition: opacity var(--animation-duration) var(--animation-easing);
    }
    
    .cookie-analytics-modal.show {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }
    
    .cookie-analytics-content {
        background-color: var(--background);
        margin: 0 auto;
        width: 900px;
        max-height: 600px;
        border-radius: var(--banner-border-radius);
        box-shadow: 0 10px 30px var(--shadow-color);
        overflow: hidden;
        transform: translateY(20px);
        transition: transform var(--animation-duration) var(--animation-easing);
        display: flex;
        flex-direction: column;
    }
    
    .cookie-analytics-modal.show .cookie-analytics-content {
        transform: translateY(0);
    }
    
    .cookie-analytics-header {
        padding: 20px 30px;
        border-bottom: 1px solid var(--border-color);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--background-secondary);
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
        background-color: var(--background);
        overflow-y: auto;
        flex: 1;
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
        border-radius: 6px;
        border: 1px solid var(--border-color);
        width: 100%;
        max-width: 300px;
        margin-bottom: 15px;
        font-size: 14px;
        background-color: var(--background);
        color: var(--text-dark);
    }
    
    .password-prompt button {
        padding: var(--button-padding-vertical) var(--button-padding-horizontal);
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: var(--button-border-radius);
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
        background-color: var(--background-secondary);
        border-radius: 8px;
        padding: 15px;
        text-align: center;
        transition: all 0.3s ease;
    }
    
    .stat-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px var(--shadow-color);
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
        background-color: var(--background-secondary);
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
        background-color: ${currentColorScheme === config.colorsDark ? '#3d3d3d' : '#ecf0f1'};
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
    .change-history-container {
        max-height: 300px;
        overflow-y: auto;
        margin-top: 15px;
        border: 1px solid var(--border-color);
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
        background-color: var(--background-secondary);
        z-index: 1;
    }
    
    .change-history-table th,
    .change-history-table td {
        padding: 10px 12px;
        border-bottom: 1px solid var(--border-color);
        text-align: left;
    }
    
    .change-history-table pre {
        margin: 0;
        white-space: pre-wrap;
        font-family: inherit;
        font-size: 12px;
        max-width: 200px;
        max-height: 100px;
        overflow: auto;
    }
    
    /* Export Buttons */
    .export-buttons {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }
    
    .export-btn {
        padding: 8px 16px;
        background-color: var(--background-secondary);
        border: 1px solid var(--border-color);
        border-radius: var(--button-border-radius);
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 13px;
    }
    
    .export-btn:hover {
        background-color: var(--background);
        border-color: var(--secondary-color);
    }
    
    /* Footer Buttons */
    .cookie-settings-footer {
        padding: 20px 30px;
        background-color: var(--background-secondary);
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        border-top: 1px solid var(--border-color);
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
            ${config.bannerPosition === 'left' ? 'left: 5%;' : config.bannerPosition === 'right' ? 'right: 5%;' : 'left: 5%; right: 5%; transform: none;'}
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
            ${config.bannerPosition === 'left' ? 'left: 15px;' : config.bannerPosition === 'right' ? 'right: 15px;' : 'left: 15px; right: 15px; transform: none;'}
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
            ${config.floatingButtonPosition === 'left' ? 'left: 15px;' : 'right: 15px;'}
        }
        
        .cookie-admin-button {
            width: 50px;
            height: 50px;
            ${config.floatingButtonPosition === 'left' ? 
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
    
    // Create a div to hold all our HTML
    const container = document.createElement('div');
    container.innerHTML = html;
    
    // Append to body
    document.body.appendChild(container);
}

function initializeCookieConsent(detectedCookies, language) {
    const consentGiven = getCookie('cookie_consent');
    
    // Apply color scheme
    applyColorScheme();
    
    // Set up event listeners for color scheme toggle
    if (config.enableDarkMode) {
        const modeToggle = document.getElementById('colorSchemeToggle');
        if (modeToggle) {
            modeToggle.addEventListener('click', toggleColorScheme);
        }
    }
    
    // Show banner after delay if needed
    if (!consentGiven && config.autoShow) {
        if (config.showDelay > 0) {
            setTimeout(showCookieBanner, config.showDelay * 1000);
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
    if (config.analytics.enabled && config.analytics.showDashboard && config.showAdminButton) {
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
    
    // Setup export buttons if enabled
    if (config.analytics.enableExport) {
        setupExportButtons();
    }
}

function setupPasswordPromptEvents() {
    const passwordSubmit = document.getElementById('dashboardPasswordSubmit');
    if (passwordSubmit) {
        passwordSubmit.addEventListener('click', function() {
            const passwordInput = document.getElementById('dashboardPasswordInput');
            const errorMessage = document.getElementById('passwordError');
            const lang = translations[document.getElementById('cookieLanguageSelect')?.value || 'en'] || translations.en;
            
            if (passwordInput.value === config.analytics.dashboardPassword) {
                isDashboardAuthenticated = true;
                setCookie('dashboard_auth', 'true', config.analytics.passwordCookieDuration);
                
                // Update the dashboard content
                const lang = document.getElementById('cookieLanguageSelect') ? 
                    document.getElementById('cookieLanguageSelect').value : 'en';
                document.querySelector('.cookie-analytics-body').innerHTML = generateAnalyticsDashboard(lang);
                setupExportButtons();
            } else {
                errorMessage.textContent = lang.passwordIncorrect;
            }
        });
    }
}

function setupExportButtons() {
    document.querySelectorAll('.export-btn').forEach(button => {
        button.addEventListener('click', function() {
            exportData(this.dataset.format);
        });
    });
}

function setupEventListeners() {
    // Accept All button
    const acceptAllBtn = document.getElementById('acceptAllBtn');
    if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', function() {
            acceptAllCookies();
            hideCookieBanner();
            showFloatingButton();
        });
    }
    
    // Reject All button
    const rejectAllBtn = document.getElementById('rejectAllBtn');
    if (rejectAllBtn) {
        rejectAllBtn.addEventListener('click', function() {
            rejectAllCookies();
            hideCookieBanner();
            showFloatingButton();
        });
    }
    
    // Adjust Consent button
    const adjustConsentBtn = document.getElementById('adjustConsentBtn');
    if (adjustConsentBtn) {
        adjustConsentBtn.addEventListener('click', function() {
            showCookieSettings();
            hideCookieBanner();
        });
    }
    
    // Accept All in Settings
    const acceptAllSettingsBtn = document.getElementById('acceptAllSettingsBtn');
    if (acceptAllSettingsBtn) {
        acceptAllSettingsBtn.addEventListener('click', function() {
            acceptAllCookies();
            hideCookieSettings();
            showFloatingButton();
        });
    }
    
    // Reject All in Settings
    const rejectAllSettingsBtn = document.getElementById('rejectAllSettingsBtn');
    if (rejectAllSettingsBtn) {
        rejectAllSettingsBtn.addEventListener('click', function() {
            rejectAllCookies();
            hideCookieSettings();
            showFloatingButton();
        });
    }
    
    // Save Settings button
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            saveCustomSettings();
            hideCookieSettings();
            showFloatingButton();
        });
    }
    
    // Close modal button
    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            hideCookieSettings();
            if (!getCookie('cookie_consent')) {
                showCookieBanner();
            }
        });
    }
    
    // Close analytics modal button
    const closeAnalyticsModal = document.querySelector('.close-analytics-modal');
    if (closeAnalyticsModal) {
        closeAnalyticsModal.addEventListener('click', function() {
            hideAnalyticsDashboard();
        });
    }
    
    // Floating button
    const floatingButton = document.getElementById('cookieFloatingButton');
    if (floatingButton) {
        floatingButton.addEventListener('click', function() {
            const banner = document.getElementById('cookieConsentBanner');
            if (!banner.classList.contains('show')) {
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
                
                if (config.showIndividualCookies && detectedCookies[category].length > 0) {
                    content.insertAdjacentHTML('beforeend', generateIndividualCookieToggles(detectedCookies[category], category));
                }
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
    if (!config.showFloatingButton) return;
    
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
    if (banner) {
        banner.style.display = 'block';
        setTimeout(() => {
            banner.classList.add('show');
        }, 10);
    }
}

function hideCookieBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    if (banner) {
        if (config.animations.enabled && config.animations.bannerExit === 'slide-down') {
            banner.style.transform = 'translateY(20px)';
        } else if (config.animations.enabled && config.animations.bannerExit === 'fade') {
            banner.style.opacity = '0';
        }
        
        setTimeout(() => {
            banner.classList.remove('show');
            banner.style.display = 'none';
            // Reset transform/opacity for next show
            banner.style.transform = '';
            banner.style.opacity = '';
        }, config.animations.enabled ? config.animations.duration * 1000 : 0);
    }
}

function showCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        hideCookieBanner();
    }
}

function hideCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        if (config.animations.enabled && config.animations.modalExit === 'slide-down') {
            modal.querySelector('.cookie-settings-content').style.transform = 'translateY(20px)';
        } else if (config.animations.enabled && config.animations.modalExit === 'fade-out') {
            modal.style.opacity = '0';
        }
        
        setTimeout(() => {
            modal.classList.remove('show');
            modal.style.display = 'none';
            // Reset transform/opacity for next show
            if (modal.querySelector('.cookie-settings-content')) {
                modal.querySelector('.cookie-settings-content').style.transform = '';
            }
            modal.style.opacity = '';
        }, config.animations.enabled ? config.animations.duration * 1000 : 0);
    }
}

function showAnalyticsDashboard() {
    if (config.analytics.passwordProtect && !isDashboardAuthenticated) {
        // Show password prompt if not authenticated
        const modal = document.getElementById('cookieAnalyticsModal');
        if (modal) {
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }
    } else {
        // Show dashboard if authenticated or no password protection
        const modal = document.getElementById('cookieAnalyticsModal');
        if (modal) {
            const lang = document.getElementById('cookieLanguageSelect') ? 
                document.getElementById('cookieLanguageSelect').value : 'en';
            const body = modal.querySelector('.cookie-analytics-body');
            if (body) {
                body.innerHTML = generateAnalyticsDashboard(lang);
                setupExportButtons();
            }
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }
    }
}

function hideAnalyticsDashboard() {
    const modal = document.getElementById('cookieAnalyticsModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
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

    // Update consent mode if gtag is available
    if (typeof gtag === 'function') {
        gtag('consent', 'update', consentStates);
    }
    
    // Update Microsoft UET consent
    window.uetq = window.uetq || [];
    window.uetq.push('set', 'consent', consentData.categories.advertising ? 'granted' : 'denied');
    
    // Push detailed consent data to dataLayer
    window.dataLayer = window.dataLayer || [];
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

function acceptAllCookies() {
    const previousConsent = getCookie('cookie_consent') ? JSON.parse(getCookie('cookie_consent')) : null;
    
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
    
    // Track consent change
    if (config.analytics.enableChangeLog) {
        trackConsentChange('accept_all', previousConsent, consentData);
    }
    
    // Update analytics
    if (config.analytics.enabled) {
        updateConsentStats('accepted');
    }
}

function rejectAllCookies() {
    const previousConsent = getCookie('cookie_consent') ? JSON.parse(getCookie('cookie_consent')) : null;
    
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
    
    // Track consent change
    if (config.analytics.enableChangeLog) {
        trackConsentChange('reject_all', previousConsent, consentData);
    }
    
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
    const previousConsent = getCookie('cookie_consent') ? JSON.parse(getCookie('cookie_consent')) : null;
    
    // Get individual cookie preferences if enabled
    const individualCookiePrefs = {};
    if (config.showIndividualCookies) {
        document.querySelectorAll('input[data-cookie]').forEach(input => {
            individualCookiePrefs[input.dataset.cookie] = input.checked;
        });
    }
    
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
        individualCookies: config.showIndividualCookies ? individualCookiePrefs : null,
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
    
    // Track consent change
    if (config.analytics.enableChangeLog) {
        trackConsentChange('custom_settings', previousConsent, consentData);
    }
    
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
    
    // Load Microsoft UET if advertising is enabled
    (function(w,d,t,r,u){
        var f,n,i;
        w[u]=w[u]||[],f=function(){
            var o={ti:"YOUR_UET_TAG_ID"};
            o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
        },
        n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){
            var s=this.readyState;
            s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
        },
        i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
    })(window,document,"script","//bat.bing.com/bat.js","uetq");
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
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax" + (location.protocol === 'https:' ? "; Secure" : "");
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

function updateConsentStats(action) {
    const today = new Date().toISOString().split('T')[0];
    
    // Update totals
    if (action === 'accepted') {
        consentAnalytics.total.accepted++;
    } else if (action === 'rejected') {
        consentAnalytics.total.rejected++;
    } else if (action === 'custom') {
        consentAnalytics.total.custom++;
    }
    
    // Update daily stats
    if (!consentAnalytics.daily[today]) {
        consentAnalytics.daily[today] = {
            accepted: 0,
            rejected: 0,
            custom: 0
        };
    }
    
    if (action === 'accepted') {
        consentAnalytics.daily[today].accepted++;
    } else if (action === 'rejected') {
        consentAnalytics.daily[today].rejected++;
    } else if (action === 'custom') {
        consentAnalytics.daily[today].custom++;
    }
    
    saveAnalyticsData();
}

// Main initialization
function initCookieConsent() {
    // Initialize color scheme
    initColorScheme();
    
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
    if (config.acceptOnScroll) {
        window.addEventListener('scroll', handleScrollAcceptance);
    }
    
    // Listen for color scheme changes
    if (config.enableDarkMode && config.autoDetectColorScheme) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            currentColorScheme = e.matches ? config.colorsDark : config.colorsLight;
            applyColorScheme();
        });
    }
}

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

// Wait for DOM to be ready before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
    initCookieConsent();
}
