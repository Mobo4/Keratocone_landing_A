import { sendGTMEvent } from '@next/third-parties/google';

export function trackFormSubmit() {
  sendGTMEvent({ event: 'ghl_form_submit' });
}
