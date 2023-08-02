import React, { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Image,
  Button,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const FormInput = ({ leftIcon, placeholder, type }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup size={{ base: "md", lg: "lg" }} mb="10px">
      <InputLeftElement>
        <Image src={leftIcon} w="24px" h="24px" />
      </InputLeftElement>
      <Input
        type={type == "password" ? (show ? "text" : "password") : type}
        placeholder={placeholder}
        fontSize="16px"
        variant="filled"
        borderRadius="16px"
        bgColor="rgba(240, 237, 255, 0.80)"
        _placeholder={{
          color: "#1C1C1C",
          opacity: 1,
          fontSize: "12px",
          fontWeight: 400,
        }}
      />
      {type === "password" && (
        <InputRightElement
          width="4.5rem"
          onClick={handleClick}
          cursor="pointer"
        >
          {show ? <ViewOffIcon /> : <ViewIcon />}
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default FormInput;
