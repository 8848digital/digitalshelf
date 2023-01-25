import MetaTag from '../../../services/api/general_api/metaTag_api';
import { CONSTANTS } from "../../../services/config/api-config";
// import useProductDetail from "../../../../../../hooks/product_detail_hook"
import ProductDetailMaster from "../../../components/ProductDetailMaster/productDetailMaster";
import Header from '../../../components/Head/Head';
const Index = ({meta_data}:any) => {
    // const { detail } = useProductDetail();
    // console.log("detail render page", getProductDetails);

    // console.log("detail", detail);
    return (
        <div>
        <Header meta_data={meta_data} />
        <>
        <ProductDetailMaster />
        </>
        </div>
    )
}
export async function getServerSideProps(context: any) {
    let meta_data = await MetaTag(`${CONSTANTS.META_TAG_URL}${context.resolvedUrl}`);
    return { props: { meta_data } };
}
export default Index;