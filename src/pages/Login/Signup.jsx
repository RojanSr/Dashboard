import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormInput from "../../components/form/input";
import UsernameIcon from "../../assets/Login/username_icon.svg";
import { LockIcon } from "@chakra-ui/icons";
import AtIcon from "../../assets/Login/at-solid.svg";
import FormBtn from "../../components/button/FormBtn";
import { mifin_colors } from "../../theme/color";

const Signup = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      px="20px"
      color={mifin_colors.primary_dark}
    >
      <Text
        fontWeight="700"
        fontSize={{ base: "40px", lg: "30px" }}
        color={mifin_colors.primary}
      >
        SIGNUP
      </Text>
      <Text opacity="0.8" mb={4} textAlign="center">
        How do i get started lorem ipsum dolor at?
      </Text>

      <FormInput leftIcon={UsernameIcon} placeholder="Username" type="text" />
      <FormInput leftIcon={AtIcon} placeholder="Email" type="email" />
      <FormInput
        leftIcon={<LockIcon />}
        placeholder="Password"
        type="password"
      />
      <FormInput
        leftIcon={<LockIcon />}
        placeholder="Confirm Password"
        type="password"
      />
      <FormBtn text="Signup" />
      <Text
        fontWeight="300"
        fontSize="12px"
        mb={4}
        mt={2}
        color={mifin_colors.primary}
      >
        Already have an account?
        <Link to="/login">
          <Text
            as="span"
            fontWeight="600"
            _active={{
              opacity: "0.8",
            }}
          >
            {" "}
            Login
          </Text>
        </Link>
      </Text>
    </Box>
  );
};

export default Signup;
