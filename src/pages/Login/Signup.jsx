import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form/input";
import UsernameIcon from "../../assets/Login/username_icon.svg";
import { LockIcon } from "@chakra-ui/icons";
import AtIcon from "../../assets/Login/at-solid.svg";
import FormBtn from "../../components/button/FormBtn";
import { mifin_colors } from "../../theme/color";
import { useForm } from "react-hook-form";
import { NAVIGATION_ROUTES } from "../../routes/routes.constant";

const Signup = () => {
  const registerOptions = {
    username: {
      required: "Username is required",
      minLength: {
        value: 4,
        message: "Username should be atleast 4 characters long",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value:
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "Email is in Invalid Format",
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
    confirmPassword: {
      validate: (value) =>
        value === getValues("password") || "Passwords do not match",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate(NAVIGATION_ROUTES.DASHBOARD);
  };
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
          leftIcon={AtIcon}
          placeholder="Email"
          type="email"
          register={register("email", registerOptions.email)}
          name="email"
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
        <FormInput
          leftIcon={<LockIcon />}
          placeholder="Confirm Password"
          type="password"
          register={register(
            "confirmPassword",
            registerOptions.confirmPassword
          )}
          name="confirmPassword"
          errors={errors}
        />
        <FormBtn text="Signup" />
      </form>
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
