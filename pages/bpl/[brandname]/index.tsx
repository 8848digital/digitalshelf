import MetaTag from '../../../services/api/general_api/metaTag_api';
import { CONSTANTS } from "../../../services/config/api-config"
import ProductListingMaster from '../../../components/Products/productListingMaster';
import Header from '../../../components/Head/Head';
import { useProductListing } from '../../../hooks/product_listing_page_hooks/product_listing_hook';
const BrandProductListing = ({ meta_data }: any) => {
    let { listItems, filtersData,
        handlePagination, handlePrice, price } = useProductListing();
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
export default BrandProductListing