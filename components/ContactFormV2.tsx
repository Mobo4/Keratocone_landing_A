'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Eye, Moon, Droplets, Zap, HelpCircle,
    CheckCircle, AlertCircle, Loader2, Upload,
    ChevronRight, ArrowLeft, Send, Shield, X,
} from 'lucide-react';
import { trackFormSubmit, trackFormStarted, trackEmailEntered, trackPhoneEntered } from '@/lib/tracking';
import { captureAndGetTracking, getStoredTracking } from '@/lib/utm-tracking';

// ─── Types ────────────────────────────────────────────────────────────────────
type Step = 1 | 2;
type FormStatus = 'idle' | 'submitting' | 'success' | 'success-returning' | 'error';
type Locale = 'en' | 'es';

interface UploadedFile {
    ref: string;
    label: string;
    name: string;
    previewUrl: string;
}

// ─── Service Options ──────────────────────────────────────────────────────────
const SERVICES = [
    {
        id: 'keratoconus',
        Icon: Eye,
        label: { en: 'Keratoconus', es: 'Queratocono' },
        desc: { en: 'Blurry or distorted vision', es: 'Visión borrosa o distorsionada' },
        color: 'blue',
        ghlTag: 'interest-keratoconus',
    },
    {
        id: 'ortho-k',
        Icon: Moon,
        label: { en: "Ortho-K / Child's Myopia", es: 'Orto-K / Miopía en Niños' },
        desc: { en: 'Night lenses, no glasses by day', es: 'Lentes nocturnos, sin gafas de día' },
        color: 'indigo',
        ghlTag: 'interest-ortho-k',
    },
    {
        id: 'dry-eye',
        Icon: Droplets,
        label: { en: 'Dry Eye', es: 'Ojo Seco' },
        desc: { en: 'Irritation, burning, redness', es: 'Irritación, ardor, enrojecimiento' },
        color: 'teal',
        ghlTag: 'interest-dry-eye',
    },
    {
        id: 'headache',
        Icon: Zap,
        label: { en: 'Headaches / Eye Strain', es: 'Dolores de Cabeza / Vista' },
        desc: { en: 'Vision-related headaches', es: 'Dolores de cabeza visuales' },
        color: 'amber',
        ghlTag: 'interest-headache',
    },
    {
        id: 'other',
        Icon: HelpCircle,
        label: { en: 'Not Sure', es: 'No Estoy Seguro' },
        desc: { en: "Tell us more in the box below", es: 'Cuéntenos más abajo' },
        color: 'slate',
        ghlTag: 'interest-other',
    },
] as const;

type ServiceId = typeof SERVICES[number]['id'];

const INSURANCE_OPTIONS_EN = [
    'VSP', 'EyeMed', 'Medicare', 'Medi-Cal',
    'Blue Shield', 'Anthem Blue Cross', 'United Healthcare',
    'Cigna', 'Aetna', 'Davis Vision', 'Spectera',
    'Superior Vision', 'Avesis', 'Other Vision Plan',
    'Other Medical Insurance', 'No Insurance',
];

const INSURANCE_OPTIONS_ES = [
    'VSP', 'EyeMed', 'Medicare', 'Medi-Cal',
    'Blue Shield', 'Anthem Blue Cross', 'United Healthcare',
    'Cigna', 'Aetna', 'Davis Vision', 'Spectera',
    'Superior Vision', 'Avesis', 'Otro Plan de Visión',
    'Otro Seguro Médico', 'Sin Seguro',
];

const SERVICE_COLORS: Record<string, { border: string; bg: string; icon: string; ring: string }> = {
    blue:   { border: 'border-[#004E7C]',  bg: 'bg-blue-50',    icon: 'text-[#004E7C]',  ring: 'ring-[#004E7C]' },
    indigo: { border: 'border-indigo-600', bg: 'bg-indigo-50',  icon: 'text-indigo-600', ring: 'ring-indigo-500' },
    teal:   { border: 'border-teal-600',   bg: 'bg-teal-50',    icon: 'text-teal-600',   ring: 'ring-teal-500' },
    amber:  { border: 'border-amber-500',  bg: 'bg-amber-50',   icon: 'text-amber-600',  ring: 'ring-amber-500' },
    slate:  { border: 'border-slate-400',  bg: 'bg-slate-50',   icon: 'text-slate-500',  ring: 'ring-slate-400' },
};

