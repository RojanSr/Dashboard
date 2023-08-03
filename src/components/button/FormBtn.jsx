import React from "react";
import { Box, Button } from "@chakra-ui/react";

const FormBtn = ({ text }) => {
  return (
    <Box>
      <Button
        type="submit"
        color="#fff"
        fontSize="12px"
        bg="linear-gradient(134deg, #9181F4 0%, #5038ED 100%)"
        minH="52px"
        p="17px 30px"
        fontWeight="700"
        mt="6px"
        borderRadius="16px"
        boxShadow="0px 8px 21px 0px rgba(0, 0, 0, 0.16)"
        _hover={{
          opacity: "0.8",
          transform: "scale(1.04)",
        }}
        _active={{
          opacity: "1.1",
          transform: "scale(0.92)",
        }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default FormBtn;
