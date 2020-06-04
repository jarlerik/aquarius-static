import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/createStore';
import { toggleNavbar } from '../../store/navbar/actions';
import styled from 'styled-components';

const icons = {
    MENU: 'menu',
    CLOSE: 'close',
}
const StyledNavbarActions = styled.div`
    float: right;
    padding: 5px;
`;
const StyledIcon = styled.i`
    font-size: 48px;
`

const NavbarActions = () => {
    const navbarIsOpen = useSelector(({ navbar }: RootState) => navbar.open);
    const dispatch = useDispatch();
    const icon = navbarIsOpen ? icons.CLOSE : icons.MENU;


    return (
        <StyledNavbarActions>
            <StyledIcon onClick={() => dispatch(toggleNavbar())} className="material-icons">{icon}</StyledIcon>
        </StyledNavbarActions>
    );
};

export default NavbarActions;