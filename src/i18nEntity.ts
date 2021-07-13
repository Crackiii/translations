
import { Translations as EN } from "../Translations/en";
import { Translations as DE} from "../Translations/de";
import { i18nCreateInstanceSync } from "../utils/i18nCreateInstance";



export const i18nEntity = i18nCreateInstanceSync({
  lng: 'en',
  interpolation: {escapeValue: false},
  resources: {
    en: {
      translation: EN.Entity
    },
    de: {
      translation: DE.Entity
    }
  },
  fallbackLng: 'de'  
})