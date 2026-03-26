'use client';

import { useState, useRef, useEffect } from 'react';

interface IntakeFormProps {
  token: string;
  contactId: string;
  appointmentDate?: string;
  initialData: Record<string, string>;
}

const CONDITIONS = [
  'Diabetes', 'Hypertension', 'Glaucoma', 'Macular Degeneration',
  'Keratoconus', 'Dry Eye', 'Cataracts', 'Retinal Detachment',
  'Heart Disease', 'Thyroid Disorder', 'Autoimmune Disease',
  'Cancer (current or history)',
];

export default function IntakeForm({ token, contactId, appointmentDate, initialData }: IntakeFormProps) {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSigned, setHasSigned] = useState(false);

  // Form data
  const [form, setForm] = useState({
    // Personal Info
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    middleName: '',
    dob: '',
    gender: '',
    ssn: '',
    phone: initialData.phone || '',
    cell: '',
    email: initialData.email || '',
    address1: '',
    city: '',
    state: '',
    zipCode: '',
    occupation: '',
    // Medical Insurance
    medInsProvider: '',
    medInsMemberId: '',
    medInsGroupNo: '',
    medInsSubscriber: '',
    medInsSubscriberDob: '',
    medInsRelationship: 'self',
    // Vision Insurance
    visInsProvider: '',
    visInsMemberId: '',
    // Medical History
    conditions: [] as string[],
    allergies: '',
    medications: '',
    previousSurgeries: '',
    // Emergency Contact
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelationship: '',
    // Referring Doctor
    referringDoctor: '',
    referringPractice: '',
    referringPhone: '',
    // HIPAA
    hipaaConsent: false,
    // Language
    language: 'English',
  });

  // 30-min session timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!submitted) {
        setError('Session timed out. Please reload the page.');
      }
    }, 30 * 60 * 1000);
    return () => clearTimeout(timer);
  }, [submitted]);

  const update = (field: string, value: string | boolean | string[]) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const toggleCondition = (condition: string) => {
    setForm(prev => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter(c => c !== condition)
        : [...prev.conditions, condition],
    }));
  };

  // Signature canvas handlers
  const getCanvasCoords = (e: React.TouchEvent | React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const startDrawing = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault();
    setIsDrawing(true);
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const { x, y } = getCanvasCoords(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const { x, y } = getCanvasCoords(e);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();
    setHasSigned(true);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSigned(false);
  };

  const handleSubmit = async () => {
    if (!form.hipaaConsent || !hasSigned) {
      setError('HIPAA consent and signature are required.');
      return;
    }
    if (!form.firstName || !form.lastName || !form.dob) {
      setError('First name, last name, and date of birth are required.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      // Get signature as data URL
      const signatureData = canvasRef.current?.toDataURL('image/png') || '';

      const payload = {
        token,
        contactId,
        intakeData: {
          ...form,
          signatureImage: signatureData,
          signatureTimestamp: new Date().toISOString(),
        },
      };

      const res = await fetch('/api/intake/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.error || 'Submission failed. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">&#10003;</div>
          <h1 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h1>
          <p className="text-gray-600">
            Your intake form has been submitted. Our staff will review it before your appointment.
          </p>
          {appointmentDate && (
            <p className="text-gray-500 mt-4 text-sm">
              Appointment: {new Date(appointmentDate).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    );
  }

  const sections = [
    'Personal Info',
    'Medical Insurance',
    'Vision Insurance',
    'Medical History',
    'Emergency Contact',
    'Referring Doctor',
    'HIPAA Consent',
  ];

  const inputClass = 'w-full px-3 py-2 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <div className="max-w-lg mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 text-white px-4 py-4">
          <h1 className="text-xl font-bold">Patient Intake Form</h1>
          <p className="text-blue-100 text-sm mt-1">
            Eyecare Center of Orange County
          </p>
        </div>

        {/* Progress */}
        <div className="px-4 pt-4">
          <div className="flex gap-1">
            {sections.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded ${i <= step ? 'bg-blue-600' : 'bg-gray-200'}`}
              />
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Step {step + 1} of {sections.length}: {sections[step]}
          </p>
        </div>

        {/* Form Content */}
        <div className="p-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Step 0: Personal Info */}
          {step === 0 && (
            <div className="grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>First Name *</label>
                  <input className={inputClass} value={form.firstName} onChange={e => update('firstName', e.target.value)} required />
                </div>
                <div>
                  <label className={labelClass}>Last Name *</label>
                  <input className={inputClass} value={form.lastName} onChange={e => update('lastName', e.target.value)} required />
                </div>
              </div>
              <div>
                <label className={labelClass}>Middle Name</label>
                <input className={inputClass} value={form.middleName} onChange={e => update('middleName', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Date of Birth *</label>
                  <input type="date" className={inputClass} value={form.dob} onChange={e => update('dob', e.target.value)} required />
                </div>
                <div>
                  <label className={labelClass}>Gender</label>
                  <select className={inputClass} value={form.gender} onChange={e => update('gender', e.target.value)}>
                    <option value="">Select</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>SSN (last 4 digits)</label>
                <input className={inputClass} maxLength={4} pattern="[0-9]{4}" placeholder="XXXX" value={form.ssn} onChange={e => update('ssn', e.target.value.replace(/\D/g, '').slice(0, 4))} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Phone *</label>
                  <input type="tel" className={inputClass} value={form.phone} onChange={e => update('phone', e.target.value)} required />
                </div>
                <div>
                  <label className={labelClass}>Cell Phone</label>
                  <input type="tel" className={inputClass} value={form.cell} onChange={e => update('cell', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <input type="email" className={inputClass} value={form.email} onChange={e => update('email', e.target.value)} required />
              </div>
              <div>
                <label className={labelClass}>Street Address</label>
                <input className={inputClass} value={form.address1} onChange={e => update('address1', e.target.value)} />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className={labelClass}>City</label>
                  <input className={inputClass} value={form.city} onChange={e => update('city', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input className={inputClass} maxLength={2} value={form.state} onChange={e => update('state', e.target.value.toUpperCase())} />
                </div>
                <div>
                  <label className={labelClass}>ZIP</label>
                  <input className={inputClass} maxLength={10} value={form.zipCode} onChange={e => update('zipCode', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Occupation</label>
                <input className={inputClass} value={form.occupation} onChange={e => update('occupation', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Preferred Language</label>
                <select className={inputClass} value={form.language} onChange={e => update('language', e.target.value)}>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 1: Medical Insurance */}
          {step === 1 && (
            <div className="grid gap-3">
              <div>
                <label className={labelClass}>Insurance Provider</label>
                <input className={inputClass} placeholder="e.g. Blue Cross, Aetna" value={form.medInsProvider} onChange={e => update('medInsProvider', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Member ID</label>
                  <input className={inputClass} value={form.medInsMemberId} onChange={e => update('medInsMemberId', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Group Number</label>
                  <input className={inputClass} value={form.medInsGroupNo} onChange={e => update('medInsGroupNo', e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Subscriber Name (if not self)</label>
                <input className={inputClass} value={form.medInsSubscriber} onChange={e => update('medInsSubscriber', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Subscriber DOB</label>
                  <input type="date" className={inputClass} value={form.medInsSubscriberDob} onChange={e => update('medInsSubscriberDob', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Relationship</label>
                  <select className={inputClass} value={form.medInsRelationship} onChange={e => update('medInsRelationship', e.target.value)}>
                    <option value="self">Self</option>
                    <option value="spouse">Spouse</option>
                    <option value="child">Child</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Insurance Card (front &amp; back)</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className={inputClass}
                  onChange={e => {
                    // File upload handled in submit route
                  }}
                />
                <p className="text-xs text-gray-500 mt-1">Take a photo of the front and back of your card</p>
              </div>
            </div>
          )}

          {/* Step 2: Vision Insurance */}
          {step === 2 && (
            <div className="grid gap-3">
              <div>
                <label className={labelClass}>Vision Insurance Provider</label>
                <input className={inputClass} placeholder="e.g. VSP, EyeMed" value={form.visInsProvider} onChange={e => update('visInsProvider', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Vision Member ID</label>
                <input className={inputClass} value={form.visInsMemberId} onChange={e => update('visInsMemberId', e.target.value)} />
              </div>
              <p className="text-sm text-gray-500">
                If you don&apos;t have separate vision insurance, you can skip this section.
              </p>
            </div>
          )}

          {/* Step 3: Medical History */}
          {step === 3 && (
            <div className="grid gap-3">
              <div>
                <label className={labelClass}>Check any conditions that apply:</label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {CONDITIONS.map(condition => (
                    <label key={condition} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.conditions.includes(condition)}
                        onChange={() => toggleCondition(condition)}
                        className="w-4 h-4 rounded border-gray-300"
                      />
                      {condition}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass}>Allergies</label>
                <textarea className={inputClass} rows={2} placeholder="List any allergies (medications, food, environmental)" value={form.allergies} onChange={e => update('allergies', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Current Medications</label>
                <textarea className={inputClass} rows={2} placeholder="List all current medications and supplements" value={form.medications} onChange={e => update('medications', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Previous Eye Surgeries</label>
                <textarea className={inputClass} rows={2} placeholder="List any previous eye surgeries (LASIK, cataract, etc.)" value={form.previousSurgeries} onChange={e => update('previousSurgeries', e.target.value)} />
              </div>
            </div>
          )}

          {/* Step 4: Emergency Contact */}
          {step === 4 && (
            <div className="grid gap-3">
              <div>
                <label className={labelClass}>Emergency Contact Name</label>
                <input className={inputClass} value={form.emergencyName} onChange={e => update('emergencyName', e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Phone</label>
                  <input type="tel" className={inputClass} value={form.emergencyPhone} onChange={e => update('emergencyPhone', e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Relationship</label>
                  <input className={inputClass} placeholder="e.g. Spouse, Parent" value={form.emergencyRelationship} onChange={e => update('emergencyRelationship', e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Referring Doctor */}
          {step === 5 && (
            <div className="grid gap-3">
              <p className="text-sm text-gray-500">Optional — if you were referred by another doctor.</p>
              <div>
                <label className={labelClass}>Doctor Name</label>
                <input className={inputClass} value={form.referringDoctor} onChange={e => update('referringDoctor', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Practice Name</label>
                <input className={inputClass} value={form.referringPractice} onChange={e => update('referringPractice', e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input type="tel" className={inputClass} value={form.referringPhone} onChange={e => update('referringPhone', e.target.value)} />
              </div>
            </div>
          )}

          {/* Step 6: HIPAA Consent */}
          {step === 6 && (
            <div className="grid gap-4">
              <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600 max-h-40 overflow-y-auto border">
                <h3 className="font-bold mb-2 text-sm">Notice of Privacy Practices</h3>
                <p className="mb-2">This notice describes how medical information about you may be used and disclosed, and how you can get access to this information. Please review it carefully.</p>
                <p className="mb-2">We are required by law to maintain the privacy of your protected health information (PHI), give you notice of our legal duties and privacy practices, and follow the terms of the notice currently in effect.</p>
                <p className="mb-2">Your PHI may be used for treatment, payment, and healthcare operations as permitted by law. We may also use your information to contact you about appointments, treatment alternatives, or health-related benefits and services.</p>
                <p>You have the right to request restrictions on certain uses and disclosures of your PHI, inspect and obtain a copy of your records, request amendments, and receive an accounting of disclosures.</p>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.hipaaConsent}
                  onChange={e => update('hipaaConsent', e.target.checked)}
                  className="w-5 h-5 mt-0.5 rounded border-gray-300"
                />
                <span className="text-sm">
                  I acknowledge that I have received and reviewed the Notice of Privacy Practices.
                  I consent to the use and disclosure of my health information as described above.
                </span>
              </label>
              <div>
                <label className={labelClass}>Signature *</label>
                <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-white">
                  <canvas
                    ref={canvasRef}
                    width={350}
                    height={120}
                    className="w-full touch-none"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={() => setIsDrawing(false)}
                    onMouseLeave={() => setIsDrawing(false)}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={() => setIsDrawing(false)}
                  />
                </div>
                <button
                  type="button"
                  onClick={clearSignature}
                  className="text-sm text-blue-600 mt-1"
                >
                  Clear signature
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.language === 'Spanish'}
                  onChange={e => update('language', e.target.checked ? 'Spanish' : 'English')}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="text-sm text-gray-600">Prefiero espa&ntilde;ol / I prefer Spanish</span>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-6">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium"
              >
                Back
              </button>
            )}
            {step < sections.length - 1 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting || !form.hipaaConsent || !hasSigned}
                className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Submit Intake Form'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
