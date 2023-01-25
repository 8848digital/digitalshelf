
import { CONSTANTS } from "../config/api-config";
import { PlaceOrderApiMethod } from "../methods/place_order_method";
import { client } from "./general_api/cookie_instance";
const PlaceOrderApiNew = async(cart:any, shippingdAddress:any, billingAddress:any) => {
    const token = localStorage.getItem("token");

    console.log("////checkout place order api shippingdAddress",shippingdAddress )
    console.log("////checkout place order api billingAddress",billingAddress )
    console.log("////checout place order api cart",cart )

    const config = {
      headers: {
        Accept: 'application/json'
      },
      withCredentials:true
    };
    return await client
      .post(
        `${CONSTANTS.API_BASE_URL
        }/${PlaceOrderApiMethod.placeOrder}&order_id=${cart
        }&shipping_address_id=${shippingdAddress}&billing_address_id=${billingAddress}`,
        undefined,
        config
      )
}

export default PlaceOrderApiNew;
