import { Layout, Users, Zap, Search, Megaphone, Target } from 'lucide-react';

export const CONTACT_INFO = {
    email: "info@brainstorm-werbeagentur.at",
    phone: "+43 660 520 3171",
    address: "Am Ziegelfeld 8, 3353 Seitenstetten im schönen Mostviertel, Bezirk Amstetten in Niederösterreich",
    calendly: "https://calendly.com/brainstorm-werbeagentur/15min"
};

export const GOOGLE_REVIEW_LINK = "https://www.google.com/search?q=Brainstorm+Werbeagentur+Seitenstetten";

export const SERVICES = [
    {
        title: "Webseite & Landingpage",
        description: "Wir bauen für deinen Betrieb psychologisch optimierte Webseiten, die rund um die Uhr wie dein bester Verkäufer arbeiten. Verwandle anonyme Besucher in zahlende Kunden und hebe dich mit blitzschneller Performance und erstklassigem Design klar vom lokalen Mitbewerb ab.",
        icon: <Layout className="w-8 h-8 text-primary" />,
        stat: { value: "80%", label: "mehr Conversion" }
    },
    {
        title: "Mitarbeitergewinnung / Recruiting",
        description: "Finde qualifizierte Fachkräfte aus deiner Region, die nicht aktiv auf Jobbörsen suchen. Durch zielgerichtetes Social Recruiting und einfache 60-Sekunden-Bewerbungen sprechen wir wechselbereite Mitarbeiter direkt an und gewinnen sie ohne Umwege für dein Team.",
        icon: <Users className="w-8 h-8 text-primary" />,
        stat: { value: "+300%", label: "mehr Bewerbungen" }
    },
    {
        title: "SEO, GEO & KI Suche",
        description: "Wir positionieren dein Unternehmen auf den Spitzenplätzen bei Google und modernen KI-Assistenten wie ChatGPT. Durch zukunftssichere Optimierung wirst du genau dann gefunden, wenn kaufbereite Kunden in deiner Region nach deinen Leistungen und Produkten suchen.",
        icon: <Search className="w-8 h-8 text-primary" />,
        stat: { value: "Top 3", label: "KI-Rankings" }
    },
    {
        title: "Digitale Werbekampagnen",
        description: "Überlass deinen Kundenstrom niemals dem Zufall. Mit hochpräzisen Werbekampagnen auf Google, Instagram und Facebook erreichen wir exakt deine Wunschzielgruppe in der Region – absolut budgetsicher, transparent messbar und voll auf maximalen Neukundengewinn optimiert.",
        icon: <Target className="w-8 h-8 text-primary" />,
        stat: { value: "5x", label: "höherer ROI" }
    },
    {
        title: "Social Media Marketing",
        description: "Wir bringen deine Marke auf Facebook, Instagram und LinkedIn professionell zum Strahlen. Baue eine dauerhafte Verbindung zu deiner regionalen Zielgruppe auf, stärke dein Firmenimage und ziehe verlässlich Kunden an, die Qualität und echte Handwerksarbeit schätzen.",
        icon: <Megaphone className="w-8 h-8 text-primary" />,
        stat: { value: "+120%", label: "mehr Reichweite" }
    },
    {
        title: "KI-Automatisierung",
        description: "Befreie deinen Arbeitsalltag von zeitfressenden Routineaufgaben. Wir implementieren intelligente KI-Workflows für Terminbuchungen, Anfragen und Kundenkommunikation, die fehlerfrei im Hintergrund laufen und dir und deinem Team jede Woche wertvolle Stunden zurückholen.",
        icon: <Zap className="w-8 h-8 text-primary" />,
        stat: { value: "15h", label: "Zeitersparnis pro Woche" }
    }
];

