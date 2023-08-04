import React from "react";
import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username must be atleast 4 characters")
    .max(16, "Username exceeds 16 characters")
    .required(),
  password: yup
    .string()
    .min(8)
    .max(32)
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, "Password must contain atleast a number")
    .matches(/[a-z]/, "Password must contain atleast a lowercase")
    .matches(/[A-Z]/, "Password must contain atleast an uppercase")
    .required(),
  email: yup
    .string()
    .email()
    .matches(
      /^[a-z0-9._%+-]+@([a-z0-9-]+\.)+com$/i,
      "email must be a valid email"
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Did not Match"),
});

export const LoginSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username must be atleast 4 characters")
    .max(16, "Username exceeds 16 characters")

    .required(),
  password: yup
    .string()
    .min(8)
    .max(32)
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, "Password must contain atleast a number")
    .matches(/[a-z]/, "Password must contain atleast a lowercase")
    .matches(/[A-Z]/, "Password must contain atleast an uppercase")
    .required(),
});
