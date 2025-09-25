// Privacy-friendly analytics service for USA customers

interface AnalyticsData {
  sessionId: string;
  userId: string;
  timestamp: number;
  page: string;
  referrer: string;
  userAgent: string;
  screenResolution: string;
  language: string;
  country: string;
  region: string;
  city: string;
  timezone: string;
  latitude?: number;
  longitude?: number;
  browser: string;
  browserVersion: string;
  os: string;
  device: string;
  isMobile: boolean;
  isUSA: boolean;
  sessionDuration?: number;
  pageViews: number;
  events: AnalyticsEvent[];
}

interface AnalyticsEvent {
  name: string;
  timestamp: number;
  properties?: Record<string, unknown>;
}

interface GeoLocation {
  country: string;
  region: string;
  city: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

class AnalyticsService {
  private static instance: AnalyticsService;
  private sessionId: string;
  private userId: string;
  private sessionData: AnalyticsData;
  private startTime: number;
  private analyticsEndpoint = '/api/analytics'; // You'll need to set up your backend endpoint

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.userId = this.getOrCreateUserId();
    this.startTime = Date.now();
    this.sessionData = {} as AnalyticsData; // Will be initialized async
    this.initializeAsync();
  }

  private async initializeAsync(): Promise<void> {
    this.sessionData = await this.initializeSessionData();
    this.setupEventListeners();
  }

  static getInstance(): AnalyticsService {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  private generateSessionId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private getOrCreateUserId(): string {
    let userId = localStorage.getItem('analytics_user_id');
    if (!userId) {
      userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('analytics_user_id', userId);
    }
    return userId;
  }

  private detectBrowser(): { browser: string; browserVersion: string } {
    const ua = navigator.userAgent;
    let browser = 'Unknown';
    let browserVersion = 'Unknown';

    if (ua.includes('Chrome/') && !ua.includes('Edg/')) {
      browser = 'Chrome';
      browserVersion = ua.match(/Chrome\/(\d+\.\d+)/)?.[1] || 'Unknown';
    } else if (ua.includes('Safari/') && !ua.includes('Chrome')) {
      browser = 'Safari';
      browserVersion = ua.match(/Version\/(\d+\.\d+)/)?.[1] || 'Unknown';
    } else if (ua.includes('Firefox/')) {
      browser = 'Firefox';
      browserVersion = ua.match(/Firefox\/(\d+\.\d+)/)?.[1] || 'Unknown';
    } else if (ua.includes('Edg/')) {
      browser = 'Edge';
      browserVersion = ua.match(/Edg\/(\d+\.\d+)/)?.[1] || 'Unknown';
    }

    return { browser, browserVersion };
  }

  private detectOS(): string {
    const ua = navigator.userAgent;
    if (ua.includes('Windows NT')) return 'Windows';
    if (ua.includes('Mac OS X')) return 'macOS';
    if (ua.includes('Linux')) return 'Linux';
    if (ua.includes('Android')) return 'Android';
    if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
    return 'Unknown';
  }

  private detectDevice(): string {
    const ua = navigator.userAgent;
    if (/tablet|ipad|playbook|silk/i.test(ua)) return 'Tablet';
    if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(ua)) return 'Mobile';
    return 'Desktop';
  }

  private async getGeolocation(): Promise<GeoLocation> {
    try {
      // Using a free geolocation API (you can replace with your preferred service)
      const response = await fetch('https://ipapi.co/json/', {
        headers: {
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) throw new Error('Geolocation fetch failed');
      
      const data = await response.json();
      
      return {
        country: data.country_name || 'Unknown',
        region: data.region || 'Unknown',
        city: data.city || 'Unknown',
        latitude: data.latitude || 0,
        longitude: data.longitude || 0,
        timezone: data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone
      };
    } catch (error) {
      console.error('Error getting geolocation:', error);
      // Fallback to timezone-based location
      return {
        country: 'Unknown',
        region: 'Unknown',
        city: 'Unknown',
        latitude: 0,
        longitude: 0,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };
    }
  }

  private async initializeSessionData(): Promise<AnalyticsData> {
    const { browser, browserVersion } = this.detectBrowser();
    const geo = await this.getGeolocation();
    
    return {
      sessionId: this.sessionId,
      userId: this.userId,
      timestamp: Date.now(),
      page: window.location.pathname,
      referrer: document.referrer || 'Direct',
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      country: geo.country,
      region: geo.region,
      city: geo.city,
      timezone: geo.timezone,
      latitude: geo.latitude,
      longitude: geo.longitude,
      browser,
      browserVersion,
      os: this.detectOS(),
      device: this.detectDevice(),
      isMobile: /mobile|tablet/i.test(navigator.userAgent),
      isUSA: geo.country === 'United States',
      pageViews: 1,
      events: []
    };
  }

  private setupEventListeners(): void {
    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.updateSessionDuration();
        this.saveAnalytics();
      }
    });

