import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../themeColors';

const InputWrapper = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
`
const Label = styled.label`
    /* font-weight: bold; */
    display: block;
    margin-bottom: 10px;
`
const InputEl = styled.input`
    font-size: 1rem;
    /* display: block; */
    outline: none;
    border-radius: 5px;
    /* border: ${props => props.redBorder? `1px solid red`: `1px solid green`}; */
    border: none;
    background-color: transparent;
    ${props => props.validate
        ? `border: ${props.invalid? '1px solid red;': '1px solid green;'}`
        : null}
    /* border: ${props => props.redBorder? `1px solid red`: `1px solid green`}; */

    /* width: 5rem; */
    /* box-sizing: border-box; */
    box-shadow: inset 0px 0px 29px -11px rgba(0,0,0,0.75);
    padding: 5px 0px 5px 2rem;
    opacity: 0.5;
    transition: opacity 0.2s ease-out;
    &:focus {
        opacity: 1;
    }
`
const TextArea = styled.textarea`
    font-size: 1rem;
    /* display: block; */
    outline: none;
    border-radius: 5px;
    border: none;
    background-color: transparent;
    ${props => props.validate
        ? `border: ${props.invalid? '1px solid red;': '1px solid green;'}`
        : null}
    box-shadow: inset 0px 0px 29px -11px rgba(0,0,0,0.75);
    padding: 5px 0px 5px 2rem;
    opacity: 0.5;
    transition: opacity 0.2s ease-out;
    &:focus {
        opacity: 1;
    }
`
const Icon = styled.span`
    /* z-index: 10; */
    /* display: flex; */
    position: absolute;
    top: 18%;
    /* left: 20%; */
    /* left: 0.5rem; */
    /* opacity: 0.5; */
    color: ${colors.primary};
    /* left: 5px; */
`

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    // componentDidUpdate() {
    //     this.inputRef.current.focus();
    // }

    render() {
        const {
            props,
        } = this;

        return (
            <InputWrapper>
                {props.label && <Label>{props.label}</Label>}
                <div style={{position: 'relative'}}>
                    <Icon>&nbsp;&nbsp;{props.icon}</Icon>
                    {props.type === 'textarea'
                        ? <TextArea {...props} ref={this.inputRef} invalid={props.inValid}/>
                        : <InputEl {...props} ref={this.inputRef} invalid={props.inValid}/>}
                </div>
            </InputWrapper>
        )
    }
}

export default Input;