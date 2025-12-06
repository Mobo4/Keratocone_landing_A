'use client';

import { useState, useEffect } from 'react';

export default function LeadForm() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div id="appointment" className="bg-white py-8 px-0 sm:py-16 sm:px-6 lg:px-8 w-full">
            <div className="relative max-w-xl mx-auto px-4 sm:px-0">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl font-serif">
                        Schedule Your Expert Consultation
                    </h2>
                    <p className="mt-4 text-base sm:text-lg leading-6 text-slate-600">
                        Limited appointments available for complex keratoconus cases. Fill out the form below to secure your spot.
                    </p>
                </div>
                <div className="mt-4 w-full overflow-hidden rounded-lg shadow-sm border border-gray-100">
                    {mounted && (
                        <>
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/form/S46Hm1vAonUtBdqghoGW"
                                style={{ width: '100%', height: '100%', border: 'none', minHeight: '600px' }}
                                id="inline-S46Hm1vAonUtBdqghoGW"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Keratoconus Form "
                                data-height="1674"
                                data-layout-iframe-id="inline-S46Hm1vAonUtBdqghoGW"
                                data-form-id="S46Hm1vAonUtBdqghoGW"
                                title="Keratoconus Form "
                                className="w-full"
                            ></iframe>
                            <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
