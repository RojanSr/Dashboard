import React from "react";
import { Text, Box } from "@chakra-ui/react";
import UsernameIcon from "../../assets/Login/username_icon.svg";
import { LockIcon } from "@chakra-ui/icons";
import FormInput from "../../components/form/input";
import GoogleIcon from "../../assets/Login/google_icon.svg";
import FacebookIcon from "../../assets/Login/facebook_icon.svg";
import SocialLogin from "../../components/form/socialLogin";
import { Link, useNavigate } from "react-router-dom";
import { NAVIGATION_ROUTES } from "../../routes/routes.constant";
import FormBtn from "../../components/button/FormBtn";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema as schema } from "../../schema/FormSchema";

import axios from "axios";

import { mifin_colors } from "../../theme/color";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: data.username,
          password: data.password,
        }
      );
      const token = response.data;
      localStorage.setItem("AccessToken", token["access_token"]);
      navigate(NAVIGATION_ROUTES.DASHBOARD, { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

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
        How do i get started at miFIN?
      </Text>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          leftIcon={UsernameIcon}
          placeholder="Username"
          type="text"
          control={control}
          name="username"
          errors={errors}
        />

        <FormInput
          leftIcon={<LockIcon />}
          placeholder="Password"
          type="password"
          control={control}
          name="password"
          errors={errors}
        />

        <FormBtn text="Login Now" />
      </form>

      <Text
        fontWeight="300"
        fontSize="12px"
        mb={4}
        mt={2}
        color={mifin_colors.primary}
      >
        Don't have an account?
        <Link to={NAVIGATION_ROUTES.SIGNUP}>
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
