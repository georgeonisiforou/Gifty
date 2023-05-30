import { styled } from "styled-components";

const Title = styled.h2`
  font-size: 1.5rem;
  margin-left: 2rem;
  color: var(--text-color);
`;

export default function Profile() {
  return (
    <>
      <Title>MY PROFILE</Title>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {},
  };
};
