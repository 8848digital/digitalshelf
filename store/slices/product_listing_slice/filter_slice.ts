import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getFiltersList from "../../../services/api/product_listing_api/filter_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoFilterState {
    filters: any
}

const initialState: RepoFilterState = {
    filters: []
}

const FilterScreen = createSlice({
    name: "Filters",
    initialState,
    reducers: {
        FilterSuccess(state, action: PayloadAction<RepoFilterState>) {
            state.filters = action.payload;
        }
    }
})

export const filters_state = (state: RootState) => state.filters

export const FilterApi = (query: any): any => async (dispatch: any) => {
    
    // console.log(category);
    // console.log(subCategory);
    // console.log(subSubCategory);
    // if (subSubCategory) {
        const res = await getFiltersList(query);
        dispatch(FilterSuccess(res));
    // }
    // else if(subCategory) {
    //     const res = await getFiltersList(category, subCategory);
    //     dispatch(FilterSuccess(res));
    // }else{
    //     const res = await getFiltersList(category);
    //     dispatch(FilterSuccess(res));
    // }
}

export const { FilterSuccess } = FilterScreen.actions
export default FilterScreen.reducer

