import { createSlice } from "@reduxjs/toolkit";
import DisplayTagProductListing from "../../../services/api/home_page_api/display_tag_product_listing_api";
import { RootState } from "../../root_reducer";

const initialState = {
  newArrivalProductListingData: [],
  specialOfferProductListingData: [],
  error: "",
};

const HomePageDisplayTagProductListingScreen = createSlice({
  name: "DisplayTagProductListing",
  initialState,
  reducers: {
    NewArrivalDisplayTagProductListingSuccess(state, action) {
      state.newArrivalProductListingData = action.payload;
      state.error = "";
    },
    NewArrivalDisplayTagProductListingFailed(state) {
      state.newArrivalProductListingData = [];
      state.error = "No Data Available";
    },
    SpecialOfferDisplayTagProductListingData(state, action) {
      state.specialOfferProductListingData = action.payload;
      state.error = "";
    },
    SpecialOfferDisplayTagProductListingFailed(state) {
      state.specialOfferProductListingData = [];
      state.error = "No Data Available";
    },
  },
});

export const homePageDisplayTagProductListing_state = (state: RootState) =>
  state.homePageDisplayTagProductListing;

export const NewArrivalDisplayTagProductListingAPI =
  (): any => async (dispatch: any) => {
    try {
      const res = await DisplayTagProductListing("New Arrival");
      console.log("new arrival display tag slice response", res);
      if (res.msg === "error") {
        dispatch(NewArrivalDisplayTagProductListingFailed());
      } else {
        dispatch(NewArrivalDisplayTagProductListingSuccess(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const SpecialOfferDisplayTagProductListingAPI =
  (): any => async (dispatch: any) => {
    try {
      const res = await DisplayTagProductListing("Special Offer");
      console.log("special offer display tag slice response", res);
      if (res.msg === "error") {
        dispatch(SpecialOfferDisplayTagProductListingFailed());
      } else {
        dispatch(SpecialOfferDisplayTagProductListingData(res.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

const {
  NewArrivalDisplayTagProductListingSuccess,
  NewArrivalDisplayTagProductListingFailed,
  SpecialOfferDisplayTagProductListingData,
  SpecialOfferDisplayTagProductListingFailed,
} = HomePageDisplayTagProductListingScreen.actions;
export default HomePageDisplayTagProductListingScreen.reducer;
