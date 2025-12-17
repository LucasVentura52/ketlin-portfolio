import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'ketlinLight',
    themes: {
      ketlinLight: {
        dark: false,
        colors: {
          background: '#f0ded5',  // blush (page 1/4)
          surface: '#ffffff',
          primary: '#c58a5c',     // caramelo
          secondary: '#c7986b',   // marrom claro
          accent: '#3d3133',      // texto escuro
        }
      }
    }
  },
  icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
  defaults: {
    VBtn: { rounded: 'xl' },
    VCard: { rounded: 'xl' }
  }
})
