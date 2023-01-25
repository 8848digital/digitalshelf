import MetaTag from '../../services/api/general_api/metaTag_api';
import { CONSTANTS } from "../../services/config/api-config";
// import useProductDetail from "../../../../../../hooks/product_detail_hook"
import ProductDetailMasterComponent from "../../components/ProductDetailMaster/ProductDetailMasterComponent";
const ProductDetail = () => {
    // const { detail } = useProductDetail();
    // console.log("detail render page", getProductDetails);

    // console.log("detail", detail);
    return (
        <ProductDetailMasterComponent/>
    )
}
export async function getServerSideProps(context: any) {
    let meta_data = await MetaTag(`${CONSTANTS.META_TAG_URL}${context.resolvedUrl}`);
    return { props: { meta_data } };
}
export default ProductDetail