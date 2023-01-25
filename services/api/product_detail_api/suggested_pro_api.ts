import { CONSTANTS } from "../../config/api-config";
import { SuggestedProApiMethod } from "../../methods/suggested_pro_method";
import { client } from "../general_api/cookie_instance";

const SuggestedProduct = async (ptype:any , item:any) => {
    let response: any;
    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };
      if(ptype === 'suggested' ) {
        await client.get(`${CONSTANTS.API_BASE_URL}/${SuggestedProApiMethod.suggestedPro}?version=v1&method=get_recommendation&entity=product&ptype=${ptype}&item=${item}`,config)
        .then((res:any)=>{
          console.log("suggested product res in api",res);
              response = res.data.message.data
        }).catch((err:any)=>{
          console.log(err);
        })
      }
      return response;
}

const getSuggestedProduct = (ptype:any , item:any) => SuggestedProduct(ptype , item)

export default getSuggestedProduct;