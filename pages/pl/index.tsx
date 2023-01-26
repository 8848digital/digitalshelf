import ProductList from "../../components/Products/productListingMaster";
import { useProductListing } from "../../hooks/product_listing_page_hooks/product_listing_hook";
import ProductListingMaster from '../../components/Products/productListingMaster';
import MetaTag from "../../components/MetaTag";
import { CONSTANTS } from "../../services/config/api-config";
import Header from "../../components/Head/Head";
const ProductListing = ({ meta_data }: any) => {
    console.log("product listing pl")
    // console.log("Product count ", product_count);
    return (
      // <ProductList />
      <div>
        <Header meta_data={meta_data} />
        <>
          <ProductListingMaster />
        </>
      </div>
    );
}

export async function getServerSideProps(context: any) {
    let meta_data = await MetaTag(`${CONSTANTS.META_TAG_URL}${context.resolvedUrl}`);
    return { props: { meta_data } };
}

export default ProductListing