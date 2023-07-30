import React from "react";

import { Button, Flex, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const PrevNextPageBtn = () => {
  return (
    <Flex justifyContent="space-between" mx="18px" mt="7px" mb="62px">
      <Flex alignItems="center" gap={3}>
        <Button borderRadius="10px" w="47px" h="47">
          <ChevronLeftIcon fontSize="22px" color="#2F4CDD" />
        </Button>
        <Text color="rgba(0, 0, 0, 0.50)" fontWeight="400" fontSize="12px">
          Previous
        </Text>
      </Flex>
      <Flex alignItems="center" gap={3}>
        <Text color="rgba(0, 0, 0, 0.50)" fontWeight="400" fontSize="12px">
          Next
        </Text>
        <Button borderRadius="10px" w="47px" h="47">
          <ChevronRightIcon fontSize="22px" color="#2F4CDD" />
        </Button>
      </Flex>
    </Flex>
  );
};
export default PrevNextPageBtn;
