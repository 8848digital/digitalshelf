
import { CONSTANTS } from "../../config/api-config";
import { client } from "../general_api/cookie_instance";
const getOrderSummary = async (id: any) => {
    let response: any;
    const token = localStorage.getItem('token');
    // console.log("order summary token",token);
    // console.log(`id ${id}`);

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };

    await client.get(`${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get_summary&entity=order&id=${id}`, config)
        .then((res) => {
            console.log("Order summary Api - ",res); 
            response = res.data.message.data.values;
            console.log("Order summary Api 2- ",response);

        })
        .catch((err) => {
            console.log(err);
        })
    return response;

}

const getOrderSummaryApi = (id:any) => getOrderSummary(id);

export default getOrderSummaryApi;