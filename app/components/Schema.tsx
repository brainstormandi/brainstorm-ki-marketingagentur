import React from 'react';
import { CONTACT_INFO } from '../constants';

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
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
        }
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
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://ki-marketingagentur.jetzt/#webpage",
        "url": "https://ki-marketingagentur.jetzt",
        "name": "KI Werbeagentur Österreich | Webseiten, Landingpages & SEO",
        "description": "Österreichs Nr. 1 KI-Werbeagentur für KMU. Wir erstellen moderne Webseiten, verkaufsstarke Landingpages und machen Sie durch SEO & GEO zum Kundenmagneten.",
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://ki-marketingagentur.jetzt/bilder/logo.png"
        },
        "image": "https://ki-marketingagentur.jetzt/bilder/logo.png",
        "inLanguage": "de-AT"
    };

    return (
        <>
            <script
                id="org-schema"
                key="org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                id="biz-schema"
                key="biz-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                id="person-schema"
                key="person-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            <script
                id="service-schema"
                key="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                id="webpage-schema"
                key="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
        </>
    );
}
