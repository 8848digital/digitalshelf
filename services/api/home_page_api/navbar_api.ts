import axios from "axios"; 
import { CONSTANTS } from "../../config/api-config";
// import { useCookies } from 'react-cookie';
import { NavbarApiMethods } from "../../methods/navbar_api_method";
import { client } from "../general_api/cookie_instance";

const navbarFetch = async () => {
    // const [cookies, setCookie] = useCookies<any>(["Cookie"]);
    let response: any;
    var getToken = localStorage.getItem("token");

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };
      
    if (getToken) {
        // console.log("If axios");

        await client.get(`${CONSTANTS.API_BASE_URL}/${NavbarApiMethods.navbarList}`, config)
            .then((res) => {
                console.log("navbar api response with token",res);
                // localStorage.setItem("Cookie", res.data.message.cookie_id);
                // document.cookie=`Cookie=${res.data.message.cookie_id}`
                // console.log(res.data.message.cookie_id);
                // res.data.message.data
                response = res.data.message.data.sort((function (a: any, b: any) {
                    return a.seq - b.seq;
                }));
                // console.log(response);
            })
            .catch(err => console.log(err));
            return response;
        }
        else {
            // console.log("Else axios");
            await client.get(`${CONSTANTS.API_BASE_URL}/${NavbarApiMethods.navbarList}`, config)
            .then((res) => {
                console.log("navbar api response",res);
                // localStorage.setItem("Cookie", res.data.message.cookie_id);
                // document.cookie=`Cookie=${res.data.message.cookie_id}`
                // console.log(res.data.message.cookie_id);
                // res.data.message.data
                response = res.data.message.data.sort((function (a: any, b: any) {
                    return a.seq - b.seq;
                }));
                // console.log(response);
            })
            .catch(err => console.log(err));
        return response;
    }
}


const getNavbarList = () => navbarFetch();

export default getNavbarList
