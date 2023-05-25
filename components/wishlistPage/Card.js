import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useQueryClient } from "react-query";
import { motion } from "framer-motion";

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 250px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: var(--comp-color);
  border-radius: 5px;
  color: var(--text-color);
  box-shadow: 1px 1px 5px var(--accent-color), -1px -1px 5px var(--accent-color);
`;

const LinkContainer = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 0 0 40%;
  overflow: hidden;
  width: 40%;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex: 0 0 60%;
  padding: 1rem;
  text-align: center;
`;

const ProductName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Seller = styled.div``;

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
  onDelete = () => {},
}) => {
  // useEffect(()=>{

  // }, [pageData])
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:3001/wishlist/${id}`)
      .then((res) => res.data);
    onDelete();
  };
  return (
    <>
      <Container>
        <DeleteBtn
          onClick={handleDelete}
          as={motion.button}
          whileTap={{ scale: 0.9 }}
        >
          <DeleteIcon />
        </DeleteBtn>
        <LinkContainer href={url || "/"} target="_blank">
          <ImageContainer>
            <Image
              alt="product image"
              src={imgUrl}
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageContainer>
          <ContentContainer>
            <ProductName>{title}</ProductName>
            <Seller>{seller}</Seller>
            <Price>${price}</Price>
          </ContentContainer>
        </LinkContainer>
      </Container>
    </>
  );
};

export default Card;
