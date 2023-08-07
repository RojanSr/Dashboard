import React, { useState } from "react";
import {
  ListItem,
  HStack,
  Image,
  Text,
  Collapse,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SiderbarIcon from "../../assets/sidebar_icon.svg";
import { ChevronRightIcon } from "@chakra-ui/icons";

const BarItem = ({ items, clickName, toggleClickName }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [childClick, setChildClick] = useState("");

  // Handle which child was clicked and put it in state

  function handleChildClick(i) {
    setChildClick(items.child[i].name);
    toggleClickName(items.child[i].name);
  }

  // This will be rendered if there is child

  if (items.child) {
    return (
      <>
        <ListItem
          p="10px 8px"
          bgColor={clickName === childClick && "#2295DD"}
          borderRadius="8px"
          cursor="pointer"
          _hover={{
            opacity: 0.9,
            bgColor: "#2295DD",
          }}
          onClick={onToggle}
          mb={2}
        >
          <HStack justifyContent="space-between">
            <HStack>
              <Image src={SiderbarIcon} w="24px" h="24px" />
              <Text>{items.name}</Text>
            </HStack>
            <ChevronRightIcon />
          </HStack>
        </ListItem>
        <Collapse in={isOpen} animateOpacity>
          <Box display="flex" flexDirection="column" gap={1}>
            {items.child.map((item, i) => {
              return (
                <Link key={i} to={item.path}>
                  <Box
                    ml={4}
                    py={2}
                    px={2}
                    color="white"
                    bgColor={
                      clickName === items.child[i].name && "rgba(0, 0, 0, 0.4)"
                    }
                    rounded="md"
                    onClick={() => handleChildClick(i)}
                    _hover={{
                      opacity: 0.9,
                      bgColor: "rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    {item.name}
                  </Box>
                </Link>
              );
            })}
          </Box>
        </Collapse>
      </>
    );
  }

  // This will be rendered if there is no child

  return (
    <Link to={items.path}>
      <ListItem
        p="10px 8px"
        bgColor={clickName === items.name && "#2295DD"}
        borderRadius="8px"
        cursor="pointer"
        _hover={{
          opacity: 0.9,
          bgColor: "#2295DD",
        }}
        onClick={() => toggleClickName(items.name)}
        mb={2}
      >
        <HStack>
          <Image src={SiderbarIcon} w="24px" h="24px" />
          <Text>{items.name}</Text>
        </HStack>
      </ListItem>
    </Link>
  );
};

export default BarItem;
