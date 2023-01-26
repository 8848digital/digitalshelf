
import { client } from "../general_api/cookie_instance"
import { CONSTANTS } from "../../config/api-config";
import handleResponse from "../../config/handle-response";

const SalesOrderFetch = async() =>
{
    let response:any;
    const method = "get_order_id";
    const entity = "order";
    const api_res = await handleResponse(CONSTANTS.API_BASE_URL,CONSTANTS.API_MANDATE_PARAMS,method, entity);
    console.log("get sales order id", api_res.data.message.data);
    response = api_res.data.message.data
    return response
    // const get_id = await client.get(`${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper`)
}

// const getSalesOrderID = () => SalesOrderFetch()

export default SalesOrderFetch