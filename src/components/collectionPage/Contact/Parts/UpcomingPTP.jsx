import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import TableComponent from "../../../TableComponent";

const UpcomingPTP = () => {
  return (
    <Box>
      <Text
        color="#3E4954"
        fontSize={{ base: "20px", md: "24px" }}
        mb="25px"
        mt={{ base: "21px", md: "0px" }}
        fontWeight="700"
      >
        Upcoming PTP
      </Text>
      <VStack>
        <TableComponent />
      </VStack>
    </Box>
  );
};

export default UpcomingPTP;
