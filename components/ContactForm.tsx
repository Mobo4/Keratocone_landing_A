'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { trackFormSubmit, trackFormStarted, trackEmailEntered, trackPhoneEntered } from '@/lib/tracking';
import { captureAndGetTracking, getStoredTracking } from '@/lib/utm-tracking';

type FormStatus = 'idle' | 'submitting' | 'success' | 'success-returning' | 'error';

export default function ContactForm({ locale = 'en' }: { locale?: 'en' | 'es' }) {
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const hasStartedRef = useRef(false);

    // Capture UTMs/gclid from URL into cookies on mount, then read back from cookies.
    // Replaces sessionStorage approach — persists across tabs, page reloads, and
    // multi-visit journeys (sessionStorage dies when tab closes).
    useEffect(() => {
        captureAndGetTracking();
    }, []);

    const t = locale === 'es' ? {
        firstName: 'Nombre',
        lastName: 'Apellido',
        phone: 'Teléfono',
        email: 'Correo Electrónico',
        message: '¿Cómo podemos ayudarle?',
        submit: 'Enviar Solicitud',
        submitting: 'Enviando...',
        successTitle: '¡Solicitud Enviada!',
        successMsg: 'Nuestro equipo se comunicará con usted dentro de 1 día hábil para confirmar su cita.',
        errorMsg: 'Algo salió mal. Por favor llámenos directamente.',
        required: 'Requerido',
        optional: 'Opcional',
        charLimit: 'caracteres restantes',
        consentLabel: 'Acepto recibir mensajes de texto y correos electrónicos sobre mi cita y atención. Se pueden aplicar tarifas de mensajes y datos. Responda STOP para cancelar.',
        smsConsentLabel: 'Acepto recibir recordatorios de citas y mensajes de seguimiento por mensaje de texto. Frecuencia de mensajes variable. Responda STOP para cancelar en cualquier momento.',
        hipaaNotice: 'Sus datos están protegidos conforme a HIPAA. Nunca compartimos su información de salud sin su consentimiento.',
    } : {
        firstName: 'First Name',
        lastName: 'Last Name',
        phone: 'Phone',
        email: 'Email',
        message: 'How can we help?',
        submit: 'Request Appointment',
        submitting: 'Submitting...',
        successTitle: 'Request Submitted!',
        successMsg: 'Our team will reach out within 1 business day to confirm your appointment.',
        errorMsg: 'Something went wrong. Please call us directly.',
        required: 'Required',
        optional: 'Optional',
        charLimit: 'characters remaining',
        consentLabel: 'I agree to receive emails regarding my appointment and care.',
        smsConsentLabel: 'I agree to receive appointment reminders and follow-up messages via text message. Message frequency varies. Reply STOP to opt out anytime. Msg & data rates may apply.',
        hipaaNotice: 'Your information is protected under HIPAA. We never share your health information without your consent.',
    };

    // ── Partial form capture events ──────────────────────────────────────────
    // These fire GTM events that build remarketing audiences:
    //   form_started     → "people who began the form" (weaker signal)
    //   form_email_entered → also used for Enhanced Conversions (Google hashes it)
    //   form_phone_entered → intent signal

    function handleAnyFocus() {
        if (hasStartedRef.current) return;
        hasStartedRef.current = true;
        trackFormStarted();
    }

    function handleEmailBlur(e: React.FocusEvent<HTMLInputElement>) {
        const val = e.currentTarget.value.trim();
        if (val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            // Pass email for GTM Enhanced Conversions — Google hashes it server-side
            trackEmailEntered(val);
        }
    }

    function handlePhoneBlur(e: React.FocusEvent<HTMLInputElement>) {
        if (e.currentTarget.value.trim().length >= 7) {
            trackPhoneEntered();
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');
        setErrorMsg('');

        const form = e.currentTarget;
        const tracking = getStoredTracking();
        const lt = tracking.lastTouch;
        const ft = tracking.firstTouch;

        const data = {
            firstName: (form.elements.namedItem('firstname') as HTMLInputElement).value.trim(),
            lastName:  (form.elements.namedItem('lastname')  as HTMLInputElement).value.trim(),
            phone:     (form.elements.namedItem('phone')     as HTMLInputElement).value.trim(),
            email:     (form.elements.namedItem('email')     as HTMLInputElement).value.trim(),
            message:   (form.elements.namedItem('message')   as HTMLTextAreaElement).value.trim(),
            smsConsent: (form.elements.namedItem('smsConsent') as HTMLInputElement).checked,
            // Attribution — last touch preferred, first touch as fallback
            gclid:       lt.gclid    || ft.gclid,
            utmSource:   lt.source   || ft.source,
            utmMedium:   lt.medium   || ft.medium,
            utmCampaign: lt.campaign || ft.campaign,
            // First touch sent separately for the GHL note
            firstTouchSource:   ft.source,
            firstTouchMedium:   ft.medium,
            firstTouchCampaign: ft.campaign,
            firstTouchGclid:    ft.gclid,
            // Visitor context
            visitorId:  tracking.visitorId,
            visitCount: tracking.visitCount,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const body = await res.json().catch(() => ({}));
                throw new Error(body.error || 'Submission failed');
            }

            const body = await res.json();
            trackFormSubmit();
            setStatus(body.returning ? 'success-returning' : 'success');
        } catch (err) {
            setStatus('error');
            setErrorMsg(err instanceof Error ? err.message : t.errorMsg);
        }
    }

    if (status === 'success') {
        return (
            <div className="text-center py-12 px-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-eyecare-navy mb-2">{t.successTitle}</h3>
                <p className="text-gray-600">{t.successMsg}</p>
            </div>
        );
    }

    if (status === 'success-returning') {
        return (
            <div className="text-center py-12 px-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-eyecare-navy mb-2">
                    {locale === 'es' ? '¡Bienvenido de nuevo!' : 'Welcome Back!'}
                </h3>
                <p className="text-gray-600">
                    {locale === 'es'
                        ? 'Ya tenemos su información en nuestro sistema. Nuestro equipo ha recibido su mensaje y se comunicará con usted pronto.'
                        : "We already have your information on file. Our team has received your message and will reach out shortly to help with your request."}
                </p>
                <p className="text-sm text-gray-500 mt-3">
                    {locale === 'es'
                        ? '¿Necesita atención inmediata? Llame al (714) 558-0641'
                        : 'Need immediate help? Call (714) 558-0641'}
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4" onFocus={handleAnyFocus}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.firstName} <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        required
                        autoComplete="given-name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eyecare-blue focus:border-eyecare-blue transition-colors text-gray-900"
                        placeholder={t.firstName}
                    />
                </div>
                <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                        {t.lastName} <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        required
                        autoComplete="family-name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eyecare-blue focus:border-eyecare-blue transition-colors text-gray-900"
                        placeholder={t.lastName}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.phone} <span className="text-red-500">*</span>
                </label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eyecare-blue focus:border-eyecare-blue transition-colors text-gray-900"
                    placeholder="(555) 555-5555"
                    onBlur={handlePhoneBlur}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.email} <span className="text-red-500">*</span>
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eyecare-blue focus:border-eyecare-blue transition-colors text-gray-900"
                    placeholder="you@example.com"
                    onBlur={handleEmailBlur}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.message} <span className="text-gray-400 text-xs">({t.optional})</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={3}
                    maxLength={200}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-eyecare-blue focus:border-eyecare-blue transition-colors text-gray-900 resize-none"
                    placeholder={locale === 'es' ? 'Breve descripción de su situación...' : 'Brief description of your situation...'}
                />
            </div>

            <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-eyecare-blue focus:ring-eyecare-blue shrink-0"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                        {t.consentLabel}
                    </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                    <input
                        type="checkbox"
                        name="smsConsent"
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-eyecare-blue focus:ring-eyecare-blue shrink-0"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                        {t.smsConsentLabel}
                    </span>
                </label>
                <p className="text-xs text-gray-500 flex items-start gap-1.5">
                    <svg className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    {t.hipaaNotice}
                </p>
            </div>

            {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-lg text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {errorMsg || t.errorMsg}
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-eyecare-blue hover:bg-eyecare-dark-blue text-white font-bold py-4 px-8 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-lg"
            >
                {status === 'submitting' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t.submitting}
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        {t.submit}
                    </>
                )}
            </button>
        </form>
    );
}
