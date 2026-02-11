/**
 * FILE: data/city-faqs-kc.ts
 * PURPOSE: City-type-aware FAQ system for keratocones.com city pages
 * AUTHOR: Claude Code
 * CREATED: 2026-02-10
 *
 * CONTEXT: FAQs serve dual purposes:
 * 1. SEO: FAQPage structured data earns rich snippets in Google SERPs
 * 2. Anti-doorway: Type-aware answers differentiate city pages beyond name swaps
 *
 * STRUCTURE:
 * - 3 base FAQs that appear on every city page (with type-aware answer variants)
 * - 2-3 bonus FAQs specific to each city type (unique questions per type)
 * - Total: 5-6 FAQs per city page, all with keratoconus-specific content
 *
 * ALL ANSWERS ARE MEDICALLY ACCURATE and reference real treatments/technologies.
 */

import { getCityType, CityType } from './city-types';

export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Main function: returns 5-6 FAQs for a given city.
 * Combines 3 base FAQs (type-aware answers) + 2-3 type-specific bonus FAQs.
 */
export function getCityTypeFAQs(citySlug: string, cityName: string): FAQ[] {
  const cityType = getCityType(citySlug);
  const baseFAQs = getBaseFAQsWithContext(cityType, cityName);
  const bonusFAQs = getBonusFAQs(cityType, cityName);
  return [...baseFAQs, ...bonusFAQs];
}

// ---------------------------------------------------------------------------
// BASE FAQs: 3 universal questions with city-type-aware answers
// ---------------------------------------------------------------------------

function getBaseFAQsWithContext(cityType: CityType, cityName: string): FAQ[] {
  return [
    getDiagnosticFAQ(cityType, cityName),
    getTreatmentFAQ(cityType, cityName),
    getSchedulingFAQ(cityType, cityName),
  ];
}

/**
 * FAQ 1: Diagnostic process — how keratoconus is detected
 */
