import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getSuggestedProduct from "../../../services/api/product_detail_api/suggested_pro_api";
import { RootState } from "../../root_reducer";

interface RepoSuggestedPro {
suggestedItems: any;
aletrnativeItems: any;
error:any
}

const initialState: RepoSuggestedPro = {
  suggestedItems: [],
  aletrnativeItems: [],
  error:""
};



const getSuggestedProScreen = createSlice({
  name: "suggestedProScreen",
  initialState,
  reducers: {
    suggestedProductSuccess(state, action: PayloadAction<RepoSuggestedPro>) {
      state.suggestedItems = action.payload;
      state.aletrnativeItems = [];
      console.log("suggested res in slice payload", state.suggestedItems);
    },
    suggestedProductFail(state) {
        state.error = "suggested product not found"
        
      },
      aletarnateProductSuccess(state, action: PayloadAction<RepoSuggestedPro>) {
        state.aletrnativeItems = action.payload;
        state.suggestedItems= [];
        console.log("suggested res in slice payload", state.aletrnativeItems);
      },
      aletarnateProductFail(state) {
          state.error = "alternate product not found" 
        },
  },
});

export const suggested_pro_state = (state: RootState) =>
  state.suggestedProScreen;

export const SuggestedProApi =
  (ptype: any, item: any): any =>
  async (dispatch: any) => {
    const res = await getSuggestedProduct(ptype, item);
    console.log("suggested res in slice dispatch", res);
    if (res !== undefined) {
      dispatch(suggestedProductSuccess(res));
    }
    if(res?.msg==="error") {
        dispatch(suggestedProductFail());
    }
  };
  export const alternativeProductApi =
  (ptype: any, item: any): any =>
  async (dispatch: any) => {
    const res = await getSuggestedProduct(ptype, item);
    console.log("alternate res in slice dispatch", res);
    if (res !== undefined) {
      dispatch(aletarnateProductSuccess(res));
    }
    if(res?.msg==="error") {
        dispatch(aletarnateProductFail());
    }
  };
export const { suggestedProductSuccess,suggestedProductFail,aletarnateProductSuccess,aletarnateProductFail } = getSuggestedProScreen.actions;
export default getSuggestedProScreen.reducer;
