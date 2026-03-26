import { Metadata } from 'next';
import IntakeForm from './IntakeForm';

export const metadata: Metadata = {
  title: 'Patient Intake Form | Eyecare Center of Orange County',
  robots: { index: false, follow: false },
};

// Security: no caching of PHI
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: Promise<{ token: string }>;
}

async function validateToken(token: string) {
  const apiUrl = process.env.REFRACTING_API_URL;
  if (!apiUrl) throw new Error('REFRACTING_API_URL not configured');

  const res = await fetch(`${apiUrl}/api/intake/validate-token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: decodeURIComponent(token) }),
    cache: 'no-store',
  });

  if (!res.ok) return { valid: false, reason: 'Server error' };
  return res.json();
}

async function getContactData(contactId: string) {
  const apiKey = process.env.GHL_API_KEY;
  if (!apiKey || !contactId) return null;

  try {
    const res = await fetch(
      `https://services.leadconnectorhq.com/contacts/${contactId}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          Version: '2021-07-28',
        },
        cache: 'no-store',
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.contact || null;
  } catch {
    return null;
  }
}

export default async function IntakePage({ params }: PageProps) {
  const { token } = await params;

  const validation = await validateToken(token);

  if (!validation.valid) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Link Expired</h1>
          <p className="text-gray-600 mb-6">
            {validation.reason === 'Token expired'
              ? 'This intake link has expired. Please contact our office for a new one.'
              : validation.reason === 'Token already used or expired'
                ? 'This form has already been submitted.'
                : 'This link is not valid. Please contact our office.'}
          </p>
          <a
            href="tel:7145581182"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Call (714) 558-1182
          </a>
        </div>
      </div>
    );
  }

  // Pre-fill from GHL contact data
  const contact = await getContactData(validation.contactId);
  const prefillData = contact
    ? {
        firstName: contact.firstName || '',
        lastName: contact.lastName || '',
        phone: contact.phone || '',
        email: contact.email || '',
        // Extract custom fields if available
      }
    : {} as Record<string, string>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Security headers via meta */}
      <IntakeForm
        token={decodeURIComponent(token)}
        contactId={validation.contactId}
        appointmentDate={validation.appointmentDate}
        initialData={prefillData}
      />
    </div>
  );
}
