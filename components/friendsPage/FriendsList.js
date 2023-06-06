import React, { useState } from "react";
import { styled } from "styled-components";
import FriendCard from "./FriendCard";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 1rem 2rem;
`;

const FriendsList = ({ friendsList }) => {
  const list = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "100%",
      transition: {
        delayChildren: 1.5,
      },
    },
  };
  return (
    <>
      <Container
        as={motion.ul}
        variants={list}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <AnimatePresence>
          {friendsList.map((el, idx) => (
            <FriendCard
              key={el.name}
              avatar={el.avatar}
              name={el.name}
              as={motion.li}
              initial={{ y: -50 * idx, width: 0 }}
              animate={{ y: 0, width: "100%" }}
              exit={{ width: 0 }}
              transition={{ delay: idx * 0.2 }}
            />
          ))}
        </AnimatePresence>
      </Container>
    </>
  );
};

export default FriendsList;
