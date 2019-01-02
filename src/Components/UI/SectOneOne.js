// import React from 'react';
import styled from 'styled-components';

const SectOneOne = styled.div`
    z-index: 1;
    display: flex;
    ${props => props.marginTop
        ? `margin-top: ${props.marginTop}`
        : null
    }
    ${props => props.sticky
        ? `position: sticky;
        top:0`
        : null};
    ${props => props.opacity
        ? `opacity: ${props.opacity};`
        : null};
    ${props => props.border
        ? `border: ${props.border};`
        : null};
    /* position: ${props => props.sticky? 'sticky': 'static'}; */
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor || "transparent"};
    box-shadow: ${props => props.shadow
        ? '0px 2px 5px -1px rgba(0,0,0,0.75)'
        : 'none'
    };
    background-size: contain;
    /* color: white; */
    background-repeat: no-repeat;
    background-image: ${props => props.bgImgPath
        ? `url("${props.bgImgPath}")`
        : "none"
        };
`

// const Section = props => {
//     return (
//         <HeaderBar
//             height={props.height}
//             bgColor={props.bgColor}
//             shadow={props.shadow}   
//             bgImgPath={props.bgImgPath}
//             sticky={props.sticky}
//             spacing={props.spacing}
//             opacity={props.opacity}
//             border={props.border}
//         >
//             {props.children}
//         </HeaderBar>
//     )
// }

export default SectOneOne;