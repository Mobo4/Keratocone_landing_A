
import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import LeadForm from '@/components/LeadForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata = {
    title: 'Contact Us | Keratoconus Vision Center',
    description: 'Book your consultation at the Keratoconus Vision Center in Santa Ana, CA. Serving Irvine, Newport Beach, and all Orange County.',
};

export default function ContactPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Keratoconus Vision Center",
        "description": "Contact information, location, and hours for Dr. Alexander Bonakdar in Santa Ana, CA.",
        "url": "https://keratocones.com/contact",
        "mainEntity": {
            "@type": "MedicalBusiness",
            "name": "Keratoconus Vision Center",
            "telephone": "+1-714-558-0641",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "801 N Tustin Ave #401",
                "addressLocality": "Santa Ana",
                "addressRegion": "CA",
                "postalCode": "92705",
                "addressCountry": "US"
            }
        }
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="bg-white min-h-screen">
                {/* Header */}
                <div className="bg-eyecare-navy py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl text-white font-serif font-bold mb-4">Contact & Location</h1>
                        <p className="text-blue-200">Conveniently located in Central Orange County</p>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div>
                            <div className="bg-eyecare-lighter-blue/30 p-8 rounded-3xl border border-eyecare-blue/10 mb-8">
                                <h2 className="text-2xl font-bold text-eyecare-navy mb-6 font-serif">Get In Touch</h2>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Address</h3>
                                            <p className="text-gray-600">
                                                801 N Tustin Ave #401<br />
                                                Santa Ana, CA 92705
                                            </p>
                                            <a href="https://maps.google.com/?q=801+N+Tustin+Ave+401,+Santa+Ana,+CA+92705" target="_blank" rel="noopener noreferrer" className="text-sm text-eyecare-blue font-bold mt-1 inline-block hover:underline">
                                                Get Directions &rarr;
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Phone</h3>
                                            <p className="text-gray-600">Call or Text us anytime.</p>
                                            <a href="tel:7145580641" className="text-lg font-bold text-eyecare-navy hover:text-eyecare-blue transition-colors">
                                                (714) 558-0641
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Email</h3>
                                            <a href="mailto:info@eyecarecenteroc.com" className="text-gray-600 hover:text-eyecare-blue">
                                                info@eyecarecenteroc.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-eyecare-blue shadow-sm shrink-0">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Office Hours</h3>
                                            <ul className="text-gray-600 text-sm space-y-1">
                                                <li className="flex justify-between w-48"><span>Mon - Thu:</span> <span>9:00 AM - 6:00 PM</span></li>
                                                <li className="flex justify-between w-48"><span>Fri:</span> <span>9:00 AM - 5:00 PM</span></li>
                                                <li className="flex justify-between w-48"><span>Sat:</span> <span>9:00 AM - 2:00 PM</span></li>
                                                <li className="flex justify-between w-48 text-gray-400"><span>Sun:</span> <span>Closed</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Directions Section */}
                                <div className="mt-8 pt-8 border-t border-eyecare-blue/10">
                                    <h3 className="font-bold text-eyecare-navy mb-4">Directions from Major Areas</h3>
                                    <div className="space-y-3 text-sm text-gray-600">
                                        <p><strong>From Irvine:</strong> Take I-5 North to CA-55 North. Exit at 17th Street and turn right. Turn left on N Tustin Ave. Our office is on the right.</p>
                                        <p><strong>From Newport Beach:</strong> Take CA-55 North toward Santa Ana. Exit at 17th Street and follow directions above.</p>
                                        <p><strong>From Los Angeles:</strong> Take I-5 South to CA-55 South. Exit at 17th Street and turn left. Turn left on N Tustin Ave.</p>
                                        <p className="text-xs text-gray-500 mt-4">Parking: Free parking is available in the building lot. Suite 401 is on the 4th floor.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map Embed */}
                            <div className="rounded-3xl overflow-hidden shadow-lg h-64 border border-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.598687798369!2d-117.83789092449734!3d33.75990597326887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd95130700001%3A0x6c6e6e6e6e6e6e6e!2s801%20N%20Tustin%20Ave%20%23401%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1709234567890!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 h-fit">
                            <h2 className="text-2xl font-bold text-eyecare-navy mb-6 font-serif">Request Consultation</h2>
                            <LeadForm />
                        </div>
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}
