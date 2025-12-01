export default function LeadForm() {
    return (
        <div id="appointment" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Schedule Your Expert Consultation
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-slate-600">
                        Limited appointments available for complex keratoconus cases. Fill out the form below to secure your spot.
                    </p>
                </div>
                <div className="mt-12">
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/form/S46Hm1vAonUtBdqghoGW"
                        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '600px' }}
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
                    ></iframe>
                    <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                </div>
            </div>
        </div>
    );
}
