// /api/method/sportnetwork.api.map.version_mapper?version=v1&method=get&entity=customer_address
import axios from "axios";
import { CONSTANTS } from "../../config/api-config";

const shippingAddress = async () => {
    let response: any;
    const token = localStorage.getItem('token');
    // console.log(token);
    // console.log(`id ${id}`);

    const config = {
        headers: {
            "Authorization": `Token ${token}`
        }
    }

    await axios.get(`${CONSTANTS.API_BASE_URL}/api/method/sportnetwork.api.map.version_mapper?version=v1&method=get&entity=customer_address`, config)
        .then((res) => {
            response = res.data.message.data;
            console.log("shipping Address api - ",response);
        })
        .catch((err) => {
            console.log(err);
        })
    return response;

}

const getShippingAddress = () => shippingAddress();

export default getShippingAddress;
