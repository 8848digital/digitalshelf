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
  // useEffect(() => {
  //   console.log("test");
  //   if (splitURL[1] === "pl") {
  //     if (splitURL.length === 2) {
  //       dispatch(BreadCrumbsApi(splitURL[1]));
  //     } else if (splitURL.length === 3) {
  //       dispatch(BreadCrumbsApi(splitURL[1], splitURL[2]));
  //     } else if (splitURL.length === 4) {
  //       dispatch(BreadCrumbsApi(splitURL[1], splitURL[2], splitURL[3]));
  //     } else if (splitURL.length === 5) {
  //       dispatch(
  //         BreadCrumbsApi(splitURL[1], splitURL[2], splitURL[3], splitURL[4])
  //       );
  //     }
  //   } else if (splitURL[1] === "pp") {
  //     if (splitURL.length === 3) {
  //       dispatch(BreadCrumbsApi(splitURL[1], splitURL[2]));
  //     } else if (splitURL.length === 5) {
  //       dispatch(
  //         BreadCrumbsApi(splitURL[1], splitURL[2], splitURL[3], splitURL[4])
  //       );
  //     } else if (splitURL.length === 6) {
  //       dispatch(
  //         BreadCrumbsApi(
  //           splitURL[1],
  //           splitURL[2],
  //           splitURL[3],
  //           splitURL[4],
  //           splitURL[5]
  //         )
  //       );
  //     } else if (splitURL.length === 4) {
  //       dispatch(BreadCrumbsApi(splitURL[1], splitURL[2], splitURL[3]));
  //       console.log("splitsssss");
  //     }
  //   } else if (splitURL[1] === "bpl") {
  //     if (splitURL.length === 3) {
  //       dispatch(BreadCrumbsApi(splitURL[1], splitURL[2]));
  //     }
  //   } else if (splitURL[1] === "bpp") {
  //     if (splitURL.length === 4) {
  //       dispatch(BreadCrumbsApi(splitURL[1], splitURL[2], splitURL[3]));
  //       console.log("click");
  //       console.log(splitURL[2], "nnnnn");
  //     }
  //   }
  // }, [url]);

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
