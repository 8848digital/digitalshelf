
import { CONSTANTS } from "../../config/api-config";
import { client } from "../general_api/cookie_instance";

const getCartHistory = async (date?:any, id?: any) => {
    let response: any;
    const token = localStorage.getItem('token');
    // console.log(token);
    // console.log(`id ${id}`);

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };

    if (id) {
        await client.get(`${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get_list&entity=order&order_id=${id}`, config)
            .then((res) => {
                console.log("Add to cart api 1- ",res);
                response = res.data.message.data;
            })
            .catch((err) => {
                console.log(err);
            })
        return response;

    } else if(date) {
        await client.get(`${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get_list&entity=order&date_range=${date}`, config)
            .then((res) => {
                console.log("Add to cart api 2- ",res);
                response = res.data.message.data;
            })
            .catch((err) => {
                console.log(err);
            })
        return response;
    } 
    // else {
    //     await client.get(`${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get_list&entity=order`, config)
    //         .then((res) => {
    //             // console.log("Add to cart api - ",res);
    //             response = res.data.message.data;
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //     return response;

    // }
}

// const getCartHistoryApi = ( date?:any,id?: any) => getCartHistory(date, id);

export default getCartHistory;