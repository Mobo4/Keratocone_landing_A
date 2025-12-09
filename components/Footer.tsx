
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, CreditCard } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-eyecare-navy text-white text-sm">
            {/* Top Bar: Financial & Trust Signals */}
            <div className="border-b border-white/10 bg-black/20">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="flex items-center gap-2 text-gray-300">
                        <CreditCard className="w-4 h-4 text-eyecare-blue" />
                        <span className="font-semibold">Financial Options:</span> HSA/FSA Accepted • CareCredit Financing • Major Credit Cards
                    </p>
                    <div className="flex gap-4">
                        <span className="text-gray-400 text-xs">Visa</span>
                        <span className="text-gray-400 text-xs">Mastercard</span>
                        <span className="text-gray-400 text-xs">Amex</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Clinic Info */}
                    <div>
                        <h3 className="text-lg font-serif font-bold text-white mb-6">Keratoconus Vision Center</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Specialized scleral lens treatment and visual restoration for patients in Orange County, Los Angeles, and across Southern California.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.facebook.com/eyecarecenteroc" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-eyecare-blue transition-colors">
                                <Facebook className="w-4 h-4" />
                            </Link>
                            <Link href="https://www.instagram.com/eyecarecenteroc" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-eyecare-blue transition-colors">
                                <Instagram className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Patient Resources</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-eyecare-blue transition-colors">About Dr. Bonakdar</Link></li>
                            <li><Link href="/services/keratoconus-treatment" className="text-gray-400 hover:text-eyecare-blue transition-colors">Scleral Lenses</Link></li>
                            <li><Link href="/keratoconus-resources" className="text-gray-400 hover:text-eyecare-blue transition-colors">Keratoconus Library</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-eyecare-blue transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Locations */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Serving Southern CA</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/locations/irvine" className="hover:text-eyecare-blue">Irvine Keratoconus</Link></li>
                            <li><Link href="/locations/newport-beach" className="hover:text-eyecare-blue">Newport Beach</Link></li>
                            <li><Link href="/locations/los-angeles" className="hover:text-eyecare-blue">Los Angeles</Link></li>
                            <li><Link href="/locations/anaheim" className="hover:text-eyecare-blue">Anaheim</Link></li>
                            <li><Link href="/locations/santa-ana" className="hover:text-eyecare-blue">Santa Ana</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-eyecare-blue shrink-0" />
                                <span className="text-gray-400">
                                    801 N Tustin Ave #401<br />
                                    Santa Ana, CA 92705
                                </span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-5 h-5 text-eyecare-blue shrink-0" />
                                <a href="tel:7145580641" className="text-gray-400 hover:text-white transition-colors">(714) 558-0641</a>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-5 h-5 text-eyecare-blue shrink-0" />
                                <a href="mailto:info@eyecarecenteroc.com" className="text-gray-400 hover:text-white transition-colors">info@eyecarecenteroc.com</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="border-t border-white/10 bg-black/10">
                <div className="container mx-auto px-4 py-6 text-center text-xs text-gray-500">
                    <p>&copy; {currentYear} Keratoconus Vision Center. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
