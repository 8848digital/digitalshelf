
import { client } from "../general_api/cookie_instance";
import { CONSTANTS } from "../../config/api-config";
import handleResponse from "../../config/handle-response";

const UserRoleFetch = async() =>
{
    let response:any;
    const method = "get_user_profile";
    const entity = "signin";
    const api_res = await handleResponse(CONSTANTS.API_BASE_URL,CONSTANTS.API_MANDATE_PARAMS,method, entity);
    response = api_res.data.message.data
    localStorage.setItem("isDealer", response.is_dealer)
    localStorage.setItem("isSuperAdmin",response.is_superadmin)
}

const UserRoleGet = () => UserRoleFetch()

export default UserRoleGet