export const PACKAGES = [
    {
        title: "Sprint-Webseite",
        subtitle: "Go-Live in 7 Tagen",
        badge: "Schnellstart",
        description: "Fixpreis für lokale Betriebe, die schnell eine anfragestarke Seite brauchen. Schlüsselfertig online in nur 7 Tagen.",
        features: [
            "Verkaufspsychologisch optimiert für Kundenanfragen",
            "Modernes, mobiles Design & blitzschnelle Ladezeit",
            "100% DSGVO-konform & rechtssicher",
            "Garantierter Go-Live in maximal 7 Tagen",
            "Transparenter Fixpreis ohne böse Überraschungen"
        ],
        ctaText: "Sprint-Webseite anfragen"
    },
    {
        title: "Kombi-System",
        subtitle: "Webseite + Social Media",
        badge: "Beliebteste Wahl",
        highlight: true,
        description: "Fixpreis für neue Webseite und 3 Monate Social Media auf mehreren Kanälen (z. B. Facebook, Instagram, LinkedIn) – für schnelle Sichtbarkeit in deiner Region.",
        features: [
            "Komplette Sprint-Webseite inklusive",
            "3 Monate aktive Social-Media-Betreuung",
            "Content-Erstellung für Facebook, Instagram & LinkedIn",
            "Regionale Sichtbarkeit & aktiver Vertrauensaufbau",
            "Monatliches Reporting der Reichweite & Anfragen"
        ],
        ctaText: "Kombi-System anfragen"
    },
    {
        title: "Wachstums-System",
        subtitle: "Webseite + KI & Lead-Gen",
        badge: "Maximale Power",
        description: "Für Betriebe, die Bewerber und Neukunden auf Autopilot wollen. Die perfekte Kombination aus High-End-Webseite und automatisierter Kundengewinnung.",
        features: [
            "High-End Webseite & zielgerichtete Landingpages",
            "Automatisierte Funnels für Mitarbeiter & Neukunden",
            "Intelligente KI-Workflows für Anfragen & Termine",
            "Planbare Neukunden & Bewerber rund um die Uhr",
            "Laufende Optimierung & persönliche Betreuung"
        ],
        ctaText: "Wachstums-System anfragen"
    }
];

export const PROCESS_STEPS = PACKAGES.map(p => ({
    title: `${p.title} (${p.subtitle})`,
    description: p.description
}));

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
        name: "Marion Bald",
        company: "Google Rezension",
        quote: "Brainstorm KI Werbeagentur zählt zu den TOP Adressen wenn es um innovative Lösungen geht. 100% zuverlässig und 100% am neuesten Stand. Zudem äußerst serviceorientiert, was für mich den selben Stellenwert hat wie technisches Know how. Bei Brainstorm kann man sich entspannt zurücklehnen und sicher sein, dass die beste individuelle Lösung gefunden wird. 100 Prozent Weiterempfehlung :-)",
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

export interface FAQItem {
    question: string;
    answer: string;
    category?: 'webseite' | 'recruiting' | 'socialmedia' | 'ki' | 'seo';
}

