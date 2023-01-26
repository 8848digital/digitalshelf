

import { CONSTANTS } from "../../config/api-config";
import { ProductDetailApiMethods } from "../../methods/product_detail_method";
import { client } from "../general_api/cookie_instance";

const ProductFetch = async (slug: any) => {
    console.log("in api");
    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };

    let response: any;
    // console.log(DEFAULT_API_CONFIG)
    await client.get(`${CONSTANTS.API_BASE_URL}/${ProductDetailApiMethods.detailList}?version=v1&method=get_details&entity=product&item=${slug}`, config)
        .then((res) => {
            console.log("detail api ", res);
            response = res.data.message.data[0];
        })
        .catch((err) => {
            console.log(err);
        })
    return response
}

const ProductDetailList = (slug: any) => ProductFetch(slug)

export default ProductDetailList

