
import { client } from "./../general_api/cookie_instance";
import { CONSTANTS } from "../../config/api-config";
import { StockAavailabilityMethod } from "../../methods/stock_availability_method";

const GetStockAvailability = async(slug:any) => {
    console.log("stock availiability in api");
    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };

    let response: any;
    // console.log(DEFAULT_API_CONFIG)
    await client.get(`${CONSTANTS.API_BASE_URL}/${StockAavailabilityMethod.stockAvailability}?version=v1&item_code=${slug}&method=check_availability&entity=product`, config)
        .then((res) => {
            console.log("stock availability api res ", res);
            response = res.data;
        })
        .catch((err) => {
            console.log(err);
        })
    return response

}

export default GetStockAvailability;