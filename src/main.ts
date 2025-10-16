import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { i18n } from './i18n'

// const userLang = navigator.language || navigator.language
// const locale = userLang.startsWith('fr') ? 'fr' : 'en'

createApp(App).use(i18n).mount('#app')