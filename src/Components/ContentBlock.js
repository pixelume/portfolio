// import React from 'react';
import styled from 'styled-components';

const ContentBlock = styled.div`
    ${props => props.center
        ? "margin: auto"
        : null}
    width: ${props => props.width || "100%"};
    color: ${props => props.color || 'white'};
    border-radius: 10px;
    background-color: ${props => props.backgroundColor || "transparent"};
    padding: 8px;
    letter-spacing: 0.15rem;
    text-align: center;
`

export default ContentBlock;