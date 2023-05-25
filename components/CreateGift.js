import React, { useState } from "react";
import { styled } from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: var(--text-color);
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
  cursor: pointer;

  &:hover {
    color: var(--text-color);
    background-color: var(--comp-color);
  }
`;

// url: "", title: "", price: "", imgUrl: "", seller: ""

const CreateGift = () => {
  const [gift, setGift] = useState({
    title: "",
    price: "",
    seller: "",
    imgUrl: "",
    url: "",
  });

  const [prevent, setPrevent] = useState(true);

  const handleSave = async () => {
    await axios
      .post("http://localhost:3001/wishlist/custom", gift)
      .then((res) => res.data);
  };

  return (
    <>
      <Container>
        <Title>URL not working? Create a custom gift below!</Title>
        <FormContainer>
          <InputAndTitle>
            <InputTitle>Gift Name:</InputTitle>
            <InputContainer>
              <MainInputContainer
                type="text"
                value={gift.title}
                onChange={(e) => setGift({ ...gift, title: e.target.value })}
                placeholder="Enter product name"
              />
            </InputContainer>
          </InputAndTitle>

          <InputAndTitle>
            <InputTitle>Price:</InputTitle>
            <InputContainer>
              <MainInputContainer
                type="text"
                value={gift.price}
                onChange={(e) => setGift({ ...gift, price: e.target.value })}
                placeholder="Enter product price"
              />
            </InputContainer>
          </InputAndTitle>

          <InputAndTitle>
            <InputTitle>Seller:</InputTitle>
            <InputContainer>
              <MainInputContainer
                type="text"
                value={gift.seller}
                onChange={(e) => setGift({ ...gift, seller: e.target.value })}
                placeholder="Enter seller's name"
              />
            </InputContainer>
          </InputAndTitle>

          <InputAndTitle>
            <InputTitle>Image url:</InputTitle>
            <InputContainer>
              <MainInputContainer
                type="text"
                value={gift.imgUrl}
                onChange={(e) => setGift({ ...gift, imgUrl: e.target.value })}
                placeholder="Enter a product image url"
              />
            </InputContainer>
          </InputAndTitle>

          <InputAndTitle>
            <InputTitle>Url:</InputTitle>
            <InputContainer>
              <MainInputContainer
                type="text"
                value={gift.url}
                onChange={(e) => setGift({ ...gift, url: e.target.value })}
                placeholder="Enter product url"
              />
            </InputContainer>
          </InputAndTitle>

          <SaveBtn
            onClick={() => {
              Object.values(gift).map((val, _) => {
                if (val === "") {
                  setPrevent(true);
                } else {
                  setPrevent(false);
                }
              });
              if (prevent === false) {
                handleSave();
              }
            }}
          >
            SAVE
          </SaveBtn>
        </FormContainer>
      </Container>
    </>
  );
};

export default CreateGift;
