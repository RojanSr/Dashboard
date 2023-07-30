import React from "react";
import { Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        pt={{ base: "11px", lg: "9px" }}
        pb={{ base: "14px", lg: "10px" }}
        w="100vw"
        bgColor="#F2F1F1"
        fontSize="14px"
        fontWeight="400"
        color="#3E4954"
        fontFamily="Roboto, sans-serif"
        opacity="0.7"
        pos="relative"
        flexWrap="wrap"
        px="24px"
      >
        <Text textAlign="center">
          &copy; Copyright Qualtech Solutions Pvt. Ltd. All Rights Reserved.
        </Text>
        <Text
          pos={{ base: "initial", md: "absolute" }}
          right="13px"
          ml={{ base: "0", md: "12px" }}
          mt={{ base: "12px", md: "0px" }}
        >
          v 2.1.1.5
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
