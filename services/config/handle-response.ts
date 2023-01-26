import axios from "axios";
import { client } from "../api/general_api/cookie_instance";

const handleResponse = async (
  url: string,
  params: string,
  method: string,
  entity: string
) => {

  let response:any;
  const config = {
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  };

  await client
    .get(`${url}${params}&method=${method}&entity=${entity}`, config)
    .then((res) => {
      console.log("handle response", res);
      response = res;
    })
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export default handleResponse;
