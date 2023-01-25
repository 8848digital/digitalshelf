import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetWishlist, wishlist_state } from "../../store/slices/general_slice/wishlist_slice";

const useWishlist = () =>
{
    const dispatch = useDispatch();
    
    const wishlistStoreData = useSelector(wishlist_state);

    const [wishlistData, setWishlistData] = useState<any>([]);

    useEffect(()=>
    {
        dispatch(GetWishlist());
    },[])

    useEffect(()=>
    {
        console.log("wishlist data in hook after update", wishlistStoreData);
        setWishlistData([...wishlistStoreData.item])
    },[wishlistStoreData])

    return wishlistData
}

export default useWishlist;