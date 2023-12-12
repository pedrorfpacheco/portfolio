import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0;
  }
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0 0 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({theme}) => theme.textPrimary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({theme}) => theme.textSecondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

export const ContactRef = styled.div`
  width: 95%;
  max-width: 600px;
`

export const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

export const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({theme}) => theme.textPrimary};
`

export const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.textSecondary};
  outline: none;
  font-size: 18px;
  color: ${({theme}) => theme.textPrimary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({theme}) => theme.primary};
  }
`

export const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.textSecondary};
  outline: none;
  font-size: 18px;
  color: ${({theme}) => theme.textPrimary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: horizontal;

  &:focus {
    border: 1px solid ${({theme}) => theme.primary};
  }
`

export const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: rgba(4, 37, 48, 255);
  background: linear-gradient(225deg, #29819a 0%, rgb(65, 207, 255) 100%);
  background: -moz-linear-gradient(225deg, #29819a 0%, rgb(65, 207, 255) 100%);
  background: -webkit-linear-gradient(225deg, #29819a 0%, rgb(65, 207, 255) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({theme}) => theme.white};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
  }

  &:disabled {
    background: ${({theme}) => theme.cardLight};
    cursor: default;
    transform: scale(1);
    transition: none;
  }
`