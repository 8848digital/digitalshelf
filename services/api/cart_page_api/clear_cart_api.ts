import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { ClearCartAPIMethods } from "../../methods/clear_cart_method";
import { client } from "../general_api/cookie_instance";

const ClearCartPost =async (id:any) => {
    let response :any;
    const token = localStorage.getItem('token');
    console.log("clear cart token",token);

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };

    await client.post(`${CONSTANTS.API_BASE_URL}/${ClearCartAPIMethods.ClearCart}?version=v1&method=clear_cart&entity=cart&quotation_id=${id}`,undefined,config)
    .then((res) =>{
        console.log("clear cart api",res);
        response=res.data.message.data;
    })
    .catch((err)=>{
        console.log("clear cart api",err);
    })

    console.log(response);
    return response
}

const getClearCartApi = (id:any) => ClearCartPost(id) 

export default getClearCartApi;
