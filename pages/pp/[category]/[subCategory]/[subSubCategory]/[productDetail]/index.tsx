import MetaTag from '../../../../../../services/api/general_api/metaTag_api';
import { CONSTANTS } from "../../../../../../services/config/api-config";
import Header from '../../../../../../components/Head/Head';
import ProductDetailMasterComponent from '../../../../../../components/ProductDetailMaster/ProductDetailMasterComponent';
// import useProductDetail from "../../../../../../hooks/product_detail_hook"
// import MaximaProductdetailMaster from "../../../../../../components/ProductDetailMaster/maximaProductdetailMaster";
const ProductDetail = ({ meta_data }: any) => {
    // const { detail } = useProductDetail();
    // console.log("detail render page", getProductDetails);

    // console.log("detail", detail);
    return (
        <div>
            <Header meta_data={meta_data} />
            <>
            <ProductDetailMasterComponent />
            </>
        </div>

    )
}
export async function getServerSideProps(context: any) {
    let meta_data = await MetaTag(`${CONSTANTS.META_TAG_URL}${context.resolvedUrl}`);
    return { props: { meta_data } };
}
export default ProductDetail