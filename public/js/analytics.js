// Google Analytics GA4 with cross-domain tracking
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Configuration with cross-domain tracking
gtag('config', 'G-CT7WS4307Z', {
  'linker': {
    'domains': ['www.drbonakdar.net', 'drbonakdar.net']
  },
  'cookie_domain': 'drbonakdar.net',
  'cookie_flags': 'SameSite=None;Secure'
});

// Track phone clicks as conversions with enhanced tracking
document.addEventListener('DOMContentLoaded', function() {
  var phoneLinks = document.querySelectorAll('a[href^="tel:"], .callrail-phone');
  phoneLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Google Analytics conversion
      gtag('event', 'conversion', {
        'send_to': 'G-CT7WS4307Z/phone_call',
        'value': 200.0,
        'currency': 'USD'
      });
      
      // Facebook Pixel tracking
      fbq('track', 'Contact', {
        value: 200.0,
        currency: 'USD'
      });
      
      // Track page scroll depth
      window.scrollTracker = window.scrollTracker || {};
      var scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      gtag('event', 'scroll', {
        'scroll_depth': scrollDepth
      });
    });
  });

  // Track form submissions with enhanced tracking
  var forms = document.querySelectorAll('form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function() {
      gtag('event', 'generate_lead', {
        'value': 250.0,
        'currency': 'USD'
      });
      
      // Facebook Pixel tracking
      fbq('track', 'Lead', {
        value: 250.0,
        currency: 'USD'
      });
    });
  });

  // Track scroll depth
  var scrollDepths = [25, 50, 75, 90];
  var trackedDepths = [];
  
  window.addEventListener('scroll', function() {
    var scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    
    scrollDepths.forEach(function(depth) {
      if (scrollPercent >= depth && trackedDepths.indexOf(depth) === -1) {
        trackedDepths.push(depth);
        gtag('event', 'scroll_depth', {
          'scroll_depth': depth
        });
      }
    });
  });

  // Track time on page
  var startTime = Date.now();
  window.addEventListener('beforeunload', function() {
    var timeOnPage = Math.round((Date.now() - startTime) / 1000);
    gtag('event', 'time_on_page', {
      'time_seconds': timeOnPage
    });
  });
});

// Facebook Pixel
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '395306154557054'); 
fbq('track', 'PageView');