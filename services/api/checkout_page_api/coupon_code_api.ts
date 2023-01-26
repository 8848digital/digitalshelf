import axios from "axios";
import { CONSTANTS } from "../config/api-config";
import { CouponCodeApiMethod } from "../methods/coupon_code_method";
import { client } from "./general_api/cookie_instance";
const CouponCodeFetch = async (item_code:any, coupon_code: any) => {
  let response: any;

  const token = localStorage.getItem("token");
  console.log("////coupon code token", item_code, coupon_code);

  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };
  const body = {
    version: "v1",
    method: "put",
    entity: "coupon_code",
    id:item_code,
    coupon_code: coupon_code,
  };

  await 
    client.post(`${CONSTANTS.API_BASE_URL}/${CouponCodeApiMethod.CouponCode}`,body, config)

    .then((res) => {
      response = res;
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};



export default CouponCodeFetch;
