import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { CustomerBillingAddressMethod } from "../../methods/customer_billing_address_method";
import { client } from "../general_api/cookie_instance";

const customerBillingAddressFetch = async () => {
  console.log("checkout billing api");
  let response: any;
  const guestid = localStorage.getItem("guestId");
  // console.log("get address token", token);

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
        // `${CONSTANTS.API_BASE_URL}/${CustomerBillingAddressMethod.customerBillingAddress}?user_id=${guestid}`,
        `${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get&entity=customer_address&type=Billing&user_id=${guestid}`,
        config
      )
      .then((res) => {
        response = res.data.message.data.sort(function (a: any, b: any) {
          return b.set_as_default - a.set_as_default;
        });
        console.log("get customer billing Address api - ", response);
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
        // `${CONSTANTS.API_BASE_URL}/${CustomerBillingAddressMethod.customerBillingAddress}?user_id=${guestid}`,
        `${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get&entity=customer_address&type=Billing`,
        config
      )
      .then((res) => {
        response = res.data.message.data.sort(function (a: any, b: any) {
          return b.set_as_default - a.set_as_default;
        });
        console.log("get customer billing Address api - ", response);
      })
      .catch((err) => {
        console.log(err);
      });
    return response;

  }
};

const CustomerBillingAddress = () => customerBillingAddressFetch();

export default CustomerBillingAddress;
