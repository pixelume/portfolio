import React, { Component } from "react";
// import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Components/UI/Forms/TextInput";
import SubmitBtn from "../Components/UI/Forms/SubmitBtn";
import axios from 'axios';

class ContactForm extends Component {
    state = {
        formFields: {
            name: "",
            email: "",
            message: ""
        },
        formSubmissionStatus: null
    };

    inputChangeHandler = (e, propkey) => {
        const newState = {...this.state, formFields: {...this.state.formFields, [propkey]: e.target.value}}
        this.setState(newState);
    };

    submitHandler = (e) => {
        axios.post(
            "https://formcarry.com/s/_bqA2UYFWzn", 
            this.state.formFields, 
            {headers: {"Accept": "application/json"}}
            )
            .then(res => {
                this.setState({formSubmissionStatus: res, formFields: {name: "", email: "", message: ""}})
            })
            .catch(error => {
                console.log(error);
            });
        e.preventDefault();
    }

    render() {

        const {name, email, message} = this.state.formFields;
        const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isInvalid = (name.length < 2) || !emailRegExp.test(email) || message.length < 2;

        return (
            <React.Fragment>
            <form onSubmit={this.submitHandler}>
                <Input
                    value={name}
                    name="name"
                    validate
                    icon={<FontAwesomeIcon icon="user" transform="shrink-2 up-2 left-1" />}
                    // label="Name"
                    onChange={event =>
                        this.inputChangeHandler(event, "name")
                    }
                    inValid={name.length < 2}
                    onMouseEnter={e => e.target.focus()}
                    type="text"
                    placeholder="Name"
                />
                <Input
                    value={email}
                    name="email"
                    validate
                    // validate
                    // inValid={!emailRegExp.test(email)}
                    icon={<FontAwesomeIcon icon="envelope" transform="shrink-2 up-2 left-1" />}
                    // label="Email Address"
                    onChange={event => this.inputChangeHandler(event, "email")}
                    inValid={!emailRegExp.test(email)}
                    onMouseEnter={e => e.target.focus()}
                    type="text"
                    placeholder="Email Address"
                    // autoFocus={true}
                />
                <Input
                    value={message}
                    name="message"
                    validate
                    // validate
                    // inValid={!emailRegExp.test(email)}
                    icon={<FontAwesomeIcon icon="pen" transform="shrink-2 up-2 left-1" />}
                    // label="Email Address"
                    onChange={event => this.inputChangeHandler(event, "message")}
                    inValid={message.length < 2}
                    onMouseEnter={e => e.target.focus()}
                    type="textarea"
                    placeholder="Type Your Message"
                    // autoFocus={true}
                />
                <SubmitBtn disabled={isInvalid} type="submit">
                    Send Email
                </SubmitBtn>
            </form>
            {this.state.formSubmissionStatus && 
            this.state.formSubmissionStatus.status === 200 &&
            <p>Thank You. Your message has been sent.</p>}
            </React.Fragment>
        );
    }
}

export default ContactForm;