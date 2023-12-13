import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {
    ContactButton,
    ContactForm,
    ContactInput,
    ContactInputMessage, ContactRef,
    ContactTitle,
    Container,
    Desc,
    Title,
    Wrapper
} from "./ContactsStyle";
import {Snackbar} from "@mui/material";
import {useInView} from "react-intersection-observer";

const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const form = useRef();
    const [fromName, setFromName] = useState(String);
    const [fromEmail, setFromEmail] = useState(String);
    const [message, setMessage] = useState(String);
    const [subject, setSubject] = useState(String);


    const buttonEnabled = () => {
        const validEmail = fromEmail.length > 15;
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
                console.log("Form submitted: ", {fromEmail, fromName, subject, message})
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    }

    const [refTitle, inViewTitle] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
        threshold: 1 // Percentage of the element that is in view before the callback triggers
    });

    const [refDesc, inViewDesc] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
        threshold: 0.9 // Percentage of the element that is in view before the callback triggers
    });

    const [refEmail, inViewEmail] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
        threshold: 0.25 // Percentage of the element that is in view before the callback triggers
    });

    return (
        <Container id="contacts">
            <Wrapper>
                <Title ref={refTitle}
                       style={{opacity: inViewTitle ? 1 : 0, transition: 'opacity 0.8s ease-out'}}>Contact</Title>
                <Desc ref={refDesc} style={{opacity: inViewDesc ? 1 : 0, transition: 'opacity 0.8s ease-out'}}>Don't
                    hesitate to contact me if you have any questions or if there are any opportunities you'd
                    like to discuss!</Desc>
                <ContactRef ref={refEmail} style={{opacity: inViewEmail ? 1 : 0, transition: 'opacity 0.8s ease-out'}}>
                    <ContactForm ref={form} onSubmit={handleSubmit}>
                        <ContactTitle>Email Me 📩</ContactTitle>
                        <ContactInput placeholder="Your Email" name="from_email" value={fromEmail}
                                      onChange={(fromEmail) => setFromEmail(fromEmail.target.value)}/>
                        <ContactInput placeholder="Your Name" name="fromName" value={fromName}
                                      onChange={(fromName) => setFromName(fromName.target.value)}/>
                        <ContactInput placeholder="Subject" name="subject" value={subject}
                                      onChange={(subject) => setSubject(subject.target.value)}/>
                        <ContactInputMessage placeholder="Message" rows="7" name="message" value={message}
                                             onChange={(message) => setMessage(message.target.value)}/>
                        <ContactButton type="submit" disabled={!buttonEnabled()}>Send</ContactButton>
                    </ContactForm>
                </ContactRef>
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