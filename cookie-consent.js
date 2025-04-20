/**
 * Advanced GDPR Cookie Consent Solution v3.0
 * - Full Google Consent Mode support (G111, G100, etc.)
 * - Analytics dashboard
 * - Customizable cookie categories
 * - Detailed popup with individual controls
 * - Cookie scanning
 */

// ============== CONFIGURATION ============== //
const cookieConfig = {
  // UI Settings
  uiTheme: 'default', // 'default' or 'dark'
  bannerPosition: 'bottom', // 'bottom', 'top', 'left', 'right'
  layout: 'box', // 'box' or 'bar'
  
  // Content
  title: "We value your privacy",
  message: "We use cookies to enhance your experience and analyze traffic.",
  acceptAllText: "Accept all",
  rejectAllText: "Reject all",
  settingsText: "Preferences",
  saveText: "Save settings",
  privacyPolicyText: "Privacy Policy",
  privacyPolicyLink: "/privacy",
  
  // Behavior
  autoShow: true,
  showDelay: 0, // seconds
  acceptOnScroll: true,
  scrollPercentage: 25,
  rememberConsent: true,
  consentDuration: 365, // days
  
  // Google Consent Mode
  consentMode: true,
  defaultConsentState: 'denied', // 'denied' or 'granted'
  
  // Analytics
  analytics: {
    enabled: true,
    passwordProtect: false,
    password: "admin123",
    retentionDays: 30
  },
  
  // Cookie Categories
  categories: {
    necessary: {
      name: "Necessary",
      description: "Essential for the website to function",
      required: true,
      cookies: []
    },
    analytics: {
      name: "Analytics",
      description: "Help us understand visitor behavior",
      cookies: ['_ga', '_gid', '_gat', '_ga_']
    },
    marketing: {
      name: "Marketing",
      description: "Used for personalized advertising",
      cookies: ['_gcl_au', '_fbp', 'fr']
    },
    preferences: {
      name: "Preferences",
      description: "Remember your settings and preferences",
      cookies: ['cookie_preferences']
    }
  }
};

// ============== MAIN IMPLEMENTATION ============== //
class AdvancedCookieConsent {
  constructor(config) {
    this.config = config;
    this.consent = {
      necessary: true, // Always required
      analytics: false,
      marketing: false,
      preferences: false,
      version: '3.0',
      date: null
    };
    this.analyticsData = {
      totalConsents: 0,
      accepted: 0,
      rejected: 0,
      customized: 0,
      history: []
    };
    
    this.init();
  }
  
