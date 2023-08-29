import React from "react";
import { Button, Box, Text } from "@chakra-ui/react";

export default function SecondaryBtn(props) {
  return (
    <>
      <Button
        color={props.isRed ? "#FF0909" : "#2F4CDD"}
        fontSize="14px"
        fontWeight="500"
        bg="none"
        border={props.isRed ? "1px solid #FF0909" : "1px solid #2F4CDD"}
        p="4px 16px"
        _hover={{
          background: "rgba(0,0,0,0.05)",
        }}
        _active={{
          background: "rgba(0,0,0,0.15)",
        }}
      >
        <Box display="flex" alignItems="center" gap="10px">
          {/* This is same as {props.icon && props.icon} */}
          {props?.icon}
          {props.name && <Text>{props.name}</Text>}
        </Box>
      </Button>
    </>
  );
}
