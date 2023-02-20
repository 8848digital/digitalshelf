import { client } from "./cookie_instance";
import { CONSTANTS } from "../../config/api-config";
import handleResponse from "../../config/handle-response";

const AddProductToWishlistFetch = async (prod_id: any) => {
  console.log("wishlist add prod id", prod_id);
  let response: any;

  const config = {
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  };
  const method = "add_to_wishlist";
  const entity = "wishlist";

  await client
    .post(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}&method=${method}&entity=${entity}&item_code=${prod_id}`,
      undefined,
      config
    )
    .then((res) => {
      response = res.data.message;
      console.log("wishlist api res", response);
    })
    .catch((err) => {
      console.log(err);
    });
  return response;
};

const GetWishlistDataFetch = async () => {
  console.log(" wishlist get data");
  let response: any;
  const config = {
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  };
  const method = "get_wishlist_items";
  const entity = "wishlist";
  const api_res = await handleResponse(
    CONSTANTS.API_BASE_URL,
    CONSTANTS.API_MANDATE_PARAMS,
    method,
    entity
  );
  console.log("wishlist get api response", api_res);
  response = api_res.data.message;
  return response;
};

const DeleteProductFromWishlistFetch = async (prod_id: any) => {
  console.log(" wishlist get data",prod_id);
  let response: any;
  const config = {
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  };
  const method = "remove_from_wishlist";
  const entity = "wishlist";

  await client.get(`${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}&method=${method}&entity=${entity}&item_code=${prod_id}`,config)
  .then((res)=> {
    console.log("api res",res)
    response = res.data.message;
    console.log("delete wishlist api res",response)
  })
  .catch((err)=>{
    console.log(err)
  })
  return response
  
};

export const AddProductToWishlist = (prod_id: any) =>
  AddProductToWishlistFetch(prod_id);
export const GetWishlistData = () => GetWishlistDataFetch();
export const DeleteProductfromWishlist = (id: any) =>
  DeleteProductFromWishlistFetch(id);
