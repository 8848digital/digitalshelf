import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { ChangePasswordApiMethod } from "../../methods/change_password_method";
import { client } from "../general_api/cookie_instance";


const ChangePasswordPost = async ({oldPassword, confirmPassword}: any) => {
  
  let pass_data = {
    old_password: oldPassword,
    new_password: confirmPassword
  }

  let response: any;

  const token = localStorage.getItem("token");
  console.log("Changepassword Token", token);

  // const config = {
  //   headers: {
  //     // 'Content-Type': 'application/json', 
  //     Authorization: `Token ${token}`
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
    method: "change_password",
    entity: "registration",
    data : {
      ...pass_data
    }
  };

  console.log(body)

  await client.post(
      `${CONSTANTS.API_BASE_URL}/${ChangePasswordApiMethod.ChangePassword}`,
      body,
      config
    )

    .then((res) => {
      response = res;
      console.log(res?.data?.message?.msg)
      
    })

    .catch((error) => {
      console.log(error);
    });
  return response;
};


const getChangePassword = (request: any) => ChangePasswordPost(request);



export default getChangePassword;
