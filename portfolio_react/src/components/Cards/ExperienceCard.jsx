import React from 'react'
import styled from 'styled-components'

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({theme}) => theme.textPrimary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const ItemDocumentWrapper = styled.div`
    display: none;
  flex-wrap: wrap;
  gap: 8px;
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  border: 0.1px solid #339EC0;
  
  &:hover{
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px){
    padding: 10px;
    gap: 8px;
    width: 300px;
  }
  &:hover ${ItemDocumentWrapper}{
    display: flex;
  }
  &:hover ${Span}{
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px
`

const Image = styled.img`
  height: 57px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`


const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme}) => theme.textPrimary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.textSecondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.textSecondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`


const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({theme}) => theme.textPrimary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const DocumentsBody = styled.div`
  width: 100%;
  display: flex;
`

const DocumentsName = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.textPrimary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const DocumentButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: menulist-button;
  text-decoration: none;
  max-width: 150px;
  max-height: 50px;
  text-align: center;
  padding: 6px 4px;
  margin-right: 10px;
  color: ${({theme}) => theme.black};
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: #339EC0;
`


const ExperienceCard = ({experience}) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img}/>
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>
                }
                {experience?.skills &&
                    <>
                        <br/>
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.docs &&
                <ItemDocumentWrapper>
                    <DocumentsName>Certificates</DocumentsName>
                    <DocumentsBody>
                        {experience.docs?.map((doc, index) => (
                            <DocumentButton href={experience.docs.at(index).src} target="new">
                                {experience.docs.at(index).label}
                            </DocumentButton>
                        ))}
                    </DocumentsBody>
                </ItemDocumentWrapper>
            }
        </Card>
    )
}

export default ExperienceCard