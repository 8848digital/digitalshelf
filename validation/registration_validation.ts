
import * as Yup from 'yup';

export const RegistrationValidation = Yup.object().shape({
    name:Yup.string()
        .required("Name is a required field")
        .min(5,"Name must be atleast 5 characters"),
    email: Yup.string()
        .email()
        .required("Please enter valid email"),
    contact_number: Yup.string()
        .typeError("That doesn't look like a phone number")
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Phone number is not valid"
          )
        .min(10)
        .required('A phone number is required'),
    address:Yup.string()
        .required("Please enter address"),
    gst_number: Yup.string(),
    state:Yup.string()
        .required("Please enter your State"),
    city:Yup.string()
        .required("Please select valid City"),
    password:Yup.string()
        .required("Please enter your password")
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
    confirm_password:Yup.string()
        .required("Please confirm your password")
        .oneOf([Yup.ref('password'), null], "Password doesn't match")

}) 