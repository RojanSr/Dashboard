import React, { useState } from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import CollectionTab from "./CollectionTab";
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
      >
        <Flex m="18px 20px 26.5px 30px" alignItems="center" gap="20px">
          <ChevronLeftIcon w="24px" h="24px" />
          {collectionTabLeft.map((obj, index) => {
            return (
              <Box onClick={() => handleClick(obj.name)} key={index}>
                <CollectionTab name={obj.name} click={clickName} />
              </Box>
            );
          })}
        </Flex>

        <Flex m="18px 30px 26.5px 0px" alignItems="center" gap="20px">
          {collectionTabRight.map((obj, index) => {
            return (
              <Box onClick={() => handleClick(obj.name)} key={index}>
                <CollectionTab name={obj.name} click={clickName} />
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
