import React from 'react';
import NavbarItem from './NavbarItem';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background: ${({ theme }) => theme.navbarBackground};
    padding-bottom: 10px;
    color: ${({ theme }) => theme.mainColor};
    font-family: ${({ theme }) => theme.mainFont};
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
            {links.map( text => <NavbarItem text={text} />)}
        </StyledNavbar>
    );
};

export default Navbar;