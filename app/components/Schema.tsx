import React from 'react';
import { CONTACT_INFO, FAQS } from '../constants';

export default function Schema() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "AdvertisingAgency",
        "@id": "https://ki-marketingagentur.jetzt/#organization",
        "name": "BrainStorm Werbeagentur",
        "alternateName": [
            "BrainStorm KI Werbeagentur",
            "BrainStorm Webagentur",
            "BrainStorm Webdesign & Marketing",
            "BrainStorm Website & Landingpage Agentur",
            "Werbeagentur Seitenstetten",
            "Werbeagentur Amstetten",
            "Werbeagentur Steyr",
            "Werbeagentur Linz",
            "Werbeagentur Perg",
            "Werbeagentur St. Pölten",
            "Werbeagentur Salzburg",
            "Werbeagentur Wien"
        ],
        "url": "https://ki-marketingagentur.jetzt",
        "logo": "https://ki-marketingagentur.jetzt/bilder/logo.png",
        "founder": {
            "@type": "Person",
            "name": "Andreas Sturm",
            "jobTitle": "Gründer & Geschäftsführer",
            "@id": "https://ki-marketingagentur.jetzt/#andi-sturm"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Am Ziegelfeld 8",
            "addressLocality": "Seitenstetten",
            "postalCode": "3353",
            "addressRegion": "Niederösterreich",
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
            "areaServed": ["AT", "DE", "CH"],
            "availableLanguage": ["German", "de-AT"]
        },
        "knowsAbout": [
            "Werbeagentur",
            "Webseite erstellen lassen",
            "Landingpage erstellen lassen",
            "Webdesign & Homepage-Erstellung",
            "Suchmaschinenoptimierung (SEO)",
            "Generative Engine Optimization (GEO)",
            "KI-Suche Optimierung (ChatGPT, Perplexity, Claude, Gemini)",
            "KI-Marketing & Prozessautomatisierung",
            "Mitarbeitergewinnung & Social Recruiting Handwerk & KMU",
            "Local SEO & Google Maps Optimierung",
            "Barrierefreies Webdesign BFSG 2025 / WCAG 2.1",
            "Werbeagentur Amstetten",
            "Werbeagentur Steyr",
            "Werbeagentur Linz",
            "Werbeagentur Perg",
            "Werbeagentur St. Pölten",
            "Werbeagentur Salzburg",
            "Werbeagentur Wien"
        ]
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "AdvertisingAgency", "ProfessionalService"],
        "@id": "https://ki-marketingagentur.jetzt/#localbusiness",
        "name": "BrainStorm - KI Webdesign, Werbeagentur & SEO",
        "alternateName": [
            "BrainStorm KI Webdesign & Marketing",
            "BrainStorm Werbeagentur Seitenstetten",
            "SEO & GEO Agentur Österreich",
            "Social Recruiting Agentur Mostviertel",
            "Webagentur & Landingpage Agentur Mostviertel",
            "Website Werbeagentur Niederösterreich & Oberösterreich"
        ],
        "image": [
            "https://ki-marketingagentur.jetzt/bilder/logo.png",
            "https://ki-marketingagentur.jetzt/bilder/andreas-sturm-profil.jpg"
        ],
        "url": "https://ki-marketingagentur.jetzt",
        "telephone": CONTACT_INFO.phone,
        "email": CONTACT_INFO.email,
        "priceRange": "€€",
        "currenciesAccepted": "EUR",
        "paymentAccepted": "Rechnung, Überweisung",
        "founder": {
            "@type": "Person",
            "@id": "https://ki-marketingagentur.jetzt/#andi-sturm",
            "name": "Andreas Sturm",
            "image": "https://ki-marketingagentur.jetzt/bilder/andreas-sturm-profil.jpg",
            "jobTitle": "CEO & KI-Experte"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Am Ziegelfeld 8",
            "addressLocality": "Seitenstetten",
            "postalCode": "3353",
            "addressRegion": "Niederösterreich",
            "addressCountry": "AT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.0353,
            "longitude": 14.6534
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Seitenstetten",
                "postalCode": "3353",
                "sameAs": "https://www.wikidata.org/wiki/Q664903"
            },
            {
                "@type": "City",
                "name": "Amstetten",
                "postalCode": "3300",
                "sameAs": "https://www.wikidata.org/wiki/Q251016",
                "url": "https://ki-marketingagentur.jetzt/werbeagentur-amstetten"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Bezirk Amstetten",
                "sameAs": "https://www.wikidata.org/wiki/Q132997"
            },
            {
                "@type": "AdministrativeArea",
                "name": "Mostviertel",
                "sameAs": "https://www.wikidata.org/wiki/Q266193"
            },
            {
                "@type": "City",
                "name": "Steyr",
                "postalCode": "4400",
                "sameAs": "https://www.wikidata.org/wiki/Q131632",
                "url": "https://ki-marketingagentur.jetzt/werbeagentur-steyr"
            },
            {
                "@type": "City",
                "name": "Linz",
                "postalCode": "4020",
                "sameAs": "https://www.wikidata.org/wiki/Q41329",
                "url": "https://ki-marketingagentur.jetzt/werbeagentur-linz"
            },
            {
                "@type": "City",
                "name": "Perg",
                "postalCode": "4320",
                "sameAs": "https://www.wikidata.org/wiki/Q256901",
                "url": "https://ki-marketingagentur.jetzt/werbeagentur-perg"
            },
            {
                "@type": "City",
                "name": "St. Pölten",
                "postalCode": "3100",
                "sameAs": "https://www.wikidata.org/wiki/Q82500",
                "url": "https://ki-marketingagentur.jetzt/werbeagentur-st-poelten"
            },
            {
                "@type": "City",
                "name": "Salzburg",
                "postalCode": "5020",
                "sameAs": "https://www.wikidata.org/wiki/Q34713",
                "url": "https://ki-marketingagentur.jetzt/werbeagentur-salzburg"
            },
            {
                "@type": "City",
                "name": "Wien",
                "postalCode": "1010",
                "sameAs": "https://www.wikidata.org/wiki/Q1741",
                "url": "https://ki-marketingagentur.jetzt/werbeagentur-wien"
            },
            { "@type": "AdministrativeArea", "name": "Niederösterreich", "sameAs": "https://www.wikidata.org/wiki/Q42497" },
            { "@type": "AdministrativeArea", "name": "Oberösterreich", "sameAs": "https://www.wikidata.org/wiki/Q41967" },
            { "@type": "Country", "name": "Österreich", "sameAs": "https://www.wikidata.org/wiki/Q40" }
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
            "Webseite erstellen lassen",
            "Landingpage erstellen lassen",
            "Suchmaschinenoptimierung (SEO)",
            "Generative Engine Optimization (GEO)",
            "KI-Suche Optimierung",
            "KI-Werbeagentur",
            "Werbeagentur Amstetten",
            "Webseite Amstetten",
            "Landingpage Amstetten",
            "Suchmaschinenoptimierung Amstetten",
            "Werbeagentur Steyr",
            "Webseite Steyr",
            "Landingpage Steyr",
            "Suchmaschinenoptimierung Steyr",
            "Werbeagentur Linz",
            "Webseite Linz",
            "Landingpage Linz",
            "Suchmaschinenoptimierung Linz",
            "Werbeagentur Perg",
            "Webseite Perg",
            "Landingpage Perg",
            "Suchmaschinenoptimierung Perg",
            "Werbeagentur St. Pölten",
            "Webseite St. Pölten",
            "Landingpage St. Pölten",
            "Suchmaschinenoptimierung St. Pölten",
            "Werbeagentur Salzburg",
            "Webseite Salzburg",
            "Landingpage Salzburg",
            "Suchmaschinenoptimierung Salzburg",
            "Werbeagentur Wien",
            "Webseite Wien",
            "Landingpage Wien",
            "Suchmaschinenoptimierung Wien",
            "Mitarbeitergewinnung & Social Recruiting für Handwerker",
            "Barrierefreie Webseiten BFSG 2025"
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
        "serviceType": "Webdesign, Webseite, Landingpage, Social Recruiting, Suchmaschinenoptimierung (SEO), GEO, Social Media Marketing & KI-Automatisierung",
        "areaServed": "AT",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Leistungen & Regionale Standorte BrainStorm KI Werbeagentur",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Service",
                        "name": "Webseite & Landingpage (Sprint-Webseite in 5-7 Tagen)",
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
                        "name": "GEO - Generative Engine Optimization & KI-Suche",
                        "description": "Sichtbarkeit und Zitierung auf Position 1 in modernen KI-Assistenten und KI-Suchmaschinen wie ChatGPT, Perplexity, Claude und Google Gemini."
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 4,
                    "item": {
                        "@type": "Service",
                        "name": "SEO & Lokale Suchmaschinenoptimierung",
                        "description": "Top-Platzierungen bei Google und Google Maps in Amstetten, Steyr, Linz, Perg, St. Pölten, Salzburg, Wien und im gesamten Mostviertel."
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
        "name": "Werbeagentur & Webagentur | Webseite, Landingpage, SEO, GEO & KI Niederösterreich",
        "description": "BrainStorm KI Werbeagentur: Dein Partner für verkaufsstarke Webseiten, Landingpages, Social Recruiting, Suchmaschinenoptimierung (SEO), GEO und KI-Automatisierung für KMUs in Amstetten, Steyr, Linz, Perg, St. Pölten, Salzburg & Wien.",
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
