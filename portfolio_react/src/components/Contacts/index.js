import React, {useEffect, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {
    ContactButton,
    ContactForm,
    ContactInput,
    ContactInputMessage,
    ContactTitle,
    Container,
    Desc,
    Title,
    Wrapper
} from "./ContactsStyle";
import {Snackbar} from "@mui/material";

const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const form = useRef();
    const [fromName, setFromName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [subject, setSubject] = useState();


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
                    <ContactInput placeholder="Your Email" name="from_email" value={email}/>
                    <ContactInput placeholder="Your Name" name="fromName" value={fromName}/>
                    <ContactInput placeholder="Subject" name="subject" value={subject}/>
                    <ContactInputMessage placeholder="Message" rows="7" name="message" value={message}/>
                    <ContactButton type="submit" disabled={!buttonEnabled}>Send</ContactButton>
                </ContactForm>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Email sent successfully!"
                    severity="success"
                />
            </Wrapper>
        </Container>
    )
}

export default Contact;