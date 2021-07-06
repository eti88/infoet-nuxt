export default ({ app }) => {
    if (process.browser) {
      try {
        const cookieAcceptance = localStorage.getItem('GDPR:accepted', null)
        const tmp = localStorage.getItem('GDPR:expire_accepted', null)
        if (tmp === null) {
          // Insert something to disable
          return
        } else {
          const cookieExpiration = new Date(tmp)
          const today = new Date()
          if (today > (new Date(cookieExpiration.getFullYear(), cookieExpiration.getMonth(), cookieExpiration.getDate() + 30))) {
            // Insert something to disable
            return
          }
        }
        if (cookieAcceptance === 'true') {
          if (app.$ga !== null) {
            // Insert something to enable
          }
        } else if (app.$ga !== null) {
          // Insert something to enable
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
  