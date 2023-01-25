import axios from "axios";
import { config } from "process";
import { CONSTANTS } from "../../config/api-config";
import { HomeCategoriesApiMethod } from "../../methods/home_categories_methods";
import { client } from "../general_api/cookie_instance";

const homeCategoriesFetch = async () => {
    let response: any;

    var getCookie = localStorage.getItem("Cookie");
    var getToken = localStorage.getItem("token");

    // const config = {
    //     headers:{
    //         // "Cookie-Id":`${getCookie}`,
    //         "Origin ":"scott-sports.8848digitalerp.com"
    //     }
    // }

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };
    if (getToken) {
        // const config = {
        //     headers: {
        //         // "Cookie-Id":`${getCookie}`,
        //         "Authorization": `Token ${getToken}`
        //     }
        // }
        await axios.get(`${CONSTANTS.API_BASE_URL}/${HomeCategoriesApiMethod.categoryList}`, config)
            .then((res) => {
                console.log(res);

                // localStorage.setItem("Cookie", res.data.message.cookie_id);

                // response = res.data.message.data.sort((function(a:any, b:any) {
                //     return a.seq - b.seq;
                //   }));

                response = res.data.message;
            })
            .catch(err => console.log(err));
        // console.log(response);
        return response;
    }
    else {
        await client.get(`${CONSTANTS.API_BASE_URL}/${HomeCategoriesApiMethod.categoryList}`, config)
            .then((res) => {
                console.log(res);

                localStorage.setItem("Cookie", res.data.message.cookie_id);

                // response = res.data.message.data.sort((function(a:any, b:any) {
                //     return a.seq - b.seq;
                //   }));

                response = res.data.message;
            })
            .catch(err => console.log(err));
        // console.log(response);
        return response;
    }



    // await axios.get(`${DEFAULT_API_CONFIG.url}/${HomeCategoriesApiMethod.categoryList}`)
    //     .then((res) => {
    //         console.log(res);

    //         localStorage.setItem("Cookie",res.data.message.cookie_id);

    //         // response = res.data.message.data.sort((function(a:any, b:any) {
    //         //     return a.seq - b.seq;
    //         //   }));

    //           response = res.data.message;
    //     })
    //     .catch(err => console.log(err));
    // // console.log(response);
    // return response;

}

const getHomeCategories = () => homeCategoriesFetch();

export default getHomeCategories