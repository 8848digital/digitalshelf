import { client } from "../general_api/cookie_instance";
import { CONSTANTS } from "../../config/api-config";
import { StoreReplacementMethods } from "../../methods/store_replacement_images_methods";
const StoreReplacementImagesDataFetch = async (request: any) => {
  let response:any={};
  // let base64URL: any;
  // console.log("my orders api", request);
  // const filePromise = new Promise((resolve, reject) => {
  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(request);
  //   fileReader.onload = () => {
  //     console.log("my orders base64 response", fileReader.result);
  //     base64URL = fileReader.result;
  //     resolve(fileReader.result);
  //   };
  //   fileReader.onerror = (error) => {
  //     reject(error);
  //   };
  // });
  // filePromise
  //   .then(async(data:any) => {
  //     console.log("my orders filepromise data", data);
  //     var bodyFormData = new FormData();
  //     bodyFormData.append("file", data);
  //     await client({
  //       method: "post",
  //       url: `${CONSTANTS.API_BASE_URL}${StoreReplacementMethods.StoreReplacementMethodsAPI}`,
  //       data: bodyFormData,
  //       headers: {
  //         "Content-Type":
  //           "multipart/form-data",
  //       },
  //     })
  //       .then((response) => {
  //         //handle success
  //         console.log("my orders", response);
  //       })
  //       .catch((response) => {
  //         //handle error
  //         console.log("my orders", response);
  //       });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  console.log("my orders promise", request);
  var bodyFormData = new FormData();
  bodyFormData.append("file", request);
  await client({
    method: "post",
    url: `${CONSTANTS.API_BASE_URL}${StoreReplacementMethods.StoreReplacementMethodsAPI}`,
    data: bodyFormData,
    headers: {
      "Content-Type":
        "multipart/form-data",
    },
  })
    .then((res) => {
      //handle success
      console.log("my orders", res);
      // let imgName:any = res.data.message.name;
      // const file_url:any = res.data.message.file_url;
      // response[`${res.data.message.name}`] = file_url;

      response.name = res.data.message.name;
      response.file_url = res.data.message.file_url
      // const testObj['imgName'] = file_url
      // response = { ...response, imgName:file_url}
      console.log("my orders store replacement images api response", response)
    })
    .catch((response) => {
      //handle error
      console.log("my orders", response);
    });
    return response;
};

const storeReplacementImagesAPI = (request: any) =>
  StoreReplacementImagesDataFetch(request);
export default storeReplacementImagesAPI;
