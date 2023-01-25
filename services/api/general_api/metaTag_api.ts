
import { CONSTANTS } from "../../config/api-config";
import axios from 'axios';

const MetaTag = async (url: any) => {
    let meta_data;
    console.log("meta tags component");
    console.log(CONSTANTS.META_TAGS_AUTHORIZATION);

    const res = await axios.get(`${url}`, { headers: { Authorization: CONSTANTS.META_TAGS_AUTHORIZATION } });
    meta_data = res.data.data
    console.log("axios res meta data", meta_data);

    return meta_data;
}

export default MetaTag