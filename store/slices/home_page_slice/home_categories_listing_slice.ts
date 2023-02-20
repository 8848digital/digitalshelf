import { createSlice } from "@reduxjs/toolkit";
import getHomeCategoriesListing from "../../../services/api/home_page_api/home_categories_listing_api";
import { RootState } from "../../root_reducer";

const initialState = {
    homeCategoriesWithListingData:[],
    error:""
}

const HomeCategoriesWithListing = createSlice({
    name:"HomeCategoriesWithListing ",
    initialState,
    reducers:{
        HomeCategoriesListingSuccess(state,action)
        {
            state.homeCategoriesWithListingData = action.payload;
            state.error = "";
        },
        HomeCategoriesListingFailed(state)
        {
            state.homeCategoriesWithListingData = [];
            state.error = "No Data Available"; 
        }
    }
})

export const homeCategoriesWithListing_state = (state: RootState) => state.homeCategoriesWithListing;

export const HomeCategoriesWithListingAPI = (): any => async (dispatch: any) => {
    try {
        const res = await getHomeCategoriesListing();
        console.log("home categories with listing slice response",res);
        if(res.msg === "error")
        {
            dispatch(HomeCategoriesListingFailed());
        }
        else
        {
            dispatch(HomeCategoriesListingSuccess(res.data));
        }

    } catch (error) {

        console.log(error);
    }
}
const {HomeCategoriesListingSuccess, HomeCategoriesListingFailed } = HomeCategoriesWithListing.actions
export default HomeCategoriesWithListing.reducer
