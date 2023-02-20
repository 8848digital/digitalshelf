import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetWishlist, wishlist_state } from "../../store/slices/general_slice/wishlist_slice";

const useWishlist = () => {
  const dispatch = useDispatch();

  const wishlistStoreData = useSelector(wishlist_state);
  console.log("wishlist hook", wishlistStoreData.wishProduct);

  const [wishlistData, setWishlistData] = useState<any>([]);
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  // const [wishlistProduct, setWishlistProduct] = useState<any>([]);

  useEffect(() => {
    dispatch(GetWishlist());
  }, []);

  useEffect(() => {
    console.log("wishlist data in hook after update", wishlistStoreData);
    setWishlistCount(wishlistStoreData?.item?.wishlist_count);
    // if(wishlistStoreData?.item?.data?.length > 0)
    // {
    //   setWishlistData([...wishlistStoreData?.item?.data]);
    // }
    // setWishlistProduct([wishlistStoreData?.wishProduct]);

  }, [wishlistStoreData]);

  console.log("wishlist count in hook end", wishlistCount);
  console.log("wishlistdata in hook end", wishlistData);
  // console.log("wishlistProduct in hook end", wishlistProduct);


  return { wishlistData, wishlistCount };
};

export default useWishlist;
