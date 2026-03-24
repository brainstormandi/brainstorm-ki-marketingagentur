import React from 'react';
import { CONTACT_INFO, FAQS } from '../constants';

export default function Schema() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "AdvertisingAgency",
        "name": "BrainStorm Werbeagentur",
        "alternateName": "Brainstorm KI Werbeagentur",
        "url": "https://ki-marketingagentur.jetzt",
        "logo": "https://ki-marketingagentur.jetzt/bilder/logo.png",
        "sameAs": [
            "https://www.facebook.com/BrainStorm.Werbeagentur",
            "https://www.linkedin.com/company/brainstorm-werbeagentur/",
            "https://seitenstetten.gv.at/wirtschaft/company/brainstorm-werbeagentur",
            "https://www.google.com/search?q=brainstorm+werbeagentur"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": CONTACT_INFO.phone,
            "contactType": "customer service",
            "email": CONTACT_INFO.email,
            "areaServed": "AT",
            "availableLanguage": "German"
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BrainStorm Werbeagentur",
        "image": "https://ki-marketingagentur.jetzt/bilder/logo.png",
        "@id": "https://ki-marketingagentur.jetzt",
        "url": "https://ki-marketingagentur.jetzt",
        "telephone": CONTACT_INFO.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Am Ziegelfeld 8",
            "addressLocality": "Seitenstetten",
            "postalCode": "3353",
            "addressCountry": "AT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.0333,
            "longitude": 14.65
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/BrainStorm.Werbeagentur",
            "https://www.linkedin.com/in/brainstorm-andi/",
            "https://www.linkedin.com/company/brainstorm-werbeagentur/",
            "https://seitenstetten.gv.at/wirtschaft/company/brainstorm-werbeagentur",
            "https://www.google.com/search?q=brainstorm+werbeagentur"
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Andi Sturm",
        "jobTitle": "Gründer & Visionär",
        "worksFor": {
            "@type": "Organization",
            "name": "BrainStorm Werbeagentur"
        },
        "url": "https://www.linkedin.com/in/brainstorm-andi/",
        "image": "https://ki-marketingagentur.jetzt/bilder/andi-sturm.png",
        "description": "Andi Sturm ist ein erfahrener Digital-Berater und Gründer der BrainStorm KI Werbeagentur mit über 32 Jahren Branchenerfahrung."
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": {
            "@id": "https://ki-marketingagentur.jetzt"
        },
        "serviceType": "KI-gestütztes Marketing, SEO, GEO, Webdesign, Automatisierung",
        "areaServed": "AT",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Marketing Services",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "Webdesign & Entwicklung",
                        "description": "Erstellung von modernen, psychologisch optimierten Webseiten."
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Service",
                        "name": "GEO - Generative Engine Optimization",
                        "description": "Sichtbarkeit in KI-basierten Suchmaschinen wie ChatGPT und Perplexity."
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Service",
                        "name": "SEO - Search Engine Optimization",
                        "description": "Top-Platzierungen in Google durch datengetriebene Optimierung."
                    }
                }
            ]
        }
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://ki-marketingagentur.jetzt",
        "name": "BrainStorm Werbeagentur",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
        </>
    );
}
