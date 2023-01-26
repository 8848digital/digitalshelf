import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { dealerAddCartAPIMethods } from "../../methods/dealer_addto_cart";
import { client } from "../general_api/cookie_instance";

const DealerAddCartPost = async (item_data: any) => {
  let response: any;
  let grandTotal: number = 0;
  const token = localStorage.getItem("token");
  console.log("addtocart token", token);
  // let item_data = [{
  //     item_code: item_code,
  //     quantity: quantity
  //   }]

  let body = {
    version: "v1",
    method: "add_to_cart",
    entity: "dealer",
    item_list: item_data,
  };

  const config = {
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  };

  await client
    .post(
      `${CONSTANTS.API_BASE_URL}/${dealerAddCartAPIMethods.dealeraddCart}`,
      body,
      config
    )
    .then((res) => {
      // console.log("Add to cart api - ",res);
      response = res.data.message.data;
      // grandTotal = res.data.grand_total;
    })
    .catch((err) => {
      console.log(err);
    });

  console.log("response - ", grandTotal);
  return response;
};

const getdealerAddCartList = (item_data: any) => DealerAddCartPost(item_data);

export default getdealerAddCartList;
