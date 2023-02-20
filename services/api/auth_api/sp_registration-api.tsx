import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import {RegistrationApiMethods} from "../../methods/registration-api-methods";
import { client } from "./../general_api/cookie_instance";

const SpRegisterFetch = async(request:any) =>
{
    let response:any;
    // const config = {
    //     header:{
    //         "Content-Type":"application/json"
    //     }
    // }
    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };

    // await axios.get(`${DEFAULT_API_CONFIG.url}/${LoginApiMethods.loginApi}?usr=${request.email}&pwd=${request.password}`)
    //     .then((res)=>
    //     {
    //         // console.log(res)
    //         response = res;
    //     })
    //     .catch((err)=>
    //     {
    //         console.log(err)
    //     })
    // return response;

    await client.post(`${CONSTANTS.API_BASE_URL}/${RegistrationApiMethods.RegistrationApi}?version=v1&method=create_registration&entity=registration&email=${request.email}&name=${request.name}&company_name=${request.company_name}&designation=${request.designation}&contact_no=${request.contact_number}&address=${request.address}&gst_number=${request.gst_number}&state=${request.state}&city=${request.city}&postal_code=${request.pincode}&existing_customer=${request.picked}&buy_parts_for=${request.buyfor}` ,undefined, config)
        .then((res)=>
        {
            console.log(res)
            response = res;
        })
        .catch(err=>console.log(err));
    return response;
}

const SpRegistrationApi  = (request:any) => SpRegisterFetch(request)

export default SpRegistrationApi 