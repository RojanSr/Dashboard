import React from "react";
import MainLogo from "../../assets/MainLogo.svg";

import { HStack, Image, Box, Text } from "@chakra-ui/react";

const MinfinLogo = () => {
  return (
    <HStack gap="10px">
      <Image
        src={MainLogo}
        h={{ base: "32px", md: "42px" }}
        w={{ base: "32px", md: "42px" }}
      />
      <Box lineHeight="16px">
        <Text
          color="#3696C6"
          fontSize={{ base: "18px", md: "24px" }}
          fontWeight="800"
        >
          miFIN
        </Text>
        <Text
          color="#0F6889"
          fontSize={{ base: "8px", md: "12px" }}
          fontWeight="500"
        >
          qualtech
        </Text>
      </Box>
    </HStack>
  );
};

export default MinfinLogo;
