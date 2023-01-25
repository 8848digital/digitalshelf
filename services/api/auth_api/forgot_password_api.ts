import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { ForgotpasswordApiMethods } from "../../methods/forgot_password_method";
import { client } from "../general_api/cookie_instance";
const forgot_password = async (res: any) => {
  let response: any;
  const token = localStorage.getItem("token");
  console.log(token);
  // const config = {
  //   headers: {
  //     Authorization: `Token ${token}`,
  //   },
  // };
  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };
  let body = {
    version: "v1",
    method: "reset_password",
    entity: "registration",
    new_password: res.newPassword,
    email: res.email
  };

  await client.post(
      `${CONSTANTS.API_BASE_URL}/${ForgotpasswordApiMethods.ForgotpasswordApi}`,
      body,
      config
    )
    .then((res) => {
      console.log(res.data.message.msg);
      response = res;
    })
    .catch((err) => console.log(err));
  return response;
};

const forgotpasswordapi = (res: any) => forgot_password(res);

export default forgotpasswordapi;
