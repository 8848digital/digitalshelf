// /api/method/sportnetwork.api.map.version_mapper?version=v1&method=get&entity=customer_address
import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { client } from "./../general_api/cookie_instance";
const customerAddress = async (id?:any) => {
    let response: any;
    const token = localStorage.getItem('token');
    console.log("get address token",token);
    // console.log(`id ${id}`);

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };


    if(id){
        await client.get(`${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get&entity=customer_address`, config)
        .then((res) => {
            response = res.data.message.data;
            console.log("get customer Address api in if- ",response);
        })
        .catch((err) => {
            console.log(err);
        })  
    return response;

    }else{
        await client.get(`${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get&entity=customer_address`, config)
        .then((res) => {
            response = res.data.message.data;
            console.log("get customer Address api in else - ",response);
        })
        .catch((err) => {
            console.log(err);
        })  
    return response;
    }

    

}

const getCustomerAddress = (id?:any) => customerAddress(id);

export default getCustomerAddress;
