import React from "react";
import * as yup from "yup";

export const FormSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username must be atleast 4 characters")
    .max(16, "Username exceeds 16 characters")
    .required(),
  password: yup
    .string()
    .min(8)
    .max(32)
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password should have atleast one letter and one number"
    ),
  email: yup.string().email().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Did not Match"),
});
