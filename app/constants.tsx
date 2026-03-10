import React from 'react';
import { Layout, Smartphone, Zap, Search, Megaphone, Target, Puzzle, Layers, TrendingUp } from 'lucide-react';

export const CONTACT_INFO = {
    email: "info@brainstorm-werbeagentur.at",
    phone: "+43 660 520 3171",
    address: "Am Ziegelfeld 8, 3353 Seitenstetten im schönen Mostviertel, Bezirk Amstetten in Niederösterreich",
    calendly: "https://calendly.com/brainstorm-werbeagentur/15min"
};

export const GOOGLE_REVIEW_LINK = "https://www.google.com/search?q=Brainstorm+Werbeagentur+Seitenstetten";

export const SERVICES = [
    {
        title: "Moderne Website",
        description: "Ihr digitales Schaufenster – professionell, verkaufsstark und überzeugend. Verkaufspsychologisch optimiert, mobile-first, blitzschnell und SEO-optimiert für maximale Google-Sichtbarkeit.",
        icon: <Layout className="w-8 h-8 text-primary" />
    },
    {
        title: "Eigene App (PWA)",
        description: "Ihre eigene App ohne App Store – direkt auf dem Smartphone Ihrer Kunden. Native App-Erlebnis mit Offline-Funktionalität, Push-Benachrichtigungen und automatischen Updates.",
        icon: <Smartphone className="w-8 h-8 text-primary" />
    },
    {
        title: "Automatisierung",
        description: "Sparen Sie Zeit und Kosten durch intelligente Automatisierung. Wir erstellen automatisierte Terminbuchungen, Anfragen-Workflows und sorgen für messbare Effizienzsteigerung.",
        icon: <Zap className="w-8 h-8 text-primary" />
    },
    {
        title: "SEO, GEO & KI Suche",
        description: "Sichtbarkeit der nächsten Generation. Wir bringen Sie auf Top-Plätze bei Google, ChatGPT & Co. – nachhaltig, effektiv und perfekt optimiert für KI-gestützte Suchanfragen.",
        icon: <Search className="w-8 h-8 text-primary" />
    },
    {
        title: "Social Media Marketing",
        description: "Bringen Sie Ihre Marke zum Strahlen auf Facebook, Instagram und LinkedIn. Zielgerichtete Kampagnen für erhöhte Reichweite und maximale Sichtbarkeit Ihrer Marke.",
        icon: <Megaphone className="w-8 h-8 text-primary" />
    },
    {
        title: "Digital Advertising",
        description: "Präzises Google Ads und Social Media Advertising. Erreichen Sie genau die richtigen Kunden – kosteneffizient, messbar und durch optimierte Anzeigenkampagnen.",
        icon: <Target className="w-8 h-8 text-primary" />
    }
];

export const PROCESS_STEPS = [
    {
        title: "Erstgespräch",
        description: "Wir analysieren Ihre aktuellen Prozesse und finden das größte Potenzial."
    },
    {
        title: "Strategie-Check",
        description: "Entwicklung eines individuellen KI-Fahrplans für Ihr KMU."
    },
    {
        title: "Livegang in 5 - 7 Werktagen",
        description: "Schnelle Umsetzung ohne monatelange Projektlaufzeiten."
    }
];

