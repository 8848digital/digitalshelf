import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductDetailList from "../../../services/api/product_detail_api/product_detail_api";
import GetStockAvailability from "../../../services/api/product_detail_api/stock_availability_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoDetailState {
  item: any;
  stock: any;
}

const initialState: RepoDetailState = {
  item: [],
  stock: [],
};

const ProductDetailScreen = createSlice({
  name: "Product-Detail",
  initialState,
  reducers: {
    ProductDetailSuccess(state, action: PayloadAction<RepoDetailState>) {
      console.log("detail action payload", action.payload);
      state.item = action.payload;
    },
    ProductDetailStock(state, action) {
      state.stock = action.payload;
    },
    ProductDetailEmpty(state)
    {
      state.item = [];
    }
  },
});

export const product_detail_state = (state: RootState) => state.productDetail;

export const ProductDetailApi =
  (slug: any): any =>
  async (dispatch: any) => {
    console.log(slug);
    try {
      const res = await ProductDetailList(slug);
      console.log("detail res in slice function", res);
      if(res !== undefined)
      {
        console.log("prod detail api res not undefined");
        dispatch(ProductDetailSuccess(res));
      }
      else
      {
        console.log("prod detail api res undefined");
        dispatch(ProductDetailEmpty());
      }
    } catch (error) {
      console.log(error);
    }
  };

export const ProductStockAvailabilityAPI =
  (slug: any): any =>
  async (dispatch: any) => {
    console.log("stock availability middleware");
    try {
      const res = await GetStockAvailability(slug);
      console.log("stock availability api res in slice", res);
      if (res.message.msg === "success") {
        dispatch(ProductDetailStock(res.message.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

const { ProductDetailSuccess, ProductDetailStock, ProductDetailEmpty } =
  ProductDetailScreen.actions;
export default ProductDetailScreen.reducer;
