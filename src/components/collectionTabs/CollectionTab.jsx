import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const CollectionTab = (props) => {
  return (
    <Flex
      p="10px 15px"
      borderRadius="8px"
      justifyContent="center"
      alignItems="center"
      color={props.click === props.name ? "#fff" : "#000"}
      bgColor={props.click === props.name ? "#3E4954" : "#EEF0F6"}
      cursor="pointer"
      height="38px"
    >
      <Text fontSize="15px">{props.name}</Text>
    </Flex>
  );
};
export default CollectionTab;
