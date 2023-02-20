import { createSlice } from "@reduxjs/toolkit";
import RecentlyBoughtItemsFetch from "../../../services/api/home_page_api/recently_bought_items_api";
import { RootState } from "../../root_reducer";
const initialState = {
    data:[],
    error:""
}

const RecentlyBoughtItemsScreen = createSlice({
    name:"recently_bought_items",
    initialState,
    reducers:{
        RecentlyBoughtDataItemsSuccess(state, action)
        {
            state.data = action.payload;
        }
    }
})

export const recently_bought_items_state = (state: RootState) => state.recentlyBoughtItems;

export const RecentlyBoughtDataAPI = (): any => async (dispatch: any) => {
    console.log("recently bought items api function");
    try {
        const res = await RecentlyBoughtItemsFetch();
        console.log("recently bought items api middleware", res);
        if(res.msg === 'success')
        {
            dispatch(RecentlyBoughtDataItemsSuccess(res.data));
        }
    } catch (error) {
        console.log(error);
    }
} 

const {RecentlyBoughtDataItemsSuccess} = RecentlyBoughtItemsScreen.actions
export default RecentlyBoughtItemsScreen.reducer