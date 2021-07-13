import * as deepFreeze from 'deep-freeze'
export const ENTITY_TRANSLATIONS = deepFreeze({
  "create": {
    "entity": "Create Entity",
  },
  "update": {
    "entity": "Update Entity"
  },
  'details': {
    'hide': 'Hide blank fields !'
  }
} as const) 