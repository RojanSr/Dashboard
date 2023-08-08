import React from "react";
import { Button, Box, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export default function SecondaryBtn(props) {
  return (
    <Box>
      <Button
        color={props.isRed ? "#FF0909" : "#2F4CDD"}
        fontSize="14px"
        fontWeight="500"
        bg="none"
        border={props.isRed ? "1px solid #FF0909" : "1px solid #2F4CDD"}
        p="4px 16px"
        // minW={"90px"}
        // textOverflow={"ellipsis"}
      >
        <Box display="flex" alignItems="center" gap="10px">
          <AddIcon />
          <Text>{props.name}</Text>
        </Box>
      </Button>
    </Box>
  );
}
