import React from "react";
import { Button } from "@chakra-ui/react";

export default function SecondaryBtn(props) {
  return (
    <Button
      color={props.isRed ? "#FF0909" : "#2F4CDD"}
      fontSize="14px"
      fontWeight="500"
      bg="none"
      border={props.isRed ? "1px solid #FF0909" : "1px solid #2F4CDD"}
      p="4px 16px"
    >
      {props.name}
    </Button>
  );
}