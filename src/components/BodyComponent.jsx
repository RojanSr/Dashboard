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
        bottom="21px"
        justifyContent="center"
        display={{ base: "flex", md: "block" }}
        ml={{ base: "0px", md: "15px" }}
      >
        <FloatTool />
      </Flex>
    </Box>
  );
};

export default BodyComponent;
