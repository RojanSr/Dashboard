import {
  Box,
  Text,
  HStack,
  Input,
  Grid,
  GridItem,
  VStack,
  Select,
} from "@chakra-ui/react";
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

const SelectAction = ({ name, placeholder }) => {
  return (
    <GridItem>
      <Text mb={2}>{name}</Text>
      <Select
        placeholder={placeholder}
        w={{ base: "140px", md: "190px", lg: "218px" }}
        mb="24px"
        py={2}
        color="#3E4954;"
        mt={"-4"}
        fontSize={{ base: "14px", md: "15px" }}
        cursor="pointer"
        fontWeight="500"
        variant="flushed"
        opacity="0.5"
      >
        <option value="option1" style={{ fontFamily: "Poppins, sans-serif" }}>
          Option 1
        </option>
        <option value="option2" style={{ fontFamily: "Poppins, sans-serif" }}>
          Option 2
        </option>
        <option value="option3" style={{ fontFamily: "Poppins, sans-serif" }}>
          Option 3
        </option>
      </Select>
    </GridItem>
  );
};

const InputAction = ({ name, placeholder }) => {
  return (
    <GridItem>
      <Text>{name}</Text>
      <HStack w={{ base: "140px", md: "190px", lg: "218px" }}>
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
          gridColumnGap={{ base: "16px", md: "32px", lg: "56px" }}
        >
          {data.map((item) => {
            if (item.type === "option") {
              return (
                <Box key={item.name}>
                  <SelectAction
                    name={item.name}
                    placeholder={item.placeholder}
                  />
                </Box>
              );
            } else {
              return (
                <Box key={item.name}>
                  <InputAction
                    name={item.name}
                    placeholder={item.placeholder}
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
