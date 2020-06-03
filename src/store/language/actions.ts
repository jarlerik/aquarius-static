import { LanguageState, CHANGE_LANGUAGE, LanguageActionTypes } from './types'

export function changeLanguage(language: LanguageState): LanguageActionTypes {
  return {
    type: CHANGE_LANGUAGE,
    payload: language
  }
}