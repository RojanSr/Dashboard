import { Flex, Text, Divider, Box } from "@chakra-ui/react";
import React from "react";
import RecordAction from "./Parts/RecordAction";
import UpcomingPTP from "./Parts/UpcomingPTP";

const Contact = () => {
  const buttons = [
    { name: "Settlement" },
    { name: "Legal" },
    { name: "SARFAESI" },
    { name: "Reposession" },
  ];

  return (
    <Box
      w={{ base: "calc(100vw-32px)", md: "calc(100vw - 88px)" }}
      mx={{ base: "16px", md: "44px" }}
    >
      <Flex
        justifyContent="space-between"
        w="inherit"
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
          {buttons.map((btn, index) => (
            <Box
              key={index}
              border="1px solid #2F4CDD"
              bg="none"
              fontWeight="500"
              fontSize="14px"
              p="8px 16px"
              color="#2F4CDD"
              borderRadius="8px"
              cursor="pointer"
              _hover={{
                background: "rgba(0,0,0,0.05)",
              }}
              _active={{
                background: "rgba(0,0,0,0.1)",
              }}
            >
              {btn.name}
            </Box>
          ))}
          <Divider
            orientation="vertical"
            h="45px"
            w="1px"
            color="#000"
            mx="25.5"
          />
          <Box
            border="1px solid #FF0909"
            bg="none"
            fontWeight="500"
            fontSize="14px"
            color="#FF0909"
            borderRadius="8px"
            cursor="pointer"
            p="8px 16px"
            _hover={{
              background: "rgba(0,0,0,0.05)",
            }}
            _active={{
              background: "rgba(0,0,0,0.1)",
            }}
          >
            Escalate
          </Box>
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
      </Box>
      <Box mx={{ base: "0px", md: "66px" }}>
        <UpcomingPTP />
      </Box>
    </Box>
  );
};

export default Contact;
