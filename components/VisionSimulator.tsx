'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

export default function VisionSimulator() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
        }
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    // Global mouse up handler to catch releases outside the component
    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    return (
        <section className="py-20 bg-eyecare-navy text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-eyecare-light-blue font-bold tracking-wider uppercase text-sm mb-2 block">Visual Proof</span>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                        See The Difference
                    </h2>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Drag the slider to see how our scleral lenses transform distorted keratoconus vision into crystal-clear sight.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-eyecare-dark-blue select-none"
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseDown={handleMouseDown}
                    onTouchMove={handleTouchMove}
                >
                    {/* After Image (Clear Vision) - Background */}
                    <div className="absolute inset-0">
                        {/* Placeholder for Clear Vision Image */}
                        <div className="w-full h-full bg-eyecare-blue flex items-center justify-center">
                            <span className="text-4xl font-bold text-white opacity-50">Clear Vision (20/20)</span>
                            {/* Once you have the image: <img src="/images/vision-clear.jpg" className="w-full h-full object-cover" /> */}
                        </div>
                        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur text-eyecare-navy px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            With Scleral Lenses
                        </div>
                    </div>

                    {/* Before Image (Blurry Vision) - Clipped on top */}
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPosition}%` }}
                    >
                        {/* Placeholder for Blurry Vision Image */}
                        <div className="w-full h-full bg-eyecare-darker-blue flex items-center justify-center relative">
                            {/* Simulate blur with CSS backdrop filter if using real images, or just a blurred placeholder */}
                            <div className="absolute inset-0 backdrop-blur-md bg-black/20"></div>
                            <span className="text-4xl font-bold text-white opacity-50 relative z-10 blur-sm">Uncorrected Vision</span>
                            {/* Once you have the image: <img src="/images/vision-blur.jpg" className="w-full h-full object-cover blur-sm" /> */}
                        </div>
                        <div className="absolute top-6 left-6 bg-red-600/90 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                            Uncorrected Keratoconus
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-eyecare-blue transition-transform hover:scale-110">
                            <MoveHorizontal className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-400 italic">
                        *Simulated vision. Actual results may vary based on severity.
                    </p>
                </div>
            </div>
        </section>
    );
}
