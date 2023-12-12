import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`

const ItemWrapper = styled.div`
  display: none;
  flex-wrap: wrap;
  gap: 8px;
`

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${ItemWrapper} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid #339EC0;
`

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px
`

const Image = styled.img`
  height: 57px;
  background-color: #000;
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

const DocumentsBody = styled.div`
  width: 100%;
  display: flex;
`

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({theme}) => theme.textPrimary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`

const DocumentsName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.textPrimary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`

const Degree = styled.div`
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
  color: ${({theme}) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: #339EC0;
`

const EducationCard = ({education}) => {
    return (
        <Card>
            <Top>
                <Image src={education.img}/>
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            {education.docs &&
                <ItemWrapper>
                    <DocumentsName>Certificates</DocumentsName>
                    <DocumentsBody>
                        {education.docs?.map((doc, index) => (
                            <DocumentButton href={education.docs.at(index).src} target="new">
                                {education.docs.at(index).label}
                            </DocumentButton>
                        ))}
                    </DocumentsBody>
                </ItemWrapper>
            }
        </Card>
    )
}

export default EducationCard