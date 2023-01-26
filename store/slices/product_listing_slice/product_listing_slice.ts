import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import getProductList from "../../../services/api/product_listing_api/product_listing_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoProductListingState {
  items: any;
  total_count: number;
  error: string;
}

const initialState: RepoProductListingState = {
  items: [],
  total_count: 0,
  error: "",
};

const ProductListingScreen:any = createSlice({
  name: "productListing",
  initialState,
  reducers: {
    productListingSuccess(state, action: PayloadAction<any>) {
      state.items = action.payload && action.payload.data;
      state.error = "";
      state.total_count = action.payload && action.payload.total_count;
      // console.log("state data ", state.items)
    },
    productListingFailed(
      state,
      action: PayloadAction<RepoProductListingState>
    ) {
      state.error = "No Items Found";
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<any>) => {
      // console.log("hydate", action)
      if (action.payload.data || action.payload.total_count) {
        (state.items = action.payload.data),
          (state.error = ""),
          (state.total_count = action.payload.total_count);
        // console.log("state hydrate ", state.data)
      } else {
        return state;
      }
    },
  },
});

export const { productListingSuccess, productListingFailed } =
  ProductListingScreen.actions;

export const product_state = (state: RootState) => state.productListing;

export const ProductListingApi =
  (
    pageNumber?: any,
    query?: any,
    low_high?: any,
    filters?: any,
    search_text?: any
  ): any =>
  async (dispatch: any) => {
    let res: any;
    console.log(
      "///----///**********value slice",
      pageNumber,
      query,
      low_high,
      filters,
      search_text,

    );
    if (!search_text) {
      console.log("///////******/////------if")
      if (filters) {
        res = await getProductList(pageNumber, query, low_high, filters);
      } else {
        res = await getProductList(pageNumber, query, low_high);
      }
    }else{
      console.log("///////******/////------else", search_text)
      res = await getProductList(pageNumber,query, "", "", search_text);
    }

    console.log("/////*****/////product api", res)

    dispatch(productListingSuccess(res));
  };

export default ProductListingScreen.reducer;
