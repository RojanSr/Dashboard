import React, { Fragment, useState } from "react";
import {
  UnorderedList,
  Box,
  Flex,
  Image,
  Text,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MainLogo from "../../assets/MainLogo.svg";
import BarItem from "./BarItem";
import { NAVIGATION_ROUTES } from "../../routes/routes.constant";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleBar }) => {
  const [clickName, setClickName] = useState("Dashboard");

  const sidebars = [
    { name: "Dashboard", path: NAVIGATION_ROUTES.DASHBOARD },
    { name: "Users", path: NAVIGATION_ROUTES.USERS },
  ];

  function toggleClickName(name) {
    setClickName(name);
  }

  return (
    <Box
      as="nav"
      h="100vh"
      bg="#1A2139"
      minW="16vw"
      color="#fff"
      display={isOpen ? "block" : "none"}
      position="fixed"
      zIndex="1"
    >
      {/* Sidebar Logo */}
      <Flex p="19px 24px" gap="22px" alignItems="center">
        <HamburgerIcon fontSize="24px" onClick={toggleBar} cursor="pointer" />
        <HStack gap="10px">
          <Image
            src={MainLogo}
            h={{ base: "32px", md: "42px" }}
            w={{ base: "32px", md: "42px" }}
          />
          <Box lineHeight="16px">
            <Text
              color="#3696C6"
              fontSize={{ base: "18px", md: "24px" }}
              fontWeight="800"
            >
              miFIN
            </Text>
            <Text
              color="#0F6889"
              fontSize={{ base: "8px", md: "12px" }}
              fontWeight="500"
            >
              qualtech
            </Text>
          </Box>
        </HStack>
      </Flex>

      {/* Sidebar Items */}
      <UnorderedList listStyleType="none" w="212px" m="8px 12px">
        {sidebars.map((items) => (
          <Link key={items.name} to={items.path}>
            <BarItem
              items={items}
              clickName={clickName}
              toggleClickName={toggleClickName}
            />
          </Link>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Sidebar;
