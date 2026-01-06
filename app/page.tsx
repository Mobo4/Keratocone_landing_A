import LandingHero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import LeadForm from '@/components/LeadForm';
import PamphletDownload from '@/components/PamphletDownload';
import VisionSimulator from '@/components/VisionSimulator';
import KeratoconusQuiz from '@/components/KeratoconusQuiz';

import LandingLayout from '@/components/LandingLayout';
import FadeIn from '@/components/FadeIn';
import InsuranceSection from '@/components/InsuranceSection';
import Testimonials from '@/components/Testimonials';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Keratoconus Specialist Orange County | Dr. Alexander Bonakdar",
  description: "Best keratoconus doctor near you in Orange County, CA. Expert keratoconus treatment without surgery using advanced scleral lenses. 35+ years experience. Call (714) 558-0641.",
  keywords: ["keratoconus specialist", "keratoconus doctor", "keratoconus treatment", "scleral lenses", "keratoconus specialist near me", "keratoconus doctor orange county", "cornea specialist", "keratoconus treatment without surgery"],
  alternates: {
    canonical: 'https://keratocones.com',
  },
};

export default function LandingPage() {
  return (
    <LandingLayout>
      <LandingHero
        headline="Orange County's Leading Keratoconus Specialist"
        subheadline="Expert Keratoconus Doctor & Scleral Lens Care. When Others Say No, We Say Yes. Trusted by CHOC & UCI Medical Center."
        benefits={[
          "Advanced Scleral Lens Technology",
          "Non-Surgical Vision Restoration",
          "Complex Case Specialists",
          "35+ Years Experience",
          "Proven Results",
          "Insurance Accepted"
        ]}
        ctaText="Book Consultation"
        ctaLink="#lead-form"
        imageSrc="/images/keratoconus-main.webp"
        phoneNumber="(714) 558-0641"
        priority={true}
      />

      {/* Credentials & Authority Section */}
      <section className="py-24 bg-gradient-to-br from-[#faf9f6] via-[#f0eadd] to-[#e6dfd1]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-eyecare-navy mb-6 shadow-2xl">
                    <img
                      src="/images/drbonakdar.webp"
                      alt="Dr. Alexander Bonakdar - Keratoconus Specialist Orange County"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 30%' }}
                    />
                  </div>
                  <p className="text-base md:text-sm text-eyecare-navy font-bold tracking-widest uppercase mb-2">Keratoconus Vision Center</p>
                  <h3 className="text-2xl font-bold mb-1 font-serif text-eyecare-navy">Dr. Alexander Bonakdar</h3>
                  <p className="text-base md:text-sm text-gray-700">Keratoconus Doctor - 35+ Years Experience</p>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-2 h-2 bg-eyecare-navy rounded-full mt-2 md:mt-2.5 shrink-0"></div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed"><span className="text-eyecare-navy font-bold">Trusted Keratoconus Specialist</span> - Referral source for CHOC (Children's Hospital of Orange County) and UCI Medical Center for complex keratoconus cases</p>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-2 h-2 bg-eyecare-navy rounded-full mt-2 md:mt-2.5 shrink-0"></div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed"><span className="text-eyecare-navy font-bold">Advanced Keratoconus Treatment Technology:</span> State-of-the-art corneal topography and diagnostic equipment for the most challenging keratoconus fits</p>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-2 h-2 bg-eyecare-navy rounded-full mt-2 md:mt-2.5 shrink-0"></div>
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed"><span className="text-eyecare-navy font-bold">Expert Keratoconus Doctor:</span> When other doctors say your keratoconus case is "too difficult," that's where our specialized expertise begins</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* Problem/Agitation Section */}
      <section id="learn-more" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="lg:text-center mb-16">
            <h2 className="text-xs md:text-sm text-red-600 font-bold tracking-widest uppercase mb-3">Looking for a Keratoconus Doctor Near You?</h2>
            <p className="text-3xl md:text-4xl leading-tight font-bold text-eyecare-navy sm:text-5xl font-serif mb-4 md:mb-6">
              Expert Keratoconus Treatment Without Surgery
            </p>
            <p className="max-w-3xl text-lg md:text-xl text-gray-600 lg:mx-auto leading-relaxed">
              If you've been told "there's nothing more we can do" or "your corneas are too irregular," you've found the best keratoconus specialist near you. Our keratoconus doctor specializes in the cases other eye doctors turn away.
            </p>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12">
              <div className="relative bg-red-50 p-6 md:p-10 rounded-3xl border border-red-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <dt>
                  <p className="text-xl md:text-2xl leading-8 font-bold text-eyecare-navy font-serif mb-3 md:mb-4">The Reality of Advanced Keratoconus</p>
                </dt>
                <dd className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Your cornea has thinned and bulged into a cone shape, scattering light and causing severe distortion. Regular contacts slide off. Glasses barely help. You may have been told by other doctors to "wait for a transplant." A keratoconus specialist can help.
                </dd>
              </div>
              <div className="relative bg-eyecare-lighter-blue p-6 md:p-10 rounded-3xl border border-eyecare-blue/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                <dt>
                  <p className="text-xl md:text-2xl leading-8 font-bold text-eyecare-navy font-serif mb-3 md:mb-4">The Solution: Expert Keratoconus Treatment</p>
                </dt>
                <dd className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Custom scleral lenses vault over your irregular cornea, creating a perfectly smooth optical surface. With our keratoconus specialist's advanced fitting technology and expertise in difficult cases, we achieve clear vision even when other keratoconus doctors have failed.
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>
      </section>

      {/* Real Patient Stories - Video Placeholder */}
      <Testimonials />

      {/* Advanced Technology - Topography Placeholder */}
      <section className="py-24 bg-eyecare-lighter-blue">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-6">Precision Mapping Technology</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We don't guess. We map your cornea with microscopic precision using advanced topography. This allows us to design a lens that vaults over the irregular "cone" shape of your eye, providing a new, perfectly smooth optical surface.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                    <span className="text-gray-700 font-medium">Detailed Corneal Elevation Maps</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                    <span className="text-gray-700 font-medium">Custom Wavefront Optics</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                    <span className="text-gray-700 font-medium">Sub-Micron Fitting Accuracy</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-eyecare-blue/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                    <img
                      src="/images/topography.jpg"
                      alt="Corneal Topography"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-4 text-sm font-bold text-eyecare-navy">Advanced Diagnostic Mapping</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Insurance Section */}
      <InsuranceSection />

      {/* Why Choose Us / Medical Credibility */}
      <section className="bg-gradient-to-r from-white to-eyecare-lighter-blue/30 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="lg:text-center mb-16">
              <h2 className="text-4xl font-bold text-eyecare-navy font-serif mb-6">Why Choose Our Keratoconus Specialist</h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                Patients travel from across the country to see our keratoconus doctor. When CHOC and UCI Medical Center encounter complex keratoconus cases, they refer to us.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Keratoconus Specialist for Difficult Cases", desc: "Our keratoconus doctor excels where others struggle. Severe keratoconus, post-surgical corneas, and irregular astigmatism—these 'impossible' cases are our specialty.", border: "border-eyecare-blue" },
                { title: "Advanced Keratoconus Diagnostic Technology", desc: "State-of-the-art corneal topography and mapping systems provide microscopic precision for custom scleral lens design for keratoconus treatment.", border: "border-eyecare-blue" },
                { title: "Trusted Keratoconus Doctor", desc: "Trusted by CHOC and UCI Medical Center. When their keratoconus patients need an expert keratoconus specialist for lens fitting, they send them to us.", border: "border-eyecare-blue" },
                { title: "Proven Keratoconus Treatment Results", desc: "35+ years of successful keratoconus fittings. Patients who were told 'nothing more can be done' achieve 20/20 vision or better with our keratoconus treatment.", border: "border-green-600" },
                { title: "Comprehensive Keratoconus Care", desc: "From initial keratoconus consultation to ongoing monitoring, we ensure long-term success and corneal health with every keratoconus treatment fit.", border: "border-green-600" },
                { title: "Limited Availability", desc: "Due to the complexity of keratoconus cases we handle, we accept a limited number of new patients each month. Schedule your keratoconus consultation now.", border: "border-green-600", font: "font-semibold" }
              ].map((item, idx) => (
                <div key={idx} className={`bg-white overflow-hidden shadow-xl rounded-2xl border-t-4 ${item.border} hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="px-8 py-10">
                    <h3 className="text-xl font-bold text-eyecare-navy mb-4 font-serif">{item.title}</h3>
                    <p className={`text-base text-gray-600 leading-relaxed ${item.font || ''}`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quiz Section - 10x Feature */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <KeratoconusQuiz />
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section for SEO & User Value */}
      <FAQSection />

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
