import ContactForm from '@/components/ContactFormV2';
import TrustSignals from '@/components/TrustSignals';

export default function LeadForm({ locale = 'en' }: { locale?: 'en' | 'es' }) {
    const heading = locale === 'es'
        ? 'Agenda Tu Consulta de Experto'
        : 'Schedule Your Expert Consultation';
    const subtext = locale === 'es'
        ? 'Complete el formulario y nuestro equipo se comunicará con usted dentro de 1 día hábil.'
        : 'Fill out the form and our team will reach out within 1 business day.';

    return (
        <div id="contact-form" className="bg-white py-8 px-0 sm:py-16 sm:px-6 lg:px-8 w-full">
            <div className="relative max-w-xl mx-auto px-4 sm:px-0">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-serif">
                        {heading}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg leading-6 text-slate-600">
                        {subtext}
                    </p>
                </div>

                <TrustSignals locale={locale} />

                <div className="mt-4 w-full rounded-lg">
                    <ContactForm locale={locale} />
                </div>
            </div>
        </div>
    );
}
