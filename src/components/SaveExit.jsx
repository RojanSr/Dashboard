import { Button, Flex, VStack } from "@chakra-ui/react";
import React from "react";

const SaveExit = () => {
  const btnData = [
    { name: "Cancel", bg: "none", border: "#fff" },
    { name: "Save & Exit", bg: "none", border: "#fff" },
    { name: "Save", bg: "#2F4CDD", border: "#2F4CDD" },
  ];

  return (
    <VStack display={{ base: "flex", md: "none" }}>
      <Flex
        mx="17px"
        bg="#272937"
        p="15px 30px"
        gap="13px"
        justifyContent="center"
        borderRadius="10px"
        mb="16px"
        mt="28px"
      >
        {btnData.map((btn) => (
          <Button
            bg={btn.bg}
            border={`1px solid ${btn.border}`}
            color="#fff"
            fontSize="14px"
            fontWeight="500"
            _hover={{
              background: "rgba(255,255,255,0.2)",
            }}
            _active={{
              background: "rgba(255,255,255,0.4)",
            }}
          >
            {btn.name}
          </Button>
        ))}
      </Flex>
    </VStack>
  );
};

export default SaveExit;
