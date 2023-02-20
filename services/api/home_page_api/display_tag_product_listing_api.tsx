import { client } from "./../general_api/cookie_instance";
import { CONSTANTS } from "../../config/api-config";
import { HomePageDisplayTagProductListing } from "../../methods/display_tag_product_listing_method";

const DisplayTagProductListingFetch = async(displayTagValue:any) =>
{
    let response: any;
  
    const config = {
      headers: {
        Accept: "application/json",
      },
      withCredentials: true,
    };
    
    if(displayTagValue === "New Arrival")
    {
      await client
          .get(
            `${CONSTANTS.API_BASE_URL}/${HomePageDisplayTagProductListing.newArrivalProductList}`,
            config
          )
          .then((res) => {
            console.log("display tag new arrival api res in api",res);
            response = res.data.message;
          })
          .catch((err) => console.log(err));
        // console.log(response);
        return response;
    }

    else if(displayTagValue === "Special Offer")
    {
      await client
          .get(
            `${CONSTANTS.API_BASE_URL}/${HomePageDisplayTagProductListing.specialOffersProductList}`,
            config
          )
          .then((res) => {
            console.log("display tag special offer api res in api",res);
            response = res.data.message;
          })
          .catch((err) => console.log(err));
        // console.log(response);
        return response;
    }
}

const DisplayTagProductListing = (displayTagValue:any) => DisplayTagProductListingFetch(displayTagValue);

export default DisplayTagProductListing;