  init() {
    // Initialize dataLayer for Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    
    // Initialize Google Consent Mode
    if (this.config.consentMode) {
      this.initConsentMode();
    }
    
    // Load saved consent
    if (this.config.rememberConsent) {
      this.loadConsent();
    }
    
    // Set up scroll acceptance
    if (this.config.acceptOnScroll) {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    
    // Show banner if needed
    if (this.config.autoShow && !this.hasFullConsent()) {
      setTimeout(() => this.showBanner(), this.config.showDelay * 1000);
    }
    
    // Scan existing cookies
    this.scanCookies();
  }
  
  // ============== CONSENT MANAGEMENT ============== //
  initConsentMode() {
    // Set default consent state
    const defaultState = this.config.defaultConsentState === 'granted' ? 'granted' : 'denied';
    
    // Initialize consent mode
    window.gtag = window.gtag || function() { dataLayer.push(arguments); };
    gtag('consent', 'default', {
      'ad_storage': defaultState,
      'analytics_storage': defaultState,
      'functionality_storage': defaultState,
      'personalization_storage': defaultState,
      'security_storage': 'granted',
      'wait_for_update': 500
    });
    
    // Set initial GCS signal
    this.updateGcsSignal('default');
  }
  
  updateGcsSignal(action) {
    // GCS signals: G100 (denied), G110 (partially accepted), G111 (fully accepted)
    let gcsSignal;
    
    if (action === 'accept') {
      gcsSignal = 'G111';
    } else if (action === 'reject') {
      gcsSignal = 'G100';
    } else if (action === 'custom') {
      gcsSignal = 'G110';
    } else {
      gcsSignal = 'G100'; // Default to denied
    }
    
    // Push to dataLayer
    window.dataLayer.push({
      'event': 'cookie_consent_update',
      'gcs': gcsSignal,
      'consent_state': this.consent,
      'consent_action': action
    });
  }
  
  loadConsent() {
    const savedConsent = this.getCookie('cookie_consent');
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent);
        this.consent = {...this.consent, ...parsed};
        
        // Update consent mode based on loaded consent
        this.updateConsentMode();
      } catch (e) {
        console.error('Error parsing consent cookie', e);
      }
    }
  }
  
  saveConsent(action, customConsent = null) {
    // Update consent state
    if (action === 'accept') {
      Object.keys(this.consent).forEach(key => {
        this.consent[key] = true;
      });
    } else if (action === 'reject') {
      Object.keys(this.consent).forEach(key => {
        this.consent[key] = key === 'necessary'; // Only keep necessary cookies
      });
    } else if (action === 'custom' && customConsent) {
      this.consent = {...this.consent, ...customConsent};
    }
    
    this.consent.date = new Date().toISOString();
    
    // Save to cookie
    if (this.config.rememberConsent) {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + this.config.consentDuration);
      this.setCookie('cookie_consent', JSON.stringify(this.consent), expiry);
    }
    
    // Update consent mode
    this.updateConsentMode();
    
    // Update GCS signal
    this.updateGcsSignal(action);
    
    // Track in analytics
    this.trackConsent(action);
    
    // Hide banner
    this.hideBanner();
    
    // Update cookies
    this.updateCookies();
  }
  
  updateConsentMode() {
    if (!this.config.consentMode) return;
    
    gtag('consent', 'update', {
      'ad_storage': this.consent.marketing ? 'granted' : 'denied',
      'analytics_storage': this.consent.analytics ? 'granted' : 'denied',
      'functionality_storage': this.consent.preferences ? 'granted' : 'denied',
      'personalization_storage': this.consent.preferences ? 'granted' : 'denied',
      'security_storage': 'granted'
    });
  }
  
  hasFullConsent() {
    return Object.values(this.consent).every(v => v === true);
  }
  
  // ============== UI ELEMENTS ============== //
  showBanner() {
    if (document.getElementById('cookie-consent-banner')) return;
    
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    
    // Apply theme
    const isDark = this.config.uiTheme === 'dark';
    const bgColor = isDark ? '#2d3748' : '#ffffff';
    const textColor = isDark ? '#f7fafc' : '#2d3748';
    const primaryColor = isDark ? '#4299e1' : '#3182ce';
    
    // Position styles
    const positionStyles = {
      bottom: 'bottom: 20px; left: 50%; transform: translateX(-50%);',
      top: 'top: 20px; left: 50%; transform: translateX(-50%);',
      left: 'left: 20px; top: 50%; transform: translateY(-50%);',
      right: 'right: 20px; top: 50%; transform: translateY(-50%);'
    };
    
    // Layout styles
    const layoutStyles = {
      box: `
        max-width: 600px;
        width: 90%;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      `,
      bar: `
        width: 100%;
        padding: 15px;
        border-radius: 0;
      `
    };
    
    banner.style.cssText = `
      position: fixed;
      ${positionStyles[this.config.bannerPosition] || positionStyles.bottom}
      background: ${bgColor};
      color: ${textColor};
      z-index: 9999;
      ${layoutStyles[this.config.layout] || layoutStyles.box}
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      align-items: center;
      justify-content: center;
    `;
    
    // Content
    const content = document.createElement('div');
    content.style.flex = '1 1 300px';
    content.innerHTML = `
      <h3 style="margin: 0 0 8px 0; font-size: 1.1rem;">${this.config.title}</h3>
      <p style="margin: 0; font-size: 0.9rem;">${this.config.message} 
        <a href="${this.config.privacyPolicyLink}" 
           style="color: ${primaryColor}; text-decoration: underline;">
          ${this.config.privacyPolicyText}
        </a>
      </p>
    `;
    
    // Buttons
    const buttons = document.createElement('div');
    buttons.style.display = 'flex';
    buttons.style.gap = '10px';
    buttons.style.flexWrap = 'wrap';
    
    const acceptBtn = this.createButton(
      this.config.acceptAllText,
      primaryColor,
      '#ffffff',
      () => this.saveConsent('accept')
    );
    
    const settingsBtn = this.createButton(
      this.config.settingsText,
      'transparent',
      textColor,
      () => this.showSettingsModal()
    );
    settingsBtn.style.border = `1px solid ${textColor}`;
    
    const rejectBtn = this.createButton(
      this.config.rejectAllText,
      'transparent',
      textColor,
      () => this.saveConsent('reject')
    );
    rejectBtn.style.border = `1px solid ${textColor}`;
    
    buttons.appendChild(acceptBtn);
    buttons.appendChild(settingsBtn);
    buttons.appendChild(rejectBtn);
    
    banner.appendChild(content);
    banner.appendChild(buttons);
    
    document.body.appendChild(banner);
  }
  
  showSettingsModal() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'cookie-settings-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    `;
    
    // Create modal
    const modal = document.createElement('div');
    const isDark = this.config.uiTheme === 'dark';
    const bgColor = isDark ? '#2d3748' : '#ffffff';
    const textColor = isDark ? '#f7fafc' : '#2d3748';
    const primaryColor = isDark ? '#4299e1' : '#3182ce';
    
    modal.style.cssText = `
      background: ${bgColor};
      color: ${textColor};
      padding: 25px;
      border-radius: 8px;
      max-width: 800px;
      width: 100%;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    
    // Modal header
    const header = document.createElement('div');
    header.style.marginBottom = '20px';
    header.innerHTML = `
      <h2 style="margin: 0 0 10px 0;">Cookie Preferences</h2>
      <p style="margin: 0; font-size: 0.9rem;">
        Manage your cookie preferences below. Necessary cookies cannot be disabled.
      </p>
    `;
    
    // Cookie categories
    const categoriesDiv = document.createElement('div');
    categoriesDiv.style.marginBottom = '25px';
    
    Object.entries(this.config.categories).forEach(([key, category]) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.style.marginBottom = '15px';
      categoryDiv.style.paddingBottom = '15px';
      categoryDiv.style.borderBottom = `1px solid ${isDark ? '#4a5568' : '#e2e8f0'}`;
      
      const label = document.createElement('label');
      label.style.display = 'flex';
      label.style.alignItems = 'flex-start';
      label.style.gap = '15px';
      label.style.cursor = category.required ? 'default' : 'pointer';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `cookie-category-${key}`;
      checkbox.checked = this.consent[key] || false;
      checkbox.disabled = category.required;
      checkbox.style.marginTop = '3px';
      checkbox.style.cursor = category.required ? 'not-allowed' : 'pointer';
      
      const textDiv = document.createElement('div');
      textDiv.style.flex = '1';
      textDiv.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 5px;">${category.name}</div>
        <div style="font-size: 0.9rem; margin-bottom: 8px;">${category.description}</div>
      `;
      
      // Show detected cookies
      if (category.cookies && category.cookies.length > 0) {
        const cookiesDiv = document.createElement('div');
        cookiesDiv.style.fontSize = '0.8rem';
        cookiesDiv.style.color = isDark ? '#a0aec0' : '#718096';
        cookiesDiv.style.marginTop = '8px';
        
        cookiesDiv.innerHTML = `
          <div style="margin-bottom: 5px;">Detected cookies:</div>
          <div style="display: flex; flex-wrap: wrap; gap: 5px;">
            ${category.cookies.map(c => `<span style="background: ${isDark ? '#4a5568' : '#edf2f7'}; padding: 2px 6px; border-radius: 4px;">${c}</span>`).join('')}
          </div>
        `;
        
        textDiv.appendChild(cookiesDiv);
      }
      
      label.appendChild(checkbox);
      label.appendChild(textDiv);
      categoryDiv.appendChild(label);
      categoriesDiv.appendChild(categoryDiv);
    });
    
    // Modal footer
    const footer = document.createElement('div');
    footer.style.display = 'flex';
    footer.style.justifyContent = 'space-between';
    footer.style.alignItems = 'center';
    footer.style.marginTop = '20px';
    
    const analyticsBtn = this.createButton(
      'View Analytics',
      'transparent',
      textColor,
      () => this.showAnalyticsDashboard()
    );
    analyticsBtn.style.border = `1px solid ${textColor}`;
    analyticsBtn.style.marginRight = 'auto';
    
    const saveBtn = this.createButton(
      this.config.saveText,
      primaryColor,
      '#ffffff',
      () => {
        const customConsent = {};
        Object.keys(this.config.categories).forEach(key => {
          const checkbox = document.getElementById(`cookie-category-${key}`);
          customConsent[key] = checkbox.checked;
        });
        this.saveConsent('custom', customConsent);
        overlay.remove();
      }
    );
    
    footer.appendChild(analyticsBtn);
    footer.appendChild(saveBtn);
    
    modal.appendChild(header);
    modal.appendChild(categoriesDiv);
    modal.appendChild(footer);
    overlay.appendChild(modal);
    
    document.body.appendChild(overlay);
  }
  
  showAnalyticsDashboard() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'cookie-analytics-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    `;
    
    // Create modal
    const modal = document.createElement('div');
    const isDark = this.config.uiTheme === 'dark';
    const bgColor = isDark ? '#2d3748' : '#ffffff';
    const textColor = isDark ? '#f7fafc' : '#2d3748';
    const primaryColor = isDark ? '#4299e1' : '#3182ce';
    
    modal.style.cssText = `
      background: ${bgColor};
      color: ${textColor};
      padding: 25px;
      border-radius: 8px;
      max-width: 900px;
      width: 100%;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    
    // Modal header
    const header = document.createElement('div');
    header.style.marginBottom = '20px';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';
    
    header.innerHTML = `
      <h2 style="margin: 0;">Consent Analytics</h2>
    `;
    
    const closeBtn = this.createButton(
      '×',
      'transparent',
      textColor,
      () => overlay.remove()
    );
    closeBtn.style.fontSize = '1.5rem';
    closeBtn.style.padding = '0 10px';
    closeBtn.style.border = 'none';
    
    header.appendChild(closeBtn);
    
    // Analytics content
    const content = document.createElement('div');
    
    // Summary stats
    const summaryDiv = document.createElement('div');
    summaryDiv.style.marginBottom = '30px';
    summaryDiv.style.display = 'grid';
    summaryDiv.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    summaryDiv.style.gap = '15px';
    
    const stats = [
      { label: 'Total Consents', value: this.analyticsData.totalConsents, color: primaryColor },
      { label: 'Accepted', value: this.analyticsData.accepted, color: '#38a169' },
      { label: 'Rejected', value: this.analyticsData.rejected, color: '#e53e3e' },
      { label: 'Customized', value: this.analyticsData.customized, color: '#d69e2e' }
    ];
    
    stats.forEach(stat => {
      const statDiv = document.createElement('div');
      statDiv.style.background = isDark ? '#4a5568' : '#edf2f7';
      statDiv.style.padding = '15px';
      statDiv.style.borderRadius = '6px';
      statDiv.style.borderTop = `4px solid ${stat.color}`;
      
      statDiv.innerHTML = `
        <div style="font-size: 0.9rem; margin-bottom: 5px;">${stat.label}</div>
        <div style="font-size: 1.5rem; font-weight: 600;">${stat.value}</div>
      `;
      
      summaryDiv.appendChild(statDiv);
    });
    
    // Consent history
    const historyDiv = document.createElement('div');
    historyDiv.innerHTML = '<h3 style="margin: 0 0 15px 0;">Recent Consent Changes</h3>';
    
    if (this.analyticsData.history.length > 0) {
      const historyTable = document.createElement('div');
      historyTable.style.overflowX = 'auto';
      
      const table = document.createElement('table');
      table.style.width = '100%';
      table.style.borderCollapse = 'collapse';
      
      // Table header
      const thead = document.createElement('thead');
      thead.innerHTML = `
        <tr>
          <th style="text-align: left; padding: 10px; border-bottom: 1px solid ${isDark ? '#4a5568' : '#e2e8f0'};">Date</th>
          <th style="text-align: left; padding: 10px; border-bottom: 1px solid ${isDark ? '#4a5568' : '#e2e8f0'};">Action</th>
          <th style="text-align: left; padding: 10px; border-bottom: 1px solid ${isDark ? '#4a5568' : '#e2e8f0'};">Details</th>
        </tr>
      `;
      
      // Table body
      const tbody = document.createElement('tbody');
      
      // Show last 5 entries
      const recentHistory = [...this.analyticsData.history].reverse().slice(0, 5);
      
      recentHistory.forEach(entry => {
        const row = document.createElement('tr');
        
        const dateCell = document.createElement('td');
        dateCell.style.padding = '10px';
        dateCell.style.borderBottom = `1px solid ${isDark ? '#4a5568' : '#e2e8f0'}`;
        dateCell.textContent = new Date(entry.timestamp).toLocaleString();
        
        const actionCell = document.createElement('td');
        actionCell.style.padding = '10px';
        actionCell.style.borderBottom = `1px solid ${isDark ? '#4a5568' : '#e2e8f0'}`;
        actionCell.textContent = entry.action;
        
        const detailsCell = document.createElement('td');
        detailsCell.style.padding = '10px';
        detailsCell.style.borderBottom = `1px solid ${isDark ? '#4a5568' : '#e2e8f0'}`;
        
        const detailsDiv = document.createElement('div');
        detailsDiv.style.fontSize = '0.8rem';
        detailsDiv.innerHTML = `
          <div><strong>Categories:</strong></div>
          <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 5px;">
            ${Object.entries(entry.categories).map(([key, val]) => 
              `<span style="background: ${val ? (isDark ? '#2c5282' : '#bee3f8') : (isDark ? '#742a2a' : '#fed7d7')}; 
                padding: 2px 6px; border-radius: 4px;">${key}: ${val ? '✓' : '✗'}</span>`
            ).join('')}
          </div>
        `;
        
        detailsCell.appendChild(detailsDiv);
        
        row.appendChild(dateCell);
        row.appendChild(actionCell);
        row.appendChild(detailsCell);
        tbody.appendChild(row);
      });
      
      table.appendChild(thead);
      table.appendChild(tbody);
      historyTable.appendChild(table);
      historyDiv.appendChild(historyTable);
    } else {
      historyDiv.innerHTML += '<p>No consent history available yet.</p>';
    }
    
    content.appendChild(summaryDiv);
    content.appendChild(historyDiv);
    
    modal.appendChild(header);
    modal.appendChild(content);
    overlay.appendChild(modal);
    
    document.body.appendChild(overlay);
  }
  
  hideBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) banner.remove();
    
    const overlay = document.getElementById('cookie-settings-overlay');
    if (overlay) overlay.remove();
  }
  
  createButton(text, bgColor, textColor, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.style.cssText = `
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      background: ${bgColor};
      color: ${textColor};
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    `;
    
    if (bgColor !== 'transparent') {
      button.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
    }
    
    button.addEventListener('mouseover', () => {
      button.style.opacity = '0.9';
      button.style.transform = 'translateY(-1px)';
    });
    
    button.addEventListener('mouseout', () => {
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
    });
    
    button.addEventListener('click', onClick);
    return button;
  }
  
  // ============== COOKIE FUNCTIONS ============== //
  scanCookies() {
    const allCookies = document.cookie.split(';');
    const detectedCookies = {};
    
    allCookies.forEach(cookie => {
      const [name] = cookie.trim().split('=');
      if (name) {
        detectedCookies[name] = true;
      }
    });
    
    // Check against configured cookies
    Object.entries(this.config.categories).forEach(([category, data]) => {
      if (data.cookies) {
        data.cookies.forEach(cookie => {
          if (detectedCookies[cookie]) {
            console.log(`Detected ${category} cookie: ${cookie}`);
          }
        });
      }
    });
  }
  
  updateCookies() {
    // Implement logic to enable/disable cookies based on consent
    console.log('Updating cookies based on current consent:', this.consent);
    
    // This would typically involve:
    // 1. Loading/unloading tracking scripts
    // 2. Setting/removing cookies
    // 3. Updating tag manager configurations
  }
  
  setCookie(name, value, expiryDate) {
    let cookie = `${name}=${value}; path=/; SameSite=Lax`;
    if (expiryDate) {
      cookie += `; expires=${expiryDate.toUTCString()}`;
    }
    if (location.protocol === 'https:') {
      cookie += '; Secure';
    }
    document.cookie = cookie;
  }
  
  getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  }
  
  // ============== ANALYTICS ============== //
  trackConsent(action) {
    this.analyticsData.totalConsents++;
    
    if (action === 'accept') {
      this.analyticsData.accepted++;
    } else if (action === 'reject') {
      this.analyticsData.rejected++;
    } else if (action === 'custom') {
      this.analyticsData.customized++;
    }
    
    // Add to history
    this.analyticsData.history.push({
      timestamp: new Date().toISOString(),
      action: action,
      categories: {...this.consent}
    });
    
    // Keep only last 100 entries
    if (this.analyticsData.history.length > 100) {
      this.analyticsData.history.shift();
    }
    
    // Save to localStorage if available
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem('cookie_analytics', JSON.stringify(this.analyticsData));
      } catch (e) {
        console.error('Error saving analytics to localStorage', e);
      }
    }
  }
  
  // ============== EVENT HANDLERS ============== //
  handleScroll() {
    if (this.hasFullConsent()) {
      window.removeEventListener('scroll', this.handleScroll);
      return;
    }
    
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > this.config.scrollPercentage) {
      this.saveConsent('accept');
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.cookieConsent = new AdvancedCookieConsent(cookieConfig);
});
