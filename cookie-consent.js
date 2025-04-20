/**
 * GDPR Cookie Consent Solution v2.0
 * - Simple, customizable cookie consent banner
 * - Supports multiple consent categories
 * - Dark/light mode support
 * - Responsive design
 */

// Configuration
const cookieConfig = {
  // Banner appearance
  bannerPosition: 'bottom', // 'bottom' or 'top'
  bannerColor: '#f8f9fa',
  textColor: '#212529',
  buttonColor: '#0d6efd',
  buttonTextColor: '#ffffff',
  
  // Content
  title: "We use cookies",
  message: "We use cookies to enhance your browsing experience and analyze our traffic.",
  acceptButton: "Accept all",
  rejectButton: "Reject all",
  settingsButton: "Preferences",
  privacyPolicyLink: "/privacy-policy",
  privacyPolicyText: "Privacy Policy",
  
  // Cookie categories
  categories: {
    necessary: {
      name: "Necessary",
      description: "Essential for the website to function",
      required: true
    },
    analytics: {
      name: "Analytics",
      description: "Help us understand how visitors interact"
    },
    marketing: {
      name: "Marketing",
      description: "Used for advertising purposes"
    }
  },
  
  // Behavior
  autoShow: true,
  showForSeconds: 0, // 0 = show immediately
  rememberConsent: true,
  consentExpiryDays: 365,
  acceptOnScroll: false,
  scrollPercentage: 25 // Percentage scrolled to accept
};

// Main Cookie Consent Class
class CookieConsent {
  constructor(config) {
    this.config = config;
    this.consent = {};
    this.init();
  }

  init() {
    // Check if consent already given
    if (this.config.rememberConsent) {
      this.loadConsent();
    }
    
    // Initialize UI if needed
    if (!this.hasConsent() && this.config.autoShow) {
      setTimeout(() => this.showBanner(), this.config.showForSeconds * 1000);
    }
    
    // Set up scroll acceptance
    if (this.config.acceptOnScroll) {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  hasConsent(category = null) {
    if (!this.consent.given) return false;
    if (category === null) return true;
    return this.consent.categories[category] || false;
  }

  loadConsent() {
    const consentCookie = this.getCookie('cookie_consent');
    if (consentCookie) {
      try {
        this.consent = JSON.parse(consentCookie);
      } catch (e) {
        console.error('Error parsing consent cookie', e);
      }
    }
  }

  saveConsent(acceptedCategories) {
    this.consent = {
      given: true,
      date: new Date().toISOString(),
      categories: acceptedCategories
    };
    
    if (this.config.rememberConsent) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + this.config.consentExpiryDays);
      this.setCookie('cookie_consent', JSON.stringify(this.consent), expiryDate);
    }
    
    this.hideBanner();
    this.updateCookies();
  }

  acceptAll() {
    const acceptedCategories = {};
    Object.keys(this.config.categories).forEach(category => {
      acceptedCategories[category] = true;
    });
    this.saveConsent(acceptedCategories);
  }

  rejectAll() {
    const acceptedCategories = {};
    Object.keys(this.config.categories).forEach(category => {
      // Necessary cookies can't be rejected
      acceptedCategories[category] = this.config.categories[category].required || false;
    });
    this.saveConsent(acceptedCategories);
  }

