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
      //     if (prodType === "pl") {
      //         if (prodType && category && subCategory && subSubCategory) {
      //             const res = await getBreadCrumbsList(prodType, category, subCategory, subSubCategory);
      //             dispatch(breadCrumbSuccess(res));
      //             // console
      //         }
      //         else if (prodType && category && subCategory) {
      //             const res = await getBreadCrumbsList(prodType, category, subCategory);
      //             dispatch(breadCrumbSuccess(res));
      //         }
      //         else if(prodType && category ) {
      //             const res = await getBreadCrumbsList(prodType, category);
      //             dispatch(breadCrumbSuccess(res));
      //         }
      //         else
      //         {
      //             const res = await getBreadCrumbsList(prodType);
      //             dispatch(breadCrumbSuccess(res));
      //         }
      //     }
      //     if (prodType === "pp") {
      //         if (product) {
      //             const res = await getBreadCrumbsList(prodType, category, subCategory, subSubCategory, product)
      //             dispatch(breadCrumbSuccess(res));
      //         }
      //         else if (subSubCategory) {
      //             // product = subSubCategory;
      //             const res = await getBreadCrumbsList(prodType, category, subCategory, subSubCategory)
      //             dispatch(breadCrumbSuccess(res));
      //         }
      //         else if(subCategory) {
      //             const res = await getBreadCrumbsList(prodType, category, subCategory)
      //             dispatch(breadCrumbSuccess(res));
      //         }
      //         else
      //         {
      //             const res = await getBreadCrumbsList(prodType, category)
      //             dispatch(breadCrumbSuccess(res));
      //         }
      //     }
      //    if (prodType === "bpl") {
      //     if (prodType && category) {
      //         const res = await getBreadCrumbsList(prodType,category);
      //         dispatch(breadCrumbSuccess(res));
      //        console.log(res);
      //     }
      //   }
      //   if (prodType === "bpp") {
      //     if (prodType && category) {
      //         const res = await getBreadCrumbsList(prodType, category, subCategory);
      //         dispatch(breadCrumbSuccess(res));
      //        console.log(res);
      //     }
      //   }

      const res = await getBreadCrumbsList(url);
      dispatch(breadCrumbSuccess(res));
    } catch (error) {
      console.log(error);
    }
  };

const { breadCrumbSuccess } = BreadCrumbsScreen.actions;
export default BreadCrumbsScreen.reducer;
