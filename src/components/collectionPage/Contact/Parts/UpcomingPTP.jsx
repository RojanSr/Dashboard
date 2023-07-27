import { Box, Text } from "@chakra-ui/react";
import React from "react";
import TableComponent from "../../../TableComponent";
import TabComponent from "../../../TabComponent";

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
      <Box mb="68px">
        <TableComponent />
      </Box>
      <TabComponent />
    </Box>
  );
};

export default UpcomingPTP;
