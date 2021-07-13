import * as deepFreeze from 'deep-freeze'
import { SEARCH_TRANSLATIONS } from './Search'
import { ENTITY_TRANSLATIONS } from './Entity'
import { COMMON_TRANSLATIONS } from './Common'


export const Translations = deepFreeze({
  Entity: ENTITY_TRANSLATIONS,
  Search: SEARCH_TRANSLATIONS,
  Common: COMMON_TRANSLATIONS
} as const)