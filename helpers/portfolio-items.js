export const projects = [
  {
    title: 'Paghe Drive',
    image: '/portfolio/paghedrive.jpg',
    tags: [
      'JQuery',
      'Laravel',
      'Mysql',
      'php',
      'Bootstrap 4'
    ],
    year: 2019,
    link: '/progetti?item=paghe-drive',
    url: '#',
    caseStudy: 'Per facilitare l’interazione tra dipendente e azienda abbiamo ideato un portale web il quale permette agli utenti di scaricare e consultare i propri prospetti paga in formato pdf. Le paghe vengono processate in automatico dal sistema per essere assegnate al proprietario il quale riceve un messaggio di posta che lo avvisa della pubblicazione del prospetto.',
    description: 'Il portale è stato realizzato utilizzando il framework Laravel e Bootsrap 4 per rendere il più semplice possibile l’interazione da parte dell’utente. I file PDF vendono processati dal sistema attraverso l’utilizzo di php 7.x che va ad estrapolare direttamente dal file le informazioni necessarie per lo smistamento. Tenendo conto della sensibilità delle informazioni solo il proprietario del prospetto può consultarlo previo accesso al sistema attraverso le credenziali.'
  },
  {
    title: 'Sito Gruppo Nord Petroli',
    image: '/portfolio/sito-gnp.jpg',
    tags: [
      'vue',
      'tailwind',
      'nuxt'
    ],
    year: 2021,
    url: 'https://nordpetroli.it',
    link: '/progetti?item=sito-gnp',
    caseStudy: 'Il Gruppo Nord Petroli lavora nell’ambito della fornitura di prodotti petroliferi ed energetici.',
    description: 'Il sito è stato sviluppato utilizzando vuejs e i rispettivi framework nuxtjs e tailwind css per far fronte alle necessità aziendali. Il sito è stato progettato in modo che sia facile e intuitivo per tutti i visitatori e consultabile da qualsiasi dispositivo.'
  },
  {
    title: 'Portale GNP',
    image: '/portfolio/gnp-portale.jpg',
    tags: [
      'laravel',
      'php',
      'mysql',
      'api',
      'redis',
      'vue',
      'vuetify'
    ],
    year: 2020,
    link: '/progetti?item=portale-gnp',
    caseStudy: 'Il Gruppo Nord Petroli lavora nell’ambito della fornitura di prodotti petroliferi ed energetici. Per fare fronte alle esigenze interne è stato sviluppato un portale ad uso interno per la gestione dei punti vendita e servizi associati come la gestione ticket dei problemi interni e gestione delle scadenze.',
    description: 'Il portale è stato realizzando attraverso il framework Laravel per la parte backend facendo ampio uso di redis per velocizzare il recupero dei dati. Per la parte frontend invece è stato utilizzato vue, nuxt e vuetify. Sono state anche realizzate una serie di API rivolte allo scambio di informazioni con il sito web principale e l\'app mobile.'
  },
  {
    title: 'Portale Fauna Associazione Cacciatori',
    image: '/portfolio/act-portale1.png',
    tags: [
      'c#',
      'asp.net core',
      'mssql',
      'jQuery'
    ],
    year: 2018,
    url: 'https://app.cacciatoritrentini.it/',
    link: '/progetti?item=portale-cacciatori',
    caseStudy: 'Per fare fronte alla necessità di digitalizzare il monitoraggio della fauna locale è stato realizzato un portale il quale si occupa di gestire e raccogliere tali segnalazioni.',
    description: 'Web App basata su .Net Core 2 le librerie APB e IdentityServer per gestire l’autenticazione degli utenti mentre i dati sono gestiti utilizzando MSSQL . Tra le funzionalità proposte c’è il filtraggio della lista degli eventi in base a parametri, visualizzazione su mappa della posizione delle segnalazioni e statistiche (anche esportabili) sui dati raccolti.'
  },
  {
    title: 'Cani da traccia Associazione Cacciatori',
    image: '/portfolio/act-portale2.jpg',
    tags: [
      'laravel',
      'vue',
      'mysql',
      'php'
    ],
    year: 2019,
    url: 'http://canitraccia.cacciatoritrentini.it/',
    link: '/progetti?item=portale-cani-da-traccia',
    caseStudy: 'Con la necessità di digitalizzare i processi cartacei è stato realizzato il portale per la gestione delle denunce di uscita per i cani da traccia.',
    description: 'Il portale è basato sul framework Laravel il quale gestisce tutta la parte backend del progetto e l’interazione dinamica con l’UI. La parte frontend è stata realizzata utilizzando il framework vue.js basato su Javascript il quale permette di realizzare e gestire tutta l’interfaccia grafica adattandosi ad ogni dispositivo.'
  },
  {
    title: 'App Associazione Cacciatori',
    image: '/portfolio/act-app.jpg',
    tags: [
      'c#',
      'xamarin',
      'prism'
    ],
    year: 2018,
    url: '',
    link: '/progetti?item=app-cacciatori',
    caseStudy: 'Per fare fronte alla necessità di digitalizzare il monitoraggio della fauna locale è stato realizzata un’app per dispositivi Android per l’invio delle segnalazioni.',
    description: 'L’app è stata realizzata principalmente utilizzando il framework Xamarin e la la libreria Prism per la gestione ottimale del paradigma MVVM. Le segnalazioni inviate sono composte dai seguenti dati: dati inseriti manualmente, dati GPS, data e ora, eventuali immagini. Nel caso non sia disponibile la connessione internet al momento dell’invio della segnalazione i dati saranno salvati localmente e saranno inviati in un secondo momento. Ogni utente può monitorare lo stato dell’invio di ogni segnalazione direttamente dalla lista.'
  },
  {
    title: 'Tensorflow Captcha',
    image: '/portfolio/captcha.jpg',
    tags: [
      'python',
      'Tensorflow',
      'scrapy',
      'web scraping'
    ],
    year: 2019,
    url: '#',
    link: '/progetti?item=tensorflow-captcha',
    caseStudy: 'Avendo la necessità di collezionare alcune informazioni protette da CAPTCHA è stato realizzato questo progetto il quale partendo da una lista predefinita di informazioni si occupa di riempire in automatico tutti i campi richiesti compreso anche il campo di protezione captcha il quale viene tradotto in lettere e numeri attraverso un algoritmo di machine learning.',
    description: 'Per la realizzazione del progetto prima di tutto è stato necessario collezionare un cospicuo numero di immagini CAPTCHA (nell’ordine del migliaio) le quali durante il processo iniziale sono state catalogate suddividendo tutte le lettere e numeri riportati. Non è stato possibile utilizzare un semplice algoritmo di OCR in quanto la presenza di disturbi nelle immagini generate e la deformazione delle lettere generava una combinazione di testo inesatta o nulla. Successivamente è stato generato un dataset attraverso tensorflow il quale è stato integrato nell’applicazione attraverso python 3. L’automazione della raccolta delle informazioni nelle pagine web è stata affidata alla libreria scrapy che ha permesso di gestire in modo ottimale la raccolta dei dati e l’interazione con essi.',
    feedback: 'Il risultato ottenuto è stato che con un training di circa 1500 immagini si è ottenuto una buona percentuale di successo per la decodifica di ogni immagine. L\'algoritmo ha difficoltà a distinguere le lettere i e l allo stato attuale ma andando a rinforzare il dataset si potrebbe andare ad aumentare la percentuale di successo (già superiore al 50%).'
  },
  {
    title: 'Scraping web File Excel',
    image: '/portfolio/selenium.jpg',
    tags: [
      'python',
      'selenium',
      'web scraping'
    ],
    year: 2019,
    url: '#',
    link: '/progetti?item=scarping-web-file-excel',
    caseStudy: 'Il Gruppo Nord Petroli lavora nell’ambito della fornitura di prodotti petroliferi ed energetici. È stato necessario automatizzare il download di una considerevole quantità di file excel, ogni mese, e elaborare i dati in essi contenuti. Evitando che uno o più dipendenti occupino il loro tempo per effettuare questa task ripetitiva.',
    description: 'Il tutto è stato realizzato utilizzando python e la libreria Selenium il quale si occupa dell’automatizzazione del browser web. I file scaricati vengono elaborati sempre con il linguaggio python.'
  },
  {
    title: 'Portale Controllo Cinghiali',
    image: '/portfolio/portale-cinghiali.jpg',
    tags: [
      'laravel',
      'vue',
      'nuxtjs',
      'vuetify',
      'mysql',
      'php',
      'redis'
    ],
    year: 2019,
    url: 'https://cinghiale.cacciatoritrentini.it/',
    link: '/progetti?item=portale-cinghiali',
    caseStudy: 'Con la necessità di digitalizzare i processi cartacei è stato realizzato il portale per la gestione degli interventi di gestione dei chinghaili sul territorio della provincia di Trento.',
    description: 'Il portale è basato sul framework Laravel il quale gestisce la parte di backend del progetto mentre il framework vue.js in combinazione con vuetify per gestire la parte frontend. Il portale ha lo scopo di gestire le varie tipologie di denunce da paerte degli utenti connesse al ruolo dell\'utente con regole e protocolli differenti.'
  },
  {
    title: 'Programma ricerca',
    image: '/portfolio/ricerca-incrociata.jpg',
    tags: [
      'c#',
      'wpf'
    ],
    year: 2018,
    url: '#',
    link: '/progetti?item=programma-ricerca',
    caseStudy: 'Partendo dalla necessità di dover ricercare file pdf partendo da un database e di visualizzarli con i relativi dati digitalizzati, abbiamo ideato questo software per farlo.',
    description: 'Il programma per piattaforme windows è altamente personalizzabile in base alle richieste del cliente, il quale oltre a molte modalità di funzionamento prevede la condifurazione dei campi di ricerca basandosi su dei profili caricabili dinamicamente dal programma tramite dei file json.'
  },
  {
    title: 'Programma ricerca web based',
    image: '/portfolio/ricerca-incrociata-web.jpg',
    tags: [
      'laravel',
      'redis',
      'vuetify',
      'vue',
      'nuxtjs',
      'mysql'
    ],
    year: 2019,
    url: '#',
    link: '/progetti?item=programma-ricerca-web-based',
    caseStudy: 'Necessitando delle stesse funzionalità presenti nel software "ricerca incrociata" ma sotto forma di web app con controllo accessi e ruoli.',
    description: 'La web app è stata realizzata utilizzando il framework Laravel e vuejs per ricreare le mdesime funzionalità di ricerca dei pdf basandosi su un sistema centralizzato su un server interno aziendale, oltre a permettere la ricerca è possibile anche gestire direttamente tutti i dati da parte degli amministratori permettendo anche upload massivi dei dati basandosi su un file csv.'
  },
  {
    title: 'App GNP Maps',
    image: '/portfolio/app-gnpmaps.jpg',
    tags: [
      'flutter',
      'dart',
      'Android',
      'iOS'
    ],
    year: 2020,
    url: 'https://gnpfuel.it/servizi/app',
    link: '/progetti?item=app-gnpmaps',
    caseStudy: 'Il cliente inizialmente voleva un\'app per smartphone la quale permettesse ai clienti di consultare i propri punti vendita potendo anche ricercali in base a caratteristiche. Successivament a uno studio di fattibilità è stata aggiunta anche la possibilità di gestire anche le proprie tessere carburante.',
    description: 'L\'app disponibile per dispositivi Android e iOS è basato sul framework Flutter il quale permette di generare applicazioni per più piattaforme. Per la realizzazione dell\'app è stato necessario creare delle API specifiche integrate con servizi terzi. Da questa applicazione oltre a poter consultare i distributori carburante tramite la mappa interattiva è possibile consultare e gestire le proprie tessere carburante.'
  }
]
