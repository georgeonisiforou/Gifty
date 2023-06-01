import { styled } from "styled-components";
import FriendsList from "../components/friendsPage/FriendsList";

const Title = styled.h2`
  font-size: 1.5rem;

  color: var(--text-color);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const LeftSide = styled.div`
  flex: 0 0 40%;
  background-color: var(--comp-color);
  display: flex;
  flex-direction: column;
`;

const RightSide = styled.div`
  flex: 0 0 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Friends() {
  return (
    <>
      <Container>
        <LeftSide>
          <FriendsList />
        </LeftSide>
        <RightSide></RightSide>
      </Container>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {},
  };
};
