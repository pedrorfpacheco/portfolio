import React from "react";
import {Container, Desc, TimelineSection, Title, Wrapper} from "./EducationStyle";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {education, experiences} from "../../data/constants";
import EducationCard from "../Cards/EducationCard";
import {useInView} from "react-intersection-observer";

const Education = () => {
    const [refTitle, inViewTitle] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
        threshold: 1 // Percentage of the element that is in view before the callback triggers
    });

    const [refDesc, inViewDesc] = useInView({
        triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
        threshold: 0.9 // Percentage of the element that is in view before the callback triggers
    });

    return (
        <Container id="education">
            <Wrapper>
                <Title ref={refTitle} style={{ opacity: inViewTitle ? 1 : 0, transition: 'opacity 0.8s ease-out' }}>Education</Title>
                <Desc ref={refDesc} style={{ opacity: inViewDesc ? 1 : 0, transition: 'opacity 0.8s ease-out' }}>
                    My educational journey has been a constant exploration of self-knowledge and
                    personal growth. Each institution and course I have been through has contributed
                    not only to my academic development, but also to my deeper understanding of
                    the world around me. Below are the specific details of my academic background.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((education,index) => (
                            <TimelineItem >
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    {index !== experiences.length  && <TimelineConnector style={{ background: '#339EC0' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education;