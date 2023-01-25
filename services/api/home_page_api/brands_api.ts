import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { BrandsApiMethods } from "../../methods/brands_method";
import { client } from "../general_api/cookie_instance";
const brandsFetch = async () => {
    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };
    let response: any;
    // var getToken = localStorage.getItem("token");
    await client.get(`${CONSTANTS.API_BASE_URL}/${BrandsApiMethods.brandsList}` , config)
        .then((res) => {
            console.log(res);
            //   localStorage.setItem("Cookie", res.data.message.cookie_id);
            // document.cookie=`Cookie=${res.data.message.cookie_id}`
            console.log(res.data.message.cookie_id);
            // res.data.message.data
            response = res.data.message.data.sort(function (a: any, b: any) {
                return a.seq - b.seq;
            });
        })
        .catch((err) => console.log(err));
    return response;

    // var getCookie = localStorage.getItem("Cookie");
    // var getToken = localStorage.getItem("token");

    // const config = {
    //     headers:{
    //         "Authorization":`Token ${getToken}`
    //     }
    // }


    // if (getToken) {
    //     const config = {
    //         headers: {
    //             // "Cookie-Id":`${getCookie}`,
    //             "Authorization": `Token ${getToken}`
    //         }
    //     }
    //     await axios.get(`${DEFAULT_API_CONFIG.url}/${BrandsApiMethods.brandsList}`, config)
    //         .then((res) => {
    //             console.log("brands api",res);

    //             // response = res.data.message.data.sort((function(a:any, b:any) {
    //             //     return a.seq - b.seq;
    //             //   }));

    //             response = res.data.message.data;
    //         })
    //         .catch(err => console.log(err));
    //     // console.log(response);
    //     return response;
    // }
    // else {
    //     await axios.get(`${DEFAULT_API_CONFIG.url}/${BrandsApiMethods.brandsList}`)
    //         .then((res) => {
    //             console.log(res);

    //             // response = res.data.message.data.sort((function(a:any, b:any) {
    //             //     return a.seq - b.seq;
    //             //   }));

    //             response = res.data.message.data;
    //         })
    //         .catch(err => console.log(err));
    //     // console.log(response);
    //     return response;
    // }

}

const getBrandsList = () => brandsFetch();

export default getBrandsList