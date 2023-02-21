import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { ProductDetailApi, ProductStockAvailabilityAPI } from "../../store/slices/product_detail_slice/product_detail_slice";
import { ProductVariantsApi } from "../../store/slices/product_detail_slice/product_variant_slice";
import { product_detail_state } from "../../store/slices/product_detail_slice/product_detail_slice";
import { product_variant_state } from "../../store/slices/product_detail_slice/product_variant_slice";
import { SuggestedProApi, alternativeProductApi,suggested_pro_state } from "../../store/slices/product_detail_slice/suggested_pro_slice";
import { RootState } from "../../store/root_reducer";
import { CONSTANTS } from "../../services/config/api-config";
const useProductDetail = () => {
  let [detail, setdetail] = useState<any>([]);
  let [variants, setvariants] = useState<any>([]);
  let [images, setimages] = useState<any>([]);
  let [specifications, setspecifications] = useState<any>([]);
  let [initialSize, setInitialSize] = useState("");
  let [initialColor, setInitialColor] = useState("");
  let [quantity, setquantity] = useState<number>(1);
  // let [g, setspecifications] = useState<any>([]);
  let [suggestedDataState, setSuggestedDataState] = useState<any>([]);
  let [alternativeDataState, setAlternativeDataState] = useState<any>([]);
  let [stockAvailability, setStockAvailability] = useState<any>([]);
  const [wishlistToast, setWishlistToast] = useState(false);
  const [WishlistToastnew, setWishlistToastnew] = useState(false);
  // const suggestedData = useSelector(suggested_pro_state);
  const suggestedData =useSelector((state: RootState) => state.suggestedProScreen); 
  console.log("suggested data from state in hook", suggestedData);
  let imgArr: any = [];
  let imgObj: any = {};
  let router: any;
  const dispatch = useDispatch();

  if (typeof window !== "undefined") {
    router = window.location.pathname.split("/");
  }

  const prodDetailData = useSelector(product_detail_state);
  const prodVariants = useSelector(product_variant_state);

  console.log("detail data from store", prodDetailData);
  console.log("detail variants from store", prodVariants);
  console.log("detail variants from store", prodVariants.initialSize);
  console.log("detail variants from store", prodVariants.initialColor);
  console.log("stock availability", router[router.length - 1],"router");
  // console.log("detail variants initial size",prodVariants.variants.attributes)
  // console.log("detail images from store", prodDetailData?.item?.slide_img);

  useEffect(() => {
    // console.log("detail router testing");
    // console.log("detail query testing",router)
    // console.log("detail query varinats testing",)
    dispatch(ProductDetailApi(router[router.length - 1]));
    dispatch(ProductVariantsApi(router[router.length - 1]));
    dispatch(SuggestedProApi("suggested", router[router.length - 1]));
    dispatch(alternativeProductApi("alternate", router[router.length - 1]));
    dispatch(ProductStockAvailabilityAPI(router[router.length - 1]));
  }, []);

  useEffect(() => {
    console.log(" prod detail sp hook", prodDetailData);
    // if(prodDetailData.item.length === 0)
    // {
    //   console.log("prod detail hook")
    // }
    setdetail((detail = [prodDetailData.item]));
    setvariants((variants = [prodVariants.variants]));
    setInitialSize(prodVariants.initialSize);
    setInitialColor(prodVariants.initialColor);
    // setStockAvailability([...prodDetailData.stock]);
    if(suggestedData?.suggestedItems?.length > 0)
    {
      setSuggestedDataState(suggestedDataState= [...suggestedData?.suggestedItems])
    }

    if(suggestedData?.aletrnativeItems?.length > 0)
    {
      setAlternativeDataState(alternativeDataState= [...suggestedData?.aletrnativeItems])
    }
  
    // setInitialColor(prodVariants?.variants?.attributes[3].colour_values[0]);

 prodDetailData?.item?.slide_img?.map((imgs: any) => {
      imgArr.push({
        original: `${CONSTANTS.API_BASE_URL}${imgs}`,
        thumbnail: `${CONSTANTS.API_BASE_URL}${imgs}`,
        variant_code:0
      });
    });
  
    
    prodDetailData?.item?.slide_img?.map((imgs: any) => {
      setimages(imgArr)
    });
 
  }, [prodDetailData, prodVariants, suggestedData]);

  const handleSize = (val: string) => {
    // console.log("handle size", val)
    setInitialSize(val);
  };

  const handleColor = (val: string) => {
    // console.log("handle color", val)
    setInitialColor(val);
  };

  const handleQuantity = (val: any) => {
    setquantity(val);
    console.log("quantity", quantity);
  };

  const handleQuantityIncre = () => {
    setquantity(Number(quantity) + 1);
  };
  const handleQuantityDecre = () => {
    if (quantity != 1) {
      setquantity(quantity - 1);
    } else {
      setquantity(1);
    }
  };

  // Trail and error to mitigate use of redux store
  // const handleProdShow = async (id: any) => {
  // getProductDetails = await ProductDetailList(id);
  // setdetail(detail = [getProductDetails])
  // console.log("detail id", id);
  // console.log("detail in prodshow function", getProductDetails)
  // console.log("detail change in getProduc tDetails", getProductDetails);
  // setdetail(detail = [getProductDetails])
  // }

  // useEffect(() => {
  // console.log("detail change in getProductDetails", getProductDetails);
  // setdetail(detail = [prodDetailData.item]);
  // setvariants(variants = [prodVariants.variants]);
  // }, [setID,getProductDetails])

  console.log("detail after changes", detail);

  console.log("detail variants size from store 2", initialSize);
  console.log("detail variants color from store 2", initialColor);
  console.log("detail hook variants",variants)
  console.log("suggested state hook",suggestedDataState)
  console.log("alternative state hook",alternativeDataState)
  console.log("stock availability",stockAvailability );

  return {
    detail,
    variants,
    images,
    initialSize,
    setInitialSize,
    initialColor,
    setInitialColor,
    handleSize,
    handleColor,
    quantity,
    handleQuantity,
    handleQuantityIncre,
    handleQuantityDecre,
    setquantity,
    suggestedDataState,
    alternativeDataState,
    stockAvailability,
    setWishlistToast,
    wishlistToast,
    setWishlistToastnew,
    WishlistToastnew,
  };
};

export default useProductDetail;
