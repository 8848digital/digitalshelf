import axios, {AxiosRequestHeaders } from "axios";
import { CONSTANTS } from "../../config/api-config";
import { TokenLoginApiMethods } from "../../methods/token_login-api-methods";

import { client } from "../general_api/cookie_instance";
interface IRaw_Data {
  version?: any;
  method?: any;
  entity?: any;
  api_key?: any;
  api_secret?:any;
}

const TokenLoginFetch = async (request: any) => {

  let response: any;
  let raw_data: IRaw_Data;

  // let isVisitor = localStorage.getItem("guest");

  // console.log("login is visitor", isVisitor)

  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };

    raw_data = {
      version: "v1",
      method: "login_via_token",
      entity: "signin",
      ...request,
    };
console.log("token request",request)
  await client.post(`${CONSTANTS.API_BASE_URL}/${TokenLoginApiMethods.tokenloginApi}`, raw_data, config).then((res)=>{
    console.log("token login response api",res);
    response = res.data.message.msg
  }).catch((err)=>console.log(err)); 
  return response;
};
const getTokenLoginApi = (request: any) =>
TokenLoginFetch(request);

export default getTokenLoginApi;