// ─── Translations ─────────────────────────────────────────────────────────────
function useT(locale: Locale) {
    return locale === 'es' ? {
        step1Header: 'Agenda Tu Cita',
        step1Sub: 'Nuestro equipo confirma en 1 día hábil.',
        availability: '✦ Citas disponibles esta semana',
        firstName: 'Nombre', lastName: 'Apellido',
        phone: 'Teléfono', email: 'Correo Electrónico',
        continue: 'Continuar →',
        step2Header: 'Un poco más sobre ti',
        servicePrompt: '¿Qué te trae por aquí?',
        insurancePrompt: '¿Tienes seguro?',
        insuranceYes: 'Sí', insuranceNo: 'No',
        insuranceSelect: 'Selecciona tu seguro',
        uploadPrompt: 'Sube tu tarjeta de seguro (opcional)',
        uploadHint: 'Haz clic o arrastra aquí · JPG, PNG, PDF · máx 10 MB',
        uploadFront: 'Frente', uploadBack: 'Reverso',
        messagePrompt: '¿Algo más que debamos saber?',
        messagePlaceholder: 'Breve descripción de su situación...',
        optional: 'Opcional',
        consentLabel: 'Acepto recibir correos y mensajes de texto sobre mi cita y atención.',
        smsConsent: 'Acepto recordatorios de citas por mensaje de texto. Responda STOP para cancelar.',
        hipaa: 'Su información está protegida bajo HIPAA.',
        submit: 'Enviar Solicitud',
        submitting: 'Enviando...',
        back: '← Regresar',
        successTitle: '¡Solicitud Enviada!',
        successMsg: 'Nuestro equipo le contactará dentro de 1 día hábil para confirmar su cita.',
        returningTitle: '¡Bienvenido de Nuevo!',
        returningMsg: 'Ya tenemos su información. Hemos recibido su solicitud y nos comunicaremos pronto.',
        callNow: '¿Atención urgente? Llame al (714) 558-0641',
        errorMsg: 'Algo salió mal. Por favor llámenos directamente.',
        saved: '✓ Guardado',
        charLeft: 'caracteres restantes',
        required: 'Requerido',
        fileUploaded: 'Archivo cargado',
        fileError: 'Error al cargar',
        uploading: 'Cargando...',
    } : {
        step1Header: 'Schedule Your Appointment',
        step1Sub: 'Our team confirms within 1 business day.',
        availability: '✦ Spots available this week',
        firstName: 'First Name', lastName: 'Last Name',
        phone: 'Phone', email: 'Email',
        continue: 'Continue →',
        step2Header: 'A bit more about you',
        servicePrompt: 'What brings you in?',
        insurancePrompt: 'Do you have insurance?',
        insuranceYes: 'Yes', insuranceNo: 'No',
        insuranceSelect: 'Select your insurance plan',
        uploadPrompt: 'Upload your insurance card (optional)',
        uploadHint: 'Click or drag here · JPG, PNG, PDF · max 10 MB',
        uploadFront: 'Front', uploadBack: 'Back',
        messagePrompt: 'Anything else we should know?',
        messagePlaceholder: 'Brief description of your situation...',
        optional: 'Optional',
        consentLabel: 'I agree to receive emails and texts about my appointment and care.',
        smsConsent: 'I agree to appointment reminders via text. Reply STOP to opt out. Msg rates may apply.',
        hipaa: 'Your information is protected under HIPAA.',
        submit: 'Request Appointment',
        submitting: 'Submitting...',
        back: '← Back',
        successTitle: 'Request Submitted!',
        successMsg: 'Our team will reach out within 1 business day to confirm your appointment.',
        returningTitle: 'Welcome Back!',
        returningMsg: 'We already have your info. Our team received your request and will reach out shortly.',
        callNow: 'Need immediate help? Call (714) 558-0641',
        errorMsg: 'Something went wrong. Please call us directly.',
        saved: '✓ Saved',
        charLeft: 'characters remaining',
        required: 'Required',
        fileUploaded: 'File uploaded',
        fileError: 'Upload failed',
        uploading: 'Uploading...',
    };
}

