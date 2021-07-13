import { COMMON_TRANSLATIONS as EN_COMMON_TRANSLATIONS } from "../Translations/en/Common";
import { COMMON_TRANSLATIONS as DE_COMMON_TRANSLATIONS } from "../Translations/de/Common";
import { i18nCreateInstanceSync } from "../utils/i18nCreateInstance";



export const i18nCommon = () => i18nCreateInstanceSync({
  lng: 'en',
  interpolation: {escapeValue: false},
  resources: {
    en: {
      translation: EN_COMMON_TRANSLATIONS
    },
    de: {
      translation: DE_COMMON_TRANSLATIONS
    }
  }  
})