import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import { AiOutlineDelete, AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { useQueryClient } from "react-query";
import { motion } from "framer-motion";

const ImageContainer = styled.div`
  position: relative;
  flex: 0 0 100%;
  overflow: hidden;
  width: 100%;
  height: 75%;
  max-height: 75%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 450px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: var(--comp-color);
  border-radius: 5px;
  color: var(--text-color);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 7px 16px 0px rgba(0, 0, 0, 0.15);
    scale: 1.02;
  }
`;

const LinkContainer = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  border-top-right-radius: 5px;
  border-bottom-left-radius: 50%;

  transition: all 0.3s ease-in-out, border-radius 2s ease-in-out;

  &:hover {
    width: 100%;
    height: 100%;
    border-top-right-radius: unset;
    border-bottom-left-radius: unset;
  }
`;

const InfoIcon = styled(AiOutlineInfoCircle)`
  color: var(--comp-color);
  font-size: 1.5rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  text-align: center;
  height: 25%;
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
  font-weight: 600;
  font-size: 1.25rem;
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

  const [isHovered, setIsHovered] = useState(false);

  const [hoverDuration, setHoverDuration] = useState({
    enter: 0,
    leave: 0,
  });

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
            <InfoContainer
              onMouseEnter={(e) => {
                setHoverDuration({
                  enter: e.timeStamp,
                  leave: hoverDuration.leave,
                });
                setTimeout(() => setIsHovered(true), 200);
              }}
              onMouseLeave={(e) => {
                setHoverDuration({
                  enter: hoverDuration.enter,
                  leave: e.timeStamp,
                });
                setTimeout(() => setIsHovered(false), 200);
              }}
            >
              {isHovered ? <Seller>{seller}</Seller> : <InfoIcon />}
            </InfoContainer>
            <Image
              alt="product image"
              src={imgUrl}
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageContainer>
          <ContentContainer>
            <ProductName>{title}</ProductName>

            <Price>${price}</Price>
          </ContentContainer>
        </LinkContainer>
      </Container>
    </>
  );
};

export default Card;
