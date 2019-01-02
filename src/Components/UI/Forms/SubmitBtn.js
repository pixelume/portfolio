import styled from 'styled-components';
import { colors } from '../../../themeColors';

const SubmitBtn = styled.button`
    display: block;
    border: none;
    border-radius: 5px;
    background-color: ${colors.three};
    font-size: 1rem;
    margin: 5px auto;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.5s ease-out;
    /* width: 50%; */
    &:disabled {
        background-color: lightgrey;
        color: grey;
        &:hover{
            cursor: not-allowed;
        }
    }
`
export default SubmitBtn