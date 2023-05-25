import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Card from "./Card";
import { useQuery } from "react-query";
import axios from "axios";

const Container = styled.div`
  display: flex;
  gap: 24px;
  padding: 1rem;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem;
  flex-wrap: wrap;
`;

const getPageData = async () =>
  axios.get("http://localhost:3001/wishlist").then((res) => res.data);

const WishlistContainer = () => {
  const {
    data: pageData,
    isLoading,
    error,
    refetch,
  } = useQuery(["pageData"], getPageData);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Container>
        {pageData.map((item, idx) => {
          return (
            <Card
              key={idx}
              url={item.url}
              imgUrl={item.imgUrl}
              title={item.title}
              seller={item.seller}
              price={item.price}
              id={item._id}
              onDelete={() => refetch()}
              // refetchData={refetch}
            />
          );
        })}
      </Container>
    </>
  );
};

export default WishlistContainer;
