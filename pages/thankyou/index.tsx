import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Script from "next/script";
import ThankYou from '../../components/Thankyou/thankYouMaster';
import { CONSTANTS } from "../../services/config/api-config";
import SalesOrderFetch from "../../services/api/my_order_api/get_sales_order_id";
import ECommerceEnhancedCode from "../../services/api/general_api/ecommerce_enhance_code_api";
import Faviconheader from '../../components/Faviconheader/Faviconheader';
import useThankYou from '../../hooks/order_listing_page_hooks/order_list_hook';
import * as ga from "../../lib/ga";

const Index = () => {
  const router = useRouter();
  // const {id} = router.query;
  const {id, detail,ecommerceData} = useThankYou();

  useEffect(() => {
    ga.event({
        action: "page_view",
        params: {
          not_set:JSON.stringify(ecommerceData)
        },
      });
    
  }, [])

  return (
    <>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RV10FWEBRM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push({ ecommerce: null });
        window.datalayer.push({${ecommerce_enhanced_code}})}
          gtag('js', new Date());

          gtag('config', 'G-RV10FWEBRM');
        `}
      </Script> */}

      {/* <Faviconheader/> */}
      <ThankYou detail={detail}/>
    </>
  );
}

// export async function getServerSideProps(context: any) {
//   // console.log("thank you page ecommerce enhanced code", context.query.id)
//   let get_sales_order_id = await SalesOrderFetch();
//   console.log("get",get_sales_order_id); 
//   const method = "get_order_details" ;
//   const entity = "order" ;
//   const sales_order_id = get_sales_order_id;
  // let ecommerce_enhanced_code = await ECommerceEnhancedCode(`${CONSTANTS.API_BASE_URL}/${CONSTANTS.API_MANDATE_PARAMS}`, method, entity,sales_order_id );
  // console.log("e-commerce enhanced code api res",JSON.stringify(ecommerce_enhanced_code));
//   return { props: {ecommerce_enhanced_code} };
// }

export default Index;