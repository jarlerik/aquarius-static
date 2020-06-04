import React from 'react';
import NavbarItem from './NavbarItem';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/createStore';

const links = [
    'ajankohtaista',
    'ryhmäliikunta',
    'personal trainer',
    'yrityspalvelut',
    'hinnasto ja yhteystiedot',
    'aikataulut',
]

const StyledLinks = styled.div<{ visible: boolean }>`
    padding: 1rem;
    width: 80%;
    opacity: ${({ visible }) => visible ? 1 : 0};
    transition: opacity 1s ease-in-out;
`;

const Links = () => {
    const navbarIsOpen = useSelector(({ navbar }: RootState) => navbar.open);
    return (
        <StyledLinks visible={navbarIsOpen}>
            {links.map( text => <NavbarItem key={text} text={text} />)}
        </StyledLinks>
    );
};

export default Links;