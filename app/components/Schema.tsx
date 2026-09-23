import React from 'react';
import { CONTACT_INFO, FAQS } from '../constants';

export default function Schema() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "AdvertisingAgency",
        "@id": "https://ki-marketingagentur.jetzt/#organization",
        "name": "BrainStorm Werbeagentur",
        "alternateName": [
            "Brainstorm KI Werbeagentur", 
            "BrainStorm Webagentur", 
            "BrainStorm Web design & Marketing", 
            "Brainstorm Website Werbeagentur",
            "Werbeagentur Seitenstetten"
        ],
        "url": "https://ki-marketingagentur.jetzt",
        "logo": "https://ki-marketingagentur.jetzt/bilder/logo.png",
        "founder": {
            "@type": "Person",
            "name": "Andreas Sturm",
            "jobTitle": "Gründer & Geschäftsführer"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Am Ziegelfeld 8",
            "addressLocality": "Seitenstetten",
            "postalCode": "3353",
            "addressCountry": "AT"
        },
        "sameAs": [
            "https://www.facebook.com/BrainStorm.Werbeagentur",
            "https://www.linkedin.com/company/brainstorm-werbeagentur/",
            "https://www.linkedin.com/in/brainstorm-andi/",
            "https://seitenstetten.gv.at/wirtschaft/company/brainstorm-werbeagentur"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": CONTACT_INFO.phone,
            "contactType": "customer service",
            "email": CONTACT_INFO.email,
            "areaServed": "AT",
            "availableLanguage": "German"
        },
        "knowsAbout": [
            "Werbeagentur",
            "Webagentur",
            "Webdesign & Homepage-Erstellung",
            "Mitarbeitergewinnung",
            "Social Recruiting Handwerk & KMU",
            "Suchmaschinenoptimierung (SEO)",
            "Generative Engine Optimization (GEO)",
            "KI-Marketing & Automatisierung",
            "SEO Agentur Niederösterreich",
            "Local SEO Mostviertel",
            "Social Media Marketing",
            "Meta & Google Ads",
            "Barrierefreies Webdesign BFSG"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://ki-marketingagentur.jetzt/#localbusiness",
        "name": "BrainStorm - KI Webdesign & Marketing",
        "alternateName": [
            "BrainStorm KI Webdesign & Marketing",
            "BrainStorm Werbeagentur Seitenstetten",
            "SEO Agentur Niederösterreich",
            "Social Recruiting Agentur Mostviertel",
            "Webagentur Mostviertel",
            "Website Werbeagentur Niederösterreich"
        ],
        "image": [
            "https://ki-marketingagentur.jetzt/bilder/logo.png",
            "https://ki-marketingagentur.jetzt/bilder/andreas-sturm-profil.jpg"
        ],
        "url": "https://ki-marketingagentur.jetzt",
        "telephone": CONTACT_INFO.phone,
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Rechnung, Überweisung",
        "founder": {
            "@type": "Person",
            "name": "Andreas Sturm",
            "image": "https://ki-marketingagentur.jetzt/bilder/andreas-sturm-profil.jpg",
            "jobTitle": "CEO & KI-Experte"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Am Ziegelfeld 8",
            "addressLocality": "Seitenstetten",
            "postalCode": "3353",
            "addressCountry": "AT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.0353,
            "longitude": 14.6534
        },
        "areaServed": [
            { "@type": "AdministrativeArea", "name": "Niederösterreich" },
            { "@type": "AdministrativeArea", "name": "Oberösterreich" },
            { "@type": "AdministrativeArea", "name": "Wien" },
            { "@type": "City", "name": "Seitenstetten" },
            { "@type": "City", "name": "Amstetten" },
            { "@type": "City", "name": "Steyr" },
            { "@type": "City", "name": "Linz" },
            { "@type": "City", "name": "St. Pölten" },
            { "@type": "City", "name": "Perg" },
            { "@type": "Country", "name": "Österreich" }
        ],
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
            "https://seitenstetten.gv.at/wirtschaft/company/brainstorm-werbeagentur"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "50",
            "bestRating": "5",
            "worstRating": "1",
            "url": "https://share.google/8UoKWrgoWbfFIPX"
        },
        "knowsAbout": [
            "Werbeagentur",
            "Webdesign & Landingpages",
            "Mitarbeitergewinnung & Social Recruiting für Handwerker",
            "SEO Agentur Niederösterreich",
            "Local SEO Mostviertel & Google Maps",
            "Generative Engine Optimization (GEO)",
            "Suchmaschinenoptimierung Mostviertel",
            "KI-Marketing & Automatisierung",
            "Social Media Kampagnen & Meta Ads",
            "Google Ads Betreuung",
            "Barrierefreie Webseiten BFSG"
        ]
    };

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://ki-marketingagentur.jetzt/#andi-sturm",
        "name": "Andreas Sturm",
        "alternateName": "Andi Sturm",
        "jobTitle": "Gründer & Inhaber",
        "worksFor": {
            "@id": "https://ki-marketingagentur.jetzt/#organization"
        },
        "url": "https://www.linkedin.com/in/brainstorm-andi/",
        "image": "https://ki-marketingagentur.jetzt/bilder/andi-sturm.png",
        "description": "Andreas Sturm ist erfahrener Marketing-Stratege und Gründer der BrainStorm KI Werbeagentur mit über 32 Jahren Erfahrung für KMUs und Handwerksbetriebe in Österreich."
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "provider": {
            "@id": "https://ki-marketingagentur.jetzt/#organization"
        },
        "serviceType": "Webdesign, Social Recruiting, SEO, GEO, Social Media Marketing & KI-Automatisierung",
        "areaServed": "AT",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Leistungen BrainStorm Werbeagentur",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "Webseite & Landingpage (Sprint-Webseite in 7 Tagen)",
                        "description": "Erstellung von modernen, verkaufspsychologisch optimierten Webseiten und Landingpages mit Next.js. Barrierefrei nach BFSG und mobil optimiert."
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Service",
                        "name": "Mitarbeitergewinnung & Social Recruiting für KMU & Handwerk",
                        "description": "Gewinnung qualifizierter Fachkräfte aus der Region über zielgerichtete Social-Media-Kampagnen und barrierefreie 60-Sekunden-Smartphone-Bewerbungen."
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                        "@type": "Service",
                        "name": "GEO - Generative Engine Optimization",
                        "description": "Sichtbarkeit und Zitierung in modernen KI-Assistenten und Suchmaschinen wie ChatGPT, Perplexity, Claude und Gemini."
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Service",
                        "name": "SEO & Lokale Suchmaschinenoptimierung",
                        "description": "Top-Platzierungen bei Google und Google Maps im Mostviertel, Niederösterreich und Oberösterreich durch datengetriebene Optimierung."
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 5,
                    "item": {
                        "@type": "Service",
                        "name": "Digitale Werbekampagnen & Social Media Marketing",
                        "description": "Zielgerichtete Werbekampagnen auf Instagram, Facebook und Google Ads zur planbaren Gewinnung von Neukunden mit bis zu 5-fachem ROI."
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 6,
                    "item": {
                        "@type": "Service",
                        "name": "KI- & Prozessautomatisierung",
                        "description": "Automatisierung von Terminbuchungen, Anfragenqualifizierung und CRM-Schnittstellen für eine Zeitersparnis von bis zu 15 Stunden pro Woche."
                    }
                }
            ]
        }
    };

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://ki-marketingagentur.jetzt/#website",
        "url": "https://ki-marketingagentur.jetzt",
        "name": "BrainStorm KI Werbeagentur",
        "alternateName": "BrainStorm Werbeagentur Seitenstetten",
        "inLanguage": "de-AT",
        "publisher": {
            "@id": "https://ki-marketingagentur.jetzt/#organization"
        }
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://ki-marketingagentur.jetzt/#webpage",
        "url": "https://ki-marketingagentur.jetzt",
        "name": "Werbeagentur & Webagentur | SEO Agentur & Social Recruiting Niederösterreich",
        "description": "BrainStorm KI Werbeagentur: Dein Partner für verkaufsstarke Webseiten, Social Recruiting & Mitarbeitergewinnung, SEO/GEO und KI-Automatisierung für KMUs im Mostviertel, NÖ & OÖ.",
        "isPartOf": {
            "@id": "https://ki-marketingagentur.jetzt/#website"
        },
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://ki-marketingagentur.jetzt/bilder/logo.png"
        },
        "image": "https://ki-marketingagentur.jetzt/bilder/logo.png",
        "inLanguage": "de-AT",
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": ["h1", "h2", "p"]
        }
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

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": "https://ki-marketingagentur.jetzt/"
            }
        ]
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
                id="website-schema"
                key="website-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
            <script
                id="webpage-schema"
                key="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                id="faq-schema-central"
                key="faq-schema-central"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                id="breadcrumb-schema"
                key="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
