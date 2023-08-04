import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

import WomenWithTab from "../../assets/Login/women_with_tab.png";
import ThunderboltIcon from "../../assets/Login/thunderbolt.svg";

import MainLogo from "../../assets/MainLogo.svg";
import { mifin_colors } from "../../theme/color";

const LoginPage = ({ children }) => {
  return (
    <Box display="flex" position="relative">
      <Box
        display="flex"
        alignItems="center"
        gap="12px"
        position="absolute"
        top="30px"
        left="30px"
      >
        <Box>
          <Image src={MainLogo} w="40px" />
        </Box>
        <Text
          color={mifin_colors.secondary_dark}
          fontWeight="700"
          fontSize="20px"
        >
          miFIN
        </Text>
      </Box>
      <Box
        display="flex"
        w={{ base: "100vw", md: "100vw", lg: "50vw" }}
        h="100vh"
        justifyContent="center"
        alignItems={{ base: "initial", lg: "center" }}
        py={{ base: "120px" }}
      >
        {children}
      </Box>
      <Box
        display={{ base: "none", md: "none", lg: "flex" }}
        bg="linear-gradient(224deg, #9181F4 0%, #5038ED 100%)"
        h="100vh"
        w="50vw"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          h="524px"
          w="400px"
          bgColor="#9181F4"
          borderRadius="40px"
          border="1px solid rgba(255, 255, 255, 0.6)"
          py={6}
          px={5}
          position="relative"
        >
          <Text
            maxW="184px"
            fontSize="32px"
            lineHeight="46px"
            color="#fff"
            fontWeight="700"
          >
            Very good works are waiting for you{" "}
            {children.type.name === "Signup" ? "Join Now" : "Log in Now"}!!!
          </Text>

          <Image
            src={WomenWithTab}
            position="absolute"
            bottom="0"
            right="-45px"
          />
          <Image
            src={ThunderboltIcon}
            p="19px"
            bg="#fff"
            borderRadius="50%"
            position="absolute"
            bottom="100px"
            left="-30px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
