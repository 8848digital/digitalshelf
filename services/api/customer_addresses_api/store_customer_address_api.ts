import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { CustomerAddressApiMethod } from "../../methods/CustomerAddress_method";
import { client } from "./../general_api/cookie_instance";
import { useDispatch } from "react-redux";
import { CustomerShippingAddressAPi } from "../../../store/slices/customer_addresses_slice/customer_shipping_address_slice";
import { CustomerBillingAddressAPi } from "../../../store/slices/customer_addresses_slice/customer_billing_address_slice";

const StoreCustomerAddressFetch = async (request: any, check?: any) => {
  let response: any;
  let trialResponse: any;
  let saveUserId: any;
  // const dispatch = useDispatch();
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
  console.log("body", body);

  await client
    .post(
      `${CONSTANTS.API_BASE_URL}/${CustomerAddressApiMethod.CustomerAddress}`,
      body,
      config
    )
    .then(async (res) => {
      console.log("store shipping address form res", res);
      trialResponse = res.data.message;
      // response = res.data.message;
      // saveUserId = res.data.message;
      // console.log("form store address api response", response);

      if (check) {
        body.address_type = "Billing";
        // console.log("body", body);
        await client
          .post(
            `${CONSTANTS.API_BASE_URL}/${CustomerAddressApiMethod.CustomerAddress}?user_id=${res.data.message.data.customer_id}`,
            body,
            config
          )
          .then(async (res) => {
            console.log("store billing address form res", res);
            response = trialResponse;

            // await client
            //   .post(
            //     `http://scott-sports-v14.8848digitalerp.com/api/method/sportnetwork.utils.sync_guest_user?email=${request.email}`,
            //     undefined,
            //     config
            //   )
            //   .then((res) => {
            //     console.log("store sync res",res);
            //     // dispatch(CustomerShippingAddressAPi(saveUserId));
            //     // dispatch(CustomerBillingAddressAPi(saveUserId));
            //   })
            //   .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

const StoreCustomerAddressPost = (request: any, check?: any) =>
  StoreCustomerAddressFetch(request, check);

export default StoreCustomerAddressPost;
