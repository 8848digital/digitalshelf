
import { CONSTANTS } from "../../config/api-config";
import { AddCartAPIMethods } from "../../methods/add_cart_method";
import { client } from "../general_api/cookie_instance";

const AddCartPost = async (id: any, quantity?: any, size?: any, color?:any) => {
    let response: any;
    let grandTotal: number = 0;
    const token = localStorage.getItem('token');
    console.log("addtocart token",token);

    // console.log(token);
    console.log(`id ${id} quantity ${quantity} size ${size}`);
    console.log("addtocart token",token);
 

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };

    if(size && color)
    {
        await client.post(`${CONSTANTS.API_BASE_URL}/${AddCartAPIMethods.addCart}?version=v1&method=put_products&entity=cart&quantity=${quantity}&item_code=${id}&size=${size}&colour=${color}`, undefined, config)
            .then((res) => {
                // console.log("Add to cart api - ",res);
                response = res.data.message;
                // grandTotal = res.data.grand_total;
            })
            .catch((err) => {
                console.log(err);
            });
    
        console.log("response - ", grandTotal)
        return response;
    }
    else if (size)
    {
        await client.post(`${CONSTANTS.API_BASE_URL}/${AddCartAPIMethods.addCart}?version=v1&method=put_products&entity=cart&quantity=${quantity}&item_code=${id}&size=${size}`, undefined, config)
            .then((res) => {
                // console.log("Add to cart api - ",res);
                response = res.data.message;
                // grandTotal = res.data.grand_total;
            })
            .catch((err) => {
                console.log(err);
            });
    
        console.log("response - ", grandTotal)
        return response;

    }else{
        await client.post(`${CONSTANTS.API_BASE_URL}/${AddCartAPIMethods.addCart}?version=v1&method=put_products&entity=cart&quantity=${quantity}&item_code=${id}`, undefined, config)
        .then((res) => {
            // console.log("Add to cart api - ",res);
            response = res.data.message;
            // grandTotal = res.data.grand_total;
        })
        .catch((err) => {
            console.log(err);
        });

    console.log("response - ", grandTotal)
    return response;
    }


}

const getAddCartList = (id: any, quantity: any, size?: any, color?:any) => AddCartPost(id, quantity, size, color)

export default getAddCartList;