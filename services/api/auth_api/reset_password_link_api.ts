import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { ResetpasswordlinkApiMethods } from "../../methods/Reset_password_link_methods";
import { client } from "../general_api/cookie_instance";
const password_link = async (res: any) => {
  let response: any;
  const token = localStorage.getItem("token");
  console.log(token);
  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };
  let body = {
    version: "v1",
    method: "send_reset_link",
    entity: "registration",
    link: "http://localhost:3000/reset_password",
    email: res.email
  };

  await client.post(
      `${CONSTANTS.API_BASE_URL}/${ResetpasswordlinkApiMethods.ResetpasswordlinkApi}`,
      body,config
    )
    .then((res) => {
      console.log(res.data.message.msg);
      response = res;
    })
    .catch((err) => console.log(err));
  return response;
};

const resetpassword_link = (res: any) => password_link(res);

export default resetpassword_link;