function getDiagnosticFAQ(cityType: CityType, cityName: string): FAQ {
  const answers: Record<CityType, string> = {
    'coastal-affluent': `Keratoconus is diagnosed using corneal topography, which creates a detailed 3D map of your corneal surface. For ${cityName} patients, we use the Pentacam and Medmont corneal topographers to detect even subtle corneal irregularity—important because early-stage keratoconus can be masked by the strong prescriptions that active coastal lifestyles demand. The exam is painless, takes about 15 minutes, and provides definitive answers that a standard eye chart cannot. If keratoconus is confirmed, we immediately assess severity, discuss cross-linking candidacy to halt progression, and begin planning your scleral lens fitting.`,

    'coastal-active': `Diagnosing keratoconus requires corneal topography—a painless imaging scan that maps the exact shape of your cornea in seconds. For active ${cityName} patients, this technology is essential because standard eye exams only measure how well you read a chart, not whether your cornea is structurally healthy. Many patients from ${cityName} are referred to us after their optometrist notices that astigmatism keeps increasing despite new glasses. Our topography reveals the telltale cone-shaped cornea and determines how advanced the condition is. From there, we discuss whether cross-linking is needed to stop progression and design a scleral lens to restore clear vision for your active lifestyle.`,

    'tech-university': `Keratoconus diagnosis at our practice uses corneal topography, which maps your corneal surface with micron-level precision. For ${cityName} patients—especially those in their teens and twenties—this screening is critical because keratoconus progresses fastest during exactly these years. The exam takes about 15 minutes and is completely non-invasive. We also measure corneal thickness (pachymetry) and use anterior segment OCT to evaluate corneal structure layer by layer. If keratoconus is confirmed, we determine the stage, assess whether corneal cross-linking is indicated to halt progression, and begin your scleral lens fitting plan optimized for digital work demands.`,

    'family-suburban': `Keratoconus is detected using corneal topography—a quick, painless scan that maps your child's corneal shape. For ${cityName} families, we recommend this screening whenever a child's prescription changes rapidly or an optometrist notes unusual astigmatism. Children do not need to be dilated for this test, and results are available immediately. If keratoconus is confirmed, we explain the findings to both parent and patient in plain language, discuss whether corneal cross-linking is appropriate to prevent further progression, and design a treatment plan that accounts for your child's age, activities, and school schedule.`,

    'affluent-residential': `Our keratoconus diagnostic workup for ${cityName} patients is comprehensive. We use dual corneal topographers (Pentacam and Medmont) to map the anterior and posterior corneal surfaces, measure corneal thickness at multiple points, and identify the precise location and degree of the cone. Anterior segment OCT provides cross-sectional imaging of corneal structure. This thorough approach ensures accurate staging, which directly influences treatment decisions—particularly whether corneal cross-linking is appropriate. The entire evaluation takes about 30 minutes and produces the detailed baseline data that Dr. Bonakdar uses to custom-design your scleral lens.`,

    'urban-diverse': `Keratoconus is diagnosed with corneal topography, a painless imaging test that takes about 15 minutes. For ${cityName} patients, early screening is especially important because keratoconus prevalence is higher in certain ethnic communities—yet many patients have never had this test. If your glasses prescription keeps changing, or if soft contacts no longer provide clear vision, topography can reveal whether keratoconus is the cause. We explain results clearly and can communicate in Spanish. If keratoconus is confirmed, we discuss all treatment options, insurance coverage, and financial assistance before starting care.`,

    'suburban-commuter': `Keratoconus diagnosis requires corneal topography—a painless scan that reveals the cone-shaped corneal distortion standard eye exams cannot detect. For ${cityName} commuters, this is often the test that finally explains why night driving has become dangerous despite new glasses. The exam takes about 15 minutes and provides a definitive answer. If keratoconus is confirmed, we discuss severity, cross-linking to prevent further progression, and scleral lens fitting to restore the crisp distance vision and contrast sensitivity that safe driving demands.`,

    'inland-growing': `Keratoconus is diagnosed using corneal topography, a non-invasive imaging test that maps the shape of your cornea. Many ${cityName} patients arrive at our practice after years of worsening vision that standard glasses cannot correct—topography reveals why. The scan takes about 15 minutes and provides immediate results. Because ${cityName} patients travel for their appointments, we structure the diagnostic visit efficiently: topography, pachymetry, refraction, and consultation all happen in a single session. If keratoconus is confirmed, we discuss staging, cross-linking candidacy, and begin the scleral lens fitting process during the same visit whenever possible.`,

    'north-county-sd': `For ${cityName} patients traveling to our Santa Ana practice, we design the diagnostic visit to be as comprehensive and efficient as possible. Corneal topography, pachymetry, anterior segment OCT, refraction, and clinical examination are all completed in your first appointment—typically 60-90 minutes. Corneal topography is the definitive diagnostic tool: it creates a color-coded map of your corneal surface that reveals the characteristic cone-shaped bulging, even in early stages. Results are immediate, and Dr. Bonakdar reviews them with you the same day. If keratoconus is confirmed, we often proceed directly to trial scleral lens fitting during that same visit, maximizing the value of your trip from ${cityName}.`,

    'la-gateway': `Keratoconus diagnosis requires corneal topography—a painless, non-invasive scan that standard eye exams do not include. For ${cityName} patients who may have seen multiple providers without a clear answer, this single test often provides the explanation. The topography creates a detailed 3D map of your corneal surface, revealing the irregular cone shape that causes the ghosting, halos, and fluctuating vision you have been experiencing. Our diagnostic workup also includes pachymetry and anterior segment OCT. Results are reviewed the same day, and if keratoconus is confirmed, we discuss staging, progression risk, cross-linking candidacy, and scleral lens options immediately.`,
  };

  return {
    question: `How is keratoconus diagnosed for patients from ${cityName}?`,
    answer: answers[cityType],
  };
}

/**
 * FAQ 2: Treatment options — scleral lenses and beyond
 */
