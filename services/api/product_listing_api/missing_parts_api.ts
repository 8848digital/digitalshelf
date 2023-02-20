import { CONSTANTS } from "../../config/api-config";
import { client } from "../general_api/cookie_instance";
const MissingParts = async (
  search_text?: any,
  item_part?: string,
  item_model?: string,
  item_desc?: string
) => {
  let response:any;
  console.log("in missing parts api file search text", search_text);
  const method = "customer_inquiry";
  const entity = "profile";
  let convertSearchTextValue:any;
  if (search_text !== null) {
    console.log("search text", search_text);
    if(typeof search_text === "string")
    {
      convertSearchTextValue = `${search_text}`
    }
    else
    {
      convertSearchTextValue = `${search_text.oemNo} ${search_text.itemName} ${search_text.modelNo}`
    }
    await client
      .post(
        `${CONSTANTS.API_BASE_URL}/${CONSTANTS.API_MANDATE_PARAMS}&method=${method}&entity=${entity}&search_text=${convertSearchTextValue}`
      )
      .then((res) => {
        console.log("in missing parts api response only search text success", res);
        response = res.data.message;
      })
      .catch((err) => {
        console.log("in missing parts api response only search text failed", err);
      });
     
  } 
  
  else {
    await client
      .post(
        `${CONSTANTS.API_BASE_URL}/${CONSTANTS.API_MANDATE_PARAMS}&method=${method}&entity=${entity}&item_part=${item_part}&item_model=${item_model}&item_desc=${item_desc}`
      )
      .then((res) => {
        console.log("in missing parts api response without search text success", res);
        response = res.data.message;
      })
      .catch((err) => {
        console.log("in missing parts api response without search text failed", err);
      });
  }
  return response
};

export default MissingParts;
