import { SEARCH_TRANSLATIONS as EN_SEARCH_TRANSLATIONS } from "../Translations/en/Search";
import { SEARCH_TRANSLATIONS as DE_SEARCH_TRANSLATIONS } from "../Translations/de/Search";
import { i18nCreateInstanceSync } from "../utils/i18nCreateInstance";



export const i18nCommon = () => i18nCreateInstanceSync({
  lng: 'en',
  interpolation: {escapeValue: false},
  resources: {
    en: {
      translation: EN_SEARCH_TRANSLATIONS
    },
    de: {
      translation: DE_SEARCH_TRANSLATIONS
    }
  }  
})