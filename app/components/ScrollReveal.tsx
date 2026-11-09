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
    // SSR-First für Googlebot & KI-Crawler: Im initialen Server-HTML niemals opacity-0 ausgeben
    const [isRevealed, setIsRevealed] = useState(true);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef || typeof IntersectionObserver === 'undefined') {
            setIsRevealed(true);
            return;
        }

        // Prüfen, ob das Element beim Laden noch unterhalb des sichtbaren Viewports liegt
        const rect = currentRef.getBoundingClientRect();
        const isInitiallyInView = rect.top < window.innerHeight * 0.95;

        if (isInitiallyInView) {
            setIsRevealed(true);
            setHasAnimated(true);
            return;
        }

        // Nur Elemente unterhalb des Folds für die Scroll-Animation ausblenden
        setIsRevealed(false);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    setHasAnimated(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!once) {
                    setIsRevealed(false);
                }
            },
            { threshold }
        );

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
        };
    }, [once, threshold]);

    const animationClass = isRevealed
        ? hasAnimated
            ? `animate-${animation}`
            : ''
        : 'opacity-0';
    const combinedClassName = [className.trim(), animationClass].filter(Boolean).join(' ') || undefined;
    const delayStyle = delay && hasAnimated ? { animationDelay: `${delay}ms` } : undefined;

    return (
        <div
            ref={ref}
            className={combinedClassName}
            style={delayStyle}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
