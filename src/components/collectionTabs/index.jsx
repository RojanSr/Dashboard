import React, { useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import PrimaryBtn from "../button/PrimaryBtn";
import Content from "../Content";
import UserProfile from "../UserProfile/UserProfile";

const CollectionTabSection = () => {
  const collectionTabLeft = [
    { name: "Contact" },
    { name: "Settlement" },
    { name: "Legal" },
    { name: "Sarfaesi" },
  ];
  const collectionTabRight = [
    { name: "Applicant" },
    { name: "Asset" },
    { name: "Notepad" },
    { name: "Document" },
  ];

  const [clickName, setClickName] = useState("Contact");

  function handleClick(name) {
    history.replaceState(null, "", `?tab=${name}`);
    setClickName(name);
  }
  return (
    <>
      <Flex
        justifyContent="space-between"
        overflowX="auto"
        sx={{
          "&::-webkit-scrollbar": { appearance: "none", height: 0 },
          "&::-moz-scrollbar": { appearance: "none", height: 0 },
        }}
        m={{ base: "18px 0px 20px 24px", md: "18.5px 45px 24px 30px" }}
      >
        <Flex alignItems="center" gap="20px">
          <ChevronLeftIcon
            w="24px"
            h="24px"
            display={{ base: "none", md: "block" }}
          />
          {collectionTabLeft.map((obj, index) => {
            return (
              <Box onClick={() => handleClick(obj.name)} key={index}>
                <PrimaryBtn name={obj.name} click={clickName} />
              </Box>
            );
          })}
        </Flex>

        <Flex alignItems="center" gap="20px">
          {collectionTabRight.map((obj, index) => {
            return (
              <Box onClick={() => handleClick(obj.name)} key={index}>
                <PrimaryBtn name={obj.name} click={clickName} />
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <UserProfile />
      <Content isActive={clickName} />
    </>
  );
};

export default CollectionTabSection;
