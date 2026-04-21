import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Ortho-K Quiz for Kids | Myopia Control Candidate Check | Orange County",
    description: "Free 2-minute Ortho-K (orthokeratology) quiz. Is your child a candidate for myopia control contact lenses? Dr. Bonakdar, 35+ yrs experience. (714) 558-0641",
    keywords: ["ortho-k quiz", "orthokeratology for kids", "myopia control candidate", "ortho-k candidate quiz", "child myopia contact lenses orange county"],
    alternates: {
        canonical: 'https://www.keratocones.com/quiz/ortho-k',
    },
    openGraph: {
        title: "Ortho-K Candidate Quiz | Myopia Control for Kids",
        description: "Free 2-minute quiz. See if your child qualifies for Ortho-K myopia control lenses. Dr. Bonakdar, Orange County keratoconus & specialty contact lens expert.",
        url: 'https://www.keratocones.com/quiz/ortho-k',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function OrthoKQuizLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
