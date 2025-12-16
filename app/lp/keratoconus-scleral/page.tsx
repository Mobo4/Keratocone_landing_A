import React from 'react';
import { Metadata } from 'next';
import KeratoconusScleralContent from '@/components/lp/KeratoconusScleralContent';

export const metadata: Metadata = {
    title: "Keratoconus Scleral Lenses | Expert Fitting in Orange County",
    description: "Scleral lens specialists for difficult keratoconus cases. Non-surgical vision restoration when other contacts fail. Book your consultation.",
    alternates: {
        canonical: 'https://keratocones.com/lp/keratoconus-scleral',
    },
};

export default function KeratoconusScleralPage() {
    return <KeratoconusScleralContent />;
}
