import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { CarouselApiMethods } from "../../methods/carousel_method";
import { client } from "../general_api/cookie_instance";
const carouselFetch = async () => {
    let response: any;
    var getCookie = localStorage.getItem("Cookie");

    var getCookie = localStorage.getItem("Cookie");
    var getToken = localStorage.getItem("token");

    // const config = {
    //     headers:{
    //         "Authorization":`Token ${getToken}`
    //         // "Cookie-Id":`${getCookie}`,
    //         // "Origin":"scott-sports.8848digitalerp.com"
    //     }
    // }

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };
    if (getToken) {

        await client.get(`${CONSTANTS.API_BASE_URL}/${CarouselApiMethods.carouselList}`, config)
            .then((res) => {
                console.log("carousel api res with token",res);
                // localStorage.setItem("Cookie", res.data.message.cookie_id);
                // document.cookie=`Cookie=${res.data.message.cookie_id}`
                // console.log(res.data.message.cookie_id);
                response = res.data.message.data.sort((function (a: any, b: any) {
                    return a.seq - b.seq;
                }));
            })
            .catch(err => console.log(err));
            return response;
        }
        else {
            
            await client.get(`${CONSTANTS.API_BASE_URL}/${CarouselApiMethods.carouselList}`, config)
            .then((res) => {
                console.log("carousel api res without token",res);
                // console.log(res);
                // localStorage.setItem("Cookie", res.data.message.cookie_id);
                // document.cookie=`Cookie=${res.data.message.cookie_id}`
                // console.log(res.data.message.cookie_id);
                response = res.data.message.data.sort((function (a: any, b: any) {
                    return a.seq - b.seq;
                }));
            })
            .catch(err => console.log(err));
        return response;
    }
}

const getCarouselList = () => carouselFetch()

export default getCarouselList