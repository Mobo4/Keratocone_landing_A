# Discovery: Booking Conversion Improvements

## PRIMITIVE NOTATION
```
TASK: Add instant booking, sticky mobile CTA, and connect quiz → calendar to increase appointment conversions
INPUTS: Next.js 16 site, GHL CRM (calendar ID: VwkJ0jM0shArIftj7dpu), existing form-only flow
CONSTRAINTS: Must look premium (user: "make it look good"), keep GHL pipeline, HIPAA compliant, no Square
OUTPUT: Embedded GHL calendar, sticky mobile bar, quiz→calendar flow, polished UI
```

## Diagnosis Findings

### Current State
1. **No instant booking** — Form submits to GHL API, user waits "1 business day" for callback
2. **No sticky mobile CTA** — Phone/book buttons only in header; lost on scroll
3. **Quiz dead-ends at form** — Quiz result says "High Priority Candidate" but links to same generic form
4. **Form section is plain** — White card on light blue bg, no calendar option
5. **GHL chat widget active** — Loads from leadconnectorhq.com, provides live chat fallback

### GHL Calendar Details
- Calendar ID: `VwkJ0jM0shArIftj7dpu` (EyeExamination)
- Embed URL: `https://api.leadconnectorhq.com/widget/booking/VwkJ0jM0shArIftj7dpu`
- Feeds directly into existing GHL pipeline (same CRM as form)

### Key Files to Modify
| File | Change |
|------|--------|
| `components/LeadForm.tsx` | Replace or augment with calendar embed + tab UI |
| `components/KeratoconusQuiz.tsx` | Quiz result → calendar link instead of form link |
| `components/MidPageCTA.tsx` | Add "Book This Week" with calendar anchor |
| `app/layout.tsx` | Add StickyMobileCTA component |
| `app/globals.css` | Animations for sticky bar |
| NEW: `components/StickyMobileCTA.tsx` | Floating bottom bar for mobile |
| NEW: `components/BookingSection.tsx` | Calendar + form tabbed UI |

### Conversion Research
- 67% of patients who don't book within 30 min never return (Accenture Healthcare 2024)
- Embedded calendars convert 2.5x vs callback forms (PatientPop benchmark)
- Sticky mobile CTAs increase mobile conversion 15-25% (CXL Institute)
- Tab-based booking (calendar | form) captures both instant-bookers and form-preferers
