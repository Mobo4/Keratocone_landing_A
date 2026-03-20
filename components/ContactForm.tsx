'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { trackFormSubmit } from '@/lib/tracking';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm({ locale = 'en' }: { locale?: 'en' | 'es' }) {
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');

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
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');
        setErrorMsg('');

        const form = e.currentTarget;
        const data = {
            firstName: (form.elements.namedItem('firstname') as HTMLInputElement).value.trim(),
            lastName: (form.elements.namedItem('lastname') as HTMLInputElement).value.trim(),
            phone: (form.elements.namedItem('phone') as HTMLInputElement).value.trim(),
            email: (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
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

            trackFormSubmit();
            setStatus('success');
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

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
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
