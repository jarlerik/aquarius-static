import { TOGGLE_NAVBAR, NavbarActionTypes } from './types'

export function toggleNavbar(): NavbarActionTypes {
  return {
    type: TOGGLE_NAVBAR
  }
}