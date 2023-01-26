import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { GetotpApiMethods } from "../../methods/get_opt_method";
import { client } from "../general_api/cookie_instance";
const getOtpFetch = async (emailval: any) => {
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
    method: "send_otp",
    entity: "otp",
    email: emailval,
  };

  await client.post(
      `${CONSTANTS.API_BASE_URL}/${GetotpApiMethods.GetotpApi}`,
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

const getOtpFetchApi = (emailval: any) => getOtpFetch(emailval);

export default getOtpFetchApi;
