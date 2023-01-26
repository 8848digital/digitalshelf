import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { CustomerAddressApiMethod } from "../../methods/CustomerAddress_method";
import { client } from "./../general_api/cookie_instance";

const AddressPost = async (request: any) => {
  let response: any;
  const token = localStorage.getItem("token");
  // console.log("store address post token", token);

  const config = {
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  };

  let body = {
    version: "v1",
    method: "put",
    entity: "customer_address",
    ...request,
  };
  console.log("body", body)

  await client
    .post(
      `${CONSTANTS.API_BASE_URL}/${CustomerAddressApiMethod.CustomerAddress}`,
      body,
      config
    )
    .then((res) => {
      console.log("storeApi", res);
      response = res.data.message;
      console.log("store address api res", response);
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

const storeCustomerAddress = (request: any) => AddressPost(request);

export default storeCustomerAddress;
