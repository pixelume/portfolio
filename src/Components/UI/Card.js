import React from 'react';
import styled from 'styled-components';
import { colors } from '../../themeColors';

const CardContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin: 10px 1%;
    width: 90%;
    /* height: 100%; */
    /* margin: auto; */
    color: black;
    padding: 15px;
    border: 1px solid lightgrey;
    /* border: 1px solid ${colors.four}; */
    border-radius: 10px;
    /* box-shadow: 6px 6px 13px -10px rgba(0,0,0,0.75); */
    box-shadow: 1px 1px 13px -6px rgba(0,0,0,0.75);
    box-sizing: border-box;
    /* @media(min-width: 800px) { */
        /* display: inline-block; */
        /* width: 30%; */
        /* margin: 0px 7.5px; */
        /* font-size: 1.3rem */
    /* } */
    &:hover {
        transform: scale(1.03);
        /* box-shadow: 10px 10px 13px -10px rgba(0,0,0,0.75); */
        box-shadow: 1px 1px 13px -1px rgba(0,0,0,0.75);
    }
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
`
const CardImg = styled.img`
    display: block;
    width: 100%;
    border: 1px solid ${colors.three};
    /* margin: 5px 5%; */
    object-fit: contain;
`
const CardTextBlock = styled.div`
    margin-top: 15px;
    width: 100%;
    text-align: center;
`
const Card = props => {
    return (
        <CardContainer>
            <CardImg
                src={props.src}
                alt={props.alt}
            />
            <CardTextBlock>
                {props.children}
            </CardTextBlock>
            {props.buttons}
        </CardContainer>
    )
}

export default Card;