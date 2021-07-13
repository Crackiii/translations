import { ENTITY_TRANSLATIONS as EN_ENTITY_TRANSLATIONS } from "../Translations/en/Entity";
import { ENTITY_TRANSLATIONS as DE_ENTITY_TRANSLATIONS } from "../Translations/de/Entity";
import { i18nCreateInstanceSync } from "../utils/i18nCreateInstance";



export const i18nCommon = () => i18nCreateInstanceSync({
  lng: 'en',
  interpolation: {escapeValue: false},
  resources: {
    en: {
      translation: EN_ENTITY_TRANSLATIONS
    },
    de: {
      translation: DE_ENTITY_TRANSLATIONS
    }
  }  
})