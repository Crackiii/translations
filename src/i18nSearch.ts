import { Translations as EN } from "../Translations/en";
import { Translations as DE } from "../Translations/en";
import { i18nCreateInstanceSync } from "../utils/i18nCreateInstance";



export const i18nSearch = () => i18nCreateInstanceSync({
  lng: 'en',
  interpolation: {escapeValue: false},
  resources: {
    en: {
      translation: EN.Search
    },
    de: {
      translation: DE.Search
    }
  },
  fallbackLng: 'de'  
})