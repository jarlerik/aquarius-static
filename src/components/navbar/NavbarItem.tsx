import React from 'react';
import styled from 'styled-components'

interface NavbarItemProps {
    text: string;
}

const StyledNavbarItem = styled.div`
    text-transform: uppercase;
`;

const NavbarItem = ({ text }: NavbarItemProps) => {
    return (
        <StyledNavbarItem>
            {text}
        </StyledNavbarItem>
    );
};

export default NavbarItem;