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

const loginFetch = async (request: any, isGoogleLogin: boolean, visitor?:boolean) => {

  let response: any;
  let raw_data: IRaw_Data;

  let isVisitor = localStorage.getItem("guest");

  console.log("login is visitor", isVisitor)

  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };

  // if (visitor) {
  //   raw_data = {
  //     version: "v1", 
  //     method: "signin",
  //     entity: "signin",
  //     usr: request.email,
  //     pwd: request.password,
  //     redirect: true,
  //   };
  // } 
  // else if(isGoogleLogin)
  // {
    // raw_data = {
    //   ...request
      // version: "v1",
      // method: "signin",
      // entity: "signin",
      // usr: request.email,
      // pwd: request.password,
      // via_google: true,
    // };
  // }
  // else {
  //   raw_data = {
  //     // version: "v1",
  //     // method: "signin",
  //     // entity: "signin",
  //     usr: request.email,
  //     pwd: request.password,
  //   };
  // }

  // if(isGoogleLogin)
  // {
  //   raw_data = {
  //     version: "v1",
  //     method: "signin",
  //     entity: "signin",
  //     ...request,
  //     via_google:true
  //   };
  //   console.log("google login api");
  //   console.log("google login raw data", raw_data);

  // // await client
  // //   .post(`${CONSTANTS.API_BASE_URL}/${LoginApiMethods.loginApi}`, raw_data, config)
  // //   .then((res) => {
  // //     console.log("google login api file success", res);
  // //     response = res;
  // //   })
  // //   .catch((err) => {
  // //     console.log("google login api file error", err);
  // //     response = err.response
  // //   });
  // // return response;
  // }

  if(isVisitor != null)
  {
    raw_data = {
      version: "v1",
      method: "signin",
      entity: "signin",
      usr: request.email,
      pwd: request.password,
      redirect: true,
    };

    console.log("Login visitor api");
    console.log("login visitor raw data", raw_data);
    await client
    .post(`${CONSTANTS.API_BASE_URL}/${LoginApiMethods.loginApi}`, raw_data, config)
    .then((res) => {
        console.log("LOGIN API FILE visitor", res);
        response = res;
      })
      .catch((err) => console.log(err));
      return response;
    }
    
    else
    {
      raw_data = {
        // version: "v1",
        // method: "signin",
        // entity: "signin",
        usr: request.email,
        pwd: request.password,
      };
      console.log("login existing user api");
      console.log("login existing raw data", raw_data);

    await client
      .post(`${CONSTANTS.API_BASE_URL}/api/method/login`, raw_data,config)
      .then((res) => {
        console.log("login api file success", res);
        response = res;
      })
      .catch((err) => {
        console.log("login api file error", err);
        response = err.response
      });
    return response;
  }

  // if(visitor)
  // {
  //   console.log("Login visitor api")
  //     await client
  //     .post(`${CONSTANTS.API_BASE_URL}/${LoginApiMethods.loginApi}`, raw_data, config)
  //     .then((res) => {
  //       console.log("LOGIN API FILE visitor", res);
  //       response = res;
  //     })
  //     .catch((err) => console.log(err));
  //   return response;
  // }

  // else if(isGoogleLogin)
  // {
  //   console.log("google login",);
  // }

  // else
  // {
  //   console.log("existing user api")
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

  // if(!isVisitor)
  // {
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
  // else
  // {
  //   console.log("visitor ");
    //   await axios
    //   .post(`${CONSTANTS.API_BASE_URL}/${LoginApiMethods.loginApi}`, raw_data)
    //   .then((res) => {
    //     console.log("LOGIN API FILE", res);
    //     response = res;
    //   })
    //   .catch((err) => console.log(err));
    // return response;
  // }


  // FALLBACK CODE FOR LOGIN
  // if (isGoogleLogin) {
  //   console.log("is google login", request);
  //   // console.log("google login", isGoogleLogin)
  //   await axios
  //     .post(`${CONSTANTS.API_BASE_URL}/${LoginApiMethods.loginApi}`, raw_data)
  //     .then((res) => {
  //       console.log("LOGIN API FILE", res);
  //       response = res;
  //     })
  //     .catch((err) => console.log(err));
  //   return response;
  // } else {
  //   await axios
  //     .post(`${CONSTANTS.API_BASE_URL}/${LoginApiMethods.loginApi}`, raw_data)
  //     .then((res) => {
  //       console.log("LOGIN API FILE", res);
  //       response = res;
  //     })
  //     .catch((err) => console.log(err));
  //   return response;
  // }
  // await axios.get(`${DEFAULT_API_CONFIG.url}/${LoginApiMethods.loginApi}?usr=${request.email}&pwd=${request.password}`)
  //     .then((res)=>
  //     {
  //         // console.log(res)
  //         response = res;
  //     })
  //     .catch((err)=>
  //     {
  //         console.log(err)
  //     })
  // return response;
};

const getLoginApi = (request: any, isGoogleLogin: boolean, visitor?:boolean) =>
  loginFetch(request, isGoogleLogin, visitor);

export default getLoginApi;
