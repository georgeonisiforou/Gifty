import { styled } from "styled-components";
import FriendsList from "../components/friendsPage/FriendsList";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import AddFriend from "../components/friendsPage/AddFriend";

const Title = styled.h2`
  font-size: 1.5rem;

  color: var(--text-color);
`;

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const LeftSide = styled.div`
  flex: 0 0 30%;
  background-color: var(--comp-color);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 865px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: var(--bg-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--accent-color);
    border-radius: 15px;
  }
`;

const RightSide = styled.div`
  flex: 0 0 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 1rem;
  max-height: 700px;
`;

const SearchContainer = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0px;
  z-index: 3;
  background-color: var(--bg-color);
`;

const SearchInput = styled.input`
  width: ${({ isclicked }) => (isclicked ? `100%` : `80%`)};
  border-radius: 24px 0px 0px 24px;
  height: 45px;
  padding: 0 1rem;
  font-size: 1rem;
  border: ${({ isclicked }) =>
    isclicked
      ? `1px solid var(--text-color)`
      : `1px solid var(--accent-color)`};
  border-left: ${({ isclicked }) => (isclicked ? `0` : ``)};
  border-top-left-radius: ${({ isclicked }) => (isclicked ? 0 : "24px")};
  border-bottom-left-radius: ${({ isclicked }) => (isclicked ? 0 : "24px")};
  outline: none;
  color: var(--text-color);
`;

const SearchIconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: var(--accent-color);
  border-radius: 0 24px 24px 0;
  min-width: 50px;
  border: none;
  cursor: pointer;
`;

const SearchIcon = styled(BsSearch)`
  width: 20px;
  height: 20px;
  color: var(--comp-color);
`;

const LeftSearchIcon = styled(BsSearch)`
  width: 15px;
  height: 15px;
  color: var(--text-color);
`;

const LeftSearchIconContainer = styled.div`
  display: ${({ isclicked }) => (isclicked ? `flex` : `none`)};
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 24px 0 0 24px;
  padding-left: 1rem;
  width: 40px;
  border: ${({ isclicked }) =>
    isclicked
      ? `1px solid var(--text-color)`
      : `1px solid var(--accent-color)`};
  border-right: ${({ isclicked }) => (isclicked ? `none` : ``)};
`;

export default function Friends() {
  const [clickedSearch, setClickedSearch] = useState(false);

  return (
    <>
      <Container>
        <LeftSide>
          <SearchContainer>
            <LeftSearchIconContainer isclicked={clickedSearch}>
              <LeftSearchIcon />
            </LeftSearchIconContainer>
            <SearchInput
              placeholder="Search"
              type="text"
              onFocus={() => setClickedSearch(true)}
              onBlur={() => setClickedSearch(false)}
              isclicked={clickedSearch}
            />
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
          </SearchContainer>
          <FriendsList />
        </LeftSide>
        <RightSide>
          <AddFriend />
        </RightSide>
      </Container>
    </>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: {},
  };
};
