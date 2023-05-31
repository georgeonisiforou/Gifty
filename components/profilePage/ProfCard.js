import React, { useState } from "react";
import { styled } from "styled-components";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Container = styled.div`
  display: flex;
`;

const CardContainer = styled.div`
  width: 500px;
  background-color: var(--comp-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 1.5rem;
  position: relative;
  overflow: hidden;
  color: var(--text-color);
  z-index: 2;
  box-shadow: 0 5px 15px 3px rgba(0, 0, 0, 0.2);
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 50%;
  width: 220px;
  height: 220px;
  background-color: var(--accent-color);
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const GradientOverlay = styled.div`
  height: 270px;
  width: 100%;
  background: linear-gradient(
    var(--accent-color),
    var(--bg-color),
    var(--comp-color)
  );
  position: absolute;
  top: 0;
  left: 0;
`;

const Name = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const Sub = styled.h4`
  font-weight: 500;
  font-size: 1.125rem;
  margin-top: -1rem;
  color: var(--accent-color);
  text-transform: uppercase;
`;

const NameAndSub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SocialIcon = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Fb = styled(BsFacebook)`
  font-size: 1rem;
  color: var(--comp-color);
`;

const Twitter = styled(BsTwitter)`
  font-size: 1rem;
  color: var(--comp-color);
`;

const Instagram = styled(BsInstagram)`
  font-size: 1rem;
  color: var(--comp-color);
`;

const AboutTitle = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  text-transform: uppercase;
  align-self: flex-start;
`;

const AboutSection = styled.div`
  align-self: flex-start;
`;

const UpcomingDateTitle = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 1rem;
  align-self: flex-start;
  font-size: 1.125rem;
`;

const UpcomingDateContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const Date = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Occasion = styled.div`
  color: var(--accent-color);
`;

const ExpandLeft = styled.button`
  position: absolute;
  left: 5px;
  top: 300px;
  background-color: transparent;
  border-radius: 15px;
  width: 15px;
  height: 60px;
  border: 1px solid var(--comp-color);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--bg-color);
    border: 1px solid var(--accent-color);
  }
`;

const ExpandRight = styled.button`
  position: absolute;
  right: 5px;
  top: 300px;
  background-color: transparent;
  border-radius: 15px;
  width: 15px;
  height: 60px;
  border: 1px solid var(--comp-color);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--bg-color);
    border: 1px solid var(--accent-color);
  }
`;

const AddDateFormContainer = styled.div`
  height: 700px;
  background-color: var(--accent-color);
  border-radius: 15px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 32px 24px;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
`;

const FormTitle = styled.h3`
  font-size: 1.25rem;
  text-align: center;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputTitle = styled.p`
  font-weight: 600;
  margin: 0;
`;

const FormInput = styled.input`
  border-radius: 10px;
  width: 100%;
  height: 40px;
  background-color: var(--comp-color);
  color: var(--text-color);
  font-size: 1rem;
  padding: 0.5rem;
  border: none;
  outline: none;
`;

const FormBtn = styled.button`
  width: 180px;
  height: 40px;
  background-color: var(--comp-color);
  border: 1px solid var(--comp-color);
  border-radius: 15px;
  color: var(--text-color);
  font-weight: 600;
  cursor: pointer;
  font-size: 1.25rem;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid var(--text-color);
  }
`;

const DateListContainer = styled.div`
  height: 700px;
  background-color: var(--accent-color);
  border-radius: 15px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 32px 24px;
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
`;

const DatesTitle = styled.h3`
  font-size: 1.25rem;
  text-align: center;
`;

const DatesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  gap: 1.8rem;
  color: var(--text-color);
`;

const DateItem = styled.li`
  display: flex;
  gap: 1.5rem;
  position: relative;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    height: 2px;
    border-radius: 5px;
    width: 100%;
    opacity: 0.6;
    background-color: var(--comp-color);
  }
`;

const OccasionItem = styled.div`
  background-color: var(--comp-color);
  border-radius: 5px;
  padding: 5px;
  font-size: 0.65rem;
  font-weight: 600;
`;

const DeleteDateBtn = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
`;

const DeleteIcon = styled(IoClose)`
  color: var(--bg-color);
`;

