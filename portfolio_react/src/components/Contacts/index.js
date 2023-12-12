import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {
    ContactButton,
    ContactForm,
    ContactInput,
    ContactInputMessage,
    ContactTitle,
    Container, CustomSnackbarContent,
    Desc,
    Title,
    Wrapper
} from "./ContactsStyle";
import {Snackbar} from "@mui/material";

const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const form = useRef();
    const [fromName, setFromName] = useState(String);
    const [email, setEmail] = useState(String);
    const [message, setMessage] = useState(String);
    const [subject, setSubject] = useState(String);


    const buttonEnabled = () => {
        const validEmail = email.length > 15;
        const validFromName = fromName.length > 2;
        const validMessage = message.length > 30;
        const validSubject = subject.length > 4;

        return validEmail && validFromName && validMessage && validSubject;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_2s0lq37', 'template_portfolio_prfp', form.current, 'wiE0_5CvMYL0BKDIf')
            .then((result) => {
                setOpen(true);
                console.log("Form submitted: ", {email, fromName, subject, message})
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Container id="contacts">
            <Wrapper>
                <Title>Contact</Title>
                <Desc>Don't hesitate to contact me if you have any questions or if there are any opportunities you'd
                    like to discuss!</Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>Email Me 📩</ContactTitle>
                    <ContactInput placeholder="Your Email" name="from_email" value={email}
                                  onChange={(email) => setEmail(email.target.value)}/>
                    <ContactInput placeholder="Your Name" name="fromName" value={fromName}
                                  onChange={(fromName) => setFromName(fromName.target.value)}/>
                    <ContactInput placeholder="Subject" name="subject" value={subject}
                                  onChange={(subject) => setSubject(subject.target.value)}/>
                    <ContactInputMessage placeholder="Message" rows="7" name="message" value={message}
                                         onChange={(message) => setMessage(message.target.value)}/>
                    <ContactButton type="submit" disabled={!buttonEnabled()}>Send</ContactButton>
                </ContactForm>
                <Snackbar
                    style={{marginTop: '100px'}}
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Email sent successfully!"
                    severity="success"
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                />
            </Wrapper>
        </Container>
    )
}

export default Contact;