
import { LanguageActionTypes, CHANGE_LANGUAGE } from './types';
const initialState = {
    code: 'fi'
}

export function languageReducer(
    state = initialState,
    action: LanguageActionTypes ) {

        switch(action.type) {
            case CHANGE_LANGUAGE: {
                return { ...state, ...action.payload }
            }
            default: {
                return state;
            }
        }
    }