    // Track before unload
    window.addEventListener('beforeunload', () => {
      this.updateSessionDuration();
      this.saveAnalytics();
    });

    // Track clicks on important elements
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      
      // Track CTA clicks
      if (target.matches('button, a[href^="tel:"], a[href^="mailto:"]')) {
        const eventName = target.matches('a[href^="tel:"]') ? 'phone_click' : 
                         target.matches('a[href^="mailto:"]') ? 'email_click' : 
                         'button_click';
        
        this.trackEvent(eventName, {
          text: target.textContent,
          href: (target as HTMLAnchorElement).href || undefined
        });
      }
    });
  }

  private updateSessionDuration(): void {
    this.sessionData.sessionDuration = Date.now() - this.startTime;
  }

  async trackPageView(page: string): Promise<void> {
    // Wait for initialization if needed
    if (!this.sessionData.sessionId) {
      setTimeout(() => this.trackPageView(page), 100);
      return;
    }
    
    this.sessionData.page = page;
    this.sessionData.pageViews++;
    
    // Send to third-party tracking services
    this.sendToThirdPartyTracking('page_view', { page });
    
    // Only track for USA customers in our analytics
    if (this.sessionData.isUSA) {
      await this.saveAnalytics();
    }
  }

  trackEvent(eventName: string, properties?: Record<string, unknown>): void {
    // Wait for initialization if needed
    if (!this.sessionData.sessionId) {
      setTimeout(() => this.trackEvent(eventName, properties), 100);
      return;
    }
    
    if (!this.sessionData.events) {
      this.sessionData.events = [];
    }
    
    this.sessionData.events.push({
      name: eventName,
      timestamp: Date.now(),
      properties
    });

    // Send to third-party tracking services
    this.sendToThirdPartyTracking(eventName, properties);

    // Save immediately for important events
    if (['appointment_request', 'phone_click', 'form_submit'].includes(eventName)) {
      this.saveAnalytics();
    }
  }

  private async saveAnalytics(): Promise<void> {
    try {
      // For now, store in localStorage - in production, send to your backend
      const analyticsData = localStorage.getItem('analytics_data') || '[]';
      const data = JSON.parse(analyticsData);
      
      // Update current session
      const existingSessionIndex = data.findIndex((d: AnalyticsData) => d.sessionId === this.sessionId);
      if (existingSessionIndex > -1) {
        data[existingSessionIndex] = this.sessionData;
      } else {
        data.push(this.sessionData);
      }
      
      // Keep only last 100 sessions in localStorage
      if (data.length > 100) {
        data.shift();
      }
      
      localStorage.setItem('analytics_data', JSON.stringify(data));
      
      // In production, send to backend
      // await fetch(this.analyticsEndpoint, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(this.sessionData)
      // });
      
    } catch (error) {
      console.error('Error saving analytics:', error);
    }
  }

  // Get analytics data (for testing/debugging)
  getAnalyticsData(): AnalyticsData[] {
    const data = localStorage.getItem('analytics_data');
    return data ? JSON.parse(data) : [];
  }

  // Get session summary
  getSessionSummary(): {
    totalSessions: number;
    usaSessions: number;
    browsers: Record<string, number>;
    devices: Record<string, number>;
    topPages: Array<{ page: string; views: number }>;
    topCities: Array<{ city: string; count: number }>;
  } {
    const data = this.getAnalyticsData();
    
    const summary = {
      totalSessions: data.length,
      usaSessions: data.filter(d => d.isUSA).length,
      browsers: {} as Record<string, number>,
      devices: {} as Record<string, number>,
      topPages: [] as Array<{ page: string; views: number }>,
      topCities: [] as Array<{ city: string; count: number }>
    };

    // Count browsers
    data.forEach(session => {
      summary.browsers[session.browser] = (summary.browsers[session.browser] || 0) + 1;
      summary.devices[session.device] = (summary.devices[session.device] || 0) + 1;
    });

    // Count page views
    const pageViews: Record<string, number> = {};
    data.forEach(session => {
      pageViews[session.page] = (pageViews[session.page] || 0) + session.pageViews;
    });
    summary.topPages = Object.entries(pageViews)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([page, views]) => ({ page, views }));

    // Count cities (USA only)
    const cities: Record<string, number> = {};
    data.filter(d => d.isUSA).forEach(session => {
      const cityKey = `${session.city}, ${session.region}`;
      cities[cityKey] = (cities[cityKey] || 0) + 1;
    });
    summary.topCities = Object.entries(cities)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([city, count]) => ({ city, count }));

    return summary;
  }

  private sendToThirdPartyTracking(eventName: string, properties?: Record<string, unknown>): void {
    // Initialize tracking scripts if not already loaded
    this.initializeThirdPartyTracking();

    // Google Analytics/Tag Manager
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      const fbEventName = this.mapEventNameForFacebook(eventName);
      (window as any).fbq('track', fbEventName, properties);
    }

    // Google Tag Manager DataLayer
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...properties
      });
    }

    // CallRail Event Tracking
    if (typeof window !== 'undefined' && (window as any).CallRail) {
      (window as any).CallRail.track(eventName, properties);
    }
  }

  private initializeThirdPartyTracking(): void {
    // Google Tag Manager
    if (!document.querySelector('[src*="gtm.js"]') && !window.dataLayer) {
      window.dataLayer = window.dataLayer || [];
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-K4XG7ZJ4');
      `;
      document.head.appendChild(gtmScript);
    }

    // CallRail
    if (!document.querySelector('[src*="callrail.com"]')) {
      const callRailScript = document.createElement('script');
      callRailScript.src = '//cdn.callrail.com/companies/453122914/99c405dbdf8bc7511fbb/12/swap.js';
      callRailScript.type = 'text/javascript';
      callRailScript.async = true;
      document.body.appendChild(callRailScript);

      // CallRail form tracking setup
      const callRailFormScript = document.createElement('script');
      callRailFormScript.innerHTML = `
        window.addEventListener('DOMContentLoaded', function() {
          if (typeof CallRail !== 'undefined') {
            CallRail.startSwap();
            CallRail.startFormTracking({
              selector: 'form',
              required_fields: ['phone', 'email'],
              form_capture: true
            });
          }
        });
      `;
      document.head.appendChild(callRailFormScript);
    }

    // Facebook Pixel
    if (!(window as any).fbq) {
      const fbPixelScript = document.createElement('script');
      fbPixelScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '395306154557054');
      `;
      document.head.appendChild(fbPixelScript);
    }

    // Google Ads
    if (!document.querySelector('[src*="googletagmanager.com/gtag/js"]')) {
      const googleAdsScript = document.createElement('script');
      googleAdsScript.async = true;
      googleAdsScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-1068394845";
      document.head.appendChild(googleAdsScript);

      const googleAdsConfig = document.createElement('script');
      googleAdsConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-1068394845');
      `;
      document.head.appendChild(googleAdsConfig);
    }

    // Microsoft Clarity
    if (!(window as any).clarity) {
      const clarityScript = document.createElement('script');
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "tbq0ecz52d");
      `;
      document.head.appendChild(clarityScript);
    }
  }

  private mapEventNameForFacebook(eventName: string): string {
    const mapping: Record<string, string> = {
      'form_start': 'InitiateCheckout',
      'form_complete': 'Lead',
      'appointment_start': 'InitiateCheckout',
      'appointment_request': 'Schedule',
      'phone_call': 'Contact',
      'phone_click': 'Contact',
      'email_click': 'Contact',
      'button_click': 'ViewContent'
    };
    return mapping[eventName] || 'CustomEvent';
  }
}

// Declare global types for tracking services
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer: any[];
    clarity?: (...args: any[]) => void;
    CallRail?: {
      startSwap: () => void;
      startFormTracking: (config: any) => void;
      track: (event: string, data: any) => void;
    };
  }
}

export default AnalyticsService;