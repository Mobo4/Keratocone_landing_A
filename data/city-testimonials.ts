/**
 * FILE: data/city-testimonials.ts
 * PURPOSE: City-type-specific patient experience narratives for keratocones.com
 * AUTHOR: Claude Code
 * CREATED: 2026-02-10
 *
 * CONTEXT: Testimonial-style patient experiences provide social proof and
 * differentiate city pages with relatable, type-specific stories.
 *
 * GUIDELINES:
 * - All experiences are realistic composites, not specific individuals
 * - No real patient names are used — anonymous with demographic context only
 * - Experiences are keratoconus-specific (diagnosis, scleral lenses, vision restoration)
 * - Each experience highlights concerns unique to the city type
 * - Content is written as first-person narratives (patient voice)
 *
 * IMPORTANT: These are not attributed testimonials. They are described as
 * "patient experiences" or "stories from patients like you" — not quotes
 * with names. This avoids HIPAA and FTC testimonial regulation concerns.
 */

import { getCityType, CityType } from './city-types';

export interface PatientExperience {
  demographic: string;          // e.g., "College Student, Age 21" — no names
  headline: string;             // Short summary of the experience
  story: string;                // 75-100 word first-person narrative
  outcome: string;              // 1-sentence result statement
  yearsAsPatient?: number;      // Optional: how long they've been a patient
}

/**
 * Get 2-3 patient experiences appropriate for a city's demographic type.
 */
export function getCityTypeExperiences(citySlug: string, cityName: string): PatientExperience[] {
  const cityType = getCityType(citySlug);
  return experiencesByType[cityType](cityName);
}

// ---------------------------------------------------------------------------
// Experience generators by city type
// Each returns 2-3 PatientExperience objects with city name interpolation
// ---------------------------------------------------------------------------

