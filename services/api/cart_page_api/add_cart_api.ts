import { CONSTANTS } from "../../config/api-config";
import { AddCartAPIMethods } from "../../methods/add_cart_method";
import { client } from "../general_api/cookie_instance";

const AddCartPost = async (
  id: any,
  quantity?: any,
  size?: any,
  color?: any
) => {
  let response: any;
  let url: string = "";
  let grandTotal: number = 0;
  const method = "put_products";
  const entity = "cart";
  const token = localStorage.getItem("token");
  console.log("addtocart token", token);

  // console.log(token);
  console.log(`id ${id} quantity ${quantity} size ${size}`);
  console.log("addtocart token", token);

  const config = {
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  };

  if (size && color) {
    url = `&method=${method}&entity=${entity}&quantity=${quantity}&item_code=${id}&size=${size}&colour=${color}`;
  } else if (size) {
    url = `&method=${method}&entity=${entity}&quantity=${quantity}&item_code=${id}&size=${size}`;
  } else if (color) {
    url = `&method=${method}&entity=${entity}&quantity=${quantity}&item_code=${id}&colour=${color}`;
  } else {
    url = `&method=${method}&entity=${entity}&quantity=${quantity}&item_code=${id}`;
  }

  await client
    .post(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}${url}`,
      undefined,
      config
    )
    .then((res: any) => {
      // console.log("Add to cart api - ",res);
      response = res.data.message;
      // grandTotal = res.data.grand_total;
    })
    .catch((err: any) => {
      console.log(err);
    });

  console.log("response - ", grandTotal);
  return response;
};

const getAddCartList = (id: any, quantity: any, size?: any, color?: any) =>
  AddCartPost(id, quantity, size, color);

export default getAddCartList;
