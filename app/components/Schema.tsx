import React from 'react';
import { CONTACT_INFO, FAQS } from '../constants';

export default function Schema() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "AdvertisingAgency",
        "name": "BrainStorm Werbeagentur",
        "alternateName": "Brainstorm KI Werbeagentur",
        "url": "https://brainstorm-werbeagentur.at",
        "logo": "https://brainstorm-werbeagentur.at/bilder/logo.png",
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
        "image": "https://brainstorm-werbeagentur.at/bilder/logo.png",
        "@id": "",
        "url": "https://brainstorm-werbeagentur.at",
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
            "https://www.linkedin.com/in/andreas-sturm-b9282966/"
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
        </>
    );
}
