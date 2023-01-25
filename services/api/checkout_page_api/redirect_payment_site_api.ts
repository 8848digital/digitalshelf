

import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { client } from "../general_api/cookie_instance";
import handleResponse from "../../config/handle-response";

const RedirectPayment = async(salesOrderId:any, amount:any) =>
{
    let response:any;
    let data:any = {
        amount:amount,
        order_id:salesOrderId
    }

    const config:any = {
        headers: {
          Accept: "application/json",
        },
        withCredentials: true,
      };
    const method = "get_razorpay_payment_url";
    const entity = "order";
    await client.get(`${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}&method=${method}&entity=${entity}&amount=${amount}&order_id=${salesOrderId}&payment_gateway=Razorpay`,config)
    .then((res)=>
    {
      console.log("payment",res);
      response = res.data.message ;
    })
    .catch((err)=>console.log(err))

    return response;

    // const api_res = await handleResponse(CONSTANTS.API_BASE_URL,CONSTANTS.API_MANDATE_PARAMS,method, entity);
    // console.log('payment integration response', api_res);
    // response = api_res.data.message.data
}

export default RedirectPayment