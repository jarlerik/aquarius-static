import React from 'react';
import styled from 'styled-components';
import LanguageSelection from 'components/language/LanguageSelection';
import NavbarActions from './NavbarActions';
import Links from './Links';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/createStore';

const StyledNavbar = styled.nav<{ open: boolean }>`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background: ${({ theme }) => theme.navbarBackground};
    padding-bottom: 10px;
    color: ${({ theme }) => theme.mainColor};
    font-family: ${({ theme }) => theme.mainFont};
    display: flex;
    flex-direction: row;
    height: ${({ open}) => open ? '150px' : '90px'};
    transition: height 1s ease-in-out;
`;

const Actions = styled.div`

`;

const Navbar = () => {
    const navbarIsOpen = useSelector(({ navbar }: RootState) => navbar.open)
    return (
        <StyledNavbar open={navbarIsOpen}>
            <Links />
            <Actions>
            <LanguageSelection />
            <NavbarActions />
            </Actions>
            
            
        </StyledNavbar>
    );
};

export default Navbar;