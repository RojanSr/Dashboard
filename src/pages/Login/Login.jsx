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

import { mifin_colors } from "../../theme/color";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Form Input Register Options
  const registerOptions = {
    username: {
      required: "Username is required",
      minLength: {
        value: 4,
        message: "Username should be atleast 4 characters long",
      },
    },

    password: {
      required: "Password is required",
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message:
          "Password should have minimum eight characters, at least one letter and one number",
      },
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate(NAVIGATION_ROUTES.DASHBOARD);
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
          register={register("username", registerOptions.username)}
          name="username"
          errors={errors}
        />

        <FormInput
          leftIcon={<LockIcon />}
          placeholder="Password"
          type="password"
          register={register("password", registerOptions.password)}
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
