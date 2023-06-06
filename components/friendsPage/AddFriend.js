import React, { useState } from "react";
import { styled } from "styled-components";
import { SaveBtn } from "../MainInput";
import { motion } from "framer-motion";
import OtherPersonCard from "./OtherPersonCard";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
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
  font-weight: 600;
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

  &::placeholder {
    color: var(--accent-color);
  }
`;

const OtherPeopleContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const AddFriend = ({ addFriend, friendsArray }) => {
  const others = [
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJK38KoizK629pi6qW_1qisOvF8enMgm1kpX7a-MbtrJFnHNfnQKg9s8&s=10",
      name: "Toby Flenderson",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Min_E-_w8o1KvS0EBhem9UAs0zDubmOQkM7DD5AuLKQMttqR8SJn&s=0",
      name: "Ryan Howard",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoL1FfwTYme2Wb5KV0GrhkCWll9EwsO8VVpg7wOCZZZv0dUggYTjcm&s=0",
      name: "Kelly Kapoor",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcnUDsOS_pO9L9N-gisxeJ8hUhCjcskSgX9r4aUHcdMqV3x6vlqHmQko&s=10",
      name: "David Wallace",
    },
  ];

  const [otherPeople, setOtherPeople] = useState(others);

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
        <Title>You may know these people</Title>
        <OtherPeopleContainer>
          {otherPeople.map((person, idx) => {
            return (
              <OtherPersonCard
                key={person.name}
                avatar={person.avatar}
                name={person.name}
                friendsArray={friendsArray}
                addFriend={addFriend}
              />
            );
          })}
        </OtherPeopleContainer>
      </Container>
    </>
  );
};

export default AddFriend;
