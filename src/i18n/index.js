import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import uz from '@/locale/uz.json'

export const i18n = new VueI18n({
  locale: 'uz',
  fallbackLocale:'uz',
  messages: {
    uz
  }
})