import React from "react";
import {Container, Desc, TimelineSection, Title, Wrapper} from "./EducationStyle";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {education, experiences} from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
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