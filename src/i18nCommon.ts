import { i18nCreateInstanceSync } from "../utils/i18nCreateInstance";
import { Translations as EN } from "../Translations/en";
import { Translations as DE } from "../Translations/de";



export const i18nCommon = i18nCreateInstanceSync({
  lng: 'en',
  interpolation: {escapeValue: false},
  resources: {
    en: {
      translation: EN.Common
    },
    de: {
      translation: DE.Common
    }
  },
  fallbackLng: 'de'  
})