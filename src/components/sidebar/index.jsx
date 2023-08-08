import React, { Fragment, useState } from "react";
import { UnorderedList, Box, Flex } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import BarItem from "./BarItem";

import { NAVIGATION_ROUTES } from "../../routes/routes.constant";
import { Link } from "react-router-dom";
import MinfinLogo from "../header/minfinLogo";

const Sidebar = ({ isOpen, toggleBar }) => {
  const [clickName, setClickName] = useState("Dashboard");

  const sidebars = [
    { name: "Dashboard", path: NAVIGATION_ROUTES.DASHBOARD },
    { name: "Client Info", path: NAVIGATION_ROUTES.CLIENT },
    {
      name: "Manage Data",
      path: "",
      child: [
        { name: "Posts", path: NAVIGATION_ROUTES.POSTS },
        { name: "Users", path: NAVIGATION_ROUTES.USERS },
      ],
    },
  ];

  function toggleClickName(name) {
    setClickName(name);
  }

  return (
    <Box
      as="nav"
      h="100vh"
      overflowY="auto"
      bg="#1A2139"
      minW="16vw"
      color="#fff"
      display={isOpen ? "block" : "none"}
      position="fixed"
      zIndex="9"
    >
      {/* Sidebar Logo */}

      <Flex p="19px 24px" gap="22px" alignItems="center" bg="#000">
        <HamburgerIcon fontSize="24px" onClick={toggleBar} cursor="pointer" />
        <Link
          to={NAVIGATION_ROUTES.DASHBOARD}
          onClick={() => {
            setClickName("Dashboard");
          }}
        >
          <MinfinLogo />
        </Link>
      </Flex>

      {/* Sidebar Items */}
      <UnorderedList listStyleType="none" w="212px" m="8px 12px">
        {sidebars.map((items) => (
          <Fragment key={items.name}>
            <BarItem
              items={items}
              clickName={clickName}
              toggleClickName={toggleClickName}
            />
          </Fragment>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Sidebar;
