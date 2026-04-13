/**
 * First-party tracking utilities — keratocones.com
 *
 * Captures and persists via 1st-party cookies (SameSite=Lax):
 *   _vid        Visitor UUID — set once, never changes (365-day)
 *   _vc         Visit count — incremented each page load (365-day)
 *   _ft_*       First touch UTMs + gclid — set once, never overwritten (90-day)
 *   _lt_*       Last touch UTMs + gclid — overwritten on every tracked visit (90-day)
 *
 * Replaces the sessionStorage approach in ContactForm.tsx — cookies persist
 * across tabs, sessions, and multi-visit journeys (sessionStorage dies on tab close).
 *
 * Usage:
 *   captureAndGetTracking()  — call on every page load (TrackingInit component)
 *   getStoredTracking()      — read-only, call when you need the current state
 */

const UTM_DAYS = 90;
const VIS_DAYS = 365;

// ─── Cookie helpers ────────────────────────────────────────────────────────

function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return;
  const exp = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${exp};path=/;SameSite=Lax`;
}

function getCookie(name: string): string {
  if (typeof document === 'undefined') return '';
  const m = document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : '';
}

function genUUID(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

// ─── Types ─────────────────────────────────────────────────────────────────

export interface TouchData {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  gclid: string;
}

export interface TrackingContext {
  visitorId: string;
  visitCount: number;
  firstTouch: TouchData;
  lastTouch: TouchData;
}

// ─── Internal helpers ──────────────────────────────────────────────────────

function readTouch(prefix: string): TouchData {
  return {
    source:   getCookie(`${prefix}_src`),
    medium:   getCookie(`${prefix}_med`),
    campaign: getCookie(`${prefix}_cmp`),
    content:  getCookie(`${prefix}_cnt`),
    term:     getCookie(`${prefix}_trm`),
    gclid:    getCookie(`${prefix}_gc`),
  };
}

function writeTouch(prefix: string, t: TouchData): void {
  if (t.source)   setCookie(`${prefix}_src`, t.source,   UTM_DAYS);
  if (t.medium)   setCookie(`${prefix}_med`, t.medium,   UTM_DAYS);
  if (t.campaign) setCookie(`${prefix}_cmp`, t.campaign, UTM_DAYS);
  if (t.content)  setCookie(`${prefix}_cnt`, t.content,  UTM_DAYS);
  if (t.term)     setCookie(`${prefix}_trm`, t.term,     UTM_DAYS);
  if (t.gclid)    setCookie(`${prefix}_gc`,  t.gclid,    UTM_DAYS);
}

function touchFromURL(): TouchData | null {
  if (typeof window === 'undefined') return null;
  const p = new URLSearchParams(window.location.search);
  const gclid = p.get('gclid') || p.get('wbraid') || p.get('gbraid') || '';
  const source   = p.get('utm_source')   || (gclid ? 'google' : '');
  const medium   = p.get('utm_medium')   || (gclid ? 'cpc'    : '');
  const campaign = p.get('utm_campaign') || '';
  const content  = p.get('utm_content')  || '';
  const term     = p.get('utm_term')     || '';
  if (!source && !medium && !campaign && !gclid) return null;
  return { source, medium, campaign, content, term, gclid };
}

function hasData(t: TouchData): boolean {
  return !!(t.source || t.medium || t.campaign || t.gclid);
}

// ─── Public API ────────────────────────────────────────────────────────────

/**
 * Call once on every page load. Captures URL params into cookies,
 * increments visit count, returns full tracking context.
 */
export function captureAndGetTracking(): TrackingContext {
  let visitorId = getCookie('_vid');
  if (!visitorId) {
    visitorId = genUUID();
    setCookie('_vid', visitorId, VIS_DAYS);
  }

  const visitCount = parseInt(getCookie('_vc') || '0', 10) + 1;
  setCookie('_vc', String(visitCount), VIS_DAYS);

  const fromURL = touchFromURL();

  const existingFirst = readTouch('_ft');
  if (!hasData(existingFirst) && fromURL) {
    writeTouch('_ft', fromURL);
  }

  if (fromURL) {
    writeTouch('_lt', fromURL);
    // Keep legacy 'gclid' cookie key for backwards compat
    if (fromURL.gclid) setCookie('gclid', fromURL.gclid, UTM_DAYS);
  }

  const firstTouch = (!hasData(existingFirst) && fromURL) ? fromURL : existingFirst;
  const lastTouch  = fromURL ?? readTouch('_lt');

  return { visitorId, visitCount, firstTouch, lastTouch };
}

/**
 * Read current tracking state from cookies — no side effects.
 */
export function getStoredTracking(): TrackingContext {
  return {
    visitorId:  getCookie('_vid'),
    visitCount: parseInt(getCookie('_vc') || '1', 10),
    firstTouch: readTouch('_ft'),
    lastTouch:  readTouch('_lt'),
  };
}
