import React, { useState } from "react";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon, UnlockIcon } from "@chakra-ui/icons";

const FormInput = ({ leftIcon, placeholder, type, register, errors, name }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <InputGroup size={{ base: "md", lg: "lg" }} mb="10px">
        <InputLeftElement>
          {type === "password" ? (
            show ? (
              <UnlockIcon />
            ) : (
              leftIcon
            )
          ) : (
            <Image src={leftIcon} w="18px" h="18px" />
          )}
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
          name={name}
          {...register}
        />

        {type === "password" && (
          <InputRightElement
            width="4.5rem"
            onMouseDown={() => setShow(true)}
            onMouseUp={() => setShow(false)}
            onMouseLeave={() => setShow(false)}
            onTouchStart={() => setShow(true)}
            onTouchEnd={() => setShow(false)}
            onTouchCancel={() => setShow(false)}
            cursor="pointer"
          >
            {show ? <ViewOffIcon /> : <ViewIcon />}
          </InputRightElement>
        )}
      </InputGroup>
      {errors[name] && (
        <Text color="red.400" fontSize="0.8rem">
          {errors[name].message}
        </Text>
      )}
    </>
  );
};

export default FormInput;
