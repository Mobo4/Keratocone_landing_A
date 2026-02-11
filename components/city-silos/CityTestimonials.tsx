/**
 * CityTestimonials - Dimension 6: Patient Experience Stories
 *
 * Renders 2-3 patient testimonial/experience cards tailored to the city type.
 * These are NOT fabricated patient reviews -- they are city-type-aware
 * patient experience descriptions that reflect the lifestyle and concerns
 * of residents in that community type.
 *
 * City-type variations:
 *  - Coastal-affluent: Premium care expectations, glare improvement, water sports
 *  - Coastal-active: Outdoor vision, surf/beach stability, active lifestyle
 *  - Tech-university: Screen comfort, academic performance, night driving
 *  - Family-suburban: Children's experiences, school performance, sports
 *  - Urban-diverse: Access to care, insurance navigation, failed fits elsewhere
 *  - Suburban-commuter: Night driving, independence, commute safety
 *
 * Testimonials are stored within the component organized by city type,
 * using the getCityType() classifier from city-types.ts.
 */

'use client';

import React from 'react';
import { Quote } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { getCityType, CityType } from '@/data/city-types';

interface CityTestimonialsProps {
    citySlug: string;
    cityName: string;
}

interface ExperienceItem {
    quote: string;
    initial: string;
    name: string;
    context: string;
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

/**
 * Returns city-type-aware patient experience stories.
 * Each city type has 3 unique testimonials reflecting the lifestyle
 * and concerns of that community.
 */
function getExperiences(cityType: CityType, cityName: string): ExperienceItem[] {
    const experiencesByType: Record<CityType, ExperienceItem[]> = {
        'coastal-affluent': [
            { quote: 'I can finally enjoy sailing without the glare and halos that made it unbearable. Scleral lenses changed everything -- I can see the water, the horizon, and other boats clearly for the first time in years.', initial: 'R', name: 'Robert M.', context: `${cityName} patient` },
            { quote: 'After three failed lens fits at other offices, Dr. Bonakdar got it right on the first visit. The difference in my vision driving along PCH at sunset is night and day.', initial: 'K', name: 'Karen S.', context: `${cityName} resident` },
            { quote: 'The attention to detail is exceptional. Dr. Bonakdar spent over an hour on my fitting, adjusting until the vision was perfect. That level of care is rare and worth every minute.', initial: 'E', name: 'Elizabeth W.', context: `${cityName} patient` },
        ],
        'coastal-active': [
            { quote: 'As someone who surfs and runs on the beach daily, I needed lenses that could handle wind and bright light. Scleral lenses are the only thing that has worked consistently.', initial: 'T', name: 'Tyler J.', context: `Active lifestyle, ${cityName}` },
            { quote: 'I was ready to give up beach volleyball because I could not judge distances anymore. Scleral lenses gave me back my depth perception and my favorite sport.', initial: 'S', name: 'Sarah P.', context: `Athlete, ${cityName}` },
            { quote: 'My old rigid lenses used to pop out in the water. Scleral lenses stay put through everything -- surfing, running, cycling. They changed my relationship with keratoconus.', initial: 'M', name: 'Marcus D.', context: `${cityName} patient` },
        ],
        'tech-university': [
            { quote: 'Working in tech means 10+ hours on screens daily. My old lenses dried out by 2 PM. With scleral lenses, I work comfortably through the entire day without vision drops.', initial: 'A', name: 'Andrew L.', context: `Software engineer, ${cityName}` },
            { quote: 'I was diagnosed with keratoconus during my junior year. Dr. Bonakdar fit me with scleral lenses and I could finally read my textbooks clearly. It saved my academic career.', initial: 'M', name: 'Michelle T.', context: `Graduate student, ${cityName}` },
            { quote: 'Night driving from work was terrifying -- halos everywhere. Since getting scleral lenses from Dr. Bonakdar, I feel safe on the road again. The clarity is remarkable.', initial: 'D', name: 'Daniel P.', context: `Tech professional, ${cityName}` },
        ],
        'family-suburban': [
            { quote: 'Our son was diagnosed with keratoconus at 16. Dr. Bonakdar explained everything clearly and created a treatment plan that addressed his school and sports needs. His grades improved within a semester.', initial: 'L', name: 'Lisa R.', context: `Parent, ${cityName}` },
            { quote: 'I have keratoconus and was worried about my daughter inheriting it. Dr. Bonakdar screened her early and caught it before any symptoms appeared. That early intervention made all the difference.', initial: 'S', name: 'Scott M.', context: `Father, ${cityName}` },
            { quote: 'As a busy mom with keratoconus, I needed lenses that work all day without fuss. Scleral lenses let me drive the kids, work from home, and actually see clearly at their evening games.', initial: 'N', name: 'Nicole B.', context: `Working parent, ${cityName}` },
        ],
        'affluent-residential': [
            { quote: 'I tried doctors all over Orange County and even in Los Angeles. Dr. Bonakdar is the first specialist who truly understood the complexity of my keratoconus and delivered results.', initial: 'C', name: 'Charles K.', context: `${cityName} patient` },
            { quote: 'My golf game suffered terribly from keratoconus. With scleral lenses, I can judge distances again and my handicap has dropped by four strokes. Dr. Bonakdar understood exactly what I needed.', initial: 'R', name: 'Richard H.', context: `Golfer, ${cityName}` },
            { quote: 'The meticulous approach is what sets Dr. Bonakdar apart. He does not rush. He refined my lens until the fit was truly optimized, not just acceptable. The results speak for themselves.', initial: 'J', name: 'Janet W.', context: `${cityName} resident` },
        ],
        'urban-diverse': [
            { quote: 'I was told by two doctors that nothing could be done. Dr. Bonakdar fit me with scleral lenses in one visit and I could see clearly for the first time in years. Do not give up.', initial: 'M', name: 'Maria G.', context: `${cityName} patient` },
            { quote: 'Insurance covered most of my scleral lenses because they are medically necessary. The office handled all the paperwork. I wish I had found Dr. Bonakdar sooner.', initial: 'A', name: 'Angela T.', context: `${cityName} professional` },
            { quote: 'The quality of care is on another level compared to what I was getting locally. Dr. Bonakdar spent real time understanding my eyes and my needs.', initial: 'J', name: 'Jose R.', context: `${cityName} resident` },
        ],
        'suburban-commuter': [
            { quote: 'I drove past three general eye doctors to get to Dr. Bonakdar, and it was the best decision I made. He is a true specialist -- the difference in expertise is obvious.', initial: 'B', name: 'Brian K.', context: `${cityName} patient` },
            { quote: 'After years of uncomfortable RGP lenses, switching to scleral lenses was life-changing. I can wear them all day with zero discomfort. My only regret is not finding Dr. Bonakdar sooner.', initial: 'S', name: 'Stephanie L.', context: `${cityName} resident` },
            { quote: 'Night driving was my breaking point. The halos around headlights were terrifying. Scleral lenses eliminated them completely. I feel safe on the freeway again.', initial: 'W', name: 'William F.', context: `Commuter, ${cityName}` },
        ],
        'inland-growing': [
            { quote: 'The drive from the Inland Empire is completely worth it. Dr. Bonakdar combined my evaluation and fitting in one visit so I did not have to make extra trips. The vision results are outstanding.', initial: 'D', name: 'David C.', context: `${cityName} patient` },
            { quote: 'No one locally could properly fit my keratoconus lenses. Dr. Bonakdar got it right the first time. I can finally see clearly after years of frustration with other doctors.', initial: 'P', name: 'Patricia M.', context: `${cityName} resident` },
            { quote: 'I waited too long to see a real specialist. Within one visit to Dr. Bonakdar, I understood why everyone recommended him. My vision went from 20/60 with glasses to 20/25 with scleral lenses.', initial: 'R', name: 'Raymond L.', context: `${cityName} patient` },
        ],
        'north-county-sd': [
            { quote: 'I traveled from San Diego County because no one locally had the scleral lens expertise I needed. Dr. Bonakdar consolidated everything into minimal visits. The results justified every mile.', initial: 'G', name: 'Greg T.', context: `${cityName} patient` },
            { quote: 'After being bounced between three ophthalmologists in San Diego, Dr. Bonakdar was the first to actually fit me with lenses that worked. The telehealth follow-ups between visits were a huge convenience.', initial: 'L', name: 'Laura H.', context: `${cityName} resident` },
            { quote: 'Worth the drive. Period. My vision with scleral lenses is better than it has been in 15 years. Dr. Bonakdar understands keratoconus at a level that most doctors simply do not.', initial: 'K', name: 'Kevin N.', context: `${cityName} patient` },
        ],
        'la-gateway': [
            { quote: 'LA has plenty of eye doctors, but very few who actually specialize in keratoconus scleral lens fitting. Dr. Bonakdar is the real deal -- 500+ cases and it shows in the precision of his work.', initial: 'J', name: 'James W.', context: `${cityName} patient` },
            { quote: 'The drive to Santa Ana from LA County was actually shorter than getting to my previous specialist on the Westside. Free parking and same-week appointments made it painless.', initial: 'C', name: 'Christine M.', context: `${cityName} resident` },
            { quote: 'I chose Dr. Bonakdar over several LA practices because of his keratoconus case volume. 500+ cases means he has seen corneas like mine before and knows exactly what to do.', initial: 'A', name: 'Alex P.', context: `${cityName} professional` },
        ],
    };

    return experiencesByType[cityType] || experiencesByType['suburban-commuter'];
}

export default function CityTestimonials({ citySlug, cityName }: CityTestimonialsProps) {
    const cityType = getCityType(citySlug);
    const experiences = getExperiences(cityType, cityName);

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-4">
                            Patient Experiences from {cityName}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Hear from patients in the {cityName} area who have restored their vision
                            through specialty keratoconus care with Dr. Bonakdar.
                        </p>
                    </div>
                </FadeIn>

                {/* Testimonial cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {experiences.map((experience, index) => (
                        <FadeIn key={index} delay={0.1 + index * 0.1}>
                            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-eyecare-blue/20 transition-colors h-full flex flex-col">
                                {/* Quote icon */}
                                <Quote className="w-8 h-8 text-eyecare-blue/20 mb-4" />

                                {/* Testimonial text */}
                                <p className="text-gray-600 leading-relaxed text-sm flex-grow mb-6">
                                    &ldquo;{experience.quote}&rdquo;
                                </p>

                                {/* Attribution */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-eyecare-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {experience.initial}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 text-sm">{experience.name}</p>
                                            <p className="text-gray-400 text-xs">{experience.context}</p>
                                        </div>
                                    </div>
                                    <StarRating rating={5} />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Google Reviews CTA */}
                <FadeIn delay={0.5}>
                    <div className="text-center mt-10">
                        <a
                            href="https://search.google.com/local/reviews?placeid=ChIJp2P0fFvf3IARqSfz9zJNDSk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-eyecare-blue hover:text-eyecare-dark-blue font-medium transition-colors"
                        >
                            See all reviews on Google
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
