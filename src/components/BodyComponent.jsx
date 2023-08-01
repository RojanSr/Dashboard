import React from "react";
import SwitchPage from "../pages/SwitchPage";
import PrevNextPageBtn from "./PrevNextPageBtn";
import SaveExit from "./SaveExit";
import FloatTool from "./FloatTool";
import { Box, Flex } from "@chakra-ui/react";

const BodyComponent = () => {
  return (
    <Box>
      <SwitchPage />
      <PrevNextPageBtn />
      <SaveExit />
      <Flex
        position="sticky"
        left={{ base: "50%", md: "15px" }}
        bottom="30px"
        justifyContent="center"
        display={{ base: "flex", md: "block" }}
      >
        <FloatTool />
      </Flex>
    </Box>
  );
};

export default BodyComponent;
