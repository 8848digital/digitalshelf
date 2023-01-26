import MetaTag from '../../../services/api/general_api/metaTag_api';
import { CONSTANTS } from "../../../services/config/api-config";
import ProductListingMaster from '../../../components/Products/productListingMaster';
import Header from '../../../components/Head/Head';


const Category = ({ meta_data }: any) => {
    
    // console.log("Product listing ", listItems)
    return (
        <div>
            <Header meta_data={meta_data} />
            <>
            <ProductListingMaster/>
            </>
        </div>
    )
}
export async function getServerSideProps(context: any) {
    let meta_data = await MetaTag(`${CONSTANTS.META_TAG_URL}${context.resolvedUrl}`);
    return { props: { meta_data } };
}
export default Category