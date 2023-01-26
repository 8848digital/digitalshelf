import { CONSTANTS } from "../../config/api-config";
import { CartListingMethods } from "../../methods/cart_method";
import { client } from "../general_api/cookie_instance";
const CartFetch = async (id?: any) => {
    let response: any;
    const token = localStorage.getItem('token');

    console.log(token);
    // console.log(token);

    console.log(token);
    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };

    if (id) {
        // console
        await client.get(`${CONSTANTS.API_BASE_URL}/${CartListingMethods.cartList}?version=v1&method=get_list&entity=cart&session_id=${id}`,config)
            .then((res) => {
                console.log("cart listing api - ",res);
                response = res.data.message.data;
                localStorage.setItem("grand_total",res.data.message.grand_total);
            })
            .catch(err => console.log(err));
        return response

    }
    else {

        await client.get(`${CONSTANTS.API_BASE_URL}/${CartListingMethods.cartList}?version=v1&method=get_list&entity=cart`,config)
            .then((res) => {
                console.log("cart listing api - ", res);
                response = res.data.message.data;
                localStorage.setItem("grand_total",res.data.message.grand_total);
            })
            .catch(err => console.log(err));
        return response;
    }

}

const getCartList = (id?: any) => CartFetch(id)

export default getCartList