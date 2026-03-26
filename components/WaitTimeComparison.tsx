// PURPOSE: Differentiates Keratoconus Vision Center from university hospital wait times.
// Drives same-week appointment bookings by contrasting the 3-6 month university wait,
// resident-level care, and multi-visit burden against direct specialist access in one visit.

import { CheckCircle, XCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const universityRows = [
    '3-6 Month Wait for Appointment',
    'Seen by Residents & Fellows',
    'Multiple Visits, Multiple Departments',
];

const centerRows = [
    'Same-Week Appointments',
    'Dr. Bonakdar \u2014 Direct Specialist Access',
    'One Visit, One Expert, One Location',
];

export default function WaitTimeComparison() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <FadeIn>
                    <div className="relative grid md:grid-cols-2 gap-8">
                        {/* Left column - University Hospitals (the problem) */}
                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                            <h3 className="text-xl font-bold text-gray-400 font-serif mb-6 text-center">
                                University Hospitals
                            </h3>
                            <ul className="space-y-4">
                                {universityRows.map((row, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                                        <span className="text-gray-500 font-medium">{row}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* VS divider - visible on desktop, hidden on mobile */}
                        <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 items-center z-10">
                            <span className="bg-eyecare-blue text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                                VS
                            </span>
                        </div>

                        {/* Mobile VS divider */}
                        <div className="flex md:hidden items-center justify-center -my-4">
                            <span className="bg-eyecare-blue text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                                VS
                            </span>
                        </div>

                        {/* Right column - Keratoconus Vision Center (the solution) */}
                        <div className="rounded-2xl border border-eyecare-blue bg-blue-50/30 p-8">
                            <h3 className="text-xl font-bold text-eyecare-blue font-serif mb-6 text-center">
                                Keratoconus Vision Center
                            </h3>
                            <ul className="space-y-4">
                                {centerRows.map((row, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <span className="text-eyecare-navy font-medium">{row}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA below comparison */}
                    <div className="text-center mt-10 space-y-3">
                        <a
                            href="#contact-form"
                            className="inline-block bg-eyecare-blue text-white px-8 py-3 rounded-xl font-semibold hover:bg-eyecare-dark-blue transition-colors"
                        >
                            Book Your Same-Week Appointment
                        </a>
                        <p className="text-eyecare-gray text-sm">
                            or call{' '}
                            <a
                                href="tel:+17145580641"
                                className="text-eyecare-blue font-semibold hover:underline"
                            >
                                (714) 558-0641
                            </a>
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
