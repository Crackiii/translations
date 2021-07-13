import * as deepFreeze from 'deep-freeze'

import { SEARCH_TRANSLATIONS } from './Search'
import { COMMON_TRANSLATIONS } from './Common'
import { ENTITY_TRANSLATIONS } from './Entity'

export const Translations = deepFreeze({
  Common: COMMON_TRANSLATIONS,
  Entity: ENTITY_TRANSLATIONS,
  Search: SEARCH_TRANSLATIONS
} as const)