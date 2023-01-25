import axios, {AxiosRequestHeaders } from "axios";
import { CONSTANTS } from "../../config/api-config";
import { LoginApiMethods } from "../../methods/login-api-methods";
import { client } from "../general_api/cookie_instance";
interface IRaw_Data {
  version?: string;
  method?: string;
  entity?: string;
  usr?: string;
  name?: string;
  pwd?: string;
  via_google?: boolean;
  redirect?:boolean
}

const GoogleLoginFetch = async (request: any, isGoogleLogin: boolean, visitor?:boolean) => {

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
    method: "signin",
    entity: "signin",
    ...request,
    via_google: true,
  };


  await client.post(`${CONSTANTS.API_BASE_URL}/${LoginApiMethods.loginApi}`, raw_data, config).then((res)=>{
    console.log("google login response api",res);
    response = res.data.message.msg
  }).catch((err)=>console.log(err)); 
  return response;

 

  // if(isVisitor != null)
  // {
    // raw_data = {
    //   version: "v1",
    //   method: "signin",
    //   entity: "signin",
    //   usr: request.email,
    //   pwd: request.password,
    //   redirect: true,
    // };

  //   console.log("Login visitor api");
  //   console.log("login visitor raw data", raw_data);
  //   await client
  //   .post(`${CONSTANTS.API_BASE_URL}/${LoginApiMethods.loginApi}`, raw_data, config)
  //   .then((res) => {
  //       console.log("LOGIN API FILE visitor", res);
  //       response = res;
  //     })
  //     .catch((err) => console.log(err));
  //     return response;
  //   }
    
  //   else
  //   {
  //     raw_data = {
  //       // version: "v1",
  //       // method: "signin",
  //       // entity: "signin",
  //       usr: request.email,
  //       pwd: request.password,
  //     };
  //     console.log("login existing user api");
  //     console.log("login existing raw data", raw_data);

  //   await client
  //     .post(`${CONSTANTS.API_BASE_URL}/api/method/login`, raw_data,config)
  //     .then((res) => {
  //       console.log("login api file success", res);
  //       response = res;
  //     })
  //     .catch((err) => {
  //       console.log("login api file error", err);
  //       response = err.response
  //     });
  //   return response;
  // }


};

const getGoogleLoginApi = (request: any, isGoogleLogin: boolean, visitor?:boolean) =>
  GoogleLoginFetch(request, isGoogleLogin, visitor);

export default getGoogleLoginApi;
