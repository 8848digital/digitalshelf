import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartListingApi } from "../../store/slices/cart_page_slice/cart_slice";
import { Cart_Listing } from "../../store/slices/cart_page_slice/cart_slice";

const useCartListing = () => {
    const [cartListingItems, setcartListingItems] = useState<any>([]);
    const [cartCount , setCartCount] = useState<number>(0);
    const [grandTotal , setgrandTotal] = useState<null | number>(0);
    // let grand_total_val;
 
    const dispatch = useDispatch();
    const cartProducts = useSelector(Cart_Listing);
    console.log("Cart Product selector hook - ",cartProducts);
    console.log("cart selector ", cartProducts.item)

    useEffect(() => {
        dispatch(CartListingApi()); 
    }, [])

    useEffect(() => {
        setcartListingItems(cartProducts.item)   
        setCartCount(cartProducts.cartCount)
        setgrandTotal(cartProducts.grand_total)
        // console.log("grand total hooks me", grand_total_val)
    }, [cartProducts])

    console.log("Cart Listing hook",cartListingItems);

    return {
        cartListingItems,
        cartCount,
        grandTotal
    }
    

}

export default useCartListing