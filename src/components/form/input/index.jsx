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

import { useController } from "react-hook-form";

const FormInput = ({ leftIcon, placeholder, type, control, errors, name }) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  const [show, setShow] = useState(false);

  return (
    <Box w={{ base: "300px", md: "400px" }}>
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
          name={field.name}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value !== undefined ? field.value : ""}
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
      <Text color="red.400" fontSize="0.8rem" textAlign="center">
        {errors[field.name]?.message}
      </Text>
    </Box>
  );
};

export default FormInput;
