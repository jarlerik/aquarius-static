import React from 'react';
import NavbarItem from './NavbarItem';


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
        <nav>
            {links.map( text => <NavbarItem text={text} />)}
        </nav>
    );
};

export default Navbar;