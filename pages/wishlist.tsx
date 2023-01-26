import { ProductCard } from "../cards/product_card";
import useWishlist from "../hooks/general_hooks/wishlist_hook"

const Wishlist = () =>
{
    const wishlistData = useWishlist();
    console.log("wishlist response in render file", wishlistData);
    return(
        <>
        <div style={{marginTop:"100px"}}>
            Wishlist

            {wishlistData.map((product:any, index:number)=>{
                return(
                    <div className="col-lg-3 col-6 p-0 mb-2 " key={index} >
                    <ProductCard
                      id={product.id}
                      prod_name={product.prod_name}
                      prod_slug={product.product_slug}
                      price={product.price}
                      mrp_price={product.mrp_price}
                      img_url={product.image_url}
                      in_stock_status={product.in_stock_status}
                      url={product.url}
                    />
                    </div>
                )
            })}

        </div>
        </>
    )
}

export default Wishlist