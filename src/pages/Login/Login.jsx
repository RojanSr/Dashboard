import React from "react";
import { Text, Box } from "@chakra-ui/react";
import UsernameIcon from "../../assets/Login/username_icon.svg";
import { LockIcon } from "@chakra-ui/icons";
import FormInput from "../../components/form/input";
import GoogleIcon from "../../assets/Login/google_icon.svg";
import FacebookIcon from "../../assets/Login/facebook_icon.svg";
import SocialLogin from "../../components/form/socialLogin";
import { Link } from "react-router-dom";
import FormBtn from "../../components/button/FormBtn";

import { mifin_colors } from "../../theme/color";

const Login = () => {
  return (
    <Box
      color={mifin_colors.primary_dark}
      display="flex"
      flexDirection="column"
      alignItems="center"
      px="20px"
    >
      <Text
        fontWeight="700"
        fontSize={{ base: "40px", lg: "30px" }}
        color={mifin_colors.primary}
      >
        LOGIN
      </Text>
      <Text mb={4} textAlign="center" opacity="0.7">
        How to i get started lorem ipsum dolor at?
      </Text>

      <FormInput leftIcon={UsernameIcon} placeholder="Username" type="text" />

      <FormInput
        leftIcon={<LockIcon />}
        placeholder="Password"
        type="password"
      />

      <FormBtn text="Login Now" />

      <Text
        fontWeight="300"
        fontSize="12px"
        mb={4}
        mt={2}
        color={mifin_colors.primary}
      >
        Don't have an account?
        <Link to="/signup">
          <Text
            as="span"
            fontWeight="600"
            _active={{
              opacity: "0.8",
            }}
          >
            {" "}
            Sign up
          </Text>
        </Link>
      </Text>

      <Text fontSize="16px">
        <Text as="span" fontWeight="700">
          Login
        </Text>{" "}
        with Others
      </Text>

      <Box display="flex" flexDirection="column" gap="16px" mt={2}>
        <SocialLogin icon={GoogleIcon} text="Google" />
        <SocialLogin icon={FacebookIcon} text="Facebook" />
      </Box>
    </Box>
  );
};
export default Login;
