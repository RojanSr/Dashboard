import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form/input";
import UsernameIcon from "../../assets/Login/username_icon.svg";
import { LockIcon } from "@chakra-ui/icons";
import AtIcon from "../../assets/Login/at-solid.svg";
import FormBtn from "../../components/button/FormBtn";
import { mifin_colors } from "../../theme/color";
import { useForm } from "react-hook-form";
import { NAVIGATION_ROUTES } from "../../routes/routes.constant";
import { FormSchema as schema } from "../../schema/FormSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
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
          register={register("username")}
          name="username"
          errors={errors}
        />
        <FormInput
          leftIcon={AtIcon}
          placeholder="Email"
          type="email"
          register={register("email")}
          name="email"
          errors={errors}
        />
        <FormInput
          leftIcon={<LockIcon />}
          placeholder="Password"
          type="password"
          register={register("password")}
          name="password"
          errors={errors}
        />
        <FormInput
          leftIcon={<LockIcon />}
          placeholder="Confirm Password"
          type="password"
          register={register("confirmPassword")}
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
