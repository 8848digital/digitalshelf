import * as Yup from 'yup';

const Changepassword_Validation = Yup.object().shape({
    oldPassword:Yup.string()
        .required("Password field required")
        .min(8, "Password is too short - should be 8 chars minimun"),
    newPassword:Yup.string()
        .required("Password field required")
        .min(8, "Password is too short - should be 8 chars minimun")
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    confirmPassword:Yup.string()
        .required("Password field required")
        .min(8, "Password is too short - should be 8 chars minimun")
        .oneOf([Yup.ref("newPassword")], "Password doesn't match")
});
export default Changepassword_Validation;