import React from "react";
import { styled } from "styled-components";
import { SaveBtn } from "../MainInput";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: var(--text-color);
  text-transform: uppercase;
`;

const FormContainer = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--comp-color);
  border-radius: 8px;
  padding: 2rem 1rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  margin-top: 1rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  color: var(--text-color);
  font-size: 1.25rem;
`;

const InputField = styled.input`
  width: 500px;
  height: 45px;
  font-size: 1rem;
  outline: none;
  border: none;
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, 0.2);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: 8px;
`;

const AddFriend = () => {
  return (
    <>
      <Container>
        <Title>Add a Friend</Title>
        <FormContainer>
          <InputContainer>
            Username:
            <InputField placeholder="Add friend" />
          </InputContainer>
          <SaveBtn as={motion.button} whileTap={{ scale: 0.9 }}>
            ADD
          </SaveBtn>
        </FormContainer>
      </Container>
    </>
  );
};

export default AddFriend;
