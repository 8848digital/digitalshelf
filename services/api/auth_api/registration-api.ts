import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import {RegistrationApiMethods} from "../../methods/registration-api-methods";
import { client } from "../general_api/cookie_instance";

const RegisterFetch = async(request:any) =>
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

    await client.post(`${CONSTANTS.API_BASE_URL}/${RegistrationApiMethods.RegistrationApi}?version=v1&method=customer_signup&entity=registration&email=${request.email}&name=${request.name}&contact_no=${request.contact_number}&address=${request.address}&gst_number=${request.gst_number}&password=${request.confirm_password
    }&state=${request.state}&city=${request.city}&customer_group=Customer Group&territory=All Territories` , config)
        .then((res)=>
        {
            console.log(res)
            response = res;
        })
        .catch(err=>console.log(err));
    return response;
}

const RegistrationApi  = (request:any) => RegisterFetch(request)

export default RegistrationApi 