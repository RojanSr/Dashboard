import { Button, Text } from "@chakra-ui/react";
import React from "react";

export default function PrimaryBtn(props) {
  return (
    <Button
      p="10px 15px"
      borderRadius="8px"
      justifyContent="center"
      alignItems="center"
      color={props.click === props.name ? "#fff" : "#000"}
      bgColor={props.click === props.name ? "#3E4954" : "#EEF0F6"}
      cursor="pointer"
      height="38px"
      fontWeight="400"
      _hover={{
        opacity: 0.8,
      }}
    >
      <Text fontSize="15px">{props.name}</Text>
    </Button>
  );
}
