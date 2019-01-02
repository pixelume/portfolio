import React from 'react';
import styled from 'styled-components';
import ButtonGroup from '../Components/UI/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const FaIcn = styled(FontAwesomeIcon)`
    padding: 5px;
`
const NavItem = styled.li`
    display: inline-block;
    list-style: none;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    color: grey;
    &:hover {
        transform: scale(1.1);
        color: white;
    }
    transition: transform 0.2s ease-out, color 0.2s ease-out;
`

const MainNav = props => {
    return (
        <ButtonGroup>
            <AnchorLink offset="90" href="#about" ><NavItem ><FaIcn icon="user-circle" /><br />About</NavItem></AnchorLink>
            
            <AnchorLink offset="90" href="#portfolio"><NavItem ><FaIcn icon="folder-open" /><br />Portfolio</NavItem></AnchorLink>
            
            <AnchorLink offset="90" href="#contact"><NavItem ><FaIcn icon="envelope" /><br />Contact</NavItem></AnchorLink>
            
        </ButtonGroup>
    )
}

export default MainNav;

// About Portfolio Resources Contact