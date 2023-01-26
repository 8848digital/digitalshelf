import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { DealerProfileAPIMethods } from "../../methods/dealer_profile_method";
import { HomeCategoriesApiMethod } from "../../methods/home_categories_methods";
import { BrandsApiMethods } from "../../methods/brands_method";
import { client } from "./../general_api/cookie_instance";

const Dealerprofile = async() => {
    let response : any;

    // const token = localStorage.getItem("token")
        

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };


        await client.get(`${CONSTANTS.API_BASE_URL}/${ DealerProfileAPIMethods.Dealerprofile}?version=v1&method=get_profile&entity=profile`,config)
    
        .then((res) => {
                    response = res.data.message.data;
                })
                .catch(err => console.log(err));
            return response;
              
}


const Dealerprofilenew = async() => {
    let response : any;
    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };

    // const token = localStorage.getItem("token")
        

    // const config = {
    //     headers : {
    //         "Authorization": `Token ${token}`
    //     }
    // }

    await client.get(`${CONSTANTS.API_BASE_URL}/${HomeCategoriesApiMethod.categoryList}`, config)
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

const Dealerbrand = async() => {

    const token = localStorage.getItem("token")
        

    const config = {
        headers : {
            "Authorization": `Token ${token}`
        }
    }

let response: any;

await client
    .get(`${CONSTANTS.API_BASE_URL}/${BrandsApiMethods.brandsList}`)
    .then((res) => {
        console.log(res);
        console.log(res.data.message.cookie_id);
        response = res.data.message.data.sort(function (a: any, b: any) {
            return a.seq - b.seq;
        });
    })
    .catch((err) => console.log(err));
return response;
}
const getDealerprofile = () => Dealerprofile()

export default getDealerprofile;
const Dealerprofilenewcat = () =>Dealerprofilenew()
export {Dealerprofilenewcat} ;
const Dealerprofilebrand = () =>Dealerbrand()
export {Dealerprofilebrand} ;