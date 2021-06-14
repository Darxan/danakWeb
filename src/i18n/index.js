import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import ru from '@/locale/ru.json'

export const i18n = new VueI18n({
  locale: 'ru',
  fallbackLocale:'ru',
  messages: {
    ru
  }
})