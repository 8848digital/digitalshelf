
import { CONSTANTS } from "../../config/api-config";
import { ProductVariantsAPIMethods } from "../../methods/product_variants_method";
import { client } from "./../general_api/cookie_instance";

const ProductVariantsFetch = async (slug: any) => {
    let response: any;
    
const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };
    await client.get(`${CONSTANTS.API_BASE_URL}/${ProductVariantsAPIMethods.productVariants}?version=v1&method=get_variants&entity=product&item=${slug}` , config)
        .then((res) => {
            console.log("detail api resssssssssssss",res);
            response = res.data.message.data
        })
        .catch((err) => {
            console.log(err);
        })
    return response;
}

const getProductVariantsList = (slug: any) => ProductVariantsFetch(slug)

export default getProductVariantsList