// ─── Phone auto-format ────────────────────────────────────────────────────────
function formatPhone(raw: string): string {
    const digits = raw.replace(/\D/g, '').slice(0, 10);
    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ContactFormV2({ locale = 'en' }: { locale?: Locale }) {
    const t = useT(locale);
    const [step, setStep] = useState<Step>(1);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    // Step 1 fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [phoneSaved, setPhoneSaved] = useState(false);
    const [emailSaved, setEmailSaved] = useState(false);

    // Step 2 fields
    const [service, setService] = useState<ServiceId | null>(null);
    const [hasInsurance, setHasInsurance] = useState<boolean | null>(null);
    const [insurance, setInsurance] = useState('');
    const [message, setMessage] = useState('');
    const [consent, setConsent] = useState(false);
    const [smsConsent, setSmsConsent] = useState(false);
    const [uploads, setUploads] = useState<UploadedFile[]>([]);
    const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'done' | 'error'>('idle');

    const hasStartedRef = useRef(false);
    const partialSentRef = useRef<{ phone: boolean; email: boolean }>({ phone: false, email: false });
    const dropRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        captureAndGetTracking();
    }, []);

    // ── Validation helpers ────────────────────────────────────────────────────
    const phoneDigits = phone.replace(/\D/g, '');
    const phoneValid = phoneDigits.length >= 10;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const step1Complete = firstName.trim() && lastName.trim() && phoneValid && emailValid;
    const msgLeft = 300 - message.length;

    // ── Tracking helpers ──────────────────────────────────────────────────────
    function onAnyFocus() {
        if (hasStartedRef.current) return;
        hasStartedRef.current = true;
        trackFormStarted();
    }

    async function firePartialCapture(field: 'phone' | 'email') {
        if (partialSentRef.current[field]) return;  // only send once per field
        const tracking = getStoredTracking();
        const lt = tracking.lastTouch;
        try {
            await fetch('/api/partial-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: firstName.trim() || undefined,
                    lastName: lastName.trim() || undefined,
                    phone: phoneDigits.length >= 10 ? phone : undefined,
                    email: emailValid ? email : undefined,
                    gclid: lt.gclid || undefined,
                    utmSource: lt.source || undefined,
                    utmCampaign: lt.campaign || undefined,
                }),
            });
            partialSentRef.current[field] = true;
            if (field === 'phone') setPhoneSaved(true);
            if (field === 'email') setEmailSaved(true);
        } catch {
            // Silent — never surface partial capture errors to the user
        }
    }

    function onPhoneBlur() {
        if (phoneValid) {
            trackPhoneEntered();
            firePartialCapture('phone');
        }
    }

    function onEmailBlur() {
        if (emailValid) {
            trackEmailEntered(email);
            firePartialCapture('email');
        }
    }

    // ── File upload ───────────────────────────────────────────────────────────
    const handleFileChange = useCallback(async (files: FileList | null, labelHint?: string) => {
        if (!files || files.length === 0) return;
        const file = files[0];

        setUploadStatus('uploading');
        const previewUrl = URL.createObjectURL(file);
        const label = labelHint ?? (uploads.length === 0 ? 'Front' : 'Back');

        const fd = new FormData();
        fd.append('file', file);
        fd.append('label', label);

        try {
            const res = await fetch('/api/upload', { method: 'POST', body: fd });
            const data = await res.json();
            if (!data.success) {
                setUploadStatus('error');
                return;
            }
            setUploads(prev => [...prev, { ref: data.ref, label, name: file.name, previewUrl }]);
            setUploadStatus('done');
        } catch {
            setUploadStatus('error');
        }
    }, [uploads.length]);

    function removeUpload(ref: string) {
        setUploads(prev => prev.filter(u => u.ref !== ref));
        setUploadStatus('idle');
    }

    function onDrop(e: React.DragEvent) {
        e.preventDefault();
        handleFileChange(e.dataTransfer.files);
    }

    // ── Submit ────────────────────────────────────────────────────────────────
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!consent) return;
        setStatus('submitting');
        setErrorMsg('');

        const tracking = getStoredTracking();
        const lt = tracking.lastTouch;
        const ft = tracking.firstTouch;

        // Build tags based on service interest
        const serviceTags = service
            ? [SERVICES.find(s => s.id === service)?.ghlTag].filter(Boolean)
            : [];
        const insuranceTags = hasInsurance === false ? ['no-insurance'] : [];
        const uploadRefs = uploads.map(u => `${u.label}: ${u.ref}`).join(', ');

        let messageWithContext = message.trim();
        if (service) messageWithContext = `[Interest: ${service}] ${messageWithContext}`.trim();
        if (insurance) messageWithContext += `\nInsurance: ${insurance}`;
        if (uploadRefs) messageWithContext += `\nInsurance card refs: ${uploadRefs}`;

        const data = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            phone,
            email,
            message: messageWithContext.slice(0, 500),
            smsConsent,
            gclid: lt.gclid || ft.gclid,
            utmSource: lt.source || ft.source,
            utmMedium: lt.medium || ft.medium,
            utmCampaign: lt.campaign || ft.campaign,
            firstTouchSource: ft.source,
            firstTouchMedium: ft.medium,
            firstTouchCampaign: ft.campaign,
            firstTouchGclid: ft.gclid,
            visitorId: tracking.visitorId,
            visitCount: tracking.visitCount,
            // Extra fields → GHL custom fields + tags
            _serviceTags: serviceTags,
            _insuranceTags: insuranceTags,
            _insurance: insurance || '',   // selected plan name e.g. "VSP", "EyeMed"
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                const body = await res.json().catch(() => ({})) as { error?: string };
                throw new Error(body.error || 'Submission failed');
            }
            const body = await res.json() as { returning?: boolean };
            trackFormSubmit();
            setStatus(body.returning ? 'success-returning' : 'success');
        } catch (err) {
            setStatus('error');
            setErrorMsg(err instanceof Error ? err.message : t.errorMsg);
        }
    }

    // ── Progress ──────────────────────────────────────────────────────────────
    const progress = status === 'success' || status === 'success-returning' ? 100
        : step === 1 ? Math.min(50, [
            firstName.trim() ? 12.5 : 0,
            lastName.trim() ? 12.5 : 0,
            phoneValid ? 12.5 : 0,
            emailValid ? 12.5 : 0,
        ].reduce((a, b) => a + b, 0))
        : 50 + Math.min(50, [
            service ? 15 : 0,
            hasInsurance !== null ? 10 : 0,
            consent ? 10 : 0,
            message.trim() ? 5 : 0,
            smsConsent ? 5 : 0,
            uploads.length > 0 ? 5 : 0,
        ].reduce((a, b) => a + b, 0));

    // ── Success screens ───────────────────────────────────────────────────────
    if (status === 'success' || status === 'success-returning') {
        const isReturning = status === 'success-returning';
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-6"
            >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${isReturning ? 'bg-blue-100' : 'bg-green-100'}`}>
                    <CheckCircle className={`w-10 h-10 ${isReturning ? 'text-blue-600' : 'text-green-600'}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">
                    {isReturning ? t.returningTitle : t.successTitle}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                    {isReturning ? t.returningMsg : t.successMsg}
                </p>
                <p className="text-sm text-slate-500">{t.callNow}</p>
            </motion.div>
        );
    }

    const insuranceOptions = locale === 'es' ? INSURANCE_OPTIONS_ES : INSURANCE_OPTIONS_EN;

    return (
        <div className="w-full" onFocus={onAnyFocus}>
            {/* ── Progress bar ─────────────────────────────────────── */}
            <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                    <span className="font-medium">
                        {progress < 50 ? (locale === 'es' ? 'Paso 1 de 2' : 'Step 1 of 2')
                            : progress < 95 ? (locale === 'es' ? 'Paso 2 de 2' : 'Step 2 of 2')
                            : (locale === 'es' ? '¡Casi listo!' : 'Almost there!')}
                    </span>
                    <span className="tabular-nums">{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-[#004E7C] rounded-full"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">

                    {/* ══════════════ STEP 1 ══════════════ */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-4"
                        >
                            {/* Availability badge */}
                            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-xs font-medium text-green-700">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                {t.availability}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Field label={t.firstName} required>
                                    <Input
                                        name="firstname"
                                        type="text"
                                        required
                                        autoComplete="given-name"
                                        placeholder={t.firstName}
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                        valid={firstName.trim().length > 0}
                                    />
                                </Field>
                                <Field label={t.lastName} required>
                                    <Input
                                        name="lastname"
                                        type="text"
                                        required
                                        autoComplete="family-name"
                                        placeholder={t.lastName}
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                        valid={lastName.trim().length > 0}
                                    />
                                </Field>
                            </div>

                            <Field label={t.phone} required badge={phoneSaved ? t.saved : undefined}>
                                <Input
                                    name="phone"
                                    type="tel"
                                    required
                                    autoComplete="tel"
                                    placeholder="(555) 555-5555"
                                    value={phone}
                                    onChange={e => setPhone(formatPhone(e.target.value))}
                                    onBlur={onPhoneBlur}
                                    valid={phoneValid}
                                />
                            </Field>

                            <Field label={t.email} required badge={emailSaved ? t.saved : undefined}>
                                <Input
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    onBlur={onEmailBlur}
                                    valid={emailValid}
                                />
                            </Field>

                            <motion.button
                                type="button"
                                disabled={!step1Complete}
                                onClick={() => setStep(2)}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center gap-2 bg-[#004E7C] hover:bg-[#003B5C] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-colors text-base"
                            >
                                {t.continue}
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>

                            <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                                <Shield className="w-3.5 h-3.5 text-green-600" />
                                {t.hipaa}
                            </p>
                        </motion.div>
                    )}

                    {/* ══════════════ STEP 2 ══════════════ */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-6"
                        >
                            {/* Service chips */}
                            <div>
                                <p className="text-sm font-semibold text-slate-700 mb-3">
                                    {t.servicePrompt} <span className="text-slate-400 font-normal text-xs">({locale === 'es' ? 'Opcional' : 'Optional'})</span>
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                    {SERVICES.map(({ id, Icon, label, desc, color }) => {
                                        const c = SERVICE_COLORS[color];
                                        const selected = service === id;
                                        return (
                                            <motion.button
                                                key={id}
                                                type="button"
                                                whileTap={{ scale: 0.97 }}
                                                onClick={() => setService(selected ? null : id)}
                                                className={`relative flex flex-col items-start gap-1 rounded-xl border-2 p-3 text-left transition-all cursor-pointer
                                                    ${selected
                                                        ? `${c.border} ${c.bg} ring-2 ${c.ring} ring-offset-1`
                                                        : 'border-gray-200 bg-white hover:border-gray-300'
                                                    }`}
                                            >
                                                {selected && (
                                                    <span className="absolute top-2 right-2">
                                                        <CheckCircle className={`w-4 h-4 ${c.icon}`} />
                                                    </span>
                                                )}
                                                <Icon className={`w-5 h-5 ${selected ? c.icon : 'text-slate-400'}`} />
                                                <span className={`text-xs font-semibold leading-tight ${selected ? 'text-slate-900' : 'text-slate-700'}`}>
                                                    {label[locale]}
                                                </span>
                                                <span className="text-xs text-slate-500 leading-tight hidden sm:block">
                                                    {desc[locale]}
                                                </span>
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Insurance */}
                            <div>
                                <p className="text-sm font-semibold text-slate-700 mb-2">{t.insurancePrompt}</p>
                                <div className="flex gap-3 mb-3">
                                    {(['yes', 'no'] as const).map(opt => (
                                        <button
                                            key={opt}
                                            type="button"
                                            onClick={() => setHasInsurance(opt === 'yes')}
                                            className={`flex-1 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all
                                                ${hasInsurance === (opt === 'yes')
                                                    ? 'border-[#004E7C] bg-blue-50 text-[#004E7C]'
                                                    : 'border-gray-200 text-slate-600 hover:border-gray-300'
                                                }`}
                                        >
                                            {opt === 'yes' ? t.insuranceYes : t.insuranceNo}
                                        </button>
                                    ))}
                                </div>

                                <AnimatePresence>
                                    {hasInsurance === true && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <select
                                                value={insurance}
                                                onChange={e => setInsurance(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004E7C] focus:border-[#004E7C] text-sm text-slate-800 bg-white mb-3"
                                            >
                                                <option value="">{t.insuranceSelect}</option>
                                                {insuranceOptions.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>

                                            {/* File upload */}
                                            <p className="text-sm font-medium text-slate-700 mb-2">{t.uploadPrompt}</p>

                                            {/* Previews */}
                                            {uploads.length > 0 && (
                                                <div className="flex gap-3 mb-3">
                                                    {uploads.map(u => (
                                                        <div key={u.ref} className="relative">
                                                            <img
                                                                src={u.previewUrl}
                                                                alt={u.label}
                                                                className="w-20 h-14 object-cover rounded-lg border border-gray-200"
                                                            />
                                                            <span className="absolute -bottom-1 left-0 right-0 text-center text-xs bg-[#004E7C] text-white rounded-b-lg py-0.5">
                                                                {u.label}
                                                            </span>
                                                            <button
                                                                type="button"
                                                                onClick={() => removeUpload(u.ref)}
                                                                className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"
                                                            >
                                                                <X className="w-3 h-3" />
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {uploads.length < 2 && (
                                                <div
                                                    ref={dropRef}
                                                    onDrop={onDrop}
                                                    onDragOver={e => e.preventDefault()}
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-colors
                                                        ${uploadStatus === 'uploading'
                                                            ? 'border-[#004E7C] bg-blue-50'
                                                            : uploadStatus === 'error'
                                                            ? 'border-red-300 bg-red-50'
                                                            : 'border-gray-300 hover:border-[#004E7C] hover:bg-blue-50'
                                                        }`}
                                                >
                                                    {uploadStatus === 'uploading' ? (
                                                        <div className="flex flex-col items-center gap-2 text-[#004E7C]">
                                                            <Loader2 className="w-7 h-7 animate-spin" />
                                                            <span className="text-xs">{t.uploading}</span>
                                                        </div>
                                                    ) : uploadStatus === 'error' ? (
                                                        <div className="flex flex-col items-center gap-2 text-red-600">
                                                            <AlertCircle className="w-7 h-7" />
                                                            <span className="text-xs">{t.fileError}</span>
                                                        </div>
                                                    ) : (
                                                        <div className="flex flex-col items-center gap-2 text-slate-500">
                                                            <Upload className="w-7 h-7 text-slate-400" />
                                                            <span className="text-xs">{t.uploadHint}</span>
                                                            <div className="flex gap-2 mt-1">
                                                                {uploads.length === 0 && (
                                                                    <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">{t.uploadFront}</span>
                                                                )}
                                                                {uploads.length === 1 && (
                                                                    <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full">{t.uploadBack}</span>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept="image/*,.pdf"
                                                className="hidden"
                                                onChange={e => handleFileChange(
                                                    e.target.files,
                                                    uploads.length === 0
                                                        ? (locale === 'es' ? 'Frente' : 'Front')
                                                        : (locale === 'es' ? 'Reverso' : 'Back')
                                                )}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                    {t.messagePrompt}{' '}
                                    <span className="text-slate-400 font-normal text-xs">({t.optional})</span>
                                </label>
                                <textarea
                                    rows={3}
                                    maxLength={300}
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    placeholder={t.messagePlaceholder}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#004E7C] focus:border-[#004E7C] text-sm text-slate-900 resize-none transition-colors"
                                />
                                {message.length > 200 && (
                                    <p className="text-xs text-slate-400 text-right mt-0.5">{msgLeft} {t.charLeft}</p>
                                )}
                            </div>

                            {/* Consent */}
                            <div className="space-y-3 bg-slate-50 rounded-xl p-4">
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={consent}
                                        onChange={e => setConsent(e.target.checked)}
                                        required
                                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#004E7C] focus:ring-[#004E7C] shrink-0"
                                    />
                                    <span className="text-xs text-slate-600 leading-relaxed">{t.consentLabel}</span>
                                </label>
                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={smsConsent}
                                        onChange={e => setSmsConsent(e.target.checked)}
                                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#004E7C] focus:ring-[#004E7C] shrink-0"
                                    />
                                    <span className="text-xs text-slate-600 leading-relaxed">{t.smsConsent}</span>
                                </label>
                                <p className="text-xs text-slate-500 flex items-start gap-1.5">
                                    <Shield className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                                    {t.hipaa}
                                </p>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl text-sm">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    {errorMsg || t.errorMsg}
                                </div>
                            )}

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="flex items-center gap-1 px-4 py-4 border-2 border-gray-200 rounded-xl text-sm text-slate-600 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    {locale === 'es' ? 'Regresar' : 'Back'}
                                </button>
                                <motion.button
                                    type="submit"
                                    disabled={!consent || status === 'submitting'}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 flex items-center justify-center gap-2 bg-[#004E7C] hover:bg-[#003B5C] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-colors text-base"
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
                                </motion.button>
                            </div>

                            <p className="text-center text-xs text-slate-400">
                                {locale === 'es'
                                    ? '⚡ Generalmente confirmado el mismo día'
                                    : '⚡ Usually confirmed same day'}
                            </p>
                        </motion.div>
                    )}

                </AnimatePresence>
            </form>
        </div>
    );
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function Field({
    label, required, badge, children,
}: {
    label: string;
    required?: boolean;
    badge?: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
                {badge && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-xs text-green-600 font-medium flex items-center gap-1"
                    >
                        <CheckCircle className="w-3.5 h-3.5" />
                        {badge}
                    </motion.span>
                )}
            </div>
            {children}
        </div>
    );
}

function Input({
    valid, ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { valid?: boolean }) {
    return (
        <div className="relative">
            <input
                {...props}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#004E7C] focus:border-[#004E7C] transition-colors text-gray-900 text-sm
                    ${valid ? 'border-green-400 pr-10' : 'border-gray-300'}`}
            />
            {valid && (
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                    <CheckCircle className="w-4.5 h-4.5 text-green-500" />
                </motion.span>
            )}
        </div>
    );
}
