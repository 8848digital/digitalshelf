
import { CONSTANTS } from "../../config/api-config";
import { GlobalSearchMethod } from "../../methods/global_search_api";
import { ProductListingAPIMethods } from "../../methods/product_listing_api_method";
import { client } from "../general_api/cookie_instance";

const ProductFetch = async (
  pageNumber: any = 1,
  query?: any,
  low_high?: any,
  filters?: any,
  search_text?: any
) => {
  console.log("8848 filter sns pl api outer ", filters);
  let response: any;

  var getCookie: any;
  if (typeof window !== "undefined") {
    getCookie = localStorage.getItem("Cookie");
  }

  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };

  console.log("///----///**********value api", search_text)


  if (!search_text) {
    if (query) {
      if (Object.keys(query).length > 0) {
        if (query.subSubCategory) {

          if (filters.length === 0 || !filters) {
            console.log("8848 filter sns pl api if")
            await client
              .get(
                `${CONSTANTS.API_BASE_URL}${ProductListingAPIMethods.productList}?version=v1&method=get_list&entity=product&page_no=${pageNumber}&limit=8&filters=" "&category=${query.category}&sub_category=${query.subCategory}&sub_sub_category=${query.subSubCategory}&price_range=${low_high}`,
                config
              )
              .then((res: any) => {
                response = res.data.message;
              })
              .catch((err: any) => {
                console.log(err);
              });
          } else {
            console.log("8848 filter sns pl api else", filters)
            await client
              .get(
                `${CONSTANTS.API_BASE_URL}${ProductListingAPIMethods.productList}?version=v1&method=get_list&entity=product&filter={
                  "Level Three Category": ${JSON.stringify(query.subSubCategory)},
                  "sections": ${JSON.stringify(filters).replaceAll("&", "%26")}
                }&price_range=${low_high}&page_no=${pageNumber}&limit=8&category=${query.category}&sub_category=${query.subCategory}&sub_sub_category=${query.subSubCategory}`.replace(/\s/g, "")
              ,config)

              .then((res: any) => {
                response = res.data.message;
              })
              .catch((err: any) => {
                console.log(err);
              });
          }
          return response
        } else if (query.subCategory) {
          console.log("page sub cat");

          if (filters.length === 0 || !filters) {
            console.log("if filter data")
            await client
              .get(
                `${CONSTANTS.API_BASE_URL}${ProductListingAPIMethods.productList}?version=v1&method=get_list&entity=product&page_no=${pageNumber}&limit=8&filters=" "&category=${query.category}&sub_category=${query.subCategory}&price_range=${low_high}`
                ,config
                )

              .then((res: any) => {
                console.log(res.data.message.data.cookie_id);
                response = res.data.message;
              })
              .catch((err: any) => {
                console.log(err);
              });
            // return response;
          } else {
            console.log("data from product listing", filters)
            await client
              .get(
                `${CONSTANTS.API_BASE_URL}${ProductListingAPIMethods.productList}?version=v1&method=get_list&entity=product&filter={
                  "Sub Category": ${JSON.stringify(query.subCategory)},
                  "sections": ${JSON.stringify(filters).replaceAll("&", "%26")}
                }&price_range=${low_high}&page_no=${pageNumber}&limit=8&category=${query.category}&sub_category=${query.subCategory}`.replace(/\s/g, "")
              ,config
                )

              .then((res: any) => {
                response = res.data.message;
              })
              .catch((err: any) => {
                console.log(err);
              });
          }
          return response;
        } else if (query.brandname) {
          if (filters.length === 0 || !filters) {

            await client
              .get(
                `${CONSTANTS.API_BASE_URL}${ProductListingAPIMethods.productList}?version=v1&method=get_list&entity=product&page_no=${pageNumber}&limit=8&filters=" "&brand=${query.brandname}&price_range=${low_high}`
              ,config
                )

              .then((res: any) => {
                console.log("brand Api response", res);
                console.log(res.data.message.data.cookie_id);
                response = res.data.message;
              })
              .catch((err: any) => {
                console.log(err);
              });
          } else {
            await client
              .get(
                `${CONSTANTS.API_BASE_URL}${ProductListingAPIMethods.productList}?version=v1&method=get_list&entity=product&filter={
                  "Brand": ${JSON.stringify(query.brandname)},
                  "sections": ${JSON.stringify(filters).replaceAll("&", "%26")}
                }&price_range=${low_high}&page_no=${pageNumber}&limit=8&brand=${query.brandname}`.replace(/\s/g, "")
              ,config
                )

              .then((res: any) => {
                response = res.data.message;
              })
              .catch((err: any) => {
                console.log(err);
              });
          }
          return response;
        } else if (query.category) {
          if (filters.length === 0 || !filters) {

            await client
              .get(
                `${CONSTANTS.API_BASE_URL}${ProductListingAPIMethods.productList}?version=v1&method=get_list&entity=product&page_no=${pageNumber}&limit=8&filters=" "&category=${query.category}&price_range=${low_high}`
              ,config
                )

              .then((res: any) => {
                response = res.data.message;
              })
              .catch((err: any) => {
                console.log(err);
              });
          } else {
            await client
              .get(
                `${CONSTANTS.API_BASE_URL}${ProductListingAPIMethods.productList}?version=v1&method=get_list&entity=product&filter={
                  "Category": ${JSON.stringify(query.category)},
                  "sections": ${JSON.stringify(filters).replaceAll("&", "%26")}
                }&price_range=${low_high}&page_no=${pageNumber}&limit=8&category=${query.category}`.replace(/\s/g, "")
              ,config
                )

              .then((res: any) => {
                response = res.data.message;
              })
              .catch((err: any) => {
                console.log(err);
              });
          }
          return response;
        }
      }
    }
  } else {
    console.log("///----///**********api For search")
    await client.get(`${CONSTANTS.API_BASE_URL}/${GlobalSearchMethod.globalSearchApi}&search_text=${search_text}&page_no=${pageNumber}`, config)
      .then((res: any) => {
        response = res.data.message;
      })
      .catch(err => console.log(err));
    console.log("/////*****/////product listing api", response)
    return response;
  }
};

const getProductList = (
  pageNumber?: any,
  query?: any,
  low_high?: any,
  filters: any = [],
  search_text?: any
) => ProductFetch(pageNumber, query, low_high, filters, search_text);

export default getProductList;
