import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { StoreCreditApiMethod } from "../../methods/store_credit_method";
import { client } from "../general_api/cookie_instance";

const StoreCreditPostApi = async (store_credit:any) => {
  let response: any;
  

  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };
  const body = {
    version: "v1",
    method: "put",
    entity: "store_credit",
    store_credit: `${store_credit}`

  };

  console.log(" store credit body",body )
  console.log(" store credit body type",typeof store_credit)

  await 
    client.post(`${CONSTANTS.API_BASE_URL}/${StoreCreditApiMethod.StoreCredit}`,body, config)

    .then((res) => {
      response = res;
      console.log("store credit api",res);
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};



export default StoreCreditPostApi;