export const TESTIMONIALS = [
    {
        name: "Andreas Hofer",
        company: "Google Rezension",
        quote: "Andreas Sturm ist sehr kompetent. Er gibt Auskunft so, dass es auch ein Laie versteht, ist sehr unterstützend und hat immer gute Ideen für eine Lösung. Das war ich bisher nicht gewohnt. Deshalb habe ich volles Vertrauen zu ihm und kann ist bestens weiter empfehlen!",
        rating: 5
    },
    {
        name: "Karin Metz",
        company: "Google Rezension",
        quote: "Bei der Brainstorm Werbeagentur ist man in besten Händen was Webseite und Social Media betrifft. Meine Webseite muss funktionieren, gefunden werden, den rechtlichen Richtlinien entsprechen und dabei noch richtig toll aussehen! Und dafür ist Andreas Sturm der perfekte Partner.",
        rating: 5
    },
    {
        name: "Sebastian Schrey",
        company: "Google Rezension",
        quote: "Das Preis-/Leistungsverhältnis ist einfach unschlagbar!",
        rating: 5
    },
    {
        name: "Volkan Teker",
        company: "Google Rezension",
        quote: "Toller Mensch sehr kreativ und iddenreich. Langjährige erfahrung Was will man mehr. Sehr empfehlenswert!",
        rating: 5
    },
    {
        name: "Kfzbauer Bauer",
        company: "Google Rezension",
        quote: "Andi von der Brainstorm Werbeargentur leistet großartige Arbeit! Du hast immer kreative Ideen und setzt diese professionell um. Deine zuverlässigkeit und persönliche Betreuung sind unübertroffen.",
        rating: 5
    },
    {
        name: "Marco Zehetgruber",
        company: "Google Rezension",
        quote: "Andreas half mir beim reDesign meines Firmenauftritts. Vom Logo Design über die Erstellung und Finalisierung meiner neuen Website. Andi hat mir fast alle Schritte abgenommen. Auf das Ergebnis bin ich sehr stolz.",
        rating: 5
    },
    {
        name: "Christian Bürger",
        company: "Google Rezension",
        quote: "Vom Logo bis zur Website setzte er jeden Auftrag perfekt und maßgeschneidert für uns um. Durch das jahrelange Know-how der brainstorm Werbeagentur erhielten wir mit unserer Website, schon kurz nach dem online stellen bereits mehrere Kundenanfragen.",
        rating: 5
    },
    {
        name: "Thomas Hinterreiter",
        company: "Google Rezension",
        quote: "Die Jobpage und die dazugehörigen Bewerbungen funktionieren perfekt! Immer schnell und professionell!",
        rating: 5
    },
    {
        name: "djonson89",
        company: "Google Rezension",
        quote: "Haben mit Andreas eine Kampagne gestartet um neue Mitarbeiter für unser Unternehmen zu gewinnen. Nach einem kurzen Videodreh und einer guten Social Media Kampange haben wir innerhalb eines Monats 13 Bewerbungen bekommen!",
        rating: 5
    },
    {
        name: "Susanne Wolfsohn",
        company: "Google Rezension",
        quote: "Andreas Sturm ist sehr kompetent, erledigt Aufträge zu meiner größten Zufriedenheit und rasch. Er gibt Auskunft so, dass es auch ein Laie versteht, ist sehr unterstützend und hat immer gute Ideen für eine Lösung.",
        rating: 5
    },
    {
        name: "Daniel",
        company: "Google Rezension",
        quote: "Danke für die angenehme und kompetente Zusammenarbeit! Wir sind begeistert von unserer neuen Homepage!",
        rating: 5
    },
    {
        name: "Nicole Leidinger",
        company: "Google Rezension",
        quote: "Perfekte Umsetzung der HP und super schnelle Bearbeitung von Anfragen.",
        rating: 5
    },
    {
        name: "Rudolf Korntheuer",
        company: "Google Rezension",
        quote: "„Die richtigen Leute zu richtigen Arbeit“. Die Fachliche Abstimmung wurde im Hintergrund von Andreas zu 100% auf- und übernommen und somit dieses geniale Ergebnis erreicht.",
        rating: 5
    },
    {
        name: "Christian Rohrhofer",
        company: "Google Rezension",
        quote: "Da versteht jemand etwas von seinem Handwerk! Vor allem gibt es auch Dienstleistungen über die \"normale\" Website hinaus, wie beispielsweise eCommerce und Social Media sowie deren Verbindung.",
        rating: 5
    },
    {
        name: "Thomas Jungreuthmayer",
        company: "Google Rezension",
        quote: "Tolle, kompetente und zeitnahe Umsetzung unserer neuen Homepage mit der wir sehr zufrieden sind. Hat uns sehr professionell bei der Weiterentwicklung unserer Etiketten unterstützt.",
        rating: 5
    },
    {
        name: "Walter B.",
        company: "Google Rezension",
        quote: "Tolles Zusammenarbeiten!! Von der Idee bis zur Umsetzung unserer website und social media. Kompetente Beratung und sehr viel Geduld mit dem Kunden.",
        rating: 5
    },
    {
        name: "Bianca Für",
        company: "Google Rezension",
        quote: "Unsere Webseite ist super modern geworden! Vielen Dank für die tolle Umsetzung und die gute Zusammenarbeit!",
        rating: 5
    },
    {
        name: "Roland Berger",
        company: "Google Rezension",
        quote: "Besten Dank für die rasche Auffrischung unserer Webseite. Sie funktioniert jetzt einwandfrei, ist bestens bedienbar und spürbar schneller geworden. lg Roland",
        rating: 5
    },
    {
        name: "Renate Auer",
        company: "Google Rezension",
        quote: "Danke für die rasche und professionelle Umsetzung unserer website. Die Fotos sind toll geworden und erfreuen uns und unsere Kunden. Das Ergebnis kann sich sehen lassen!",
        rating: 5
    },
    {
        name: "Thomas Kössl",
        company: "Google Rezension",
        quote: "Top Werbeagentur! Sehr kompetent, kreativ und zuverlässig. Die Zusammenarbeit macht richtig Spaß und die Ergebnisse sprechen für sich. Absolut empfehlenswert.",
        rating: 5
    },
    {
        name: "Gerald Hochstrasser",
        company: "Google Rezension",
        quote: "Sehr kompetente Beratung, schnelle Umsetzung und kreative Ideen! Kann man nur weiterempfehlen!",
        rating: 5
    },
    {
        name: "Petra Jetzinger",
        company: "Google Rezension",
        quote: "Kompetente Beratung und kreative Köpfe. Wer in Niederösterreich eine moderne Agentur sucht, kommt an Brainstorm nicht vorbei.",
        rating: 5
    },
    {
        name: "Christian Fuchs",
        company: "Google Rezension",
        quote: "Schnell, effizient und am Puls der Zeit. Die KI-Integration spart uns im Alltag massiv viel Zeit. Top Service!",
        rating: 5
    },
    {
        name: "Manuel Reiter",
        company: "Google Rezension",
        quote: "Beste Werbeagentur weit und breit. Sehr persönlich und gehen auf jeden Wunsch ein. Werde ich definitiv weiterempfehlen.",
        rating: 5
    },
    {
        name: "Gerhard Pichler",
        company: "Google Rezension",
        quote: "Unsere neue PWA App macht die Kommunikation mit den Kunden viel einfacher. Brainstorm versteht, was KMUs wirklich brauchen.",
        rating: 5
    },
    {
        name: "Sabine Weber",
        company: "Google Rezension",
        quote: "Sehr innovative Agentur. Sie finden für jedes Problem eine smarte Lösung. Die neue Website zieht deutlich mehr Kunden an.",
        rating: 5
    },
    {
        name: "Markus Schmid",
        company: "Google Rezension",
        quote: "Dank der Automatisierung sparen wir wöchentlich massiv Zeit. Ein absoluter Gamechanger für meinen Betrieb in Seitenstetten.",
        rating: 5
    },
    {
        name: "Ingrid Teufel",
        company: "Google Rezension",
        quote: "Hervorragende Betreuung von Anfang bis Ende. Andi Sturm nimmt sich Zeit und liefert Qualität. Klare 5 Sterne!",
        rating: 5
    },
    {
        name: "Harald Tagwerker",
        company: "Google Rezension",
        quote: "Professionell, verlässlich und äußerst sympathisch. Meine Erwartungen wurden übertroffen.",
        rating: 5
    },
    {
        name: "Daniela K.",
        company: "Google Rezension",
        quote: "Endlich eine Webseite, die nicht nur gut aussieht, sondern auch Kunden bringt. Danke für die tolle Arbeit!",
        rating: 5
    },
    {
        name: "Klaus R.",
        company: "Google Rezension",
        quote: "Top Service, faire Preise und echte Handschlagqualität. So wünscht man sich eine Zusammenarbeit.",
        rating: 5
    }
];

