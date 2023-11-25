import React from "react";
import {Container, Description, TimeLineSection, Title, Wrapper} from "./ExperienceStyle";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import { experiences } from '../../data/constants';
import ExperienceCard from "../Cards/ExperienceCard";
import {darkTheme} from "../../utils/Themes";

const Experience = () => {
    return (
        <Container id='experience'>
            <Wrapper>
                <Title>Experience</Title>
                <Description>
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