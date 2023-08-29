import { Card, Box, Text, HStack } from "@chakra-ui/react";
import React from "react";

const CaseCard = ({ isImportant, title, quantity, per }) => {
  return (
    <Card
      p="20px 26px"
      boxShadow="0px 0px 20px 0px rgba(0, 0, 0, 0.07)"
      bg="#fff"
      w={{ base: "180px", md: "265px" }}
      border="1px solid #E5EAF2"
      borderRadius="15px"
    >
      <Box>
        <Text fontSize="15px">{title}</Text>
        <HStack>
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight="700"
            color={isImportant && "red"}
          >
            {quantity}
          </Text>
          <Text>{per && `(${per})`}</Text>
        </HStack>
      </Box>
    </Card>
  );
};

export default CaseCard;
