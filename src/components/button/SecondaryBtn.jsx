import React from "react";
import { Button, Box } from "@chakra-ui/react";

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
        {props.name}
      </Button>
    </Box>
  );
}
