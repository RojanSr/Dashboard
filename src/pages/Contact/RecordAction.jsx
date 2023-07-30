import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Input,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

const data = [
  { name: "Action", placeholder: "Select", type: "option", icon: true },
  { name: "Action Date", placeholder: "Select", type: "option", icon: true },
  { name: "Action Time", placeholder: "Enter", type: "input", icon: false },
  {
    name: "Action Code",
    placeholder: "Select",
    type: "option",
    icon: true,
  },
  { name: "Code Status", placeholder: "Enter", type: "option", icon: true },
  { name: "Next Action", placeholder: "Enter", type: "option", icon: true },
  {
    name: "Next Action Date",
    placeholder: "Select",
    type: "option",
    icon: true,
  },
  {
    name: "Next Action Time",
    placeholder: "Select",
    type: "option",
    icon: true,
  },
  { name: "Remarks", placeholder: "Enter", type: "input", icon: false },
];

const MenuAction = ({ name, placeholder, hasIcon }) => {
  return (
    <GridItem>
      <Text mb={2}>{name}</Text>
      <Menu>
        <MenuButton
          w={{ base: "140px", md: "190px", lg: "250px" }}
          mb="24px"
          //   px={4}
          py={2}
          borderBottom="1px solid rgba(0, 0, 0, 0.15)"
          textAlign="start"
          color="#3E4954;"
        >
          <HStack justifyContent="space-between">
            <Text fontSize="15px" fontWeight="500" opacity="0.5">
              {placeholder}
            </Text>
            {hasIcon && (
              <ChevronDownIcon
                stroke="#000"
                fontSize="18px"
                strokeWidth="1px"
              />
            )}
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
          <MenuItem>Option 3</MenuItem>
          <MenuItem>Option 4</MenuItem>
        </MenuList>
      </Menu>
    </GridItem>
  );
};

const InputAction = ({ name, placeholder, hasIcon }) => {
  return (
    <GridItem>
      <Text>{name}</Text>
      <HStack w={{ base: "140px", md: "190px", lg: "250px" }}>
        <Input
          w="inherit"
          placeholder={placeholder}
          _placeholder={{
            fontSize: "15px",
            fontWeight: "500",
            color: "#3E4954",
            opacity: 0.5,
          }}
          variant="flushed"
          _focus={{
            boxShadow: "0 0 0 rgb(255, 255, 255)",
            borderColor: "rgba(0, 0, 0, 0.15)",
          }}
        />
      </HStack>
    </GridItem>
  );
};

const RecordAction = () => {
  return (
    <Box mb="50px">
      <Text
        color="#3E4954"
        fontSize={{ base: "20px", md: "24px" }}
        mb="25px"
        mt={{ base: "21px", md: "0px" }}
        fontWeight="700"
      >
        Record Action
      </Text>
      <VStack>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gridColumnGap={{ base: "16px", md: "32px", lg: "116px" }}
        >
          {data.map((item) => {
            if (item.type === "option") {
              return (
                <Box key={item.name}>
                  <MenuAction
                    name={item.name}
                    placeholder={item.placeholder}
                    hasIcon={item.icon}
                  />
                </Box>
              );
            } else {
              return (
                <Box key={item.name}>
                  <InputAction
                    name={item.name}
                    placeholder={item.placeholder}
                    hasIcon={item.icon}
                  />
                </Box>
              );
            }
          })}
        </Grid>
      </VStack>
    </Box>
  );
};

export default RecordAction;
