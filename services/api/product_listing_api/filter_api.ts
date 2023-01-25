
import { CONSTANTS } from "../../config/api-config";
import { client } from "../general_api/cookie_instance";
const FilterFetch = async (
  query: any,
  // subCategory?: any,
  // subSubCategory?: any
) => {
  let response: any;
  console.log("4444Filter api ", query);

  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };

  if (query.subSubCategory) {
    await client
      .get(
        `${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get_filters&entity=filter&doctype=Level Three Category&docname=${query.subSubCategory}`
      , config
        )
      .then((res) => {
        console.log(res);
        response = res.data.message.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  } else if (query.subCategory) {
    await client
      .get(
        `${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get_filters&entity=filter&doctype=Sub Category&docname=${query.subCategory}`
      , config
        )
      .then((res) => {
        console.log(res);
        response = res.data.message.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  } else {
    await client
      .get(
        `${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get_filters&entity=filter&doctype=Category&docname=${query.category}`
      , config
        )
      .then((res) => {
        console.log(res);
        response = res.data.message.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return response;
  }
};

const getFiltersList = (
  query: any,
  // subCategory?: any,
  // subSubCategory?: any
) => FilterFetch(query);

export default getFiltersList;
