import { Flex, Text, Divider, Box } from "@chakra-ui/react";
import React, { Fragment } from "react";
import RecordAction from "./RecordAction";
import UpcomingPTP from "./UpcomingPTP";
import SecondaryBtn from "../../components/button/SecondaryBtn";

const Contact = () => {
  const buttons = [
    { name: "Settlement" },
    { name: "Legal" },
    { name: "SARFAESI" },
    { name: "Reposession" },
  ];

  return (
    <Box
      // w={{ base: "calc(100vw-32px)", md: "calc(100vw - 88px)" }}
      mx={{ base: "16px", lg: "44px" }}
    >
      <Flex
        justifyContent="space-between"
        // w="inherit"
        alignItems="center"
        mb="24px"
        display={{ base: "block", md: "flex" }}
      >
        <Text
          as="h2"
          fontSize="20px"
          fontWeight="600"
          mb={{ base: "20px", md: "0px" }}
        >
          Contact
        </Text>
        <Flex
          alignItems="center"
          gap="11px"
          overflowX="auto"
          sx={{
            "&::-webkit-scrollbar": { appearance: "none", height: 0 },
            "&::-moz-scrollbar": { appearance: "none", height: 0 },
          }}
        >
          <Text fontSize="14px" fontFamily="Roboto">
            Initiate:
          </Text>

          {/* Buttons */}
          {buttons.map((btn) => (
            <Fragment key={btn.name}>
              <SecondaryBtn name={btn.name} />
            </Fragment>
          ))}
          <Divider
            orientation="vertical"
            h="45px"
            w="1px"
            color="#000"
            mx="25.5"
          />
          <SecondaryBtn name="Escalate" isRed />
        </Flex>
      </Flex>

      <Box mx={{ base: "0px", md: "66px" }}>
        <Divider
          w="100vw"
          transform="translateX(-16px)"
          orientation="horizontal"
          display={{ base: "block", md: "none" }}
        ></Divider>
        <RecordAction />
        <UpcomingPTP />
      </Box>
    </Box>
  );
};

export default Contact;
