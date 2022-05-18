import React from 'react';
import { Link } from 'react-router-dom'
import {Container} from './styled'

import Logo from '../../assets/logo.png'
const Header = () => {
    return (
        <Container>
            <Link to={'/'}>
            <img src={Logo} alt="logo.png" />
            </Link>
            
        </Container>
    );
}

export default Header;