function getTreatmentFAQ(cityType: CityType, cityName: string): FAQ {
  const answers: Record<CityType, string> = {
    'coastal-affluent': `For ${cityName} keratoconus patients, treatment follows a proven hierarchy. First, if the condition is still progressing, corneal cross-linking (CXL) is recommended to halt further thinning—we coordinate with top CXL surgeons in Orange County. Second, custom scleral lenses restore vision quality by vaulting over the irregular cornea, creating a smooth optical surface. We use premium lens materials with maximum oxygen permeability and UV protection—essential for ${cityName}'s coastal environment. For advanced cases where scleral lenses alone cannot achieve satisfactory vision, we co-manage Intacs corneal implants and corneal transplant procedures with leading surgeons.`,

    'coastal-active': `Treatment for ${cityName} keratoconus patients centers on two priorities: stopping progression and restoring functional vision. Corneal cross-linking (CXL) addresses the first—it stiffens the cornea to prevent further thinning. Custom scleral lenses address the second—they provide stable, crisp vision that stays put during surfing, running, and beach activities. Unlike smaller rigid lenses, scleral lenses are virtually impossible to dislodge during physical activity. For ${cityName} patients, we design fits that resist wind, sand, and moisture, and we select lens materials with built-in UV protection. If cross-linking and scleral lenses together are insufficient, we discuss surgical options including Intacs and corneal transplant.`,

    'tech-university': `Keratoconus treatment for ${cityName} patients combines stabilization and vision optimization. Corneal cross-linking (CXL) is the gold standard for stopping progression—critical for patients in their teens and twenties when the disease advances fastest. Custom scleral lenses then restore clear, comfortable vision optimized for screen work: we calculate your lens prescription for typical monitor distances and select materials that resist deposits from long wear days. Many ${cityName} tech professionals find that scleral lenses eliminate the end-of-day fatigue and headaches that glasses could not solve. Treatment is typically covered under medical insurance as a diagnosed corneal disease.`,

    'family-suburban': `For ${cityName} families, keratoconus treatment depends on the patient's age and disease stage. For teenagers with progressive keratoconus, corneal cross-linking (CXL) is the priority—this FDA-approved procedure halts further corneal thinning and can prevent the need for a transplant later in life. For vision restoration, custom scleral lenses provide dramatically clearer sight than glasses or soft contacts can achieve. We fit scleral lenses on patients as young as 12, using appropriately sized designs and teaching age-appropriate insertion techniques. The combination of cross-linking (stop the disease) plus scleral lenses (restore the vision) gives ${cityName} families the best long-term outcome.`,

    'affluent-residential': `Dr. Bonakdar's keratoconus treatment protocol for ${cityName} patients is comprehensive and evidence-based. Step one: assess whether corneal cross-linking (CXL) is needed to stabilize the cornea—if the condition is progressing, CXL is essential and we coordinate with fellowship-trained corneal surgeons. Step two: custom scleral lens design using your specific topography data, with iterative fitting to achieve optimal vault, comfort, and optical quality. We use advanced lens designs including toric, multifocal, and quadrant-specific options when standard profiles are insufficient. Step three: long-term monitoring with topography every 6-12 months to ensure stability. For advanced cases, we manage referrals for Intacs or corneal transplant with the same meticulous approach.`,

    'urban-diverse': `Keratoconus treatment for ${cityName} patients follows a clear pathway. First, we determine if the disease is still progressing using serial corneal topography. If so, we refer for corneal cross-linking (CXL)—the only procedure that stops keratoconus from getting worse. Second, we fit custom scleral lenses to restore clear vision. Scleral lenses are dramatically more effective than glasses for keratoconus because they create a smooth optical surface over the irregular cornea. Treatment is classified as medically necessary, and most insurance plans provide coverage. We explain every step, discuss costs transparently, and ensure ${cityName} patients understand their options before proceeding.`,

    'suburban-commuter': `For ${cityName} keratoconus patients, treatment focuses on two goals: stopping progression and restoring safe driving vision. Corneal cross-linking (CXL) addresses the first goal—we coordinate with corneal surgeons to ensure timely treatment. Custom scleral lenses address the second—they eliminate the halos, ghosting, and glare that make night driving dangerous by creating a perfectly smooth optical surface over the cone-shaped cornea. Most ${cityName} patients achieve 20/25 or better vision with scleral lenses, a dramatic improvement from the 20/50+ they see with glasses. Treatment is structured efficiently to minimize time away from work.`,

    'inland-growing': `Keratoconus treatment for ${cityName} patients combines stabilization and vision restoration. If the condition is progressing (most common in patients under 30), corneal cross-linking (CXL) halts further thinning. Custom scleral lenses then restore functional vision—typically 20/25 or better. We understand that ${cityName} patients travel for appointments, so we structure the treatment timeline to consolidate visits: evaluation and initial fitting in one session, dispensing and instruction in a second, with strategic follow-ups that minimize your total trips. Scleral lens treatment is medically necessary and covered by most insurance plans.`,

    'north-county-sd': `For ${cityName} patients, our keratoconus treatment protocol is designed for efficiency without compromising quality. Corneal cross-linking (CXL) is recommended if progression is documented—we refer to surgeons accessible from San Diego to minimize your travel burden. Custom scleral lenses are the centerpiece of vision restoration: designed using your topography data, manufactured to vault over your unique corneal irregularity, and refined through iterative fitting until the vision quality is exceptional. We consolidate the fitting process to minimize total visits from ${cityName}. Between in-person appointments, telehealth check-ins allow us to address comfort questions and monitor your adaptation.`,

    'la-gateway': `Treatment for ${cityName} keratoconus patients follows Dr. Bonakdar's 35-year-tested protocol. Corneal cross-linking (CXL) is recommended for progressive disease—we coordinate with top corneal surgeons accessible from ${cityName}. Custom scleral lens fitting is the primary vision restoration approach: each lens is designed from your specific topography, trial-fitted in office, and refined until vision quality and comfort are optimized. Unlike general practices that fit scleral lenses occasionally, our practice fits them daily—this volume of experience means your lens design accounts for subtleties that less experienced fitters miss. Most LA-area PPO plans cover the treatment under the medically necessary keratoconus diagnosis.`,
  };

  return {
    question: `What are the treatment options for keratoconus patients near ${cityName}?`,
    answer: answers[cityType],
  };
}

