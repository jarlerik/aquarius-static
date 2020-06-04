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
    padding: .5rem;
    width: 80%;
    opacity: ${({ visible }) => visible ? 1 : 0};
    transition: opacity ${({ visible }) => visible ? '1s' : '0.2s'} ease-in;
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