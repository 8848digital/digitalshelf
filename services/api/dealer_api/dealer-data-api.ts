import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { findaDelearMethods } from "../../methods/find_a_dealer";
import { client } from "./../general_api/cookie_instance";
const findDealerDataFetch = async (state?: any, city?: any, brand?: any) => {
  let response: any;
  console.log("****city data", city);
  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };
  if (brand) {
    await client.get(
        `${CONSTANTS.API_BASE_URL}/${findaDelearMethods.findaDealer}version=v1&method=get_dealer&entity=dealer&state=${state}&city=${city}&brand=${brand}` , config
      )
      .then((res) => {
        console.log("find a dealer res", res);
        response = res.data.message.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
    
    
  } else if (city) {
    await client.get(
        `${CONSTANTS.API_BASE_URL}/${findaDelearMethods.findaDealer}version=v1&method=get_dealer&entity=dealer&state=${state}&city=${city}`,config
      )
      .then((res) => {
        console.log("find a dealer res", res);
        response = res.data.message.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  } else if (state) {
    await client.get(
        `${CONSTANTS.API_BASE_URL}/${findaDelearMethods.findaDealer}version=v1&method=get_dealer&entity=dealer&state=${state}` , config
      )
      .then((res) => {
        console.log("find a dealer res", res);
        response = res.data.message.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  } else {
    await client.get(
        `${CONSTANTS.API_BASE_URL}/${findaDelearMethods.findaDealer}version=v1&method=get_dealer&entity=dealer` ,config
      )
      .then((res) => {
        console.log("find a dealer res", res);
        response = res.data.message.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }
};

const getFindDealerData = (state?: any, city?: any, brand?: any) =>
  findDealerDataFetch(state, city, brand);

export default getFindDealerData;
