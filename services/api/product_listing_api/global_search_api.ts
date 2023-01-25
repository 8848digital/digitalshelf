import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { GlobalSearchMethod } from "../../methods/global_search_api";
// import { useCookies } from 'react-cookie';
import { NavbarApiMethods } from "../../methods/navbar_api_method";
// import 
import { client } from "../general_api/cookie_instance";
const GlobalSearch = async (search_text?:any) => {
    // const [cookies, setCookie] = useCookies<any>(["Cookie"]);
    let response: any;
    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };


    await client.get(`${CONSTANTS.API_BASE_URL}/${GlobalSearchMethod.globalSearchApi}&search_text=${search_text}` , config)
        .then((res:any) => {
            response = res.message.data;
            // console.log(response);
        })
        .catch(err => console.log(err));
    return response;


}


const getGlobalSearch = () => GlobalSearch();

export default getGlobalSearch
