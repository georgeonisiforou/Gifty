import React from "react";
import { styled } from "styled-components";
import { RiHeartAddLine } from "react-icons/ri";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  color: var(--text-color);
`;

const HeartIcon = styled(RiHeartAddLine)`
  width: 25px;
  height: 25px;
  color: var(--accent-color);
  transition: all 0.3s ease;
`;

const InputContainer = styled.div`
  width: 600px;
  height: 55px;
  border-radius: 27.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--bg-color);
  background-color: var(--comp-color);
  outline: none;
  padding: 8px 16px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid var(--accent-color);
  }

  &:hover ${HeartIcon} {
    color: var(--text-color);
  }
`;

const MainInputContainer = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;

  &::placeholder {
    color: var(--accent-color);
  }
`;

const SaveBtn = styled.button`
  width: 200px;
  height: 45px;
  border: none;
  background-color: var(--accent-color);
  color: var(--bg-color);
  border-radius: 22.5px;
  border: 2px solid var(--bg-color);
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: var(--text-color);
    background-color: var(--comp-color);
  }
`;

const TitleSub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 64px;
`;

const Asterisk = styled.div`
  font-size: 0.75rem;
  margin-top: 64px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  font-weight: 800;
`;

const Sub = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const MainInput = () => {
  return (
    <>
      <Container>
        <TitleSub>
          <Title>Your Present wishlist!</Title>
          <Sub>No more sad birthdays*</Sub>
        </TitleSub>
        <InputContainer>
          <HeartIcon />
          <MainInputContainer placeholder="Enter your desired gift" />
        </InputContainer>
        <SaveBtn>SAVE</SaveBtn>
        <Asterisk>*Or any other occasion that calls for a gift.</Asterisk>
      </Container>
    </>
  );
};

export default MainInput;
