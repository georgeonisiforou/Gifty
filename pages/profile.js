import { styled } from "styled-components";
import ProfCard from "../components/profilePage/ProfCard";

const Title = styled.h2`
  font-size: 1.5rem;
  margin-left: 2rem;
  color: var(--text-color);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export default function Profile() {
  return (
    <>
      <Container>
        <Title>MY PROFILE</Title>
        <ProfCard />
      </Container>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {},
  };
};
