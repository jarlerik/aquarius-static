import React from 'react';
import NavbarItem from './NavbarItem';
import styled from 'styled-components';
import LanguageSelection from 'components/language/LanguageSelection';

const StyledNavbar = styled.nav`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background: ${({ theme }) => theme.navbarBackground};
    padding-bottom: 10px;
    color: ${({ theme }) => theme.mainColor};
    font-family: ${({ theme }) => theme.mainFont};
`;

const Navs = styled.div`
    padding: 1rem;
`;


const links = [
    'ajankohtaista',
    'ryhmäliikunta',
    'personal trainer',
    'yrityspalvelut',
    'hinnasto ja yhteystiedot',
    'aikataulut',
]

const Navbar = () => {
    return (
        <StyledNavbar>
            <LanguageSelection />
            <Navs>
            {links.map( text => <NavbarItem text={text} />)}
            </Navs>
            
        </StyledNavbar>
    );
};

export default Navbar;