/**
 * CityPrevalence - Dimension 8: Keratoconus Prevalence Context
 *
 * Renders a compact educational section about keratoconus prevalence,
 * contextualized for the specific city. This section establishes
 * medical authority by citing prevalence data and research, while
 * making the information locally relevant.
 *
 * Content includes:
 *  - General prevalence statistics (1 in 375 people)
 *  - City-type-specific demographic prevalence context
 *  - Age and ethnicity factors relevant to the city's population
 *  - Medical authority positioning (research citations, clinical data)
 *
 * This is intentionally a smaller, focused section -- not a full-width
 * feature block -- to serve as an educational anchor that reinforces
 * the medical legitimacy of the page content.
 *
 * Body text is sourced from getPrevalenceContext() in city-content-kc.ts.
 * Stats and demographic notes are self-contained, organized by city type.
 */

'use client';

import React from 'react';
import { BookOpen, TrendingUp } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { getCityType, CityType } from '@/data/city-types';
import { getPrevalenceContext } from '@/data/city-content-kc';

interface CityPrevalenceProps {
    citySlug: string;
    cityName: string;
}

interface PrevalenceStat {
    value: string;
    label: string;
}

/**
 * Returns city-type-aware prevalence statistics.
 * These stats are shown in a compact grid below the prevalence text.
 */
function getPrevalenceStats(cityType: CityType): PrevalenceStat[] {
    const baseStats: PrevalenceStat[] = [
        { value: '1 in 375', label: 'Global prevalence' },
        { value: '10-25', label: 'Peak onset age range' },
    ];

    const typeSpecificStats: Record<CityType, PrevalenceStat> = {
        'coastal-affluent': { value: 'Earlier', label: 'Detection in high-glare areas' },
        'coastal-active': { value: '2-4x', label: 'Risk with chronic UV + rubbing' },
        'tech-university': { value: '15-25', label: 'University-age peak onset' },
        'family-suburban': { value: '1 in 10', label: 'Risk if parent is affected' },
        'affluent-residential': { value: 'Higher', label: 'True rate vs. diagnosed' },
        'urban-diverse': { value: '1 in 100-200', label: 'In high-risk ethnicities' },
        'suburban-commuter': { value: '3+', label: 'Rx changes = red flag' },
        'inland-growing': { value: 'Later', label: 'Avg. diagnosis in underserved areas' },
        'north-county-sd': { value: '1 in 375', label: 'San Diego County estimate' },
        'la-gateway': { value: '2-4x', label: 'Higher in diverse populations' },
    };

    return [...baseStats, typeSpecificStats[cityType] || { value: '~0.27%', label: 'Estimated population rate' }];
}

/**
 * Returns a city-type-specific demographic note providing additional
 * context about why keratoconus prevalence or detection patterns
 * may differ in this community type.
 */
function getDemographicNote(cityType: CityType, cityName: string): string {
    const notes: Record<CityType, string> = {
        'coastal-affluent': `Residents in ${cityName} often benefit from earlier detection due to proactive annual eye exams and awareness of subtle vision changes during outdoor activities. However, keratoconus is frequently misdiagnosed as progressive astigmatism even by experienced optometrists without corneal topography.`,
        'coastal-active': `Active residents in ${cityName} may notice keratoconus symptoms earlier than average because high-glare, high-contrast outdoor activities make even mild corneal irregularity symptomatic. The combination of UV exposure and allergen-related eye rubbing in coastal environments is a known risk accelerator.`,
        'tech-university': `${cityName}'s concentration of students and young professionals places a disproportionate number of residents in the 15-25 peak onset age window for keratoconus. Rapidly changing eyeglass prescriptions that fail to provide crisp screen vision are a common early indicator that warrants corneal topography screening.`,
        'family-suburban': `For ${cityName} families, genetic screening is particularly important. Keratoconus has a strong hereditary component, and siblings of diagnosed patients should undergo corneal topography by age 10-12. School vision screenings do not detect keratoconus -- only comprehensive corneal mapping can identify early disease.`,
        'affluent-residential': `${cityName} residents with access to proactive healthcare are well-positioned for early keratoconus detection. Modern corneal topography can identify subclinical disease years before symptoms appear, enabling intervention through cross-linking before any vision loss occurs.`,
        'urban-diverse': `${cityName}'s diverse population includes ethnic groups with significantly elevated keratoconus risk. Hispanic, Middle Eastern, and South Asian communities experience rates 2-4 times the general population average. Culturally competent screening outreach in these communities can dramatically improve early detection rates.`,
        'suburban-commuter': `${cityName} commuters often describe the first signs of keratoconus as worsening night driving vision -- halos around headlights, streaking brake lights, and poor contrast in rain. If progressively stronger glasses prescriptions fail to resolve these symptoms, corneal topography is warranted.`,
        'inland-growing': `As ${cityName} continues to grow, the gap between population expansion and available corneal specialty care widens. Many residents receive routine eye care locally but lack access to the corneal topography screening that detects keratoconus before significant progression occurs. Proactive screening can prevent years of unnecessary vision loss.`,
        'north-county-sd': `San Diego County's keratoconus patients face a specialist access challenge: while general ophthalmology and optometry are well represented, dedicated keratoconus scleral lens expertise requires case volume that most practices in the region do not maintain. Patients from ${cityName} benefit from seeking high-volume specialist care even if it requires travel.`,
        'la-gateway': `${cityName}'s proximity to the greater Los Angeles metro area means access to many eye care providers, but very few with dedicated keratoconus scleral lens expertise. High case volume is the strongest predictor of fitting success -- patients should prioritize specialist experience over geographic convenience.`,
    };

    return notes[cityType] || notes['suburban-commuter'];
}

export default function CityPrevalence({ citySlug, cityName }: CityPrevalenceProps) {
    const cityType = getCityType(citySlug);
    const prevalenceText = getPrevalenceContext(cityType, cityName);
    const stats = getPrevalenceStats(cityType);
    const demographicNote = getDemographicNote(cityType, cityName);

    return (
        <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4">
                <FadeIn>
                    <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-100 shadow-sm">
                        {/* Section header */}
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-10 h-10 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue shrink-0">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-serif font-bold text-eyecare-navy">
                                    Keratoconus Prevalence in {cityName}
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    Research-based context for your community
                                </p>
                            </div>
                        </div>

                        {/* Main prevalence content from data layer */}
                        <p className="text-gray-700 leading-relaxed mb-6">
                            {prevalenceText}
                        </p>

                        {/* Statistics row */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-eyecare-lighter-blue/50 rounded-xl p-4 text-center"
                                >
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        <TrendingUp className="w-4 h-4 text-eyecare-blue" />
                                        <p className="text-xl font-bold text-eyecare-blue">
                                            {stat.value}
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-600">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* City-specific demographic note */}
                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                            <p className="text-sm text-gray-600 leading-relaxed">
                                <span className="font-semibold text-eyecare-navy">
                                    For {cityName} residents:
                                </span>{' '}
                                {demographicNote}
                            </p>
                        </div>

                        {/* Medical disclaimer / source attribution */}
                        <p className="text-xs text-gray-400 mt-6">
                            Prevalence data based on published ophthalmological research including
                            Godefrooij et al. (2017) and the National Keratoconus Foundation. Individual
                            risk factors vary. A comprehensive corneal evaluation is the only way to
                            confirm or rule out keratoconus.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
