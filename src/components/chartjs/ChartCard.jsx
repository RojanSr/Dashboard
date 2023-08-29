import { VStack } from "@chakra-ui/react";
import React from "react";

const ChartCard = (props) => {
  return (
    <>
      <VStack
        h="400px"
        py={2}
        px={2}
        justifyContent="center"
        boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.07)"
        borderRadius="15px"
        border="1px solid #E5EAF2"
        minW={{ md: "300px", lg: "544px" }}
        // height={{ md: "240px", lg: "318px" }}
      >
        {props.chart}
      </VStack>
    </>
  );
};

export default ChartCard;