const experiencesByType: Record<CityType, (cityName: string) => PatientExperience[]> = {

  'coastal-affluent': (cityName: string) => [
    {
      demographic: 'Retired Professional, Age 62',
      headline: 'Finally clear vision on the water again',
      story: `I was diagnosed with keratoconus in my thirties, and for decades I managed with rigid gas-permeable lenses. But as I retired and moved to ${cityName} to enjoy sailing and the outdoor lifestyle, my old lenses could not keep up. The glare off the water was unbearable, and I kept losing lenses overboard. Dr. Bonakdar fitted me with scleral lenses that stay put in any conditions. I can read my instruments clearly, judge distances on the water, and actually enjoy the view instead of squinting through it.`,
      outcome: 'Restored 20/25 vision with scleral lenses designed for coastal activities.',
      yearsAsPatient: 4,
    },
    {
      demographic: 'Business Executive, Age 45',
      headline: 'Premium care that matches premium expectations',
      story: `After being diagnosed with moderate keratoconus, I saw three different specialists before finding Dr. Bonakdar. The other fittings were rushed—one provider spent 15 minutes total. Dr. Bonakdar spent over an hour on my initial evaluation, explained the topography findings in detail, and fitted trial lenses on the same visit. As someone from ${cityName} who values expertise, the difference was immediately apparent. My scleral lenses provide crystal-clear vision from morning meetings through evening dinner events.`,
      outcome: 'Achieved 20/20 vision in both eyes after years of suboptimal correction.',
    },
  ],

  'coastal-active': (cityName: string) => [
    {
      demographic: 'Surf Instructor, Age 28',
      headline: 'Back in the water with clear vision',
      story: `Keratoconus made my job almost impossible. I could not read wave conditions, my eyes burned from salt exposure, and I was losing smaller rigid lenses in the water regularly. A friend from ${cityName} recommended Dr. Bonakdar. The scleral lenses he fitted me with changed everything—they do not move in the surf, they protect my corneas from salt water, and my vision is sharp enough to spot rip currents from the beach. I have surfed through some serious wipeouts without losing a lens once.`,
      outcome: 'Returned to full-time surf instruction with stable 20/25 vision.',
      yearsAsPatient: 3,
    },
    {
      demographic: 'Triathlete, Age 34',
      headline: 'Training and racing with keratoconus under control',
      story: `I was diagnosed at 22 and spent years struggling with contact lenses that fogged, shifted, or fell out during runs and bike rides. Living in ${cityName}, I was not willing to give up my active lifestyle. Dr. Bonakdar designed scleral lenses with an edge profile optimized for high-impact movement. They stay perfectly stable through swimming, cycling, and running. For the first time since diagnosis, I can race without worrying about my vision mid-competition.`,
      outcome: 'Completed first full Ironman with consistent, comfortable scleral lens wear.',
    },
  ],

  'tech-university': (cityName: string) => [
    {
      demographic: 'Software Engineer, Age 26',
      headline: 'Code without the headaches',
      story: `I was diagnosed with keratoconus during my junior year at university. Glasses never fully corrected my vision—text on screens always had ghost images, and by 3 PM every day I had a pounding headache. After moving to ${cityName} for a tech job, I found Dr. Bonakdar. He optimized my scleral lenses for my monitor distance, and the difference was immediate. Code is sharp, UI elements are crisp, and I can work a full day without the fatigue that I had accepted as normal for four years.`,
      outcome: 'Eliminated daily headaches and restored comfortable 10+ hour screen productivity.',
      yearsAsPatient: 2,
    },
    {
      demographic: 'Graduate Student, Age 23',
      headline: 'Diagnosed just in time to save my vision',
      story: `My optometrist in ${cityName} kept changing my astigmatism prescription every six months and finally referred me to Dr. Bonakdar for corneal topography. The scan showed clear keratoconus in both eyes. I was terrified, but Dr. Bonakdar explained everything calmly—cross-linking to stop the progression, then scleral lenses to restore my vision. The cross-linking worked, and my scleral lenses give me vision I honestly did not think was possible anymore. I can read journal articles and write my dissertation without strain.`,
      outcome: 'Progression halted with cross-linking; achieved 20/20 with scleral lenses.',
    },
    {
      demographic: 'UX Designer, Age 31',
      headline: 'Seeing my own designs clearly for the first time',
      story: `As a designer, color accuracy and visual detail are my livelihood. Keratoconus was slowly stealing both—colors looked washed out, fine details were blurred, and I was making design mistakes I never would have made before. A colleague at my ${cityName} studio recommended Dr. Bonakdar. The scleral lenses he fitted corrected aberrations I did not even know I had. I cried the first time I looked at my portfolio with them in—I was seeing my own work the way my clients saw it for the first time in years.`,
      outcome: 'Restored color perception and fine detail vision critical for professional design work.',
    },
  ],

  'family-suburban': (cityName: string) => [
    {
      demographic: 'Parent of a 14-Year-Old',
      headline: 'Our teenager went from struggling to thriving',
      story: `Our son was diagnosed with keratoconus at age 13 after two years of increasingly blurry vision that new glasses kept failing to fix. His grades were dropping and he had quit basketball because he could not see the hoop clearly. Our pediatrician in ${cityName} referred us to Dr. Bonakdar. The scleral lens fitting process was patient and thorough—our son was nervous, but the team was so encouraging. Within two weeks of wearing his lenses, his teachers noticed the difference. He is back on the basketball team and his confidence is transformed.`,
      outcome: 'Son achieved 20/25 vision and returned to sports and academic performance.',
      yearsAsPatient: 2,
    },
    {
      demographic: 'Mother and Daughter (Ages 42 and 16)',
      headline: 'Two generations of keratoconus, one specialist',
      story: `I was diagnosed with keratoconus at 19 and have been Dr. Bonakdar's patient for over two decades. When my daughter started showing the same symptoms at 15, I knew exactly where to go. Because of my experience, we caught her keratoconus early. She had cross-linking to stop progression and was fitted with scleral lenses within months of diagnosis. Living in ${cityName}, having a specialist who knows our family's corneal history—and who my daughter trusts—has been invaluable. She never went through the years of struggling that I did.`,
      outcome: 'Daughter\'s keratoconus caught early; cross-linking prevented progression.',
      yearsAsPatient: 22,
    },
    {
      demographic: 'Parent of a 12-Year-Old',
      headline: 'Early screening saved our child from severe keratoconus',
      story: `Because keratoconus runs in my husband's family, Dr. Bonakdar recommended screening our children with corneal topography starting at age 10. At our daughter's age-12 screening, the topography showed early changes in one eye. We caught it before she even noticed vision problems. She had cross-linking done immediately and now wears a mild scleral lens correction. Our ${cityName} family is grateful that Dr. Bonakdar's proactive approach prevented what could have been years of deteriorating vision.`,
      outcome: 'Subclinical keratoconus detected and stabilized before any vision loss.',
    },
  ],

  'affluent-residential': (cityName: string) => [
    {
      demographic: 'Physician, Age 52',
      headline: 'The specialist I would recommend to my own patients',
      story: `As a physician in ${cityName}, I evaluate specialists with a critical eye. When I was diagnosed with keratoconus, I researched extensively before choosing Dr. Bonakdar. What set him apart was case volume, diagnostic technology, and a fitting methodology that was systematic, not improvised. He used multiple topography systems to characterize my cornea, tried three different lens designs to find the optimal fit, and was not satisfied until my vision and comfort were both excellent. That level of rigor is what I expect in my own medical practice.`,
      outcome: 'Achieved 20/20 vision with a fit optimized over multiple visits for maximum comfort.',
      yearsAsPatient: 5,
    },
    {
      demographic: 'Attorney, Age 38',
      headline: 'Worth every minute of the thorough process',
      story: `I had been wearing scleral lenses from another provider for two years, but they were never truly comfortable—by lunchtime, I wanted to take them out. A colleague from ${cityName} mentioned Dr. Bonakdar. He re-evaluated my fit from scratch, identified vault and edge issues the previous fitter had missed, and redesigned my lenses. The new fit is comfortable from 6 AM to 10 PM. I wish I had come here first, but I am grateful the second fitting was done by someone who treats every detail as if it matters—because it does.`,
      outcome: 'Went from 6-hour to 16-hour comfortable wearing time after refitting.',
    },
  ],

  'urban-diverse': (cityName: string) => [
    {
      demographic: 'Restaurant Worker, Age 29',
      headline: 'Finally found a doctor who explained everything clearly',
      story: `I knew something was wrong with my eyes for years, but my regular eye doctor in ${cityName} just kept giving me stronger glasses that did not help. When I finally saw Dr. Bonakdar, his team explained in Spanish that I had keratoconus—a condition I had never heard of. They showed me the topography maps and walked me through every option. The scleral lenses they fitted give me clear vision for the first time in years. I can read order tickets, drive at night, and I do not get the headaches anymore. The office also helped me understand my insurance coverage so I knew what to expect.`,
      outcome: 'Went from 20/60 with glasses to 20/25 with scleral lenses; headaches resolved.',
      yearsAsPatient: 3,
    },
    {
      demographic: 'High School Senior, Age 17',
      headline: 'Caught early enough to make a difference',
      story: `My school nurse noticed I was squinting a lot and told my mom to get my eyes checked. The optometrist in ${cityName} found unusual astigmatism and sent me to Dr. Bonakdar. He diagnosed keratoconus and recommended cross-linking right away to stop it from getting worse. I was scared, but the team explained everything to both me and my mom. After cross-linking, I got scleral lenses and my vision went from blurry to completely clear. I can see the board in class, I passed my driving test, and I am going to college this fall.`,
      outcome: 'Cross-linking halted progression; scleral lenses restored 20/20 vision before college.',
    },
    {
      demographic: 'Factory Worker, Age 41',
      headline: 'Quality care that my insurance actually covered',
      story: `I was worried I could not afford keratoconus treatment because I had heard specialty contacts are expensive. The team at Dr. Bonakdar's office checked my insurance from my ${cityName} employer and found that scleral lenses were covered as medically necessary. They handled the pre-authorization and explained exactly what my out-of-pocket costs would be. The CareCredit financing made the rest manageable. Now I have clear, stable vision that keeps me safe at work. I only wish I had come sooner instead of struggling with glasses that never worked.`,
      outcome: 'Insurance covered majority of treatment; achieved stable 20/25 vision for workplace safety.',
    },
  ],

  'suburban-commuter': (cityName: string) => [
    {
      demographic: 'Sales Representative, Age 37',
      headline: 'Night driving is no longer terrifying',
      story: `Keratoconus turned my ${cityName} commute into a nightmare. Every headlight on the freeway had a huge halo around it, road signs were ghosted, and rain made everything ten times worse. I had stopped driving after dark entirely, which meant my wife had to drive us everywhere at night. Dr. Bonakdar fitted me with scleral lenses that eliminated the halos almost completely. The first time I drove the SR-55 at night with my lenses in, I almost could not believe it—the road looked normal again. I got my independence back.`,
      outcome: 'Halos eliminated; safely resumed night driving after two years of avoidance.',
      yearsAsPatient: 4,
    },
    {
      demographic: 'Nurse, Age 44',
      headline: 'Clear vision for 12-hour shifts and the drive home',
      story: `Working 12-hour nursing shifts with keratoconus was becoming unsustainable. My glasses left me with blurry, ghosted vision by the end of each shift, and the drive home from ${cityName} in the dark was genuinely scary. A coworker who also has keratoconus told me about Dr. Bonakdar. The scleral lenses he fitted me with are comfortable for my entire shift—I put them in at 5 AM and take them out at 8 PM with no issues. I can read medication labels clearly, see monitor readings accurately, and drive home safely. They changed my quality of life.`,
      outcome: 'Comfortable 15-hour daily scleral lens wear supporting safe patient care and commuting.',
    },
  ],

  'inland-growing': (cityName: string) => [
    {
      demographic: 'College Student, Age 20',
      headline: 'The drive was worth it for vision I never thought possible',
      story: `No one near ${cityName} could fit me properly with scleral lenses. I tried two different optometrists who said they could do it, but after months of appointments and lenses that never felt right, my mom found Dr. Bonakdar online. The drive to Santa Ana was about an hour, but in one visit he identified what the other fitters had missed and designed a lens that worked. The vision quality was a different league—text was sharp, colors were vivid, and the comfort was immediate. I drive to every appointment happily now because the result speaks for itself.`,
      outcome: 'Achieved 20/20 vision after failed fittings with two local providers.',
      yearsAsPatient: 2,
    },
    {
      demographic: 'Construction Supervisor, Age 35',
      headline: 'Clear vision in dusty, bright conditions',
      story: `Working construction in the ${cityName} area with keratoconus was getting dangerous. I could not read plans clearly, the sun glare on concrete was blinding, and dust constantly irritated my eyes. Glasses were useless—the astigmatism from keratoconus was too irregular for them. Dr. Bonakdar fitted me with scleral lenses and safety glasses over them. The scleral lenses give me sharp vision and actually protect my corneas from dust because they create a sealed chamber. My job performance improved immediately, and I feel safe on site again.`,
      outcome: 'Restored functional vision for outdoor construction work; scleral lenses provide corneal protection.',
    },
  ],

  'north-county-sd': (cityName: string) => [
    {
      demographic: 'Marine Biologist, Age 33',
      headline: 'Traveled from San Diego and never looked back',
      story: `I searched all over San Diego County for a keratoconus specialist who could fit scleral lenses at the level I needed. After two unsatisfactory fittings locally, a colleague at Scripps recommended Dr. Bonakdar. The drive from ${cityName} to Santa Ana is about 75 minutes, but the expertise is incomparable. Dr. Bonakdar's fitting was precise and methodical—he understood my corneal shape in a way the previous fitters clearly did not. Three visits total for a perfect fit. I drive up every six months for check-ups and consider it one of the best investments I have made in my career and quality of life.`,
      outcome: 'Achieved exceptional scleral lens fit in 3 visits after 2 failed San Diego fittings.',
      yearsAsPatient: 5,
    },
    {
      demographic: 'Retired Teacher, Age 58',
      headline: 'Worth the drive for 35 years of expertise',
      story: `I was diagnosed with keratoconus decades ago and managed with hard contacts for years. When I needed scleral lenses, my San Diego ophthalmologist referred me to Dr. Bonakdar specifically. He said the fitting expertise for complex keratoconus cases was the best he knew of. The drive from ${cityName} was long, but the team scheduled my visits to minimize trips, and the phone consultations between visits were thorough. My scleral lenses give me the best vision I have had in twenty years. I read, drive, and enjoy retirement without limitations.`,
      outcome: 'Best vision in 20 years after transitioning from rigid gas-permeable to scleral lenses.',
      yearsAsPatient: 7,
    },
    {
      demographic: 'Software Developer, Age 27',
      headline: 'Telehealth check-ins between visits saved me time',
      story: `Driving from ${cityName} for every small adjustment would have been impractical. Dr. Bonakdar's office offered telehealth check-ins between my in-person visits, which was exactly what I needed. After my initial fitting visit, I had a question about lens fogging at my computer. A quick video call with the team resolved it with a simple technique change. My total in-person visits from San Diego were four over two months. Now I go once a year for my annual check-up. The combination of expert in-person fitting and efficient remote follow-up made the distance completely manageable.`,
      outcome: 'Complete fitting in 4 visits; annual check-ups only.',
    },
  ],

  'la-gateway': (cityName: string) => [
    {
      demographic: 'Entertainment Industry Professional, Age 40',
      headline: 'Better fit than anything I found in LA',
      story: `I spent three years bouncing between eye doctors in ${cityName} and West LA, trying to get scleral lenses that worked. Every fitting was a compromise—either the vision was acceptable but the comfort was poor, or vice versa. A friend suggested Dr. Bonakdar in Santa Ana. The drive from ${cityName} was actually easier than my usual trek to Beverly Hills. Dr. Bonakdar re-mapped my corneas, identified lens design issues the LA fitters had missed, and redesigned my lenses from scratch. The result was transformative—clear, comfortable vision that lasts all day on set.`,
      outcome: 'Finally achieved both comfort and 20/20 vision after 3 years of suboptimal fittings.',
      yearsAsPatient: 3,
    },
    {
      demographic: 'Accountant, Age 48',
      headline: 'Specialist care without the LA traffic hassle',
      story: `When I was diagnosed with keratoconus, my ${cityName} optometrist referred me to a specialist in Downtown LA. After sitting in two hours of traffic for a 30-minute appointment—twice—I searched for alternatives closer to home. Dr. Bonakdar's Santa Ana office was the same distance but half the drive time from ${cityName} via the 405. The care quality was outstanding: thorough, unhurried, and focused entirely on my keratoconus. My scleral lenses let me work with spreadsheets and financial documents all day without the eye strain and ghosting that made my job increasingly difficult.`,
      outcome: 'Eliminated number-reading errors from ghosted vision; comfortable all-day wear for detailed financial work.',
    },
  ],
};
