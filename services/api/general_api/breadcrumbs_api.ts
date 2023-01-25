
import { CONSTANTS } from "../../config/api-config";
import { BreadCrumbsAPIMethods } from "../../methods/breadcrumbs_method";
import { client } from "./cookie_instance";
const breadCrumbFetch = async (
  prodType: string,
  category?: string,
  subCategory?: string,
  subSubCategory?: string,
  product?: string
) => {
  let response: any;
  const config = {
    headers: {
      Accept: 'application/json'
    },
    withCredentials:true
  };
  console.log(prodType, "prodType");
  console.log(category, "category");
  console.log(subCategory, "subCategory");
  console.log(subSubCategory, "subSubCategory");
  console.log(product, "subSubCategory");
  if (prodType === "pl") {
    if (prodType && category && subCategory && subSubCategory) {
      await client
        .get(
          `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}&sub_category=${subCategory}&sub_sub_category=${subSubCategory}`,config
        )
        .then((res) => {
          console.log("BreadCrumb Api response6", res);
          response = res.data.message.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return response;
    } else if (prodType && category && subCategory) {
      await client
        .get(
          `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}&sub_category=${subCategory}` , config
        )
        .then((res) => {
          console.log("BreadCrumb Api response5", res);
          response = res.data.message.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return response;
    } else {
      await client
        .get(
          `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}` , config
        )
        .then((res) => {
          console.log("BreadCrumb Api response4", res);
          response = res.data.message.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return response;
    }
  }
  if (prodType === "pp") {
    if (product) {
      await client
        .get(
          `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}&sub_category=${subCategory}&sub_sub_category=${subSubCategory}&product=${product}` , config
        )
        .then((res) => {
          console.log("BreadCrumb Api response3", res);
          response = res.data.message.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return response;
    } else if (subSubCategory) {
      await client
        .get(
          `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}&sub_category=${subCategory}&product=${subSubCategory}` , config
        )
        .then((res) => {
          console.log("BreadCrumb Api response2", res);
          response = res.data.message.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return response;
    } else {
      await client
        .get(
          `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=listing&category=${category}&product=${subCategory}` , config
        )
        .then((res) => {
          console.log("BreadCrumb Api response1", res);
          response = res.data.message.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return response;
    }
  }
  if (prodType === "bpl") {
    await client
      .get(
        `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=brand&brand=${category}` , config
      )
      .then((res) => {
        console.log("BreadCrumb Apis response new", res);
        response = res.data.message.data;
      })
      .catch((err) => {
        console.log(err);
        console.log("BreadCrumb Apis responses", err);
      });
    return response;
  }
  if (prodType === "bpp") {
    await client
      .get(
        `${CONSTANTS.API_BASE_URL}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=brand&product=${subCategory}&brand=${category}`, config
      )
      .then((res) => {
        console.log("BreadCrumb Apis response new", res);
        response = res.data.message.data;
      })
      .catch((err) => {
        console.log(err);
        console.log("BreadCrumb Apis responses", err);
      });
    return response;
  }

  // if(product)
  // {
  //     console.log("client-5")
  // await client.get(`${DEFAULT_API_CONFIG.url}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=${prodType}&category=${category}&sub_category=${subCategory}&sub_sub_category=${subSubCategory}&product=${product}`)
  //     .then((res)=>
  //     {
  //         console.log(res);
  //         response = res.data.message.data;
  //     })
  //     .catch((err)=>
  //     {
  //         console.log(err);
  //     })
  // return response
  // }
  // else
  // {
  //     await client.get(`${DEFAULT_API_CONFIG.url}/${BreadCrumbsAPIMethods.breadcrumbslist}?version=v1&method=breadcrums&entity=product&product_type=${prodType}&category=${category}&sub_category=${subCategory}&product=${subSubCategory}`)
  //         .then((res)=>
  //         {
  //             console.log(res);
  //             response = res.data.message.data;
  //         })
  //         .catch((err)=>
  //         {
  //             console.log(err);
  //         })
  //     return response
  // }
};

const getBreadCrumbsList = (
  prodType: string,
  category?: string,
  subCategory?: string,
  subSubCategory?: string,
  product?: string
) => breadCrumbFetch(prodType, category, subCategory, subSubCategory, product);

export default getBreadCrumbsList;
