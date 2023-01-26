import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { CustomerShippingAddressMethod } from "../../methods/customer_shipping_address_method";
import { client } from "./../general_api/cookie_instance";

const customerShippingAddressFetch = async () => {
  console.log("checkout shipping api");
  let response: any;
  const guestid = localStorage.getItem("guestId");
  // console.log("get address token",token);

  const config = {
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  };

  if(guestid != null)
  {
    await client
      .get(
      //   `${CONSTANTS.API_BASE_URL}/${CustomerShippingAddressMethod.customerShippingAddress}?user_id=${guestid}`,
      `${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get&entity=customer_address&type=Shipping&user_id=${guestid}`,
        config
      )
      .then((res) => {
        // response = res.data.message.data;
        response = res.data.message.data.sort(function (a: any, b: any) {
          return b.set_as_default - a.set_as_default;
        });
        console.log("checkout get customer Address api - ", response);
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }
  else
  {
    await client
      .get(
      //   `${CONSTANTS.API_BASE_URL}/${CustomerShippingAddressMethod.customerShippingAddress}?user_id=${guestid}`,
      `${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get&entity=customer_address&type=Shipping`,
        config
      )
      .then((res) => {
        // response = res.data.message.data;
        response = res.data.message.data.sort(function (a: any, b: any) {
          return b.set_as_default - a.set_as_default;
        });
        console.log("checkout get customer Address api - ", response);
      })
      .catch((err) => {
        console.log(err);
      });
    return response;

  }

};

const CustomerShippingAddress = () => customerShippingAddressFetch();

export default CustomerShippingAddress;
