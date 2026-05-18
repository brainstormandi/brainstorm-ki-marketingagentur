import { Layout, Smartphone, Zap, Search, Megaphone, Target } from 'lucide-react';

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
        description: "Wir erschaffen psychologisch optimierte Webseiten, die aus anonymen Besuchern exakt die Kunden machen, die du wirklich willst",
        icon: <Layout className="w-8 h-8 text-primary" />,
        stat: { value: "80%", label: "mehr Conversion" }
    },
    {
        title: "KI-Automatisierung",
        description: "Befreie dich von Routineaufgaben. Wir implementieren intelligente Termin- und Anfragen-Workflows, die leise im Hintergrund arbeiten",
        icon: <Zap className="w-8 h-8 text-primary" />,
        stat: { value: "15h", label: "Zeitersparnis pro Woche" }
    },
    {
        title: "SEO, GEO & KI Suche",
        description: "Wir bringen dich auf die absoluten Top-Plätze bei Google und ChatGPT. Zieh an den Großen vorbei – nachhaltig und effektiv",
        icon: <Search className="w-8 h-8 text-primary" />,
        stat: { value: "Top 3", label: "KI-Rankings" }
    },
    {
        title: "Eigene App / PWA",
        description: "Binde Kunden direkt an dich – mit einer eigenen App auf ihrem Smartphone, ganz ohne App Store. Nutze modernste Features wie Push-Benachrichtigungen, um immer im Alltag deiner Zielgruppe präsent zu sein.",
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        stat: { value: "3x", label: "höhere Bindung" }
    },
    {
        title: "Social Media Marketing",
        description: "Wir bringen deine Marke auf Facebook, Instagram und LinkedIn zum Strahlen. Durch zielgerichtete Kampagnen baust du eine echte Verbindung zu deiner Zielgruppe auf und ziehst genau die Menschen an, die deinen Betrieb schätzen",
        icon: <Megaphone className="w-8 h-8 text-primary" />,
        stat: { value: "+120%", label: "mehr Reichweite" }
    },
    {
        title: "Digital Advertising",
        description: "Überlass den Kundenstrom nicht dem Zufall. Mit zielgenauen Kampagnen auf Google und Social Media erreichen wir exakt die richtigen Kunden für dich – absolut kosteneffizient und auf messbaren Gewinn optimiert",
        icon: <Target className="w-8 h-8 text-primary" />,
        stat: { value: "5x", label: "höherer ROI" }
    }
];

