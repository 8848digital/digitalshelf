
import * as Yup from 'yup';

export const RegistrationValidationNew = Yup.object().shape({
    name:Yup.string()
        .required("Name is a required field")
        .min(5,"Name must be atleast 5 characters"),
    designation:Yup.string()
        .required("Designation is a required field")
        .min(5,"Designation must be atleast 5 characters"),
    company_name:Yup.string()
        .required("company name is a required field")
        .min(5,"company name must be atleast 5 characters"),
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
          .max(10)
        .required('A phone number is required'),
    address:Yup.string()
        .required("Please enter address"),
    gst_number: Yup.string(),
    state:Yup.string()
        .required("Please enter your State"),
    city:Yup.string()
        .required("Please select valid City"),
    pincode:Yup.string()
        .required("Pincode is required")

}) 