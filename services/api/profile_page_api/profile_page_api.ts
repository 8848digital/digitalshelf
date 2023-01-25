import axios from "axios";
import { CONSTANTS } from "../../config/api-config";
import { ProfilePageAPIMethods } from "../../methods/profilePage_method";
import { client } from "../general_api/cookie_instance";
const ProfileFetch = async(id?:any) => {
    let response : any;

    const token = localStorage.getItem("token")
        

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };


    if(id){
        await client.get(`${CONSTANTS.API_BASE_URL}/${ProfilePageAPIMethods.profileData}?version=v1&method=get_profile&entity=profile`,config)
        .then((res)=>{
            response = res.data.message.data
            console.log("profile res",response)
        })

        .catch((error)=>{
            console.log(error)
        })

        return response
    }
    else {
        await client.get(`${CONSTANTS.API_BASE_URL}/${ProfilePageAPIMethods.profileData}?version=v1&method=get_profile&entity=profile`,config)
    
        .then((res) => {
                    console.log(res);
                    response = res.data.message.data;
                })
                .catch(err => console.log(err));
            return response;
    }
    
}

const getProfileData = (id?:any) => ProfileFetch(id)

export default getProfileData;