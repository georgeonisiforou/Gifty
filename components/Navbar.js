import React from "react";
import { styled } from "styled-components";
import Link from "next/link";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  background-color: var(--accent-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color);
  padding: 1rem 3rem;
  font-size: 1.25rem;
`;

const LogoContainer = styled.div`
  font-weight: 700;
`;

const NavList = styled.ul`
  display: flex;
  gap: 32px;
  font-size: 1rem;
  font-weight: 600;
`;

const NavChild = styled.li`
  list-style: none;
`;

const NavLink = styled(Link)``;

const Navbar = () => {
  return (
    <>
      <Container>
        <LogoContainer>GIFTY</LogoContainer>
        <NavList>
          <NavChild>
            <NavLink href="/wishlist">WISHLIST</NavLink>
          </NavChild>
          <NavChild>
            <NavLink href="/">FRIENDS</NavLink>
          </NavChild>
          <NavChild>
            <NavLink href="/">EXPLORE</NavLink>
          </NavChild>
        </NavList>
      </Container>
    </>
  );
};

export default Navbar;
