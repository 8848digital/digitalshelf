import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  BreadCrumbsApi,
  breadcrumbs_state,
} from "../../store/slices/general_slice/breadcrumbs";
import { useRouter } from "next/router";

const useBreadCrumb = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const breadCrumbData = useSelector(breadcrumbs_state);

  const [data, setdata] = useState<any>([]);

  const url = router.asPath;
  const brandurl = router;
  console.log("breadcrumb router", brandurl);

  const splitURL = url.split("/").join(",").split("%20").join(",").split(",");
  console.log("breadcrumb in hook", splitURL);
  // console.log("test breadcrumb");


  console.log("breadcrumb in split", splitURL[1]);

  useEffect(()=>
  {
    dispatch(BreadCrumbsApi(splitURL));
  },[url])

  useEffect(() => {
    setdata(breadCrumbData.items);
  }, [breadCrumbData]);

  console.log("Hook breadcrumb - ", breadCrumbData);

  return {
    data,
  };
};

export default useBreadCrumb;
