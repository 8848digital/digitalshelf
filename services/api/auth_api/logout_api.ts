import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { LogoutApiMethods } from "../../methods/logout_method";
import {persistor} from "../../../store/store";
import { client } from "./../general_api/cookie_instance";

const LogoutFetch = async () => {

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };
    await client.get(`${ CONSTANTS.API_BASE_URL}/${LogoutApiMethods.logoutList}`, config)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {

            console.log(err);
        })
}

const LogoutList = () => LogoutFetch()

export default LogoutList