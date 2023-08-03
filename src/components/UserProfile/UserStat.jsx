import React from "react";
import { Text } from "@chakra-ui/react";

const UserStat = ({ property, value }) => {
  return (
    <>
      <Text fontSize="12px" opacity="0.5">
        {property}
      </Text>
      <Text fontSize="14px">{value}</Text>
    </>
  );
};

export default UserStat;
