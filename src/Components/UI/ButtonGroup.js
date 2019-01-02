import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
    display: flex;
    margin-right: 5%;
    justify-content: center;
    color: white;
`;

const ButtonGroup = props => 
        <Group>
            {props.children}
        </Group>

export default ButtonGroup;