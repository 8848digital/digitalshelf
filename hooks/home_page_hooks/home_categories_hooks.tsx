import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HomeCategoriesApi,
  homecategories_state,
} from "../../store/slices/home_page_slice/home_categories_slice";

const useUniverse = () => {
  let [categories, setcategories] = useState<any>([]);
  const dispatch = useDispatch();
  const homeCategories = useSelector(homecategories_state);

  console.log("home categories hook", homeCategories);

  useEffect(() => {
    // if (
    //   typeof homeCategories.items !== "undefined" &&
    //   homeCategories.items.length === 0
    // ) {
      // }
      dispatch(HomeCategoriesApi());
  }, []);
  
  useEffect(() => {
    setcategories(homeCategories.items);
  }, [homeCategories]);

  return categories;
};

export default useUniverse;
