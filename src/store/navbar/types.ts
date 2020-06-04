export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR'

export interface NavbarState {
    open: boolean;
}

interface ToggleNavbarAction {
  type: typeof TOGGLE_NAVBAR;
}

export type NavbarActionTypes = ToggleNavbarAction;