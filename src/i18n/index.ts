import { createI18n } from "vue-i18n";
import fr from './fr.json'

export const i18n = createI18n({
    locale: /*locale*/ 'fr',
    fallbackLocale: 'fr',
    messages: { fr }
})