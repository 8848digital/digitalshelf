import React from "react";
import { CONSTANTS } from "../services/config/api-config";
import MetaTag from "../components/MetaTag";
import FindDealercomponent from "../components/FindDealercomponent";
import Header from "../components/Head/Head";
const FindaDealer = ({meta_data}:any) => {


  return (
    <>
    <Header meta_data={meta_data} />
   <FindDealercomponent/>
   </>
  );
};

export async function getServerSideProps(context: any) {
  console.log("///context",context)
  let meta_data = await MetaTag(`${CONSTANTS.META_TAG_URL}${context.resolvedUrl}`);
  return { props: { meta_data } };
}

export default FindaDealer;
