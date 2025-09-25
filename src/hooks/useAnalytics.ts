import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnalyticsService from '@/services/analyticsService';

export const useAnalytics = () => {
  const location = useLocation();
  const analytics = AnalyticsService.getInstance();

  useEffect(() => {
    // Track page view on route change
    analytics.trackPageView(location.pathname);
  }, [location.pathname, analytics]);

  return {
    trackEvent: (eventName: string, properties?: Record<string, unknown>) => {
      analytics.trackEvent(eventName, properties);
    },
    getAnalyticsData: () => analytics.getAnalyticsData(),
    getSessionSummary: () => analytics.getSessionSummary()
  };
};

// Hook to track form submissions
export const useFormAnalytics = (formName: string) => {
  const { trackEvent } = useAnalytics();

  return {
    trackFormStart: () => trackEvent('form_start', { formName }),
    trackFormComplete: (data?: Record<string, unknown>) => trackEvent('form_complete', { formName, ...data }),
    trackFormError: (error: string) => trackEvent('form_error', { formName, error }),
    trackFieldInteraction: (fieldName: string) => trackEvent('field_interaction', { formName, fieldName })
  };
};

// Hook to track appointment requests
export const useAppointmentAnalytics = () => {
  const { trackEvent } = useAnalytics();

  return {
    trackAppointmentStart: (source: string) => trackEvent('appointment_start', { source }),
    trackAppointmentComplete: (appointmentType: string) => trackEvent('appointment_request', { type: appointmentType }),
    trackAppointmentCancel: () => trackEvent('appointment_cancel')
  };
};