/**
 * FAQ 3: Scheduling and logistics
 */
function getSchedulingFAQ(cityType: CityType, cityName: string): FAQ {
  const answers: Record<CityType, string> = {
    'coastal-affluent': `${cityName} patients can typically be seen within one week of calling. Your initial consultation includes corneal topography, comprehensive refraction, and an in-depth discussion of treatment options—plan for approximately 60-90 minutes. We schedule scleral lens fitting appointments at times that accommodate ${cityName} residents' preferences, including early morning slots. Follow-up visits after lens delivery are shorter (30-45 minutes) and spaced to align with your schedule. Call (714) 558-0641 or book online.`,

    'coastal-active': `We offer same-week appointments for ${cityName} keratoconus patients. The first visit takes 60-90 minutes and includes diagnostic testing, consultation, and often initial trial lens fitting. We understand that active ${cityName} residents want to get back to their routines, so we move efficiently through the evaluation process. Follow-up appointments for scleral lens adjustments are typically 30-45 minutes. Call (714) 558-0641 to schedule.`,

    'tech-university': `${cityName} professionals and students can book appointments online or by calling (714) 558-0641. We offer same-week availability for new keratoconus evaluations. The initial visit takes 60-90 minutes—plan to be away from screens for the remainder of the day while your eyes are dilated (if needed). We offer early morning and late afternoon slots to accommodate work and class schedules. Follow-up visits are shorter and can be coordinated with your ${cityName} routine.`,

    'family-suburban': `We make scheduling easy for ${cityName} families. Call (714) 558-0641 for same-week availability. For children, we recommend scheduling the initial 60-90 minute evaluation during a school half-day or break period. Both parents are welcome to attend—we encourage questions. Follow-up appointments for scleral lens fittings are shorter (30-45 minutes) and can be scheduled after school hours. We also offer summer scheduling for comprehensive evaluations that work around ${cityName} school calendars.`,

    'affluent-residential': `${cityName} patients receive prompt scheduling with Dr. Bonakdar directly. Initial evaluations are booked within one week and include 60-90 minutes of dedicated one-on-one time. We do not double-book keratoconus consultations—your appointment receives our full attention. Follow-up visits are scheduled at your preferred cadence. For new patients, our team contacts you before the appointment to verify insurance, gather medical history, and ensure the visit is maximally productive. Call (714) 558-0641 or book online.`,

    'urban-diverse': `We welcome ${cityName} patients and offer same-week appointment availability. Call (714) 558-0641—our bilingual team can assist in English or Spanish. Your first visit takes 60-90 minutes and includes all diagnostic testing, consultation, and a clear explanation of findings and treatment options. We verify insurance before your appointment so there are no cost surprises. Our office hours are Monday through Friday, 9 AM to 5 PM, with flexibility for working schedules.`,

    'suburban-commuter': `${cityName} commuters appreciate our efficient scheduling. Call (714) 558-0641 for same-week availability. Initial evaluations take 60-90 minutes; follow-ups are 30-45 minutes. Our office at 801 N Tustin Ave is directly off the SR-55 freeway, making it easy to reach from ${cityName} before or after work. Free parking is immediately adjacent. We minimize the total number of visits needed by structuring appointments comprehensively—evaluation, mapping, and trial fitting often happen in a single session.`,

    'inland-growing': `We respect the travel commitment ${cityName} patients make to visit our practice. To maximize your trip, initial evaluations are comprehensive: 60-90 minutes covering topography, refraction, consultation, and often initial trial lens fitting. This consolidation reduces total visits. Follow-up appointments are strategically spaced and can sometimes be supplemented with telehealth check-ins. We offer early morning scheduling so ${cityName} patients can complete their appointment and return home by midday. Call (714) 558-0641 for same-week availability.`,

    'north-county-sd': `For ${cityName} patients making the drive to Santa Ana, we structure every visit to be worth your time. The first appointment (60-90 minutes) combines all diagnostic testing, consultation, and initial trial lens fitting. We provide same-week scheduling for new patients and can confirm your insurance coverage by phone before you travel. Follow-up visits are strategically planned—typically 3-4 total visits for a complete scleral lens fitting. Between visits, telehealth check-ins address questions without requiring a trip. Call (714) 558-0641 to schedule your first appointment.`,

    'la-gateway': `${cityName} patients benefit from our central Orange County location, accessible via I-5, I-405, or SR-55. We offer same-week scheduling for new keratoconus evaluations. The initial visit is comprehensive (60-90 minutes), combining all diagnostic testing and consultation into a single productive session. Our office at 801 N Tustin Ave has free adjacent parking—no garage hunting, no meters. We verify insurance before your first visit so you arrive informed. Call (714) 558-0641 or book online. Hours: Monday through Friday, 9 AM to 5 PM.`,
  };

  return {
    question: `How do I schedule a keratoconus appointment from ${cityName}?`,
    answer: answers[cityType],
  };
}

