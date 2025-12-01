'use client';

import { useState } from 'react';
import { Download, Check } from 'lucide-react';

export default function PamphletDownload() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            // Trigger download or redirect here
        }, 1000);
    };

    return (
        <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                    Free Educational Guide
                </h2>
                <p className="mt-4 text-lg text-slate-500">
                    Download our comprehensive guide to understanding Keratoconus and your treatment options.
                    Written by Dr. Alexander Bonakdar.
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="mt-8 sm:flex justify-center max-w-md mx-auto">
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="w-full px-5 py-3 placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs border-slate-300 rounded-md"
                            placeholder="Enter your email"
                        />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Download Now <Download className="ml-2 h-5 w-5" />
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="mt-8 flex justify-center items-center text-green-600 text-lg font-medium">
                        <Check className="mr-2 h-6 w-6" />
                        Thank you! Your download will start shortly.
                    </div>
                )}
            </div>
        </div>
    );
}
