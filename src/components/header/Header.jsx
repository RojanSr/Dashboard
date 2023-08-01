import React from "react";

// chakra import
import {
  Box,
  Image,
  Flex,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
} from "@chakra-ui/icons";
import { NAVIGATION_ROUTES } from "../../routes/routes.constant";

// assets import
import MainLogo from "../../assets/MainLogo.svg";
import CompanyLogo from "../../assets/CompanyLogo.png";
import NotificationIcon from "../../assets/notification.svg";
import { Link } from "react-router-dom";

export default function Header({ toggleBar, isOpen }) {
  let date = new Date();

  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);

  const formattedLastLogin = date.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <Box>
      <Flex
        as="header"
        boxShadow="0px 8px 12px 0px rgba(0, 0, 0, 0.04)"
        p={{ base: "11px 16px", md: "15px 24px" }}
        alignItems="center"
        justifyContent={isOpen ? "flex-end" : "space-between"}
      >
        <Flex gap="21px" alignItems="center" display={isOpen ? "none" : "flex"}>
          <HamburgerIcon
            w="30px"
            h="20px"
            cursor="pointer"
            display={{ base: "none", md: "block" }}
            onClick={() => toggleBar()}
          />
          <ChevronLeftIcon
            fontSize="28px"
            cursor="pointer"
            onClick={() => toggleBar()}
            _hover={{
              transform: "scale(1.1)",
            }}
            transition="0.12s ease-in"
          />
          <Link to={NAVIGATION_ROUTES.DASHBOARD}>
            <HStack gap="10px">
              <Image
                src={MainLogo}
                h={{ base: "32px", md: "42px" }}
                w={{ base: "32px", md: "42px" }}
              />
              <Box lineHeight="16px">
                <Text
                  color={{ base: "#000", md: "#3696C6" }}
                  fontSize={{ base: "18px", md: "24px" }}
                  fontWeight="800"
                >
                  miFIN
                </Text>
                <Text
                  color={{ base: "#000", md: "#0F6889" }}
                  fontSize={{ base: "8px", md: "12px" }}
                  fontWeight="500"
                >
                  qualtech
                </Text>
              </Box>
            </HStack>
          </Link>
        </Flex>

        <Flex
          alignItems="center"
          gap={3}
          display={{ base: "none", md: "flex" }}
        >
          <Flex
            alignItems="center"
            gap={2}
            px="28px"
            borderRight="2px solid rgba(0,0,0,0.4)"
          >
            <Image w="29px" h="47px" src={CompanyLogo} />
            <Text fontSize="20px" fontWeight="600" color="#3E4954">
              ABC Inc
            </Text>
          </Flex>
          <Box ml={5}>
            <Flex alignItems="center">
              <Box
                w="24px"
                h="28px"
                mr="37px"
                position="relative"
                _after={{
                  content: "'13'",
                  position: "absolute",
                  top: "0px",
                  right: "-6px",
                  backgroundColor: "#FF0909",
                  padding: "0px 4px",
                  fontSize: "11px",
                  fontWeight: 400,
                  borderRadius: "6px",
                  color: "#fff",
                }}
              >
                <Image src={NotificationIcon} />
              </Box>

              <Box>
                <Text textAlign="right">Mark Anderson</Text>
                <Flex gap={2} alignItems="center">
                  <Text fontSize="12px" fontWeight="400" opacity="0.6">
                    Last Login: {formattedLastLogin}
                  </Text>
                  <Flex
                    bgColor="#3E4954"
                    color="#fff"
                    p="4px 12px"
                    borderRadius="4px"
                    fontSize="12px"
                    height="22px"
                    alignItems="center"
                  >
                    <Text>{formattedDate}</Text>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Menu>
            <MenuButton as={Button} bg="none" px={-3}>
              <ChevronDownIcon fontSize="28px" cursor="pointer" />
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>History</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