// ---------------------------------------------------------------------------
// BONUS FAQs: 2-3 type-specific questions unique to each city type
// ---------------------------------------------------------------------------

function getBonusFAQs(cityType: CityType, cityName: string): FAQ[] {
  const bonusByType: Record<CityType, FAQ[]> = {
    'coastal-affluent': [
      {
        question: `Can I wear scleral lenses while sailing and doing water sports in ${cityName}?`,
        answer: `Yes. Scleral lenses are the best contact lens option for water sports because they are large-diameter lenses that fit securely under your eyelids—they are virtually impossible to dislodge in water, unlike smaller rigid or soft lenses. The lens creates a sealed chamber over your cornea, protecting it from salt water contact. We recommend wearing swim goggles as an additional precaution, and using preservative-free rewetting drops after water exposure. Many of our ${cityName} patients specifically chose scleral lenses because they wanted to return to surfing, sailing, and paddleboarding with clear, stable vision.`,
      },
      {
        question: `Do scleral lenses provide UV protection for the coastal ${cityName} lifestyle?`,
        answer: `Many scleral lens materials include Class 1 or Class 2 UV blocking, which provides meaningful protection against UVA and UVB radiation reaching the cornea. However, scleral lenses do not cover the entire eye and should not replace quality sunglasses for comprehensive UV protection. For ${cityName} patients, we recommend UV-blocking scleral lenses combined with polarized sunglasses for outdoor activities. This dual-layer approach protects both the cornea (which is already compromised by keratoconus) and the surrounding eye structures from cumulative UV damage.`,
      },
      {
        question: 'How often do scleral lenses need to be replaced?',
        answer: 'Scleral lenses for keratoconus typically last 1 to 2 years with proper care, though this varies based on your wearing schedule, handling technique, and the rate of deposit accumulation. We recommend annual replacement for optimal optical clarity and comfort. If your keratoconus is still evolving (which cross-linking aims to prevent), your lens may need updating sooner to match corneal changes. Our practice monitors your lens condition at every follow-up visit and advises replacement based on clinical findings, not arbitrary timelines.',
      },
    ],

    'coastal-active': [
      {
        question: `Will scleral lenses stay in place during surfing and beach sports near ${cityName}?`,
        answer: `Absolutely. Scleral lenses are the gold standard for athletes with keratoconus because of their stability. The lens rests on the sclera (white of the eye) and is held in place by eyelid pressure—it takes deliberate effort to remove one. Unlike smaller rigid lenses that can pop out with a hard blink or wave impact, scleral lenses stay seated during surfing, beach volleyball, running, and cycling. Many of our ${cityName} patients have worn scleral lenses through serious wipeouts without losing a lens. We design the edge profile specifically for athletic stability.`,
      },
      {
        question: `Does eye rubbing from allergies and sand really make keratoconus worse?`,
        answer: `Yes, and this is one of the most important things ${cityName} residents with keratoconus need to understand. Vigorous eye rubbing is the single strongest modifiable risk factor for keratoconus progression. The mechanical force physically breaks down collagen cross-links in the cornea, accelerating the thinning process. Beach environments trigger rubbing through sand irritation, wind, pollen, and salt-air dryness. We work with every patient to break the rubbing cycle: prescription allergy drops, cold compresses instead of rubbing, preservative-free artificial tears, and behavioral awareness. This is as important as any lens fitting.`,
      },
    ],

    'tech-university': [
      {
        question: `Will scleral lenses reduce eye fatigue during long screen sessions for ${cityName} tech workers?`,
        answer: `For most keratoconus patients, yes—significantly. The eye fatigue you experience during screen work is largely caused by your visual system straining to process the aberrated, ghosted image that the cone-shaped cornea creates. Scleral lenses correct these aberrations, presenting a clear, sharp image that requires far less neural processing effort. Additionally, the saline reservoir behind the lens keeps the corneal surface hydrated, counteracting the reduced blink rate that screens cause. Most ${cityName} tech professionals report that their end-of-day fatigue drops dramatically after starting scleral lenses, often describing it as getting hours of productive time back.`,
      },
      {
        question: 'Can keratoconus get worse in your 20s even after being stable?',
        answer: 'Yes. While keratoconus progression typically slows after age 30, it is unpredictable in the teens and twenties. Factors like eye rubbing, hormonal changes, and even pregnancy can trigger progression at any point during these years. This is why corneal cross-linking is recommended for any patient with documented progression—it stiffens the cornea to prevent further change. We monitor progression using serial corneal topography, comparing maps 6-12 months apart. If your most recent topography shows steepening, cross-linking should be discussed promptly regardless of your age.',
      },
      {
        question: 'Is keratoconus covered under medical insurance or vision insurance?',
        answer: 'Keratoconus is a diagnosed medical condition, so scleral lens fitting is processed through your medical insurance (PPO plans), not your vision plan. This is an important distinction: medical plans typically provide significantly more coverage for medically necessary specialty lenses than vision plans do for standard contacts. Your vision plan may still cover routine eye exams, but the keratoconus-specific evaluation, topography, fitting, and lenses themselves fall under medical coverage. Our insurance team verifies your specific benefits before your first appointment.',
      },
    ],

    'family-suburban': [
      {
        question: `At what age should ${cityName} children be screened for keratoconus?`,
        answer: `We recommend corneal topography screening by age 10 for any child with a family history of keratoconus, and by age 12-13 for all children as part of their comprehensive eye exam. The reason is timing: keratoconus typically begins during adolescence, and the earlier it is detected, the more effectively we can intervene. If a child shows early topographic changes, corneal cross-linking can be performed to prevent progression before significant vision loss occurs. For ${cityName} families where a parent has keratoconus, screening every child is strongly recommended—the genetic component means siblings have approximately a 1-in-10 chance of developing the condition.`,
      },
      {
        question: 'Can teenagers wear scleral lenses for keratoconus?',
        answer: 'Yes. We routinely fit scleral lenses on patients as young as 12. Teenagers are often excellent scleral lens wearers because they are motivated by the dramatic vision improvement and adapt quickly to the insertion and removal routine. We use age-appropriate lens sizes (slightly smaller diameters for younger patients) and spend extra time teaching handling techniques. Parents are included in the training process. Most teenagers from our practice master insertion and removal within one week and report that the clear vision scleral lenses provide transforms their school performance and confidence in sports.',
      },
      {
        question: 'Should my child stop playing sports if they have keratoconus?',
        answer: 'No—with one important caveat. Children with keratoconus should absolutely continue playing sports, and scleral lenses are specifically designed for athletic activity. The caveat is protective eyewear: for any sport with ball or body contact risk (basketball, soccer, baseball, lacrosse), polycarbonate sports goggles worn over scleral lenses provide essential protection. A direct blow to an eye with a thinned keratoconic cornea carries a higher risk of injury than a normal eye. With proper protection, there is no reason to limit your child\'s athletic participation.',
      },
    ],

    'affluent-residential': [
      {
        question: 'What makes scleral lens fitting different at a specialist practice versus a general optometrist?',
        answer: `The difference is case volume and equipment. A general optometrist may fit 5-10 scleral lenses per year; our practice fits them weekly. This volume builds pattern recognition—Dr. Bonakdar can often predict which lens design will work for your specific corneal pattern because he has seen hundreds of similar cases. We also invest in multiple corneal topographers, anterior segment OCT, and maintain a large diagnostic lens inventory so trial fitting happens in-office immediately, not after weeks of ordering. For ${cityName} patients who value getting the right result efficiently, this combination of experience and technology is the key differentiator.`,
      },
      {
        question: 'Can scleral lenses correct vision to 20/20 with keratoconus?',
        answer: 'Many keratoconus patients achieve 20/20 with properly fitted scleral lenses, and the vast majority achieve 20/25 or better—a dramatic improvement from the 20/40 to 20/80 range typical with glasses alone. The outcome depends on keratoconus severity: mild-to-moderate cases routinely reach 20/20, while advanced cases with significant corneal scarring may achieve 20/30 to 20/25. Even in the most advanced cases we treat, scleral lenses almost always provide substantially better vision than any alternative except corneal transplant. Our fitting goal is always maximum achievable acuity with all-day comfort.',
      },
    ],

    'urban-diverse': [
      {
        question: `Is keratoconus more common in certain ethnic communities like those in ${cityName}?`,
        answer: `Yes. Research consistently shows that keratoconus prevalence is 2 to 4 times higher in Hispanic, Middle Eastern, South Asian, and African American populations compared to Caucasian populations. The exact reasons are still being studied, but likely involve both genetic factors and environmental influences like higher rates of allergic eye disease and eye rubbing. For ${cityName}'s diverse community, this means keratoconus may be more common than general statistics suggest. We encourage proactive screening—particularly for teenagers experiencing rapidly changing prescriptions—because early detection enables cross-linking to halt progression before vision loss becomes severe.`,
      },
      {
        question: 'Does insurance cover scleral lenses for keratoconus?',
        answer: `Scleral lenses for keratoconus are classified as medically necessary prosthetic devices and are covered by most PPO medical insurance plans. This coverage falls under your medical plan, not your vision plan—an important distinction because medical coverage for keratoconus specialty lenses is typically much more comprehensive. Our office verifies your specific benefits before your first appointment and provides a clear cost estimate. For patients with high deductibles or limited coverage, we offer CareCredit 0% financing, accept HSA/FSA accounts, and can discuss payment plan options. Financial concerns should never prevent ${cityName} residents from accessing keratoconus care.`,
      },
      {
        question: 'Do you have Spanish-speaking staff who can explain keratoconus treatment?',
        answer: 'Yes. Our bilingual team includes staff members who speak fluent Spanish and can explain every aspect of your keratoconus diagnosis, treatment options, insurance coverage, and lens care instructions. We believe that fully understanding your condition and treatment is essential for the best outcomes, and language should never be a barrier. All written materials and care instructions are available in both English and Spanish.',
      },
    ],

    'suburban-commuter': [
      {
        question: `Will scleral lenses eliminate the halos I see while driving at night from ${cityName}?`,
        answer: `For most keratoconus patients, scleral lenses dramatically reduce or completely eliminate halos around headlights and streetlights. The halos occur because the cone-shaped cornea scatters light in multiple directions instead of focusing it to a single point. Scleral lenses create a smooth optical surface that replaces the irregular cornea as the primary refracting element, eliminating the scatter. Most ${cityName} patients describe putting on scleral lenses and driving at night for the first time as a transformative moment. In clinical terms, scleral lenses correct the higher-order aberrations (coma, trefoil) that glasses simply cannot address.`,
      },
      {
        question: 'How long does the scleral lens fitting process take from start to finish?',
        answer: 'The complete scleral lens fitting process typically requires 3 to 5 office visits over 4 to 8 weeks. Visit 1 is the comprehensive evaluation and initial trial fitting (60-90 minutes). Visit 2 is lens delivery, insertion/removal training, and initial wearing instructions (45-60 minutes). Visits 3-5 are follow-up assessments to verify fit, comfort, and vision quality, with any needed adjustments (30-45 minutes each). For busy commuters, we structure this timeline to be as efficient as possible while ensuring the fit is truly optimized. Rushing the process leads to compromised results that require more visits in the long run.',
      },
    ],

    'inland-growing': [
      {
        question: `Is it worth driving from ${cityName} to Santa Ana for keratoconus care?`,
        answer: `Patients from ${cityName} and throughout the Inland Empire consistently tell us that the drive was the best decision they made for their vision. Keratoconus scleral lens fitting is a specialized skill—the outcome depends heavily on the clinician's experience and equipment. Dr. Bonakdar has fitted over 500 keratoconus patients across 35+ years, using advanced topography systems that most practices do not have. The difference between a properly fitted scleral lens (20/25 vision, all-day comfort) and a compromised fit (persistent discomfort, mediocre vision) is the difference between a specialist and a generalist. We structure appointments to maximize the value of your trip.`,
      },
      {
        question: 'Can you complete the keratoconus evaluation and start fitting in one visit?',
        answer: 'Yes. For patients traveling from a distance, we regularly combine the comprehensive evaluation (topography, refraction, clinical exam) with initial diagnostic scleral lens fitting in a single extended appointment. This first visit typically runs 90-120 minutes and gives us the data needed to order your custom lens. The second visit is lens delivery and training. Follow-ups can sometimes be supplemented with telehealth check-ins for straightforward questions, reducing total trips. Call (714) 558-0641 and let us know you are traveling—we will schedule accordingly.',
      },
    ],

    'north-county-sd': [
      {
        question: `Why do ${cityName} patients choose a Santa Ana keratoconus specialist over San Diego options?`,
        answer: `San Diego has excellent ophthalmologists, but very few clinicians who specialize specifically in scleral lens fitting for keratoconus. Scleral lens fitting is a niche skill that requires dedicated corneal topography equipment, a large diagnostic lens inventory, and high case volume to develop the pattern recognition that separates good fits from exceptional ones. Dr. Bonakdar's 500+ keratoconus cases and 35+ years of focused experience represent a level of specialization that most multi-specialty practices cannot match. ${cityName} patients who have tried scleral lenses from less experienced fitters often come to us for refitting—and the vision improvement is dramatic.`,
      },
      {
        question: 'How many trips from San Diego County will I need for a complete scleral lens fitting?',
        answer: `We design the visit schedule to minimize your travel from ${cityName}. Most patients complete their fitting in 3 to 4 in-person visits: (1) comprehensive evaluation plus trial fitting, (2) custom lens delivery and training, (3) one-week follow-up assessment, and (4) one-month follow-up with any final adjustments. Between visits, we offer telehealth check-ins for comfort or wearing questions. Some straightforward cases need only 3 visits total. We are transparent about the expected timeline from your first call so you can plan accordingly.`,
      },
      {
        question: 'Do you offer telehealth consultations before I drive from San Diego?',
        answer: 'We offer phone consultations for prospective patients to discuss your diagnosis, answer questions, and determine whether an in-person evaluation is the right next step. While we cannot diagnose or fit lenses remotely (corneal topography requires in-person imaging), a pre-visit conversation allows Dr. Bonakdar or our clinical team to review any records or topography maps you already have and give you a realistic expectation of what the first visit will involve. This ensures your trip from San Diego is productive from the moment you arrive.',
      },
    ],

    'la-gateway': [
      {
        question: `Why should ${cityName} patients come to Orange County instead of an LA keratoconus doctor?`,
        answer: `Los Angeles has world-class eye surgeons, but keratoconus scleral lens fitting is a different discipline than surgery. It requires iterative precision fitting, advanced corneal topography interpretation, and the patience to refine a lens design through multiple trials until the optics are truly optimized. Most large LA ophthalmology practices prioritize surgical volume—cataract, LASIK, retina—and fit scleral lenses only occasionally. Dr. Bonakdar's practice is built around specialty contact lens fitting for corneal disease. With 500+ keratoconus cases, this focused experience means faster, better fitting results. Our central Orange County location is often a shorter drive from ${cityName} than crossing LA to reach a Westside or Downtown specialist.`,
      },
      {
        question: 'How does keratoconus scleral lens fitting differ from what LA LASIK centers offer?',
        answer: 'LASIK centers specialize in reshaping healthy corneas—they are not equipped to manage keratoconus, where the cornea is already structurally compromised. In fact, LASIK is contraindicated for keratoconus patients because it further thins the cornea. Scleral lens fitting for keratoconus is a completely different skill: instead of changing the cornea, we vault over it with a custom-designed rigid lens that creates a new, regular optical surface. This requires corneal topography interpretation, trial lens evaluation, and iterative design refinement—expertise that LASIK-focused practices do not maintain. Our practice handles exclusively complex contact lens cases.',
      },
    ],
  };

  return bonusByType[cityType];
}
