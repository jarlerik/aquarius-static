import React from 'react';
import styled from 'styled-components';
const url = 'https://res.cloudinary.com/dh2fgmdx5/image/upload/v1591299579/aquarius/ajankohtaista_background_glfu1i.jpg';

const StyledHero = styled.div`
    color: #fff;
    font-family: Montserrat,sans-serif;
    text-align: center;
    background-image: url(${url});
    background-position: 50%;
    background-size: cover;
    height: 400px;
    position: relative;
`;

const Header = styled.h1`
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 56px;
`;

const Hero = () => {
    return (
        <StyledHero>
        <Header>
            Aquarius Sporting Club
        </Header>
        </StyledHero>
    );
};

export default Hero;