export const FAQS: FAQItem[] = [
    {
        question: "Was kostet eine professionelle Webseite bei euch?",
        answer: "Wir arbeiten mit 100% transparenten Festpreisen – ohne versteckte Kosten oder unkalkulierbare Stundensätze. Je nach Bedarf wählst du zwischen unserer schnellen Sprint-Webseite (Go-Live in 7 Tagen), dem Kombi-System (Webseite + 3 Monate Social Media) oder dem Wachstums-System mit vollautomatischer Lead- und Mitarbeitergewinnung. Im kostenlosen Erstgespräch erfährst du sofort, welches Paket für deinen Betrieb am rentabelsten ist.",
        category: "webseite"
    },
    {
        question: "Wie kann eine neue Webseite in nur 7 Tagen fertig sein, ohne an Qualität zu verlieren?",
        answer: "Durch die Kombination aus 32 Jahren Marketing-Handwerk und hocheffizienten KI-Workflows überspringen wir langwierige Agenturschleifen. Wir starten direkt mit praxiserprobter Verkaufspsychologie, optimierten Strukturen und klaren Inhalten. Du hast null Technik-Chaos und dein Betrieb ist in einer Woche online und anfragestark.",
        category: "webseite"
    },
    {
        question: "Wie funktioniert die Mitarbeitergewinnung über Social Recruiting für meinen Betrieb?",
        answer: "Gute Fachkräfte sind fast nie arbeitslos und suchen selten auf Jobbörsen wie AMS oder willhaben. Über gezielte Social-Media-Kampagnen (Facebook, Instagram) sprechen wir wechselwillige Fachkräfte direkt in deiner Region in ihrer Freizeit an. Über einen simplen 60-Sekunden-Bewerbungsprozess auf deiner Webseite können sie sich ohne Lebenslauf oder Anschreiben direkt vom Smartphone aus bei dir bewerben. Das senkt die Hemmschwelle drastisch und bringt dir planbar neue Bewerber.",
        category: "recruiting"
    },
    {
        question: "Funktioniert Social Recruiting auch für schwierige Handwerks- und Fachberufe in unserer Region?",
        answer: "Ja, genau dafür ist es ideal. Im Gegensatz zu teuren Zeitungsannoncen oder Jobportalen zeigen wir deinen Betrieb mit echten Vorteilen, Teamgeist und Handschlagqualität genau den Menschen im Umkreis von 20–50 km, die bereits die passende Qualifikation mitbringen. Du erreichst die passiv Suchenden, die bei ihrem aktuellen Arbeitgeber unzufrieden sind.",
        category: "recruiting"
    },
    {
        question: "Löst KI wirklich mein Problem mit fehlenden Fachkräften?",
        answer: "Ja, an zwei entscheidenden Hebeln: Erstens übernimmt KI zeitraubende Routinearbeiten (wie Terminkoordination, Vorqualifizierung oder E-Mail-Sortierung), sodass dein bestehendes Team spürbar entlastet wird. Zweitens sorgt unsere automatisierte Mitarbeitergewinnung dafür, dass wechselwillige Fachkräfte aus der Region dich finden und sich in unter 60 Sekunden direkt per Smartphone bei dir bewerben.",
        category: "recruiting"
    },
    {
        question: "Warum ist Social Media Marketing für lokale KMUs so entscheidend?",
        answer: "Weil deine Kunden und zukünftigen Mitarbeiter täglich mehrmals auf Instagram, Facebook und LinkedIn sind. Eine Webseite fängt kaufbereite Sucher ab – Social Media sorgt dafür, dass dein Betrieb in der Region ständig im Kopf bleibt (Top-of-Mind). Wenn jemand deine Dienstleistung braucht oder den Job wechseln will, denkt er sofort an dich und nicht an deine Mitbewerber.",
        category: "socialmedia"
    },
    {
        question: "Muss ich für Social Media selbst Bilder erstellen oder Texte schreiben?",
        answer: "Nein, überhaupt nicht. Wenn du eigene Fotos von deinem Betrieb, deinen Projekten oder deinem Team hast, kannst du uns diese gerne beistellen. Falls nicht, ist das kein Problem: Wir generieren passende, professionelle Bilder und Grafiken einfach mit modernster KI. Auch alle verkaufspsychologischen Texte, die Themenplanung und die regionale Ausspielung übernehmen wir im Kombi-System komplett für dich.",
        category: "socialmedia"
    },
    {
        question: "Brauche ich technisches Vorwissen für KI, Automatisierung oder die Pflege?",
        answer: "Nein, absolut null. Als Full-Service-Agentur übernehmen wir die komplette technische Einrichtung. Du und dein Team arbeiten wie gewohnt weiter, während deine Webseite und die Automatisierungen im Hintergrund zuverlässig Kunden und Bewerber generieren.",
        category: "ki"
    },
    {
        question: "Kann ich das nicht einfach selbst mit ChatGPT machen? Warum brauche ich euch?",
        answer: "ChatGPT liefert zwar nette Texte – aber es baut keine verkaufspsychologische, rechtssichere Webseite, kennt nicht deine regionalen Wunschkunden und vernetzt keine Hintergrundprozesse. Wir nutzen KI als hocheffizientes Werkzeug, kombiniert mit 32 Jahren Marketing-Erfahrung und echter Handschlagqualität. Du sparst dir wochenlanges Ausprobieren und erhältst ein schlüsselfertiges System, das verlässlich Kunden und Bewerber generiert.",
        category: "ki"
    },
    {
        question: "Welche Prozesse lassen sich in meinem Betrieb heute schon ganz einfach automatisieren?",
        answer: "Typische Beispiele aus unserer Praxis: 1. Automatische Terminerinnerungen und direkte Kalenderbuchung (senkt No-Shows um 80 %). 2. Sofortige KI-Antworten auf Standardanfragen auch am Wochenende. 3. Vorab-Qualifizierung von Projektanfragen (Budget, Gewerk, Dringlichkeit), damit du nur noch mit echten Wunschkunden sprichst. 4. Automatische Weiterleitung von Bewerberdaten direkt in dein Postfach.",
        category: "ki"
    },
    {
        question: "Welche Aufgaben kann KI in meinem Betrieb konkret übernehmen?",
        answer: "Vor allem zeitfressende Routineaufgaben: Die automatische Vorqualifizierung von Kundenanfragen, 24/7-Terminbuchungen direkt im Kalender, das Vorfiltern von Bewerbern sowie die automatisierte Beantwortung häufiger Fragen. Das spart dir und deinem Team jede Woche 10 bis 15 Stunden Handarbeit.",
        category: "ki"
    },
    {
        question: "Was zeichnet eine moderne, anfragestarke Webseite heute aus?",
        answer: "Eine moderne Webseite ist kein digitales Schaufenster, sondern dein bester Verkäufer. Sie lädt in unter 1 Sekunde, ist perfekt auf Smartphones bedienbar und führt Besucher mit klarer Verkaufspsychologie direkt zur Kontaktaufnahme – statt sie mit Fachchinesisch zu langweilen.",
        category: "webseite"
    },
    {
        question: "Warum ist eine barrierefreie Webseite für KMUs ab 2025 Pflicht?",
        answer: "Mit dem Barrierefreiheitsstärkungsgesetz (BFSG) müssen Webseiten und digitale Angebote im elektronischen Geschäftsverkehr ab dem 28. Juni 2025 barrierefrei zugänglich sein. Wer das ignoriert, riskiert kostenpflichtige Abmahnungen. Wir gestalten deine neue Webseite von Grund auf nach den aktuellen WCAG-Richtlinien – lesbar, übersichtlich, für alle Menschen zugänglich und rechtssicher.",
        category: "webseite"
    },
    {
        question: "Warum sollte ich eine regionale Agentur wählen statt einer anonymen Großagentur?",
        answer: "Weil wir die Region zwischen Amstetten, Steyr, Linz und dem gesamten Mostviertel in Niederösterreich und Oberösterreich wie unsere Westentasche kennen. Bei uns gibt es keine anonymen Callcenter-Warteschleifen, sondern echte Handschlagqualität und einen persönlichen Ansprechpartner mit 32 Jahren Marketing-Erfahrung direkt vor Ort.",
        category: "webseite"
    },
    {
        question: "Was genau ist der Unterschied zwischen SEO und GEO?",
        answer: "SEO (Suchmaschinenoptimierung) bringt deine Webseite auf die Top-Plätze bei Google. GEO (Generative Engine Optimization) sorgt dafür, dass moderne KI-Systeme wie ChatGPT oder Perplexity dein Unternehmen als vertrauenswürdige Top-Empfehlung für deine Region nennen. Wir verbinden beides für maximale Sichtbarkeit.",
        category: "seo"
    },
    {
        question: "Welche Pflichten bringt der EU AI Act (KI-Verordnung) für meine Webseite mit sich?",
        answer: "Ab August 2026 gelten EU-weit Kennzeichnungspflichten für automatisierte Systeme und KI-Inhalte. Wir bauen deine Webseiten und Automatisierungen von Beginn an 100% DSGVO-konform und rechtssicher auf, sodass du vor Abmahnungen geschützt bist.",
        category: "ki"
    },
    {
        question: "Warum ist eine blitzschnelle Ladezeit und Mobile-First so wichtig?",
        answer: "Über 80 % deiner potenziellen Kunden surfen auf dem Smartphone. Lädt eine Seite länger als 3 Sekunden, springen mehr als die Hälfte sofort ab zur Konkurrenz. Eine schnelle, saubere mobile Webseite sichert dir Top-Rankings bei Google und deutlich mehr Anfragen.",
        category: "webseite"
    },
    {
        question: "Wie läuft das kostenlose Erstgespräch ab?",
        answer: "Ganz unkompliziert: In 15–20 Minuten analysieren wir gemeinsam deine aktuelle Webseite, deinen Markt und deine Engpässe. Du erfährst sofort und unverbindlich die 3 größten Hebel, mit denen du schnell mehr Kunden oder Mitarbeiter gewinnen kannst.",
        category: "webseite"
    }
];
