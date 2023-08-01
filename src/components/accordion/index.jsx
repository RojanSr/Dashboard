import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  Text,
  AccordionPanel,
} from "@chakra-ui/react";

const AccordionComp = ({ text, el }) => {
  return (
    <AccordionItem py="24px">
      <Text as="h2">
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <Text color="#3E4954" fontWeight="700" fontSize="20px">
              {text}
            </Text>
          </Box>
          <AccordionIcon fontSize="30px" />
        </AccordionButton>
      </Text>

      <AccordionPanel>{el}</AccordionPanel>
    </AccordionItem>
  );
};

export default AccordionComp;
