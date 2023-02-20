import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { LogoutApiMethods } from "../../methods/logout_method";

import { client } from "./../general_api/cookie_instance";

const LogoutFetch = async () => {

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };
    await client.post(`${ CONSTANTS.API_BASE_URL}/${LogoutApiMethods.logoutList}`, config)
        .then((res) => {
            console.log("logout res in api file  success",res);
        })
        .catch((err) => {

            console.log("logout res in api file error",err);
        })
}

const LogoutList = () => LogoutFetch()

export default LogoutList