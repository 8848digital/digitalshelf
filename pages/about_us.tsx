import Aboutpage from "../components/Aboutpage"
import MetaTag from "../components/MetaTag";
import { CONSTANTS } from "../services/config/api-config";
import Header from "../components/Head/Head";

function about_us({ meta_data }: any) {
  return (
    <>
      <Header meta_data={meta_data} />  
     <Aboutpage/> 
    </>
  );
}

export async function getServerSideProps(context: any) {
  console.log("//context/",context)
let meta_data = await MetaTag(
  `${CONSTANTS.META_TAG_URL}${context.resolvedUrl}`
);
return { props: { meta_data } };
}


export default about_us;
