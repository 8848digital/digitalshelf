import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { CartListingMethods } from "../../methods/cart_listing_api_method";
import { client } from "../general_api/cookie_instance";
const CartFetch = async (id?: any) => {
  let response: any;
  const token = localStorage.getItem("token");

  console.log(token);
  // console.log(token);

  console.log(token);
  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };

  await client
      .get(
        `${CONSTANTS.API_BASE_URL}/${CartListingMethods.cartList}?version=v1&method=get_list&entity=cart&session_id=${id}`,
        config
      )
      .then((res) => {
        // console.log("cart listing api - ",res);
        response = res.data.message.data;
      })
      .catch((err) => console.log(err));
    return response;

//   if (id) {
//     // console
//     await axios
//       .get(
//         `${CONSTANTS.API_BASE_URL}/${CartListingMethods.cartList}?version=v1&method=get_list&entity=cart&session_id=${id}`,
//         config
//       )
//       .then((res) => {
//         // console.log("cart listing api - ",res);
//         response = res.data.message.data;
//       })
//       .catch((err) => console.log(err));
//     return response;
//   } else {
//     await axios
//       .get(
//         `${CONSTANTS.API_BASE_URL}/${CartListingMethods.cartList}?version=v1&method=get_list&entity=cart`,
//         config
//       )
//       .then((res) => {
//         response = res.data.message.data;
//         // console.log("cart listing api - ", response);
//         localStorage.setItem("grand_total", res.data.message.grand_total);
//       })
//       .catch((err) => console.log(err));
//     return response;
//   }
};

const getCartList = (id?: any) => CartFetch(id);

export default getCartList;
