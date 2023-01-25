import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { DeleteFromCartMethod } from "../../methods/delete_from_cart_method";
import { client } from "../general_api/cookie_instance";

const deleteFromCart = async (id: any) => {
    let response: any;
    const token = localStorage.getItem('token');
    // console.log(token);
    console.log(`id ${id}`);

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };

    await client.post(`${CONSTANTS.API_BASE_URL}/${DeleteFromCartMethod.deleteCart}?version=v1&method=delete_products&entity=cart&item_code=${id}`, undefined, config)
        .then((res) => {
            // console.log("Add to cart api - ",res);
            response = res.data.message.data;
        })
        .catch((err) => {
            console.log(err);
        })
    return response;

}

const deleteFromCartList = (id: any) => deleteFromCart(id);

export default deleteFromCartList;