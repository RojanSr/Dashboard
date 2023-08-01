import React from "react";
import SwitchPage from "../pages/SwitchPage";
import PrevNextPageBtn from "./PrevNextPageBtn";
import SaveExit from "./SaveExit";
import FloatTool from "./FloatTool";
import { Box } from "@chakra-ui/react";

const BodyComponent = () => {
  return (
    <Box>
      <SwitchPage />
      <PrevNextPageBtn />
      <SaveExit />
      <FloatTool />
    </Box>
  );
};

export default BodyComponent;
