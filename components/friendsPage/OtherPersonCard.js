import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import { SaveBtn } from "../MainInput";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 300px;

  background-color: var(--comp-color);
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
`;

const Name = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-color);
`;

const OtherPersonCard = ({ avatar, name, addFriend, friendsArray }) => {
  return (
    <>
      <Container>
        <ImageContainer>
          <Image
            alt="avatar"
            src={avatar}
            fill
            style={{ objectFit: "cover" }}
          />
        </ImageContainer>
        <Name>{name}</Name>

        <SaveBtn
          as={motion.button}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            addFriend([...friendsArray, { avatar: avatar, name: name }]);
          }}
        >
          ADD
        </SaveBtn>
      </Container>
    </>
  );
};

export default OtherPersonCard;
