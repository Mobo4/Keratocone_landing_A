import { sendGTMEvent } from '@next/third-parties/google';

// ── Form submission (complete) ─────────────────────────────────────────────
export function trackFormSubmit() {
  sendGTMEvent({ event: 'ghl_form_submit' });
}

// ── Partial form capture events ────────────────────────────────────────────
// These build remarketing audiences in GA4/GTM for people who showed intent
// but did not complete the form.

/** Fires once when the user first interacts with any form field. */
export function trackFormStarted() {
  sendGTMEvent({ event: 'form_started', form_location: 'contact' });
}

/**
 * Fires when the email field loses focus with a valid email.
 * The email value is included so GTM's Enhanced Conversions tag can hash it
 * for server-side Google attribution (no raw email stored in GA4).
 */
export function trackEmailEntered(email: string) {
  sendGTMEvent({
    event: 'form_email_entered',
    // GTM Enhanced Conversions picks up 'email' key and hashes it
    email: email.toLowerCase().trim(),
  });
}

/** Fires when the phone field loses focus with a plausible phone number. */
export function trackPhoneEntered() {
  sendGTMEvent({ event: 'form_phone_entered', form_location: 'contact' });
}

/** Fires when any tel: link is clicked anywhere on the site. */
export function trackPhoneClick(location?: string) {
  sendGTMEvent({ event: 'phone_click', click_location: location || 'unknown' });
}
