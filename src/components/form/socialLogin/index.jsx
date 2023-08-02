import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { mifin_colors } from "../../../theme/color";

const SocialLogin = ({ icon, text }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      border="1px solid #F0EDFF"
      // p="11px 110px"
      py={3}
      px={{ base: "70px", md: "110px" }}
      fontSize="12px"
      borderRadius="16px"
      gap="8px"
      cursor="pointer"
      _hover={{
        bg: "rgba(0, 0, 0, 0.1)",
      }}
      _active={{
        opacity: "1.1",
        transform: "scale(0.98)",
      }}
    >
      <Image src={icon} />
      <Text color={mifin_colors.primary_dark}>
        Login with{" "}
        <Text fontWeight="700" as="span">
          {text}
        </Text>
      </Text>
    </Box>
  );
};

export default SocialLogin;
