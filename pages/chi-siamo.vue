<template>
  <div>
    <div v-show="false">
      <h1>Chi siamo - La nostra azienda</h1>
    </div>
    <v-row>
      <v-col cols="12">
        <v-col cols="12">
          <h3 class="mt-10 text-h4">
            Chi siamo
          </h3>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            Il nostro obiettivo è aiutare le piccole e medie imprese a migliorare e
            progredire nel loro lavoro sviluppando software all'avanguardia.
          </p>
          <p class="text--secondary">
            La storia della Info<b>et</b> inizia nel 2018 quando il titolare
            Etienne, appassionato di software e tecnologie informatiche fonda l'azienda.<br>
            Negli anni l'azienda ha superato innumerevoli sfide, sviluppando un
            know-how che ci permette di realizzare qualsiasi tipo di applicazione, su
            ogni tipo di piattaforma e dispositivo.<br>
            In un mercato che offre molte soluzioni pre-made e personalizzabili, la info<b>et</b>
            si distingue sviluppando prodotti personalizzati di elevata qualità e usabilità nonchè
            per il supporto tecnico e passione costante nel tempo.
          </p>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="5">
        <img class="hero-img" src="/chi-siamo.svg">
      </v-col>
    </v-row>
    <v-row justify="space-around" class="mb-10">
      <team-avatar
        name="Etienne Tomaselli"
        img="/etienne.jpg"
        description="Fondatore e Responsabile Sviluppo Software"
        born-year="1988"
        born-month="12"
      />
    </v-row>
    <v-row>
      <v-col cols="12" sm="5">
        <v-timeline>
          <v-timeline-item
            v-for="(item, i) in tm"
            :key="i"
            :color="item.color"
            small
          >
            <template #opposite>
              <span
                :class="`headline font-weight-bold ${item.color}--text`"
                v-text="item.year"
              />
            </template>
            <div class="py-4">
              <h5 :class="`text-body-1 font-weight-light mb-4 ${item.color}--text`">
                {{ item.title }}
              </h5>
              <div class="text-caption">
                {{ item.description }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <p class="text--secondary">
            Le nostre soluzioni software sono frutto di una costante ricerca
            e studio da parte del nostro team in modo da potervi offrire sempre
            prodotti moderni e stabili.<br>
            La programmazione è svolta con le tecniche OOP (Object Oriented Programming)
            per assicurare le migliori prestazioni e continuità del codice nel tempo.
            Applichiamo la metodologia <a href="https://it.wikipedia.org/wiki/Rapid_application_development">RAD</a>
            per la riduzione dei tempi di sviluppo.<br>
            Utilizziamo tecnologie <b>Open Source</b> per i nostri prodotti in modo da consegnare
            prodotti ad alto valore aggiunto (<i>rispetto degli standard, sicurezza, qualità e longevità</i>)
            con investimenti contenuti.
          </p>
          <p class="text--secondary">
            La qualità è un aspetto molto importante per noi e proprio per questo i nostri software
            integrano unit test e integration tests, per minimizzare i problemi derivati da bug del codice. Questo
            ci permette inoltre di automatizzare il deploy dei progetti web riducendo anche i tempi di down-time.
          </p>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="7">
        <v-sheet color="transparent" class="pa-5">
          <h5 class="text-h6">
            La nostra vision
          </h5>
          <p class="text--secondary">
            Un solido sistema di valori guida il nostro modo di agire
          </p>
          <div class="mt-5">
            <v-item-group mandatory>
              <v-item v-for="(element, k) in vision" :key="k">
                <v-card
                  :ripple="false"
                  color="transparent"
                  flat
                >
                  <v-list-item two-line>
                    <v-list-item-avatar
                      size="50"
                      :color="element.color"
                    >
                      <v-icon>{{ element.icon }}</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <p>
                        {{ element.description }}
                      </p>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-item>
            </v-item-group>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="my-12">
      <v-sheet color="transparent" class="pa-5">
        <h5 class="text-h6">
          La nostra mission
        </h5>
        <p class="text--secondary">
          Forniamo alle organizzazioni pubbliche private soluzioni digitali in cui
          l'innovazione del prodotto e di processo diventa un investimento ben fatto
          per una solida presenza sul mercato.
          Abbiamo le persone, le competenze, le intuizioni e l'esperienza in più settori,
          tali da modellare nuove forme di valore per il cliente.<br>
          Offriamo punti di vista altamente obiettivi con particolare attenzione al business,
          alla tecnologia e all'analisi, sfruttando la nostra profonda esperienza.
        </p>
      </v-sheet>
    </v-row>
  </div>
</template>

<script>
import TeamAvatar from '~/components/TeamAvatar.vue'
export default {
  components: { TeamAvatar },
  transition: 'intro',
  data () {
    return {
      tm: [
        {
          year: 2018,
          color: 'cyan',
          title: 'Inizio (Febbraio)',
          description: 'Fondazione azienda e inizio Attività'
        },
        {
          year: new Date().getFullYear(),
          color: 'amber'
        }
      ],
      vision: [
        {
          color: '#74BCEC',
          icon: 'mdi-bank',
          description: 'Siamo orientati alla responsabilità etica nei confronti verso i clienti, fornitori e personale.'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-quality-high',
          description: 'Qualità del servizio, attenzione al cliente e consapevolezza della tecnologia sono le nostre modalità di lavoro.'
        },
        {
          color: '#74BCEC',
          icon: 'mdi-sprout',
          description: 'Puntiamo sulla crescita professionale e individuale del nostro personale in modo da poter incentivare lo sviluppo di competenze trasversali, in un ambiente informale e aperto.'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.hero-img
  height: 500px
.glass-container
  background: rgba( 255, 255, 255, 0.10 ) !important
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 ) !important
  backdrop-filter: blur( 6.5px ) !important
  -webkit-backdrop-filter: blur( 6.5px ) !important
  border-radius: 10px !important
  transition: transform 0.2s ease-out
</style>
