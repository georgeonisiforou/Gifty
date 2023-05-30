import React, { useState } from "react";
import { styled } from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";

const Container = styled.div`
  position: sticky;
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
  z-index: 10;
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
  position: relative;
  padding: 8px;
`;

const NavLink = styled(Link)``;

const NavActiveBg = styled.div`
  background-color: var(--comp-color);
  position: absolute;
  right: 0;
  top: 0;
  inset: 0;
  border-radius: 9999px;
`;

//insert framer motion pill effect on navlist items

const Navbar = () => {
  const tabs = [
    { id: "profile", label: "PROFILE", url: "/profile" },
    { id: "wishlist", label: "WISHLIST", url: "/wishlist" },
    { id: "friends", label: "FRIENDS", url: "/" },
    { id: "explore", label: "EXPLORE", url: "/" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <>
      <Container>
        <LogoContainer>
          <NavLink href="/">GIFTY</NavLink>
        </LogoContainer>
        <NavList>
          {tabs.map((item, idx) => (
            <NavChild
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
              }}
            >
              {activeTab === item.id && (
                <NavActiveBg
                  as={motion.div}
                  layoutId="active-pill"
                  transition={{ duration: 0.6, type: "spring" }}
                />
              )}
              <NavLink href={item.url}>
                <span style={{ position: "relative", zIndex: 10 }}>
                  {item.label}
                </span>
              </NavLink>
            </NavChild>
          ))}
        </NavList>
      </Container>
    </>
  );
};

export default Navbar;
