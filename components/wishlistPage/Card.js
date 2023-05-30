import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useQueryClient } from "react-query";
import { motion, AnimatePresence } from "framer-motion";

const ImageContainer = styled.div`
  position: relative;
  flex: 0 0 100%;
  overflow: hidden;
  width: 100%;
  height: 70%;
  max-height: 70%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  & > img {
    transition: all 0.3s ease;
  }
`;

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 5px;
  color: var(--text-color);

  background-color: var(--comp-color);

  &:hover ${ImageContainer} > img {
    scale: 1.1;
  }
`;

const LinkContainer = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  text-align: center;
  height: 30%;
`;

const ProductName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: left;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

const Seller = styled.div`
  font-weight: 500;
  font-size: 0.75rem;
`;

const DeleteBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid var(--accent-color);
  bottom: -10px;
  right: -10px;
  width: 30px;
  height: 30px;

  background-color: var(--comp-color);
  cursor: pointer;
`;

const PriceSeller = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  align-items: center;
`;

const DeleteIcon = styled(AiOutlineDelete)`
  font-size: 1.5rem;
  color: var(--text-color);
`;

const Card = ({
  url,
  imgUrl,
  title,
  seller,
  price,
  id,
  idx,

  onDelete = () => {},
}) => {
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:3001/wishlist/${id}`)
      .then((res) => res.data);
    onDelete();
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: idx * 0.1 } }}
    >
      <Container
        as={motion.div}
        whileHover={{
          boxShadow: "0px 7px 16px 0px rgba(0, 0, 0, 0.15)",
          scale: 1.02,
        }}
      >
        <DeleteBtn
          onClick={handleDelete}
          as={motion.button}
          whileTap={{ scale: 0.9 }}
        >
          <DeleteIcon />
        </DeleteBtn>
        <LinkContainer href={url || "/"} target="_blank" as={motion.a} layout>
          <ImageContainer as={motion.div} layout>
            <Image
              alt="product image"
              src={imgUrl}
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageContainer>

          <ContentContainer as={motion.div} layout>
            <ProductName>{title}</ProductName>

            <PriceSeller>
              <Price>${price}</Price>
              <Seller>{seller}</Seller>
            </PriceSeller>
          </ContentContainer>
        </LinkContainer>
      </Container>
    </motion.div>
  );
};

export default Card;
