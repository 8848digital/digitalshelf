
import axios from 'axios';
import { client } from "./cookie_instance";
const ECommerceEnhancedCode = async (url: any, method:any, entity:any, salesOrderId:any) => {

    const config = {
        headers: {
          Accept: 'application/json'
        },
        withCredentials:true
      };
    let enhance_code;
    console.log("ecommerce enhance code api");

  //   const some_cookies = document.cookie.split(';');

  //   for (var i = 0; i < some_cookies.length; i++) {
  //     document.cookie = some_cookies[i] + "=; expires="+ new Date(0).toUTCString();
  //  }
    // console.log(metaTagsAuthorization);

    const res = await client.get(`${url}&method=${method}&entity=${entity}&order_id=${salesOrderId}`, config );
    enhance_code = res.data.message.ecommerce;
    console.log("axios res ecommerce enhanced code res", res);
    console.log("axios res ecommerce enhanced code data", enhance_code);

    return enhance_code;
}

export default ECommerceEnhancedCode