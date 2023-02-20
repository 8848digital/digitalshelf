import { CONSTANTS } from "../../config/api-config";
import { BreadCrumbsAPIMethods } from "../../methods/breadcrumbs_method";
import { client } from "./cookie_instance";
const breadCrumbFetch = async (url: any) => {
  console.log("breadcrumb url in api file ", url);
  url.shift();
  const [prodType, category, subCategory, subSubCategory, product] = url;
  let response: any;
  const method = "breadcrums";
  const entity = "product";
  const listingProductType = "listing";
  const listingBrandType = "brand";
  let params: string = "";
  const config = {
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
  };
  // console.log("breadcrumb url in api file prodType", prodType);
  // console.log("breadcrumb url in api file category", category);
  // console.log("breadcrumb url in api file subcategory", subCategory);
  // console.log("breadcrumb url in api file subSubCategory", subSubCategory);
  // console.log("breadcrumb url in api file product", product);

  if (prodType === "pl") {
    if (prodType && category && subCategory && subSubCategory) {
      params = `&method=${method}&entity=${entity}&product_type=${listingProductType}&category=${category}&sub_category=${subCategory}&sub_sub_category=${subSubCategory}`;
    } else if (prodType && category && subCategory) {
      params = `&method=${method}&entity=${entity}&product_type=${listingProductType}&category=${category}&sub_category=${subCategory}`;
    } else if (prodType && category) {
      params = `&method=${method}$entity=${entity}&product_type=${listingProductType}&category=${category}`;
    } else {
      params = `&method=${method}$entity=${entity}&product_type=${listingProductType}`;
    }
  } else if (prodType === "pp") {
    if (product) {
      params = `&method=${method}$entity=${entity}&product_type=${listingProductType}&category=${category}&sub_category=${subCategory}&sub_sub_category=${subSubCategory}&product=${product}`;
    } else if (subSubCategory) {
      params = `&method=${method}$entity=${entity}&product_type=${listingProductType}category=${category}&sub_category=${subCategory}&product=${subSubCategory}`;
    } else if (subCategory) {
      params = `&method=${method}$entity=${entity}&product_type=${listingProductType}&category=${category}&product=${subCategory}`;
    } else {
      params = `&method=${method}$entity=${entity}&product_type=${listingProductType}&product=${category}`;
    }
  } else if (prodType === "bpl") {
    params = `&method=${method}$entity=${entity}&product_type=${listingBrandType}&brand=${category}`;
  } else if (prodType === "bpp") {
    params = `&method=${method}$entity=${entity}&product_type=${listingBrandType}&brand=${category}&product=${subCategory}`;
  }

  await client
    .get(
      `${CONSTANTS.API_BASE_URL}${CONSTANTS.API_MANDATE_PARAMS}${params}`,
      config
    )
    .then((res) => {
      console.log("BreadCrumb Api response6", res);
      response = res.data.message.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return response;

  // if (prodType === "pl") {
  //   if (prodType && category && subCategory && subSubCategory) {
  //     await client
  //       .get(
  //         `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}&sub_category=${subCategory}&sub_sub_category=${subSubCategory}`,
  //         config
  //       )
  //       .then((res) => {
  //         console.log("BreadCrumb Api response6", res);
  //         response = res.data.message.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return response;
  //   } else if (prodType && category && subCategory) {
  //     await client
  //       .get(
  //         `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}&sub_category=${subCategory}`,
  //         config
  //       )
  //       .then((res) => {
  //         console.log("BreadCrumb Api response5", res);
  //         response = res.data.message.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return response;
  //   } else if (prodType && category) {
  //     await client
  //       .get(
  //         `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}`,
  //         config
  //       )
  //       .then((res) => {
  //         console.log("BreadCrumb Api response4", res);
  //         response = res.data.message.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return response;
  //   } else {
  //     await client
  //       .get(
  //         `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing`,
  //         config
  //       )
  //       .then((res) => {
  //         console.log("BreadCrumb Api response4", res);
  //         response = res.data.message.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return response;
  //   }
  // }
  // if (prodType === "pp") {
  //   if (product) {
  //     await client
  //       .get(
  //         `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}&sub_category=${subCategory}&sub_sub_category=${subSubCategory}&product=${product}`,
  //         config
  //       )
  //       .then((res) => {
  //         console.log("BreadCrumb Api response3", res);
  //         response = res.data.message.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return response;
  //   } else if (subSubCategory) {
  //     await client
  //       .get(
  //         `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}&sub_category=${subCategory}&product=${subSubCategory}`,
  //         config
  //       )
  //       .then((res) => {
  //         console.log("BreadCrumb Api response2", res);
  //         response = res.data.message.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return response;
  //   } else if (subCategory) {
  //     await client
  //       .get(
  //         `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}&product=${subCategory}`,
  //         config
  //       )
  //       .then((res) => {
  //         console.log("BreadCrumb Api response1", res);
  //         response = res.data.message.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return response;
  //   } else {
  //     await client
  //       .get(
  //         `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&product=${category}`,
  //         config
  //       )
  //       .then((res) => {
  //         console.log("BreadCrumb Api response1", res);
  //         response = res.data.message.data;
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     return response;
  //   }
  // }

  // if (prodType === "bpl") {
  //   await client
  //     .get(
  //       `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=brand&brand=${category}`,
  //       config
  //     )
  //     .then((res) => {
  //       console.log("BreadCrumb Apis response new", res);
  //       response = res.data.message.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log("BreadCrumb Apis responses", err);
  //     });
  //   return response;
  // }

  // if (prodType === "bpp") {
  //   await client
  //     .get(
  //       `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=brand&brand=${category}&product=${subCategory}`,
  //       config
  //     )
  //     .then((res) => {
  //       console.log("BreadCrumb Apis response new", res);
  //       response = res.data.message.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log("BreadCrumb Apis responses", err);
  //     });
  //   return response;
  // }

  // if (product) {
  //   console.log("client-5");
  //   await client
  //     .get(
  //       `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=${prodType}&category=${category}&sub_category=${subCategory}&sub_sub_category=${subSubCategory}&product=${product}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       response = res.data.message.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   return response;
  // } else {
  //   await client
  //     .get(
  //       `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=${prodType}&category=${category}&sub_category=${subCategory}&product=${subSubCategory}`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       response = res.data.message.data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   return response;
  // }
};

const getBreadCrumbsList = (url: any) => breadCrumbFetch(url);

export default getBreadCrumbsList;
