'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
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
        <section className="py-20 bg-white text-slate-900 overflow-hidden">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-eyecare-blue font-bold tracking-wider uppercase text-sm mb-2 block">Visual Proof</span>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 font-serif">
                        See The Difference
                    </h2>
                    <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                        Drag the slider to see how our scleral lenses transform distorted keratoconus vision into crystal-clear sight.
                    </p>
                </div>

                <div className="relative w-[80%] mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 select-none"
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseDown={handleMouseDown}
                    onTouchMove={handleTouchMove}
                >
                    {/* Clear Vision (Background - Always Full Data) */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/simulation-clear.jpg"
                            alt="Clear Vision with Scleral Lenses"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Uncorrected Vision (Foreground - Clipped) */}
                    <div
                        className="absolute inset-0 z-10"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <Image
                            src="/images/simulation-blurry.jpg"
                            alt="Uncorrected Keratoconus Vision"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-6 left-6 bg-amber-900/90 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            Standard Optics
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-1 bg-white/80 cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                        style={{ left: `${sliderPosition}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-amber-800 transition-transform hover:scale-110">
                            <MoveHorizontal className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500 italic">
                        *Simulated vision. Actual results may vary based on severity.
                    </p>
                </div>
            </div>
        </section>
    );
}
