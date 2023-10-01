import * as yup from "yup";

export const adminSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  admin: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("first name is required"),
      middleName: yup.string().required("middle name name is required"),
      lastName: yup.string().required("last name name is required"),
    }),
  }),
});
