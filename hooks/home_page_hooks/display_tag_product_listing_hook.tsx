import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NewArrivalDisplayTagProductListingAPI,
  SpecialOfferDisplayTagProductListingAPI,
  homePageDisplayTagProductListing_state,
} from "../../store/slices/home_page_slice/display_tag_product_listing_slice";

const useHomePageDisplayTagProductListing = () => {
  let [
    homePageNewArrivalDisplayTagProductListing,
    setHomePageNewArrivalDisplayTagProductListing,
  ] = useState([]);
  let [
    homePageSpecialOfferDisplayTagProductListing,
    setHomePageDisplaySpecialOfferTagProductListing,
  ] = useState([]);

  const dispatch = useDispatch();

  const homePageDisplayTagProductListingData = useSelector(
    homePageDisplayTagProductListing_state
  );

  useEffect(() => {
    dispatch(NewArrivalDisplayTagProductListingAPI());
    dispatch(SpecialOfferDisplayTagProductListingAPI());
  }, []);

  useEffect(() => {
    setHomePageNewArrivalDisplayTagProductListing([
      ...homePageDisplayTagProductListingData.newArrivalProductListingData,
    ]);
    setHomePageDisplaySpecialOfferTagProductListing([
      ...homePageDisplayTagProductListingData.specialOfferProductListingData,
    ]);
  }, [homePageDisplayTagProductListingData]);

  return {
    homePageNewArrivalDisplayTagProductListing,
    homePageSpecialOfferDisplayTagProductListing,
  };
};

export default useHomePageDisplayTagProductListing;
