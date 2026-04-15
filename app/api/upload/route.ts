import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/upload
 *
 * Accepts an insurance card image (or PDF).
 * Emails it as an attachment to the office via Resend.
 * Returns a short reference ID included in the main form submission.
 *
 * No external storage needed — file goes straight to the office inbox.
 * Attachment max: 10 MB. Resize on the client before uploading.
 */

const MAX_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_TYPES = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/heic',
    'image/heif',
    'application/pdf',
];

export async function POST(request: NextRequest) {
    try {
        const resendKey = process.env.RESEND_API_KEY;
        if (!resendKey) {
            console.error('RESEND_API_KEY not configured');
            return NextResponse.json({ success: false, error: 'Upload not configured' }, { status: 500 });
        }

        const formData = await request.formData();
        const file = formData.get('file') as File | null;
        const label = (formData.get('label') as string | null) ?? 'Insurance Card';  // "front" | "back"

        if (!file) {
            return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
        }

        if (!ALLOWED_TYPES.includes(file.type)) {
            return NextResponse.json({
                success: false,
                error: 'Invalid file type. Upload a JPG, PNG, WebP, or PDF.',
            }, { status: 400 });
        }

        if (file.size > MAX_SIZE_BYTES) {
            return NextResponse.json({
                success: false,
                error: 'File too large. Max 10 MB.',
            }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const base64Content = Buffer.from(arrayBuffer).toString('base64');
        const ref = `ins-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || 'eyecarecenteroc@gmail.com';
        const sizeKB = (file.size / 1024).toFixed(0);

        // Determine the correct MIME type for the Resend attachment
        const mimeType = file.type || 'application/octet-stream';
        const isImage = mimeType.startsWith('image/');

        // Email the file to the office
        const resendRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'Henry (Dr. Bonakdar) <henry@refract.ing>',
                to: [notifyEmail],
                subject: `📎 Insurance Card Upload — ${label} — Ref: ${ref}`,
                html: `
                    <p><strong>Insurance card uploaded from website form.</strong></p>
                    <p>
                        Label: ${label}<br>
                        File: ${file.name} (${sizeKB} KB, ${mimeType})<br>
                        Ref: <code>${ref}</code><br>
                        Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT
                    </p>
                    ${isImage ? `<p>Image attached below:</p>
                    <img src="data:${mimeType};base64,${base64Content}" style="max-width:600px;border:1px solid #ccc;" />` : '<p>PDF attached.</p>'}
                `,
                attachments: [{
                    filename: file.name,
                    content: base64Content,
                }],
            }),
        });

        if (!resendRes.ok) {
            const errText = await resendRes.text();
            console.error('Resend upload email failed:', resendRes.status, errText.slice(0, 200));
            return NextResponse.json({ success: false, error: 'Could not send file. Please try again.' }, { status: 502 });
        }

        return NextResponse.json({ success: true, ref, label });

    } catch (err) {
        console.error('Upload route error:', err);
        return NextResponse.json({ success: false, error: 'Upload failed. Please try again.' }, { status: 500 });
    }
}
