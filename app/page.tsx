import LandingHero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import LeadForm from '@/components/LeadForm';
import VisionSimulator from '@/components/VisionSimulator';
import KeratoconusQuiz from '@/components/KeratoconusQuiz';
import KeratoconusContent from '@/components/KeratoconusContent';

import LandingLayout from '@/components/LandingLayout';
import FadeIn from '@/components/FadeIn';
import InsuranceSection from '@/components/InsuranceSection';
import Testimonials from '@/components/Testimonials';
import GoogleReviews from '@/components/GoogleReviews';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Keratoconus: Symptoms, Treatment & Scleral Lenses | Dr. Alexander Bonakdar, Orange County",
  description: "Keratoconus is a progressive eye condition where the cornea thins and bulges. Learn about symptoms, contact lens options including scleral lenses, and management from a keratoconus specialist in Orange County, CA.",
  keywords: ["keratoconus", "keratoconus symptoms", "keratoconus treatment", "scleral lenses for keratoconus", "keratoconus specialist", "keratoconus doctor orange county", "cornea specialist", "keratoconus contact lenses", "is keratoconus progressive", "keratoconus vision loss"],
  alternates: {
    canonical: 'https://www.keratocones.com',
  },
  openGraph: {
    title: "Keratoconus: Symptoms, Treatment & Scleral Lenses | Dr. Alexander Bonakdar",
    description: "Keratoconus is a progressive eye condition where the cornea thins and bulges into a cone shape. Learn about symptoms, diagnosis, contact lens options, and ongoing management.",
    url: 'https://www.keratocones.com',
    siteName: 'Keratoconus Vision Center',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.keratocones.com/images/keratoconus-main.webp',
        width: 1200,
        height: 630,
        alt: 'Keratoconus Vision Center - Dr. Alexander Bonakdar',
      },
      {
        url: 'https://www.keratocones.com/images/drbonakdar.webp',
        width: 800,
        height: 800,
        alt: 'Dr. Alexander Bonakdar - Keratoconus Specialist Orange County',
      },
    ],
    videos: [
      {
        url: 'https://www.youtube.com/watch?v=jGBsy13yk7c',
        width: 1280,
        height: 720,
        type: 'text/html',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Keratoconus: Symptoms, Treatment & Scleral Lenses | Dr. Alexander Bonakdar",
    description: "Keratoconus is a progressive eye condition where the cornea thins and bulges. Learn about symptoms, contact lens options, and management.",
    images: ['https://www.keratocones.com/images/keratoconus-main.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function LandingPage() {
  return (
    <LandingLayout>
      {/* H1 Hero: Keratoconus + Above-the-fold definition */}
      <LandingHero
        headline="Keratoconus"
        subheadline="Keratoconus is a progressive eye condition in which the cornea thins and bulges into a cone shape, causing distorted vision. It is typically diagnosed in adolescence or early adulthood and managed with specialty contact lenses, corneal cross-linking, or both."
        benefits={[
          "Scleral Lens Fitting",
          "Corneal Topography",
          "Post-Surgical Management",
          "35+ Years Clinical Experience",
          "Insurance Accepted",
          "Referral Center for Complex Cases"
        ]}
        ctaText="Schedule Evaluation"
        ctaLink="#lead-form"
        imageSrc="/images/keratoconus-main.webp"
        phoneNumber="(714) 558-0641"
        priority={true}
      />

      {/* AEO-Optimized Educational Content */}
      <KeratoconusContent />

      {/* Understanding Keratoconus - Video */}
      <Testimonials />

      {/* How Keratoconus Is Diagnosed - Corneal Topography */}
      <section className="py-24 bg-eyecare-lighter-blue">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-6">How Keratoconus Is Diagnosed</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Keratoconus is diagnosed through corneal topography, a non-invasive imaging technique that creates a detailed map of the corneal surface. This map reveals irregularities in curvature, thickness, and elevation that are characteristic of keratoconus. Corneal tomography may also be used to evaluate the full thickness of the cornea and detect early changes before symptoms appear.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                    <span className="text-gray-700 font-medium">Corneal Topography (Surface Curvature Mapping)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                    <span className="text-gray-700 font-medium">Corneal Tomography (Full Thickness Analysis)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                    <span className="text-gray-700 font-medium">Pachymetry (Corneal Thickness Measurement)</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-eyecare-blue/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                    <img
                      src="https://res.cloudinary.com/broadcastmed/image/fetch/q_auto,f_auto/dpr_auto/https://ophthalmologymanagement.com/media/bx5jmelz/omd_jun_6301.jpg"
                      alt="Corneal topography map showing keratoconus with characteristic steepening patterns in curvature and elevation data"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-4 text-sm font-bold text-eyecare-navy">Corneal Topography: Diagnostic Mapping for Keratoconus</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision Comparison */}
      <VisionSimulator />

      {/* FAQ Section */}
      <FAQSection />

      {/* Practice Information - Brief and Professional */}
      <section className="py-24 bg-gradient-to-br from-[#faf9f6] via-[#f0eadd] to-[#e6dfd1]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-12 text-center">About This Practice</h2>
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-eyecare-navy mb-6 shadow-2xl">
                    <img
                      src="/images/drbonakdar.webp"
                      alt="Dr. Alexander Bonakdar, O.D. - Keratoconus Specialist, Orange County, California"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 30%' }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1 font-serif text-eyecare-navy">Dr. Alexander Bonakdar, O.D.</h3>
                  <p className="text-base md:text-sm text-gray-700">Licensed Optometrist</p>
                  <p className="text-base md:text-sm text-gray-700">35+ Years Clinical Experience</p>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    Dr. Bonakdar provides keratoconus evaluation and specialty contact lens management, including scleral lens fitting, at the Keratoconus Vision Center in Santa Ana, California. The practice receives referrals from CHOC (Children's Hospital of Orange County) and UCI Medical Center for complex corneal cases.
                  </p>
                  <div className="bg-white/60 rounded-xl p-6 border border-gray-200">
                    <p className="text-gray-800 font-medium mb-2">Keratoconus Vision Center</p>
                    <p className="text-gray-600">801 North Tustin Ave, Suite 401</p>
                    <p className="text-gray-600">Santa Ana, CA 92705</p>
                    <p className="text-gray-600 mt-2">Phone: <a href="tel:+17145580641" className="text-eyecare-blue hover:underline">(714) 558-0641</a></p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-eyecare-navy rounded-full mt-2.5 shrink-0"></div>
                      <span className="text-gray-700">Keratoconus evaluation and ongoing monitoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-eyecare-navy rounded-full mt-2.5 shrink-0"></div>
                      <span className="text-gray-700">Scleral, RGP, and hybrid contact lens fitting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-eyecare-navy rounded-full mt-2.5 shrink-0"></div>
                      <span className="text-gray-700">Post-surgical corneal management (post-transplant, post-cross-linking)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-eyecare-navy rounded-full mt-2.5 shrink-0"></div>
                      <span className="text-gray-700">Advanced corneal topography and tomography</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Patient Reviews */}
      <GoogleReviews />

      {/* Insurance Section */}
      <InsuranceSection />

      {/* Quiz Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <KeratoconusQuiz />
          </FadeIn>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-12 md:py-24 bg-eyecare-lighter-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-eyecare-blue/10 max-w-3xl mx-auto">
              <div className="p-6 md:p-12 lg:p-16">
                <LeadForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </LandingLayout>
  );
}
