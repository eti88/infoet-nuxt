<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-col cols="12">
          <h1 class="mt-10 text-h4">{{ title }}</h1>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            Le <b>API</b> sono la base di qualsiasi app di successo per i progetti
            web o app mobile. Acronimo di Application Programming Interface sono set
            di definizione e protocolli per la comuncicazione con software applicativi,
            semplificando l'integrazione di nuovi componenti in un'architettura esistente.<br />
            Nel mondo dello sviluppo di app, sono tutte supportate da numerose <b>API altamente specializzate</b>,
            ciascuna API è sviluppata per svolgere una funzione specifica. Questo è il motivo
            per cui lo sviluppo delle API diventa così importante.
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <service-image-hero
          image="/services/api.jpg"
          alt="API 6 Backend API-Driven"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            Qggi qualsiasi business di successo non può sporavvire senza le API,
            specialmente con l'incremento dell'adozione di soluzioni basate sul cloud.
            Sono il modo migliore per sviluppare un pontre tra varie applicazioni per
            consentire la condivsione e l'esecuzione dei dati senza intoppi.
            La condivisione dei dati può essere parziale o completa a seconda dei
            requisiti aziendali e possono essere sia pubbliche che private integrando un
            sistema di login.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <tech-showcase
      :items="showcaseElements"
      class="mb-5"
    />
    <v-row>
      <v-col cols="12">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            Vi possiamo offire la consulenza, sviluppo ed integrazione di API personalizzate
            sia di nostra concezione che di terze parti. Froniamo strumenti sicuri, stabili
            e ottimizzati sia in termini di funzionalità che di prestazioni.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ServiceImageHero from '~/components/ServiceImageHero.vue'
export default {
  components: { ServiceImageHero },
  data () {
    return {
      title: 'Sviluppo API & Backend API Driven',
      showcaseElements: [
        { img: '/showcase/csharp.png', title: 'C#', href: 'https://docs.microsoft.com/it-it/dotnet/csharp/' },
        { img: '/showcase/laravel.png', title: 'Laravel', href: 'https://laravel.com/' },
        { img: '/showcase/python.png', title: 'Python', href: 'https://www.python.org/' },
        { img: '/showcase/django.png', title: 'Django', href: 'https://www.djangoproject.com/' }
      ]
    }
  }
}
</script>
