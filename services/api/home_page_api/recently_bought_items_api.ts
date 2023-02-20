import { CONSTANTS } from "../../config/api-config";
import { client } from "../general_api/cookie_instance";
const RecentlyBoughtItemsFetch = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  };
  let response: any;
  const method = "recently_bought";
  const entity = "order";

  await client
    .get(
      `${CONSTANTS.API_BASE_URL}/${CONSTANTS.API_MANDATE_PARAMS}&method=${method}&entity=${entity}`,
      config
    )
    .then((res) => {
      console.log("recently bought items api file success", res);
      response = res.data.message;
    })
    .catch((err) => console.log("recently bought items api file error", err));

  return response;
};

export default RecentlyBoughtItemsFetch;
