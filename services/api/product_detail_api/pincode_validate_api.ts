import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { PincodevalidateMethods } from "../../methods/pincode_validate_method";
import { client } from "../general_api/cookie_instance";

const productPincode = async (Pincode:any) => {
    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };
    let response: any;
    console.log(Pincode,"any")
    
        await client.get(`${CONSTANTS.API_BASE_URL}/${PincodevalidateMethods.pinCode}?version=v1&method=validate_pincode&entity=product&pincode=${Pincode}` , config)
            .then((res) => {
               console.log(res,"res");
                response = res.data.message.data;
             
            })
            .catch((err) => {
                console.log(err);
            });
    
        return response;



}

const getproductPincode = (Pincode:any) => productPincode(Pincode)

export default getproductPincode;