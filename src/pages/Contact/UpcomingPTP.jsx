import { Box, Flex, Text, Divider, Image } from "@chakra-ui/react";
import React, { Fragment } from "react";
import TableComponent from "../../components/TableComponent";
import TabComponent from "../../components/TabComponent";
import { ChevronRightIcon } from "@chakra-ui/icons";

const MobileSafari = ({ text }) => {
  return (
    <>
      <Divider
        orientation="horizontal"
        w="100vw"
        transform="translateX(-22px)"
      />
      <Flex
        pl="14px"
        pr="24px"
        py="22px"
        justifyContent="space-between"
        alignItems="center"
        cursor="pointer"
      >
        <Text color="#3E4954" fontWeight="700" fontSize="20px">
          {text}
        </Text>
        <ChevronRightIcon fontSize="30px" />
      </Flex>
    </>
  );
};

const data = [
  { name: "Upcoming PTP" },
  { name: "Action History" },
  { name: "PTP Log" },
  { name: "Escalation History" },
  { name: "Allocation History" },
  { name: "Dunning History" },
];

const UpcomingPTP = () => {
  return (
    <>
      {/* PC view */}
      <Box display={{ base: "none", md: "block" }}>
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

      {/* Mobile view */}
      <Box display={{ base: "block", md: "none" }}>
        <Fragment>
          {data.map((el) => (
            <Box key={el.name}>
              <MobileSafari text={el.name} />
            </Box>
          ))}
        </Fragment>
        <Divider
          orientation="horizontal"
          mb="41px"
          w="100vw"
          transform="translateX(-22px)"
        />
      </Box>
    </>
  );
};

export default UpcomingPTP;
