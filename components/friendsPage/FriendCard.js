import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Container = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--text-color);
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

const Name = styled.div`
  font-size: 1rem;
`;

const FriendCard = ({ avatar, name }) => {
  return (
    <>
      <Container href="/">
        <ImageContainer>
          <Image
            alt="avatar"
            src={avatar}
            fill
            style={{ objectFit: "cover" }}
          />
        </ImageContainer>
        <Name>{name}</Name>
      </Container>
    </>
  );
};

export default FriendCard;
