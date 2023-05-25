import axios from "axios";
import WishlistContainer from "../components/wishlistPage/WishlistContainer";
import { QueryClient, dehydrate, useQuery } from "react-query";
import { styled } from "styled-components";

const getPageData = async () =>
  axios.get("http://localhost:3001/wishlist").then((res) => res.data);

const Title = styled.h2`
  font-size: 1.5rem;
  margin-left: 2rem;
  color: var(--text-color);
`;

export default function Wishlist({ pageData }) {
  return (
    <>
      <Title>MY WISHLIST</Title>
      <WishlistContainer />
    </>
  );
}

export const getStaticProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("pageData", getPageData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

// export const getStaticProps = async (context) => {
//   const pageData = await getPageData();

//   // const pageData = await getPageData();

//   return {
//     props: {
//       pageData,
//     },
//   };
// };
