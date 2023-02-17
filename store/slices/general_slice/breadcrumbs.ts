import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getBreadCrumbsList from "../../../services/api/general_api/breadcrumbs_api";
// import { AppState } from "../store";
import { RootState } from "../../root_reducer";
interface RepoBreadCrumbsState {
  items: any;
}

const initialState: RepoBreadCrumbsState = {
  items: [],
};

const BreadCrumbsScreen = createSlice({
  name: "Breadcrumbs",
  initialState,
  reducers: {
    breadCrumbSuccess(state, action: PayloadAction<RepoBreadCrumbsState>) {
      state.items = action.payload;
    },
  },
});

export const breadcrumbs_state = (state: RootState) => state.breadCrumbs;

export const BreadCrumbsApi =
  (
    url:any
  ): any =>
  async (dispatch: any) => {
    // console.log("breadcrumb middleware", prodType);
    // console.log("breadcrumb middleware", category);
    // console.log("breadcrumb middleware", subCategory);
    try {
      const res = await getBreadCrumbsList(url);
      dispatch(breadCrumbSuccess(res));
    } catch (error) {
      console.log(error);
    }
  };

const { breadCrumbSuccess } = BreadCrumbsScreen.actions;
export default BreadCrumbsScreen.reducer;
