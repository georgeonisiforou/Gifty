import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";

const Container = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--text-color);
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  overflow: hidden;
  border: 1px solid var(--accent-color);
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.3);
`;

const Name = styled.div`
  font-size: 1rem;
  font-weight: 600;
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
