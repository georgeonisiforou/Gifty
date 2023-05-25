import axios from "axios";
import WishlistContainer from "../components/wishlistPage/WishlistContainer";
import { QueryClient, dehydrate, useQuery } from "react-query";

const getPageData = async () =>
  axios.get("http://localhost:3001/wishlist").then((res) => res.data);

export default function Wishlist({ pageData }) {
  return (
    <>
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
