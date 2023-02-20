import { CONSTANTS } from "../../config/api-config";
import { HomeCategoriesListingApiMethod } from "../../methods/home_categories_listing_method";
import { client } from "./../general_api/cookie_instance";

const homeCategoriesListingFetch = async () => {
    let response: any;
  
    const config = {
      headers: {
        Accept: "application/json",
      },
      withCredentials: true,
    };
  
    await client
        .get(
          `${CONSTANTS.API_BASE_URL}/${HomeCategoriesListingApiMethod.homeCategoryListWithProducts}`,
          config
        )
        .then((res) => {
          console.log(res);
          response = res.data.message;
        })
        .catch((err) => console.log(err));
      // console.log(response);
      return response;
  
  };

const getHomeCategoriesListing = () => homeCategoriesListingFetch();

export default getHomeCategoriesListing