import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 500px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: var(--comp-color);
  margin-top: 80px;
  border-radius: 10px;
  color: var(--text-color);
`;

const Card = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};

export default Card;
