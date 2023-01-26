import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getSuggestedProduct from "../../../services/api/product_detail_api/suggested_pro_api";
import { RootState } from "../../root_reducer";

interface RepoSuggestedPro {
    items:any;
  

}

const initialState: RepoSuggestedPro = {
    items:[]
};

const getSuggestedProScreen = createSlice({
    name: "suggestedProScreen",
    initialState,
    reducers: {
        SuggestedproSuccess(state, action: PayloadAction<RepoSuggestedPro>) {
            state.items = action.payload;
            console.log("suggested res in slice payload",state.items);
        }
    }
})

export const suggested_pro_state = (state: RootState) => state.suggestedProScreen; 

export const SuggestedProApi = (ptype:any , item:any) : any=> async (dispatch: any) => {

        const res = await getSuggestedProduct(ptype , item);
        dispatch(SuggestedproSuccess(res));
        console.log("suggested res in slice dispacth",res);

}

export const { SuggestedproSuccess } = getSuggestedProScreen.actions
export default getSuggestedProScreen.reducer