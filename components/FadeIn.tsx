'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    duration?: number;
}

export default function FadeIn({
    children,
    delay = 0,
    className = "",
    direction = 'up',
    duration = 0.7
}: FadeInProps) {
    const directionOffset = {
        up: { x: 0, y: 40 },
        down: { x: 0, y: -40 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 }
    };

    const offset = directionOffset[direction];

    return (
        <motion.div
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
