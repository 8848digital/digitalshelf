import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import { carouselAPI, carousel_state } from "../../store/slices/home_page_slice/carousel_slice";
const useCarousel = () => {
  const dispatch = useDispatch();

  const carouselItems = useSelector(carousel_state);
  let [bannerItems, setbannerItems] = useState<any>([]);
  // console.log(carouselItems);

  useEffect(() => {
    // if (typeof carouselItems.items !== "undefined" && carouselItems.items.length === 0) {
    // }
    // dispatch(carouselAPI())
    dispatch(carouselAPI());
  }, []);
  
  useEffect(() => {
    setbannerItems([...carouselItems.items]);
    // setbannerItems([...bannerItems,...carouselItems.items]);
  }, [carouselItems.items]);

  return bannerItems;
};

export default useCarousel;
