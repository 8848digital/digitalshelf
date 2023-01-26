import { useRouter } from 'next/router';
import React from 'react'
import ThankYou from '../../../components/Thankyou/thankYouMaster';
import { CONSTANTS } from "../../../services/config/api-config" 
// import ECommerceEnhancedCode from "../../services/api/ecommerce_enhance_code_api";
// import Faviconheader from '../../components/Faviconheader/Faviconheader';

const Index = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <>
    {/* <Faviconheader/> */}
    <ThankYou />
    </>
  )
}

// export async function getServerSideProps(context: any) {
//   // console.log("thank you page ecommerce enhanced code", context.query.id)
//   let ecommerce_enhanced_code = await ECommerceEnhancedCode(`${CONSTANTS.ECOMMERCE_ENHANCED_CODE_URL}`,context.query.id );
//   return { props: { } };
// }

export default Index;