import React from 'react';
import styled from 'styled-components';
import {colors} from '../../themeColors';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Circle = styled.div`
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    width: ${props => props.circum}px;
    height: ${props => props.circum}px;
    background-color: ${props => props.primary};
    border-radius: 50%;
    text-align: center;
    color: white;
    /* margin-left: 3%; */
    cursor: pointer;
    font-size: ${props => props.circum/2}px;
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-in-out;;
    box-shadow: none;
    &:hover {
        transform: scale(1.2);
        box-shadow: inset 0px 0px 21px 1px rgba(0,0,0,0.75);
    }
`

const Logo = props => {
    return (
        <AnchorLink style={{display: 'block', marginLeft: '3%'}} href="#home">
            <Circle
                circum={props.size}
                primary={colors.primary}
            >
                <span style={{position: 'relative', top: props.size/7, fontWeight: 'bold'}} >ρω</span>
            </Circle>
        </AnchorLink>
    )
}

export default Logo;