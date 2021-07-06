<template>
  <div>
    <v-snackbar
      v-model="isOpen"
      timeout="-1"
      content-class="pa-0 ma-0"
      rounded
    >
      <v-alert
        border="left"
        rounded
        prominent
      >
        <v-row align="center">
            <v-col cols="12" md="3" lg="2" class="shrink">
              <div>
                <v-img
                  src="/cookie.svg"
                  alt="cookie"
                  height="100px"
                  contain
                />
              </div>
            </v-col>
            <v-col cols="12" md="6" lg="7" class="grow">
            <h3 class="text-center text-h6 mb-3">
                Cookie
            </h3>
            <p class="text-caption px-4 px-sm-3 px-md-1 px-lg-1">
                Utilizziamo i cookie per personalizzare i contenuti e gli annunci, fornire le
                funzioni dei social media e analizzare il nostro traffico. Inoltre forniamo
                informazioni sul modo in cui utilizzi il nostro sito ai nostri partner che si
                occupano di analisi dei dati web, pubblicità e social media, i quali potrebbero
                combinarle con altre informazioni che hai fornito loro o che hanno raccolto in
                base al tuo utilizzo dei loro servizi.
                <nuxt-link to="/privacy">
                Privacy policy
                </nuxt-link>
            </p>
            </v-col>
            <v-col cols="12" md="3" lg="3" class="shrink">
            <v-btn
                class="py-2 px-4 mb-2"
                block
                @click="accept"
            >
                Accetta
            </v-btn>
            <v-btn
                class="py-2 px-4"
                block
                @click="deny"
            >
                Rifiuta
            </v-btn>
            </v-col>
        </v-row>
      </v-alert>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  created () {
    setTimeout(function (scope) {
      const gdpr = scope.getGDPR()
      if (gdpr === null) {
        scope.isOpen = true
      } else if (gdpr === 'true') {
        // check expiration of cookie
        const gdprExpiration = scope.getGDPRExpiration()
        if (gdprExpiration !== null) {
          const today = new Date()
          if (today > (new Date(gdprExpiration.getFullYear(), gdprExpiration.getMonth(), gdprExpiration.getDate() + 30))) {
            localStorage.removeItem('GDPR:expire_accepted')
            localStorage.removeItem('GDPR:accepted')
            scope.isOpen = true
            return
          }
        }
        scope.isOpen = false
      }
    }, 1500, this)
  },
  methods: {
    getFormattedDate (dt) {
      return dt.toISOString().split('T')[0]
    },
    parseDate (str) {
      return new Date(str)
    },
    getGDPR () {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', null)
      }
    },
    getGDPRExpiration () {
      if (process.browser) {
        const val = localStorage.getItem('GDPR:expire_accepted', null)
        if (val !== null) {
          return this.parseDate(val)
        } else {
          return null
        }
      }
    },
    accept () {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', true)
        localStorage.setItem('GDPR:expire_accepted', this.getFormattedDate(new Date()))
      }
    },
    deny () {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
        localStorage.setItem('GDPR:expire_accepted', this.getFormattedDate(new Date()))
      }
    }
  }
}
</script>