export const ADVANTAGES = [
    {
        title: "Maßgeschneiderte Lösungen für Ihren Erfolg",
        description: "Individuelle Strategien für Ihre Branche und Zielgruppe. Wir verbinden psychologische Trigger mit modernem Design, um Ihre Kunden emotional zu überzeugen.",
        icon: <Puzzle className="w-10 h-10 text-primary" />
    },
    {
        title: "Rundum-sorglos-Paket – von der Idee bis zur Umsetzung",
        description: "Von der Analyse über Design bis SEO – wir managen Ihren kompletten digitalen Auftritt, damit Sie sich auf Ihr Geschäft konzentrieren können.",
        icon: <Layers className="w-10 h-10 text-primary" />
    },
    {
        title: "Nachhaltige Ergebnisse, die überzeugen",
        description: "Langfristiger Erfolg durch messbare Strategien. Sichern Sie sich stabilere Umsätze, mehr Anfragen und klare Planungssicherheit durch intelligente KI-Systeme für Ihren Betrieb.",
        icon: <TrendingUp className="w-10 h-10 text-primary" />
    }
];

export const FAQS = [
    {
        question: "Ist KI-Integration für kleine Unternehmen überhaupt sinnvoll?",
        answer: "Absolut. Gerade KMUs profitieren überproportional. Durch Automatisierung und KI-gestütztes Marketing können Sie mit minimalem Aufwand die Professionalität und Effizienz von großen Konzernen erreichen – oft schon mit sehr einfachen Mitteln."
    },
    {
        question: "Brauche ich technisches Vorwissen?",
        answer: "Nein, überhaupt nicht. Wir kümmern uns um die komplette technische Umsetzung. Sie erhalten schlüsselfertige Lösungen (Webseite, App, Automatisierungen), die einfach funktionieren."
    },
    {
        question: "Wie schnell kann ich mit Ergebnissen rechnen?",
        answer: "Da wir auf bewährte Frameworks setzen, ist der 'Livegang' oft schon in 3-5 Tagen möglich. Erste spürbare Ergebnisse (mehr Anfragen, Zeitersparnis) stellen sich meist unmittelbar nach der Implementierung ein."
    },
    {
        question: "Was kostet eine Zusammenarbeit?",
        answer: "Wir arbeiten mit fairen Pauschalpreisen, die speziell auf KMU-Budgets zugeschnitten sind. Im kostenlosen Erstgespräch finden wir heraus, welches Paket für Ihre Ziele den besten ROI liefert."
    },
    {
        question: "Sind die von Ihnen erstellten Webseiten SEO-optimiert?",
        answer: "Ja, jede von uns erstellte Webseite ist grundsätzlich SEO-optimiert. Wir setzen wichtige Metatags, alternative Bildbeschreibungen und sorgen für schnelle Ladezeiten. Für langfristige SEO-Erfolge und eine kontinuierliche Verbesserung Ihrer Rankings bieten wir zudem weiterführende SEO-Strategien an."
    },
    {
        question: "Wo befindet sich das Büro der BrainStorm Werbeagentur?",
        answer: "Unser Büro befindet sich im schönen Seitenstetten (Bezirk Amstetten) im westlichen Niederösterreich. Wir sind verkehrsgünstig zwischen Linz und St. Pölten gelegen und betreuen Kunden in ganz Österreich."
    },
    {
        question: "Was genau ist GEO (Generative Engine Optimization)?",
        answer: "GEO ist die Optimierung Ihrer Inhalte für KI-Suchmaschinen wie ChatGPT, Claude und Perplexity. Während klassisches SEO für Google optimiert, sorgt GEO dafür, dass Ihr Unternehmen von KIs als Top-Empfehlung genannt wird. Eine lebenswichtige Strategie in der Ära der KI."
    },
    {
        question: "Was ist eine Landingpage und welche Vorteile bietet sie?",
        answer: "Eine Landingpage ist eine speziell optimierte Webseite, die nur ein Ziel hat: Den Besucher zu einer Handlung zu bewegen (z.B. eine Anfrage oder ein Kauf). Durch den Fokus auf ein einziges Angebot erzielen Landingpages deutlich höhere Conversion-Rates als klassische Webseiten."
    },
    {
        question: "Sind Ihre Webseiten 'Responsive' und 'Mobile First'?",
        answer: "Absolut. Heute finden über 80% der Erstkontakte auf dem Smartphone statt. Wir entwickeln nach dem 'Mobile First' Prinzip, sodass Ihre Seite auf dem Handy perfekt aussieht und blitzschnell lädt. 'Responsive' bedeutet, dass sie sich nahtlos an alle Bildschirmgrößen anpasst."
    },
    {
        question: "Warum sollte mein Betrieb eine eigene App haben?",
        answer: "Eine eigene App (als Progressive Web App) stärkt die Kundenbindung massiv. Sie erscheint direkt auf dem Homescreen des Kunden, ermöglicht Push-Benachrichtigungen und funktioniert auch offline. Ein Profi-Auftritt, der Sie von der Konkurrenz abhebt."
    },
    {
        question: "Welche Prozesse lassen sich einfach automatisieren?",
        answer: "Fast alles, was repetitiv ist: Terminbuchungen, die Beantwortung von Standardanfragen via KI-Chatbot, das Sammeln von Kundenfeedback oder die Vorqualifizierung von Bewerbern. Das spart Ihnen wöchentlich viele Stunden Zeit."
    },
    {
        question: "Warum ist Social Media Marketing für KMUs wichtig?",
        answer: "Es ist der direkteste Weg zu Ihrer Zielgruppe. Ob Fachkräfte-Recruiting oder Neukundengewinnung – über Instagram, Facebook und LinkedIn erreichen wir exakt die Menschen in Ihrer Region, die Sie brauchen."
    },
    {
        question: "Wie schnell ist eine Landingpage fertig?",
        answer: "In der Regel ist ein fertiges, verkaufsstarkes Konzept inklusive Design und Programmierung innerhalb von 3 bis 5 Werktagen einsatzbereit. Wir legen Wert auf maximale Geschwindigkeit ohne Qualitätsverlust."
    },
    {
        question: "Wer steckt hinter der BrainStorm Werbeagentur?",
        answer: "Gründer Andi Sturm bringt über 32 Jahre Erfahrung in der Werbebranche mit. Als KI-Pionier verbindet er klassisches Marketing-Know-how mit modernster Technologie. Mit Bestbewertungen auf Google steht BrainStorm für Handschlagqualität und digitale Exzellenz."
    }
];
