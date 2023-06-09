import React, { useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: var(--text-color);
  background-color: var(--altbg-color);
`;

const Title = styled.h3`
  font-size: 1.5rem;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const InputAndTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 700px;
`;

const InputTitle = styled.h4`
  font-size: 1rem;
`;

const InputContainer = styled.div`
  width: 600px;
  height: 55px;
  border-radius: 27.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--bg-color);
  background-color: var(--comp-color);
  outline: none;
  padding: 8px 16px;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid var(--accent-color);
  }
`;

const MainInputContainer = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.25rem;

  &::placeholder {
    color: var(--accent-color);
  }
`;

const SaveBtn = styled.button`
  width: 200px;
  height: 45px;
  border: none;
  background-color: var(--accent-color);
  color: var(--bg-color);
  border-radius: 22.5px;
  border: 2px solid var(--bg-color);
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    color: var(--text-color);
    background-color: var(--comp-color);
  }
`;

const ErrorMsg = styled.p`
  color: red;
  margin-bottom: -15px;
  align-self: flex-end;
  margin-right: 1rem;
`;

const SuccessMsg = styled.p`
  font-weight: 600;
  font-size: 1.25rem;
`;

const CreateGift = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Please add a name for the product"),
    price: Yup.number().required("Please add a price"),
    seller: Yup.string().required("Please add a seller"),
    imgUrl: Yup.string().required("Please add an image URL"),
    url: Yup.string().url().required("Please add a URL for the product"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const [successMsg, setSuccessMsg] = useState("");

  const handleSave = async (data) => {
    await axios
      .post("http://localhost:3001/wishlist/custom", data)
      .then((res) => res.data);
  };

  const onSubmit = (data) => {
    handleSave(data);
    setSuccessMsg("Gift saved!");
  };

  return (
    <>
      <Container>
        <Title>URL not working? Create a custom gift below!</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormContainer>
            <ErrorMsg>{errors.title?.message}</ErrorMsg>
            <InputAndTitle>
              <InputTitle>Gift Name:</InputTitle>

              <InputContainer>
                <MainInputContainer
                  type="text"
                  // value={gift.title}
                  // onChange={(e) => setGift({ ...gift, title: e.target.value })}
                  placeholder="Enter product name"
                  {...register("title")}
                />
              </InputContainer>
            </InputAndTitle>
            <ErrorMsg>{errors.price?.message}</ErrorMsg>
            <InputAndTitle>
              <InputTitle>Price:</InputTitle>
              <InputContainer>
                <MainInputContainer
                  type="text"
                  // value={gift.price}
                  // onChange={(e) => setGift({ ...gift, price: e.target.value })}
                  placeholder="Enter product price"
                  {...register("price")}
                />
              </InputContainer>
            </InputAndTitle>
            <ErrorMsg>{errors.seller?.message}</ErrorMsg>
            <InputAndTitle>
              <InputTitle>Seller:</InputTitle>
              <InputContainer>
                <MainInputContainer
                  type="text"
                  // value={gift.seller}
                  // onChange={(e) => setGift({ ...gift, seller: e.target.value })}
                  placeholder="Enter seller's name"
                  {...register("seller")}
                />
              </InputContainer>
            </InputAndTitle>
            <ErrorMsg>{errors.imgUrl?.message}</ErrorMsg>
            <InputAndTitle>
              <InputTitle>Image url:</InputTitle>
              <InputContainer>
                <MainInputContainer
                  type="text"
                  // value={gift.imgUrl}
                  // onChange={(e) => setGift({ ...gift, imgUrl: e.target.value })}
                  placeholder="Enter a product image url"
                  {...register("imgUrl")}
                />
              </InputContainer>
            </InputAndTitle>
            <ErrorMsg>{errors.url?.message}</ErrorMsg>
            <InputAndTitle>
              <InputTitle>Url:</InputTitle>
              <InputContainer>
                <MainInputContainer
                  type="text"
                  // value={gift.url}
                  // onChange={(e) => setGift({ ...gift, url: e.target.value })}
                  placeholder="Enter product url"
                  {...register("url")}
                />
              </InputContainer>
            </InputAndTitle>

            <SaveBtn as={motion.button} whileTap={{ scale: 0.9 }} type="submit">
              SAVE
            </SaveBtn>
            <SuccessMsg>{successMsg}</SuccessMsg>
          </FormContainer>
        </form>
      </Container>
    </>
  );
};

export default CreateGift;
