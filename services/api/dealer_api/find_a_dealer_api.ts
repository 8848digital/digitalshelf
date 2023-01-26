import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import {findaDelearMethods} from "../../methods/find_a_dealer";
import { client } from "../general_api/cookie_instance";
const findaDealerFetch = async (state: any) => {
    
const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };
    let response:any;

    await axios.get(`${CONSTANTS.API_BASE_URL}/${findaDelearMethods.findaDealer}version=v1&method=get_dealer&entity=dealer&state=${state}` , config)
    .then((res) => {
        console.log("find a dealer res",res);
        response=res.data.message.data;
    }).catch((err) => {
        console.log(err);
    })
  return response
}



const getFindaDealer = (state:any) => findaDealerFetch(state);

export default getFindaDealer;
