import React from "react";
import { ListItem, HStack, Image, Text } from "@chakra-ui/react";
import SiderbarIcon from "../../assets/sidebar_icon.svg";

const BarItem = ({ items, clickName, toggleClickName }) => {
  return (
    <ListItem
      key={items.name}
      p="10px 8px"
      bgColor={clickName === items.name && "#2295DD"}
      borderRadius="8px"
      cursor="pointer"
      _hover={{
        opacity: 0.9,
      }}
      onClick={() => toggleClickName(items.name)}
    >
      <HStack>
        <Image src={SiderbarIcon} w="24px" h="24px" />
        <Text>{items.name}</Text>
      </HStack>
    </ListItem>
  );
};

export default BarItem;
