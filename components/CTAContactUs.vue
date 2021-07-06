<template>
  <v-card
    class="mx-auto pa-5"
    color="#1690D3"
    dark
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-chat-alert
      </v-icon>
      <span class="text-h5 font-weight-light">Richiedi un preventivo gratis</span>
    </v-card-title>
    <v-card-text class="text-h6 font-weight-bold">
      Il preventivo è senza impegno, utilizza il form dei contatti oppure
      mandaci un messaggio sulla chat che trovi nell'angolo in basso a destra.
    </v-card-text>
    <v-card-actions>
      <v-btn
        href="/contatti"
        outlined
        nuxt
      >
        Modulo di contatto
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
