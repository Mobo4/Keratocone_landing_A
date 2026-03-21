# FINAL PRD: Geo-Personalization via Vercel Edge Middleware

## Synthesis Notes

### Where all 3 agree:
- Extend existing middleware.ts (don't replace)
- Config-driven personalization with city arrays per region
- Spanish translations as separate file
- Pages read headers server-side, pass as props
- Phone number NEVER changes
- Schema markup NEVER changes
- Default fallback for unknown cities / bots

### Key decisions from PRD-C (challenge analysis):

| Decision | Source | Rationale |
|----------|--------|-----------|
| Use raw Vercel headers, NOT @vercel/functions | PRD-C | Zero dependencies. x-vercel-ip-city is always available at edge. |
| Props approach, NOT Context | PRD-C vs PRD-B | One level of prop drilling. Context can't cross server/client boundary for Hero. |
| Add Vary: x-visitor-city header | PRD-C | Prevents CDN serving wrong city's cache. Cardinality manageable (~20-30 cities). |
| Make page.tsx async | PRD-C | Required to call headers(). Works fine with client component children. |
| No metadata personalization | All 3 | SEO stays clean. Google sees consistent title/description/schema. |

### Primitive Gate:
1. **Simplest thing?** YES — reads existing Vercel headers, swaps text strings. No new services.
2. **New dependencies?** NO — zero npm installs.
3. **Future complexity?** LOW — one config file defines all personalization.
4. **Over-engineered?** NO — props, not context. Direct headers, not SDK.
5. **Break something?** RISK: cache serving wrong city. MITIGATED by Vary header.

---

## Acceptance Criteria

- [ ] AC1: Build passes with zero TypeScript errors
- [ ] AC2: Middleware sets x-visitor-city, x-visitor-region, x-visitor-country headers
- [ ] AC3: Middleware sets x-utm-source, x-utm-campaign, x-keyword headers
- [ ] AC4: Middleware sets Vary: x-visitor-city on responses
- [ ] AC5: Homepage shows personalized headline when x-visitor-city matches a known city
- [ ] AC6: Homepage shows default headline when x-visitor-city is empty
- [ ] AC7: Phone number is (714) 558-0641 on all personalized variants
- [ ] AC8: Schema markup stays Santa Ana address on all variants
- [ ] AC9: /es pages show Spanish personalization strings
- [ ] AC10: Scleral LP, Cornea LP, Contact page read geo headers
- [ ] AC11: Existing locale detection still works (x-locale header)
- [ ] AC12: UTM parameters forwarded to pages via headers

## Technical Design

### File changes:

**1. middleware.ts** — Extend with geo + UTM headers
- Read `x-vercel-ip-city`, `x-vercel-ip-country-region`, `x-vercel-ip-country` from request
- Forward as `x-visitor-city`, `x-visitor-region`, `x-visitor-country`
- Read UTM params from URL: utm_source, utm_campaign, keyword
- Forward as `x-utm-source`, `x-utm-campaign`, `x-keyword`
- Add `Vary: x-visitor-city` to ALL responses

**2. lib/geo-personalization.ts** — NEW
- City arrays: OC_CITIES, LA_CITIES, IE_CITIES, SD_CITIES
- `getPersonalization(city: string): GeoPersonalization`
- Returns: badge, headline, subhead, urgency, socialProof, competitorAngle
- Case-insensitive matching, fallback to generic California content

**3. lib/geo-personalization-es.ts** — NEW
- Same structure, Spanish strings
- `getPersonalizationEs(city: string): GeoPersonalization`

**4. components/GeoBadge.tsx** — NEW
- Thin bar: "Serving [City] Patients" or "Atendemos pacientes de [City]"
- Only renders when city is known
- Server component (no 'use client')

**5. app/page.tsx** — Modify
- Make async: `export default async function LandingPage()`
- Read headers: `const headersList = await headers(); const city = headersList.get('x-visitor-city')`
- Get personalization: `const geo = getPersonalization(city)`
- Pass to Hero: `headline={geo.headline}`, `subheadline={geo.subhead}`
- Pass urgency to CTA text
- Render GeoBadge above Hero if city known

**6. app/es/page.tsx** — Modify
- Same pattern with getPersonalizationEs

**7. app/lp/keratoconus-scleral/page.tsx** — Modify
- Read city, personalize Hero headline + social proof

**8. app/lp/cornea-specialist/page.tsx** — Modify
- Read city, personalize Hero headline + urgency CTA

**9. app/contact/page.tsx** — Modify
- Read city, personalize subheadline in ContactPageContent

## Dependencies
- No new npm packages
- Vercel automatically provides x-vercel-ip-* headers at edge
- Existing middleware.ts locale logic preserved

## Risks
1. **CDN cache serving wrong city** — Mitigated by Vary: x-visitor-city
2. **Vercel geo inaccuracy** — Use approximate language ("minutes away", "short drive"), never specific distances
3. **SEO impact** — None. Metadata is static. Google sees default content.
4. **localhost development** — Headers empty, default content shown. Works fine.
