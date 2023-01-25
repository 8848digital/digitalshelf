import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { client } from "../general_api/cookie_instance";

const PlaceOrderApi = async({ cart, shippingAdd,billingAdd}:any) => {
    const token = localStorage.getItem("token");

    // console.log("////place order api",pickedAddress )

    const config = {
      headers: {
        Accept: 'application/json'
      },
      withCredentials:true
    };

    return await client
      .post(
        `${CONSTANTS.API_BASE_URL
        }/api/method/sportnetwork.api.map.version_mapper?version=v1&method=place_order&entity=order&order_id=${cart.cartListingItems[0].id
        }&shipping_address_id=${shippingAdd && shippingAdd.address_id}&billing_address_id=${billingAdd && billingAdd.address_id}`,
        undefined,
        config
      )
}

export default PlaceOrderApi;