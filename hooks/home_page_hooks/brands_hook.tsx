import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { BrandsApi, brand_state } from "../../store/slices/home_page_slice/brands_slice";
// import {AppState} from '../store/store';
// import { RootState } from "../store/root_reducer";
import { useRouter } from "next/router";
// import { wrapper } from "../store/store";

const useBrands = () => {
  const { query, isReady } = useRouter();
  let [brandItems, setbrandItems] = useState<any>([]);
  const brands = useSelector(brand_state);
  // console.log("store brand res",brands);
  console.log("hooks brands item", brands);

  const dispatch = useDispatch();
  useEffect(() => {
    // if (typeof brands.items !== "undefined" && brands.items.length === 0)
    dispatch(BrandsApi());
  }, []);
  
  useEffect(() => {
    setbrandItems([...brands.items]);
    // setbrandItems(brands.items);
    // console.log("use effect brands",)
  }, [brands]);

  return brandItems;
};
export default useBrands;