const ProfCard = () => {
  const dateSort = (a, b) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    }
    return 0;
  };

  const list = {
    hidden: { opacity: 0, width: 0 },
    show: {
      opacity: 1,
      width: "100%",
      transition: {
        delayChildren: 1.5,
      },
    },
  };

  const giftDates = [
    { date: "2023-07-29", occasion: "Birthday" },
    { date: "2023-09-20", occasion: "Marriage proposal" },
    { date: "2023-10-13", occasion: "Promotion" },
    { date: "2023-10-29", occasion: "Nameday" },
    { date: "2023-12-25", occasion: "Christmas" },
  ];

  const [dates, setDates] = useState(giftDates);
  const [newDate, setNewDate] = useState({ date: "", occasion: "" });
  const [expandLeft, setExpandLeft] = useState(false);
  const [expandRight, setExpandRight] = useState(false);

  const sortedDates = dates.sort(dateSort);

  return (
    <>
      <Container>
        <AnimatePresence>
          {expandLeft && (
            <AddDateFormContainer
              as={motion.div}
              initial={{ width: 0 }}
              animate={{ width: 350 }}
              exit={{ width: 0, transition: { type: "tween" }, padding: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 0.2,
                delay: 0,
              }}
            >
              <FormTitle
                as={motion.h3}
                initial={{ width: 0 }}
                animate={{ width: "20ch" }}
                exit={{ width: 0 }}
              >
                What are you celebrating next?
              </FormTitle>
              <FormContainer>
                <InputTitle>DATE:</InputTitle>
                <FormInput
                  type="date"
                  value={newDate.date}
                  onChange={(e) =>
                    setNewDate({ ...newDate, date: e.target.value })
                  }
                />
                <InputTitle>CELEBRATING:</InputTitle>

                <FormInput
                  placeholder="What's the occasion?"
                  value={newDate.occasion}
                  onChange={(e) =>
                    setNewDate({ ...newDate, occasion: e.target.value })
                  }
                />
              </FormContainer>
              <FormBtn
                as={motion.button}
                initial={{ width: 0 }}
                animate={{ width: 180 }}
                exit={{ width: 0, transition: { type: "tween" }, padding: 0 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setDates([...dates, newDate]);
                  setNewDate({ date: "", occasion: "" });
                }}
              >
                SAVE
              </FormBtn>
            </AddDateFormContainer>
          )}
        </AnimatePresence>

        <CardContainer>
          <ExpandLeft onClick={() => setExpandLeft(!expandLeft)} />
          <ExpandRight onClick={() => setExpandRight(!expandRight)} />
          <GradientOverlay />
          <ImageContainer>
            <Image
              alt="profile photo"
              src="/images/profPic.jpg"
              fill
              style={{ objectFit: "cover" }}
            />
          </ImageContainer>
          <NameAndSub>
            <Name>Inspector Clouseau</Name>
            <Sub>Good boi</Sub>
          </NameAndSub>
          <SocialContainer>
            <SocialIcon href="/">
              <Fb />
            </SocialIcon>
            <SocialIcon href="/">
              <Twitter />
            </SocialIcon>
            <SocialIcon href="/">
              <Instagram />
            </SocialIcon>
          </SocialContainer>
          <AboutTitle>About</AboutTitle>
          <AboutSection>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            suscipit mauris feugiat, euismod lectus eget, convallis nisl.
            Vestibulum vitae est sit amet lectus luctus mattis. Nullam mattis
            arcu lorem, vel condimentum ex aliquet in. Praesent ac gravida
            dolor, tempor iaculis leo.
          </AboutSection>
          <UpcomingDateTitle>Expecting gifts on</UpcomingDateTitle>
          <UpcomingDateContainer>
            <Occasion>{sortedDates[sortedDates.length - 1].occasion}</Occasion>
            <Date>{sortedDates[sortedDates.length - 1].date}</Date>
          </UpcomingDateContainer>
        </CardContainer>
        <AnimatePresence>
          {expandRight && (
            <DateListContainer
              as={motion.div}
              initial={{ width: 0 }}
              animate={{ width: 350 }}
              exit={{ width: 0, transition: { type: "tween" }, padding: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                duration: 0.2,
                delay: 0,
              }}
            >
              <DatesTitle
                as={motion.h3}
                initial={{ width: 0 }}
                animate={{ width: "20ch" }}
                exit={{ width: 0 }}
              >
                Dates I am expecting a gift:
              </DatesTitle>
              <DatesList
                as={motion.ul}
                variants={list}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                <AnimatePresence>
                  {dates.map((date, idx) => {
                    return (
                      <DateItem
                        key={date.date}
                        as={motion.li}
                        initial={{ opacity: 0, y: -50 * idx, width: 0 }}
                        animate={{ opacity: 1, y: 0, width: "100%" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        {date.date}
                        <OccasionItem>{date.occasion}</OccasionItem>
                        <DeleteDateBtn
                          onClick={() => {
                            dates.splice(idx, 1);
                            setDates([...dates]);
                          }}
                        >
                          <DeleteIcon />
                        </DeleteDateBtn>
                      </DateItem>
                    );
                  })}
                </AnimatePresence>
              </DatesList>
            </DateListContainer>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
};

export default ProfCard;
