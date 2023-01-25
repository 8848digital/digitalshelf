import React from 'react'
import MetaTag from '../components/MetaTag'
import { CONSTANTS } from '../services/config/api-config'
import Contactuscomponent from "../components/Contactuscomponent"

const ContactUsPage = () => {

    return (
      <Contactuscomponent/>
    )
}

export async function getServerSideProps(context: any) {
    console.log("///context",context)
    let meta_data = await MetaTag(`${CONSTANTS.META_TAG_URL}${context.resolvedUrl}`);
    return { props: { meta_data } };
  }

export default ContactUsPage