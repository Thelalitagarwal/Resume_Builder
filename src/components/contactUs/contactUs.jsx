import React, { Component } from 'react';
import F from '../f';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMailBulk } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "./contactUs.css";
import { withTheme } from 'styled-components';

class ContactUs extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    }
    onChangeHandler = (e) => {
        let id = e.target.id;
        this.setState({
            [id] : e.target.value
        })
    }
    render() {
        
        return (
            <div className="contact-us">
                <form action="" class="credit">
                    <TextField id="name" label="Your Name" name="name" variant="outlined" onChange = {(e) => {this.onChangeHandler(e)}}/>
                    <TextField id="email" label="Your Email" name = "email" variant="outlined" onChange = {(e) => {this.onChangeHandler(e)}} />
                    <TextField id="message" label="Your Message" name = "message" variant="outlined" onChange = {(e) => {this.onChangeHandler(e)}} />
                    <Button variant="contained" color="primary" onClick = {(e) => {this.onSubmitHandler(e)}}>
                        Send Mail
                    </Button>
                </form>
            </div>
        );
    }
}

export default ContactUs;