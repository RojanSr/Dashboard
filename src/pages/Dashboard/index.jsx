import { Text, VStack } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <VStack>
      <Text fontSize="8rem">Dashboard</Text>
      <VStack>
        <Text fontSize="2rem" opacity="0.6">
          (Not Started Yet)
        </Text>
      </VStack>
    </VStack>
  );
};

export default Dashboard;
