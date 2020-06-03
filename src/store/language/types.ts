export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'

export interface LanguageState {
    code: 'fi' | 'sv'
}

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: LanguageState;
}

export type LanguageActionTypes = ChangeLanguageAction