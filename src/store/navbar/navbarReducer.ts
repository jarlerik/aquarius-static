
import { NavbarActionTypes, TOGGLE_NAVBAR, NavbarState } from './types';
const initialState = {
    open: false,
}

export function navbarReducer(
    state: NavbarState = initialState,
    action: NavbarActionTypes ) {

        switch(action.type) {
            case TOGGLE_NAVBAR: {
                return { open: !state.open }
            }
            default: {
                return state;
            }
        }
    }