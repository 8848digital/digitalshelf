import * as Yup from "yup";

export const RegistrationValidation = Yup.object().shape({
  name: Yup.string()
    .required("Name is a required field")
    .min(5, "Name must be atleast 5 characters"),
  email: Yup.string().email().required("Please enter valid email"),
  contact: Yup.string()
    .typeError("That doesn't look like a phone number")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(10)
    .max(10)
    .required("A phone number is required"),
  address_1: Yup.string().required("Please enter address line 1"),
  address_2: Yup.string().required("The Street Address field is required."),
  gst_number: Yup.string(),
  state: Yup.string().required("Please enter your State"),
  city: Yup.string().required("Please select valid City"),
  postal_code: Yup.number()
    .min(6, "The Postal Code field must be at least 6 characters in length.")
    .typeError("The Postal Code field must contain only numbers.")
    .required("The Postal Code field is required."),
  password: Yup.string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirm_password: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Password doesn't match"),
});
