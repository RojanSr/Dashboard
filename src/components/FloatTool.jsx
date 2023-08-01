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
      minW={{ base: "311px", md: "255px" }}
      h={{ base: "72px", md: "59px" }}
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      gap="30px"
      px="24px"
      pos="fixed"
      left={{ base: "50%", md: "15px" }}
      transform={{ base: "translateX(-50%)", md: "none" }}
      bottom="30px"
      bgColor="#fff"
      zIndex="1"
    >
      <Box>
        <ChevronDownIcon fontSize="22px" transform="translateX(5px)" />
      </Box>
      <Divider orientation="vertical" />
      <Box>
        <Text fontSize="12px" fontWeight="400">
          Add
        </Text>
      </Box>
      <Box>
        <Image src={FloatEditIcon} />
      </Box>
      <Box>
        <Image src={FloatHistoryIcon} />
      </Box>
      <Box>
        <Image src={FloatUploadIcon} />
      </Box>
    </Flex>
  );
};

export default FloatTool;
