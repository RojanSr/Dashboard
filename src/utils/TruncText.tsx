import { Text } from "@chakra-ui/react";
import React from "react";

const TruncText = ({ text }:{text:string}) => {
  let truncateLength = 50; // 50 characters
  return (
    <>
      {text.length > truncateLength
        ? text.slice(0, truncateLength) + "..."
        : text}
    </>
  );
};

export default TruncText;