export const PROCESS_STEPS = [
    {
        title: "Das kostenlose Erstgespräch",
        description: "Wir lernen uns kennen, analysieren deine Engpässe und finden das größte Potenzial für deinen Betrieb."
    },
    {
        title: "Dein individueller KI-Fahrplan",
        description: "Du erhältst eine maßgeschneiderte Strategie, die genau auf deine Branche und Zielgruppe zugeschnitten ist."
    },
    {
        title: "Livegang in 5-7 Werktagen",
        description: "Lehn dich zurück. Wir setzen alles um. Nach wenigen Tagen beginnt die KI für dich zu arbeiten."
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

export const FAQS = [
    {
        question: "Welche KI ist die beste für Marketing?",
        answer: "Für modernes Marketing gibt es nicht die EINE beste KI, sondern eine smarte Kombination aus Tools. ChatGPT und Claude eignen sich hervorragend für SEO-Texte, Midjourney für visuelle Inhalte. Als spezialisierte KI Marketing Agentur vernetzen wir diese Modelle durch clevere Automatisierungen für deinen maximalen Erfolg."
    },
    {
        question: "Wie viel kostet eine Marketing-Agentur?",
        answer: "Die Kosten variieren stark nach Projektumfang. Durch unseren KI-gestützten Workflow arbeiten wir jedoch deutlich effizienter als klassische Agenturen. Dadurch können wir dir Premium Webseiten, verkaufsstarke Landingpages und SEO-Kampagnen zu fairen, transparenten Fixpreisen für KMUs anbieten."
    },
    {
        question: "Was kostet ein KI-Berater?",
        answer: "Ein KI-Berater rechnet meist stundenweise ab und identifiziert Automatisierungspotenziale. Bei der BrainStorm KI Werbeagentur ist jedoch bereits das strategische Erstgespräch für deine KI-Transformation und deinen neuen Web-Auftritt völlig kostenlos. Wir zeigen dir sofort die größten Hebel für deine Zeitersparnis."
    },
    {
        question: "Was genau ist der Unterschied zwischen SEO und GEO?",
        answer: "SEO (Search Engine Optimization) optimiert deine Webseite für klassische Suchmaschinen wie Google. GEO (Generative Engine Optimization) hingegen stellt sicher, dass deine Inhalte auch von KI-Engines wie ChatGPT oder Perplexity verstanden und als direkte Top-Empfehlung zitiert werden."
    },
    {
        question: "Warum ist eine Mobile-First Webseite heutzutage Pflicht?",
        answer: "Mehr als 80 % aller Erstkontakte finden heute über das Smartphone statt. Mobile-First bedeutet, die Webseite primär für mobile Endgeräte zu planen. Das garantiert blitzschnelle Ladezeiten, perfekte Usability auf kleinen Bildschirmen und wird von Google im SEO-Ranking extrem positiv bewertet."
    },
    {
        question: "Welche Vorteile bietet mir eine professionelle Landingpage?",
        answer: "Eine Landingpage ist eine hochspezialisierte Webseite, die exakt an eine Werbekampagne anknüpft. Durch verkaufspsychologische Strukturen und das Fehlen ablenkender Menüs wandelt sie Webseitenbesucher extrem effizient in zahlende Kunden oder Anfragen um."
    },
    {
        question: "Brauche ich technisches Vorwissen für KI, GEO und Automatisierung?",
        answer: "Nein, überhaupt nicht. Als Full-Service KI Werbeagentur übernehmen wir die komplette technische Umsetzung. Du erhältst am Ende schlüsselfertige, moderne Webseiten und vollautomatische Prozesse, die im Hintergrund einfach und reibungslos funktionieren."
    },
    {
        question: "Muss ich technisch versiert sein, um die KI-Automatisierungen in meinem Betrieb zu nutzen?",
        answer: "Nein, überhaupt nicht – das ist ja mein Job für dich. Ich richte die Systeme so ein, dass sie im Hintergrund für dich arbeiten, während du und dein Team ganz normal weiterarbeiten könnt. Du bekommst eine Lösung, die einfach funktioniert und dir den Rücken frei hält, damit du dich wieder auf dein Kerngeschäft konzentrieren kannst."
    },
    {
        question: "Warum ersetzt KI menschliche Experten im Marketing nicht?",
        answer: "KI generiert schnell Inhalte, kann aber echte, lokale Branchenerfahrung und psychologische Strategie nicht ersetzen. Wir steuern die KI präzise und veredeln die Ergebnisse zu einer authentischen Markenbotschaft, die bei deinen regionalen Zielgruppen echtes Vertrauen aufbaut."
    },
    {
        question: "Welche Prozesse lassen sich heute schon einfach automatisieren?",
        answer: "Besonders gut funktionieren digitale Terminbuchungen auf deiner Webseite, die Filterung und Beantwortung von Kundenanfragen via Chatbot, sowie die automatisierte Vorqualifizierung von Bewerbern. Das spart dir jede Woche viele Stunden Handarbeit."
    },
    {
        question: "Löst KI wirklich mein Problem mit fehlenden Fachkräften?",
        answer: "Ja, absolut – indem die KI als dein effizientester „digitaler Mitarbeiter“ fungiert, der Routineaufgaben wie die Sortierung von Anfragen, Terminbuchungen und Standard-Antworten übernimmt. Dadurch wird dein vorhandenes Team massiv entlastet und gewinnt genau die Zeit zurück, die für wertvolle Facharbeit und persönlichen Kundenservice nötig ist. So bekämpfen wir den Fachkräftemangel nicht durch mehr Personal, sondern durch intelligente Entlastung mit 32 Jahren Marketing-Expertise im Hintergrund."
    },
    {
        question: "Was zeichnet eine moderne Webseite heute aus?",
        answer: "Eine moderne Webseite ist nicht nur eine digitale Visitenkarte, sondern dein bester Vertriebsmitarbeiter. Sie muss blitzschnell laden, strikt Mobile-First entwickelt sein und Besucher durch klare, verkaufspsychologische Strukturen direkt zur Kontaktaufnahme oder zum Kauf führen."
    },
    {
        question: "Wie kann eine neue Webseite in unter 7 Tagen fertig sein, ohne an Qualität zu verlieren?",
        answer: "Durch die Kombination meiner jahrzehntelangen Marketing-Erfahrung mit hocheffizienten KI-Tools überspringen wir langwierige manuelle Prozesse, ohne beim Design oder der Strategie zu sparen. Wir konzentrieren uns sofort auf das, was für deinen Erfolg im Mostviertel zählt: Klarheit, Schnelligkeit und eine Seite, die deine Kunden wirklich überzeugt."
    },
    {
        question: "Warum ist eine barrierefreie Webseite so wichtig?",
        answer: "Barrierefreie Webseiten ermöglichen Menschen mit Einschränkungen die uneingeschränkte Nutzung. Dies wird ab Mitte 2025 in der EU durch das Barrierefreiheitsstärkungsgesetz (BFSG) für viele verpflichtend, erhöht zudem die Gesamtnutzerschaft und sorgt für deutlich bessere SEO-Rankings."
    },
    {
        question: "Wie wichtig ist eine blitzschnelle Webseite für mein Geschäft?",
        answer: "Massiv wichtig: Lädt eine Webseite länger als 3 Sekunden, verlassen bereits mehr als 50 % der mobilen Nutzer die Seite sofort wieder. Eine blitzschnelle Ladezeit verringert Absprungraten drastisch, steigert deine Anfragen und wird von Google mit absoluten Top-Platzierungen belohnt."
    },
    {
        question: "Was kostet es, eine professionelle Webseite erstellen zu lassen?",
        answer: "Die Kosten hängen von deinen Zielen ab. Ob kompakte Unternehmenspräsenz oder komplexer Baukasten mit KI-Automatisierungen – wir kalkulieren 100% transparent nach Leistungsumfang. Dank unseres extrem effizienten Workflows bieten wir KMUs erstklassige Premium-Webseiten zu unschlagbaren Festpreisen."
    },
    {
        question: "Warum sollte ich eine Agentur aus der Region wählen statt einer großen Online-Agentur?",
        answer: "Ganz einfach: Weil ich die Region zwischen Amstetten, Steyr, dem Mostviertel und darüber hinaus in Niederösterreich und Oberösterreich kenne. Mit 32 Jahren Erfahrung weiß ich, wie die Menschen hier ticken und worauf es beim lokalen Marketing ankommt. Bei mir gibt es keine anonyme Hotline, sondern echte Handschlagqualität direkt vor Ort – ich bin für dich greifbar, wenn du Unterstützung bei deiner Webseite oder deinen KI-Automatisierungen brauchst."
    },
    {
        question: "Wo befindet sich das Büro der BrainStorm Werbeagentur?",
        answer: "Zuhause sind wir im schönen Seitenstetten in Niederösterreich. Durch unsere digitale KI-Infrastruktur arbeiten wir jedoch für KMUs im gesamten deutschsprachigen Raum und bringen sie souverän in das digitale KI-Zeitalter."
    }
];
