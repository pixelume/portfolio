import React from 'react';
import styled from 'styled-components';
import {colors} from '../themeColors';

const TableCont = styled.table`
    /* display: inline-block; */
    margin: auto;
    width: 100%;
    text-align: left;
    color: ${colors.primary};
    font-size: 0.85rem;
    @media(min-width: 800px) {
        font-size: 1rem;
    }
`
const TableCell = styled.td`
    border-spacing: 2px;
    /* border: 1px solid grey;
    border-radius: 10px; */
    /* width: 6%; */
    background-color: ${props => props.activated? colors.primary: 'transparent'};
    /* background-color: ${colors.primary}; */
`

const SkillsTable = props => {
    
    const row = (points) => {
        let i;
        const cellRow = [];
        for (i = 1; i <= 10; i++) {
            if (i <= points) {
                cellRow.push(<TableCell key={`cell${i}`} >■</TableCell>);
            } else {
                cellRow.push(<TableCell key={`cell${i}`} >□</TableCell>);
            }
        }
        return cellRow;
    }

    const table = props.skills.map((skill, index) =>
        <tr key={`row${index}`} style={{width: '100%'}}>
            <TableCell style={{border: 'none', width: '50%', verticalAlign: 'top'}}>
                {skill.name}
            </TableCell>
            {row(skill.points)}
        </tr>
        )
    
    return(
        <div style={{margin: 'auto'}}>
            <TableCont>
                <tbody style={{width: '100%'}}>
                    {table}
                </tbody>
            </TableCont>
        </div>
    )
}

export default SkillsTable;