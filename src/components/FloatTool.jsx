import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text, Image, Flex, VStack, Divider } from "@chakra-ui/react";
import React from "react";
import FloatEditIcon from "../assets/float_edit.svg";
import FloatHistoryIcon from "../assets/float_history.svg";
import FloatUploadIcon from "../assets/float_upload.svg";

const FloatTool = () => {
  return (
    <Flex
      boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.3)"
      minW={{ base: "255px", md: "311px" }}
      maxW={{ base: "290px", md: "311px" }}
      h={{ base: "72px", md: "59px" }}
      alignItems="center"
      borderRadius="10px"
      gap="30px"
      px="24px"
      bgColor="#fff"
      zIndex="1"
    >
      <Box cursor="pointer">
        <ChevronDownIcon fontSize="22px" transform="translateX(5px)" />
      </Box>
      <Divider orientation="vertical" />
      <Box cursor="pointer">
        <Text fontSize="12px" fontWeight="400">
          Add
        </Text>
      </Box>
      <Box cursor="pointer">
        <Image src={FloatEditIcon} minW="20px" />
      </Box>
      <Box cursor="pointer">
        <Image src={FloatHistoryIcon} minW="20px" />
      </Box>
      <Box cursor="pointer">
        <Image src={FloatUploadIcon} minW="20px" />
      </Box>
    </Flex>
  );
};

export default FloatTool;
