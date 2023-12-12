import React from "react";
import {Container, Description, TimeLineSection, Title, Wrapper} from "./ExperienceStyle";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import { experiences } from '../../data/constants';
import ExperienceCard from "../Cards/ExperienceCard";
import {darkTheme} from "../../utils/Themes";
import {useInView} from "react-intersection-observer";

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
        threshold: 0.8 // Percentage of the element that is in view before the callback triggers
    });

    return (
        <Container id='experience'>
            <Wrapper>
                <Title>Experience</Title>
                <Description ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease-out' }}>
                    My professional journey has been an exciting saga of challenges and valuable learnings.
                    Below are details of my professional experience, where each opportunity has shaped my
                    perspective and honed my skills.
                </Description>
                <TimeLineSection>
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: darkTheme.primary }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience;