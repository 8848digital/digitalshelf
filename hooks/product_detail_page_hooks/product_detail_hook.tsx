import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { ProductDetailApi } from "../../store/slices/product_detail_slice/product_detail_slice";
import { ProductVariantsApi } from "../../store/slices/product_detail_slice/product_variant_slice";
import { product_detail_state } from "../../store/slices/product_detail_slice/product_detail_slice";
import { product_variant_state } from "../../store/slices/product_detail_slice/product_variant_slice";
import { SuggestedProApi, suggested_pro_state } from "../../store/slices/product_detail_slice/suggested_pro_slice";

const useProductDetail = () => {
  let [detail, setdetail] = useState<any>([]);
  let [variants, setvariants] = useState<any>([]);
  let [images, setimages] = useState<any>([]);
  let [specifications, setspecifications] = useState<any>([]);
  let [initialSize, setInitialSize] = useState('');
  let [initialColor, setInitialColor] = useState('');
  let [quantity, setquantity] = useState<number>(1);
  // let [g, setspecifications] = useState<any>([]);
  let [suggestedDataState, setSuggestedDataState] = useState<any>([]);
  const suggestedData = useSelector(suggested_pro_state);
  console.log("suggested data from state in hook", suggestedData);
  let imgArr:any = [];
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
  // console.log("detail variants initial size",prodVariants.variants.attributes)
  // console.log("detail images from store", prodDetailData?.item?.slide_img);

  useEffect(() => {
    // console.log("detail router testing");
    // console.log("detail query testing",router)
    // console.log("detail query varinats testing",)
    dispatch(ProductDetailApi(router[router.length - 1]));
    dispatch(ProductVariantsApi(router[router.length - 1]));
    dispatch(SuggestedProApi("suggested", router[router.length - 1]))
  }, []);

  useEffect(() => {
    setdetail((detail = [prodDetailData.item]));
    setvariants((variants = [prodVariants.variants]));
    setInitialSize(prodVariants.initialSize);
    setInitialColor(prodVariants.initialColor);
    setSuggestedDataState((suggestedDataState= [...suggestedData?.items]))

  
    // setInitialColor(prodVariants?.variants?.attributes[3].colour_values[0]);

    // prodDetailData?.item?.slide_img?.map((imgs:any)=>{
      // imgObj.original=`http://scott-sports.8848digitalerp.com${imgs}`,
      // imgObj.thumbnail = `http://scott-sports.8848digitalerp.com${imgs}`

      // console.log("images object", imgObj);
      // imgArr.push(imgObj)
    //   imgArr.push({original:`https://scott-sports-v14.8848digitalerp.com${imgs}`, thumbnail:`https://scott-sports-v14.8848digitalerp.com${imgs}`})
    // })

    // prodDetailData?.item?.slide_img?.map((imgs: any) => {
    //   setimages([ ...images, { original: `http://scott-sports.8848digitalerp.com${imgs}`, 
    //   thumbnail:`http://scott-sports.8848digitalerp.com${imgs}` }]);
    // });
    // prodDetailData?.item?.slide_img?.map((imgs: any) => {
    //   setimages(imgArr)
    // });
  }, [prodDetailData, prodVariants, suggestedData]);

  const handleSize = (val:string) => {
    // console.log("handle size", val)
    setInitialSize(val);
  };
  
  const handleColor = (val:string)=>
  {
    // console.log("handle color", val)
    setInitialColor(val);
  }

  const handleQuantity = (val: any) => {
    setquantity(val);
    console.log("quantity",quantity);
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
    suggestedDataState
  };
};

export default useProductDetail;
