"use client";
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'reveal-up' | 'reveal-down' | 'reveal-left' | 'reveal-right' | 'zoom-in';
    delay?: number;
    threshold?: number;
    className?: string;
    once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'reveal-up',
    delay = 0,
    threshold = 0.1,
    className = '',
    once = true
}) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!once) {
                    setIsRevealed(false);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [once, threshold]);

    const animationClass = isRevealed ? `animate-${animation}` : 'opacity-0';
    const delayStyle = delay ? { animationDelay: `${delay}ms` } : {};

    return (
        <div
            ref={ref}
            className={`${className} ${animationClass}`}
            style={delayStyle}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
