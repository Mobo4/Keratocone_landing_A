import LandingHero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import PamphletDownload from '@/components/PamphletDownload';
import VisionSimulator from '@/components/VisionSimulator';
import KeratoconusQuiz from '@/components/KeratoconusQuiz';

import LandingLayout from '@/components/LandingLayout';
import FadeIn from '@/components/FadeIn';
import InsuranceSection from '@/components/InsuranceSection';
import Testimonials from '@/components/Testimonials';

export default function LandingPage() {
  return (
    <LandingLayout>
      <LandingHero
        headline="National Keratoconus Center of Excellence"
        subheadline="Specialized Scleral Lens Treatment for Complex Cases. Trusted by CHOC & UCI Medical Center."
        benefits={[
          "Advanced Scleral Lens Technology",
          "Non-Surgical Vision Restoration",
          "Referral Center for Difficult Cases",
          "Dr. Alexander Bonakdar - 20+ Years Exp."
        ]}
        ctaText="Schedule Expert Consultation"
        ctaLink="#lead-form"
        imageSrc="/images/keratoconus-main.webp"
        phoneNumber="(714) 558-0641"
      />

      {/* Credentials & Authority Section */}
      <section className="py-24 bg-eyecare-navy text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-eyecare-blue mb-6 shadow-2xl">
                    <img
                      src="/images/drbonakdar.webp"
                      alt="Dr. Alexander Bonakdar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-eyecare-light-blue font-bold tracking-widest uppercase mb-2">National Authority</p>
                  <h3 className="text-2xl font-bold mb-1 font-serif">Dr. Alexander Bonakdar</h3>
                  <p className="text-sm text-gray-400">20+ Years Experience</p>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-300 leading-relaxed"><span className="text-white font-semibold">Trusted Medical Referral Source</span> for CHOC (Children's Hospital of Orange County) and UCI Medical Center for complex keratoconus cases</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-300 leading-relaxed"><span className="text-white font-semibold">Advanced Technology:</span> State-of-the-art corneal topography and diagnostic equipment for the most challenging fits</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full mt-2.5 shrink-0"></div>
                    <p className="text-lg text-gray-300 leading-relaxed"><span className="text-white font-semibold">Specialized Expertise:</span> When other doctors say your case is "too difficult," that's where our expertise begins</p>
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
            <h2 className="text-sm text-red-600 font-bold tracking-widest uppercase mb-3">Been Told Your Case Is Too Difficult?</h2>
            <p className="text-4xl leading-tight font-bold text-eyecare-navy sm:text-5xl font-serif mb-6">
              You're Not Out of Options
            </p>
            <p className="max-w-3xl text-xl text-gray-600 lg:mx-auto leading-relaxed">
              If you've been told "there's nothing more we can do" or "your corneas are too irregular," you've come to the right place. We specialize in the cases others turn away.
            </p>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12">
              <div className="relative bg-red-50 p-10 rounded-3xl border border-red-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <dt>
                  <p className="text-2xl leading-8 font-bold text-eyecare-navy font-serif mb-4">The Reality of Advanced Keratoconus</p>
                </dt>
                <dd className="text-lg text-gray-600 leading-relaxed">
                  Your cornea has thinned and bulged into a cone shape, scattering light and causing severe distortion. Regular contacts slide off. Glasses barely help. You may have been told to "wait for a transplant."
                </dd>
              </div>
              <div className="relative bg-eyecare-lighter-blue p-10 rounded-3xl border border-eyecare-blue/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                <dt>
                  <p className="text-2xl leading-8 font-bold text-eyecare-navy font-serif mb-4">The Solution: Scleral Lens Expertise</p>
                </dt>
                <dd className="text-lg text-gray-600 leading-relaxed">
                  Custom scleral lenses vault over your irregular cornea, creating a perfectly smooth optical surface. With our advanced fitting technology and expertise in difficult cases, we achieve clear vision even when others have failed.
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>
      </section>

      {/* Vision Simulator Section - 10x Feature */}
      <section className="py-24 bg-eyecare-navy overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <VisionSimulator />
          </FadeIn>
        </div>
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
                    {/* Placeholder for Topography Image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-green-500 opacity-20"></div>
                    <p className="text-gray-500 font-semibold z-10">Corneal Topography Map</p>
                    <p className="text-xs text-gray-400 absolute bottom-4">(Visualizing the irregular cone)</p>
                  </div>
                  <p className="text-center mt-4 text-sm font-bold text-eyecare-navy">Advanced Diagnostic Mapping</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      import InsuranceSection from '@/components/InsuranceSection';

      // ... (imports)

      // ... (inside component)

      {/* Advanced Technology - Topography Placeholder */}
      <section className="py-24 bg-eyecare-lighter-blue">
        {/* ... (existing content) ... */}
      </section>

      {/* Insurance Section */}
      <InsuranceSection />

      {/* Why Choose Us / Medical Credibility */}
      <section className="bg-eyecare-warm py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="lg:text-center mb-16">
              <h2 className="text-4xl font-bold text-eyecare-navy font-serif mb-6">National Center of Excellence for Complex Cases</h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                Patients travel from across the country to see Dr. Bonakdar. When CHOC and UCI Medical Center encounter complex cases, they refer to us.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Difficult Fit Specialist", desc: "We excel where others struggle. Severe keratoconus, post-surgical corneas, and irregular astigmatism—these 'impossible' cases are our specialty.", border: "border-eyecare-blue" },
                { title: "Advanced Diagnostic Technology", desc: "State-of-the-art corneal topography and mapping systems provide microscopic precision for custom scleral lens design.", border: "border-eyecare-blue" },
                { title: "Medical Referral Network", desc: "Trusted by CHOC and UCI Medical Center. When their keratoconus patients need expert lens fitting, they send them to us.", border: "border-eyecare-blue" },
                { title: "Proven Track Record", desc: "20+ years of successful fittings. Patients who were told 'nothing more can be done' achieve 20/20 vision or better.", border: "border-green-600" },
                { title: "Comprehensive Care", desc: "From initial consultation to ongoing monitoring, we ensure long-term success and corneal health with every fit.", border: "border-green-600" },
                { title: "⚠️ Limited Availability", desc: "Due to the complexity of cases we handle, we accept a limited number of new patients each month. Schedule your consultation now.", border: "border-green-600", font: "font-semibold" }
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

      {/* Lead Form Section */}
      <section id="lead-form" className="py-24 bg-eyecare-lighter-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-eyecare-blue/10">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-16 bg-eyecare-navy text-white flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6 font-serif">Schedule Your Expert Consultation</h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Don't let keratoconus limit your life. Dr. Bonakdar's schedule fills up quickly due to the complexity of cases. Secure your appointment today to start your journey to clear vision.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">✓</div>
                      <span className="text-lg">Comprehensive Corneal Analysis</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">✓</div>
                      <span className="text-lg">Custom Scleral Lens Trial</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm">✓</div>
                      <span className="text-lg">Personalized Treatment Plan</span>
                    </li>
                  </ul>
                </div>
                <div className="p-12 lg:p-16">
                  <LeadForm />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </LandingLayout>
  );
}
