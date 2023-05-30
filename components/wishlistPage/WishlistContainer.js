import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Card from "./Card";
import { useQuery } from "react-query";
import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;
  gap: 3rem;
`;

const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;

  justify-content: flex-start;
  align-items: center;
  margin: 1rem;
  flex-wrap: wrap;
`;

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  gap: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const PagesContainer = styled.div``;

const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: var(--text-color);
`;

const CurrentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: var(--text-color);
  width: 40px;
  height: 40px;
`;

const Prev = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: var(--comp-color);
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
  }

  &:disabled {
    background-color: var(--bg-color);
    border: 1px solid var(--accent-color);
    cursor: unset;
    pointer-events: none;
  }
`;

const Next = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: var(--comp-color);
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
  }

  &:disabled {
    background-color: var(--bg-color);
    border: 1px solid var(--accent-color);
    cursor: unset;
    pointer-events: none;
  }
`;

const PrevIcon = styled(BsChevronLeft)`
  font-size: 1.5rem;
  color: var(--text-color);
`;

const NextIcon = styled(BsChevronRight)`
  font-size: 1.5rem;
  color: var(--text-color);
`;

const getPageData = async (pageNum) =>
  axios
    .get(`http://localhost:3001/wishlist/${pageNum}`)
    .then((res) => res.data);

const WishlistContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: pageData,
    isLoading,
    error,
    refetch,
  } = useQuery(["pageData"], () => getPageData(currentPage));

  useEffect(() => {
    refetch();
  }, [currentPage]);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const goToNextPage = () => {
    if (pageData.hasNextPage === true) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (pageData.hasPrevPage === true) {
      setCurrentPage(currentPage - 1);
    }
  };

  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <>
      <Container>
        <ItemsContainer>
          <AnimatePresence variants={parent} initial="hidden" animate="show">
            {pageData.docs.map((item, idx) => {
              return (
                <Card
                  as={motion.div}
                  key={idx}
                  idx={idx}
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
          </AnimatePresence>
        </ItemsContainer>
        <PaginationContainer>
          <PagesContainer>
            <Pages>
              <CurrentPage>{pageData.page}</CurrentPage> of{" "}
              <CurrentPage>{pageData.totalPages}</CurrentPage>
            </Pages>
          </PagesContainer>
          <ButtonsContainer>
            <Prev
              as={motion.button}
              whileTap={{ scale: 0.7 }}
              onClick={() => goToPrevPage()}
              disabled={pageData.hasPrevPage ? false : true}
            >
              <PrevIcon />
            </Prev>

            <Next
              as={motion.button}
              whileTap={{ scale: 0.7 }}
              onClick={() => goToNextPage()}
              disabled={pageData.hasNextPage ? false : true}
            >
              <NextIcon />
            </Next>
          </ButtonsContainer>
        </PaginationContainer>
      </Container>
    </>
  );
};

export default WishlistContainer;
