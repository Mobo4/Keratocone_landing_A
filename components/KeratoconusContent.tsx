import React from 'react';
import FadeIn from './FadeIn';

export default function KeratoconusContent() {
    return (
        <article className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Common Symptoms */}
                <FadeIn>
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-eyecare-navy font-serif mb-6">
                            Common Symptoms of Keratoconus
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Keratoconus symptoms often begin gradually and worsen over time. Early signs may resemble ordinary refractive error but become more distinct as the cornea steepens.
                        </p>
                        <ul className="space-y-3 text-gray-700 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-eyecare-blue rounded-full mt-2.5 shrink-0"></span>
                                Blurred or distorted vision that does not fully correct with glasses
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-eyecare-blue rounded-full mt-2.5 shrink-0"></span>
                                Increased sensitivity to light and glare
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-eyecare-blue rounded-full mt-2.5 shrink-0"></span>
                                Halos or streaking around lights, especially at night
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-eyecare-blue rounded-full mt-2.5 shrink-0"></span>
                                Frequent changes in glasses or contact lens prescriptions
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-eyecare-blue rounded-full mt-2.5 shrink-0"></span>
                                Difficulty with night driving or reading fine print
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-eyecare-blue rounded-full mt-2.5 shrink-0"></span>
                                Double vision or ghost images in one eye
                            </li>
                        </ul>
                    </section>
                </FadeIn>

                {/* Why Glasses Often Do Not Work */}
                <FadeIn>
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-eyecare-navy font-serif mb-6">
                            Why Glasses Often Do Not Work for Keratoconus
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Glasses correct vision by adjusting how light enters the eye, but they rely on the cornea having a relatively uniform shape. In keratoconus, the cornea becomes irregularly curved, scattering light in multiple directions. Glasses cannot compensate for this type of distortion, which is why patients often report that their vision remains blurry even with an updated prescription. As the condition progresses, specialty contact lenses are typically required to provide a smooth optical surface over the irregular cornea.
                        </p>
                    </section>
                </FadeIn>

                {/* Is Keratoconus Progressive? */}
                <FadeIn>
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-eyecare-navy font-serif mb-6">
                            Is Keratoconus a Progressive Condition?
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Yes, keratoconus is typically a progressive condition. It most commonly advances during the teenage years and twenties, though the rate of progression varies among individuals. In many patients, the condition stabilizes by the mid-30s to 40s. Corneal cross-linking is a procedure that can slow or halt progression when performed early. Regular monitoring with corneal imaging is important to detect changes over time and adjust the management plan accordingly.
                        </p>
                    </section>
                </FadeIn>

                {/* Can Keratoconus Cause Permanent Vision Loss? */}
                <FadeIn>
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-eyecare-navy font-serif mb-6">
                            Can Keratoconus Cause Permanent Vision Loss?
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Keratoconus does not typically cause complete blindness, but it can lead to significant and permanent vision impairment if left unmanaged. In advanced cases, corneal scarring may develop and reduce best-corrected visual acuity. In rare instances, a condition called corneal hydrops can cause sudden swelling and further scarring. With appropriate management, including specialty contact lenses and monitoring, most patients maintain functional vision throughout their lives.
                        </p>
                    </section>
                </FadeIn>

                {/* What Happens If Not Treated */}
                <FadeIn>
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-eyecare-navy font-serif mb-6">
                            What Happens If Keratoconus Is Not Treated
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Without management, keratoconus may continue to progress, leading to increasing corneal irregularity and worsening vision. Over time, thinning and steepening of the cornea can result in scarring that further reduces visual clarity. In advanced stages, contact lens fitting becomes more difficult, and corneal transplantation may become the remaining option. Early detection and ongoing monitoring allow for timely interventions that can preserve corneal integrity and visual function.
                        </p>
                    </section>
                </FadeIn>

                {/* Contact Lens Options */}
                <FadeIn>
                    <section className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-eyecare-navy font-serif mb-6">
                            Contact Lens Options for Keratoconus
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Several types of contact lenses are used to manage keratoconus. The appropriate option depends on the severity of the condition and the individual shape of the cornea.
                        </p>

                        <div className="space-y-8">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Glasses</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Glasses may provide adequate correction in early-stage keratoconus. As the cornea becomes more irregular, glasses are generally unable to correct the resulting distortion and are no longer sufficient as a primary form of vision correction.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Rigid Gas Permeable (RGP) Lenses</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    RGP lenses are small, rigid lenses that rest directly on the cornea. They create a smooth refracting surface that can improve visual acuity in mild to moderate keratoconus. Some patients find them less comfortable than other options, particularly when the cornea is highly irregular.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Hybrid Lenses</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Hybrid lenses combine a rigid center with a soft outer skirt. They offer some of the optical clarity of an RGP lens with improved comfort. They may be appropriate for patients with moderate keratoconus who have difficulty wearing rigid lenses.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Scleral Lenses</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Scleral lenses are large-diameter rigid gas permeable lenses that vault over the entire cornea and rest on the sclera (the white part of the eye). A fluid reservoir between the lens and cornea creates a smooth optical surface, bypassing corneal irregularity. Scleral lenses are often the preferred option for moderate to advanced keratoconus because they provide consistent visual correction, improved comfort compared to smaller rigid lenses, and protection for the corneal surface.
                                </p>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* Monitoring Over Time */}
                <FadeIn>
                    <section className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-eyecare-navy font-serif mb-6">
                            How Keratoconus Is Monitored Over Time
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Keratoconus is monitored through regular comprehensive eye examinations that include corneal topography and tomography. These imaging techniques create detailed maps of the corneal surface and thickness, allowing clinicians to detect subtle changes in shape over time. Monitoring frequency depends on the patient's age, rate of progression, and current management approach. Patients who have undergone corneal cross-linking or who wear scleral lenses are typically seen at regular intervals to assess corneal stability and lens fit.
                        </p>
                    </section>
                </FadeIn>

            </div>
        </article>
    );
}