  showBanner() {
    if (document.getElementById('cookie-consent-banner')) return;
    
    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.style.cssText = `
      position: fixed;
      ${this.config.bannerPosition}: 0;
      left: 0;
      right: 0;
      background: ${this.config.bannerColor};
      color: ${this.config.textColor};
      padding: 20px;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
      z-index: 9999;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      justify-content: center;
    `;
    
    const textDiv = document.createElement('div');
    textDiv.style.flex = '1 1 300px';
    textDiv.innerHTML = `
      <h3 style="margin: 0 0 5px 0; font-size: 1.1em;">${this.config.title}</h3>
      <p style="margin: 0; font-size: 0.9em;">${this.config.message} 
        <a href="${this.config.privacyPolicyLink}" style="color: ${this.config.buttonColor};">
          ${this.config.privacyPolicyText}
        </a>
      </p>
    `;
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.display = 'flex';
    buttonsDiv.style.gap = '10px';
    buttonsDiv.style.flexWrap = 'wrap';
    buttonsDiv.style.justifyContent = 'center';
    
    const acceptButton = this.createButton(
      this.config.acceptButton, 
      this.config.buttonColor, 
      this.config.buttonTextColor,
      () => this.acceptAll()
    );
    
    const rejectButton = this.createButton(
      this.config.rejectButton,
      'transparent',
      this.config.textColor,
      () => this.rejectAll()
    );
    rejectButton.style.border = `1px solid ${this.config.textColor}`;
    
    const settingsButton = this.createButton(
      this.config.settingsButton,
      'transparent',
      this.config.textColor,
      () => this.showSettings()
    );
    settingsButton.style.border = `1px solid ${this.config.textColor}`;
    
    buttonsDiv.appendChild(acceptButton);
    buttonsDiv.appendChild(settingsButton);
    buttonsDiv.appendChild(rejectButton);
    
    banner.appendChild(textDiv);
    banner.appendChild(buttonsDiv);
    
    document.body.appendChild(banner);
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
      font-size: 0.9em;
    `;
    button.addEventListener('click', onClick);
    return button;
  }

  hideBanner() {
    const banner = document.getElementById('cookie-consent-banner');
    if (banner) {
      banner.remove();
    }
  }

  showSettings() {
    // Create modal overlay
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
    `;
    
    // Create settings modal
    const modal = document.createElement('div');
    modal.style.cssText = `
      background: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 600px;
      width: 90%;
      max-height: 80vh;
      overflow-y: auto;
    `;
    
    // Modal header
    const header = document.createElement('div');
    header.style.marginBottom = '20px';
    header.innerHTML = `<h2 style="margin: 0;">Cookie Preferences</h2>`;
    
    // Cookie categories
    const categoriesDiv = document.createElement('div');
    categoriesDiv.style.marginBottom = '20px';
    
    Object.entries(this.config.categories).forEach(([key, category]) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.style.marginBottom = '15px';
      
      const label = document.createElement('label');
      label.style.display = 'flex';
      label.style.alignItems = 'center';
      label.style.gap = '10px';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `cookie-category-${key}`;
      checkbox.checked = this.hasConsent(key) || category.required;
      checkbox.disabled = category.required;
      
      const textDiv = document.createElement('div');
      textDiv.innerHTML = `
        <strong>${category.name}</strong>
        <p style="margin: 5px 0 0 0; font-size: 0.9em;">${category.description}</p>
      `;
      
      label.appendChild(checkbox);
      label.appendChild(textDiv);
      categoryDiv.appendChild(label);
      categoriesDiv.appendChild(categoryDiv);
    });
    
    // Modal buttons
    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.display = 'flex';
    buttonsDiv.style.gap = '10px';
    buttonsDiv.style.justifyContent = 'flex-end';
    
    const saveButton = this.createButton(
      'Save Preferences',
      this.config.buttonColor,
      this.config.buttonTextColor,
      () => {
        const acceptedCategories = {};
        Object.keys(this.config.categories).forEach(key => {
          const checkbox = document.getElementById(`cookie-category-${key}`);
          acceptedCategories[key] = checkbox.checked;
        });
        this.saveConsent(acceptedCategories);
        overlay.remove();
      }
    );
    
    const cancelButton = this.createButton(
      'Cancel',
      'transparent',
      this.config.textColor,
      () => overlay.remove()
    );
    cancelButton.style.border = `1px solid ${this.config.textColor}`;
    
    buttonsDiv.appendChild(cancelButton);
    buttonsDiv.appendChild(saveButton);
    
    modal.appendChild(header);
    modal.appendChild(categoriesDiv);
    modal.appendChild(buttonsDiv);
    overlay.appendChild(modal);
    
    document.body.appendChild(overlay);
  }

  updateCookies() {
    // Implement logic to update cookies based on consent
    // This would typically involve loading/unloading tracking scripts
    console.log('Updating cookies based on consent:', this.consent);
  }

  handleScroll() {
    if (this.hasConsent()) {
      window.removeEventListener('scroll', this.handleScroll);
      return;
    }
    
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > this.config.scrollPercentage) {
      this.acceptAll();
      window.removeEventListener('scroll', this.handleScroll);
    }
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
}

// Initialize the cookie consent when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.cookieConsent = new CookieConsent(cookieConfig);
});
