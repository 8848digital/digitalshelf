import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AddProductToWishlist,
  DeleteProductfromWishlist,
  GetWishlistData,
} from "../../../services/api/general_api/wishlist_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoDetailState {
  item: any;
  error: any;
  wishProduct: any;
  msg: any;
}

const initialState: RepoDetailState = {
  item: [],
  error: "",
  wishProduct: [0],
  msg: "",
};

const WishlistScreen = createSlice({
  name: "Product-Detail",
  initialState,
  reducers: {
    WishlistSuccess(state, action: PayloadAction<RepoDetailState>) {
      console.log("detail action payload", action.payload);
      state.item = action.payload;
      state.msg = "Item added successfully";
    },
    WishProductSuccess(state, action: PayloadAction<RepoDetailState>) {
      console.log("detail wishproduct", action.payload);

      state.wishProduct.push(action.payload);
    },
    DeleteWishProduct(state, action: PayloadAction<RepoDetailState>) {
      console.log("delete id", action.payload);
      // state.wishProduct.splice(state.wishProduct.findIndex((productId:any) => productId.id === action.payload), 1);
      state.wishProduct = state.wishProduct.filter((productId: any) => {
        return productId !== action.payload;
      });
    },
    WishlistFailed(state) {
      state.error = "";
    },
  },
});

export const wishlist_state = (state: RootState) => state.wishlist;

export const GetWishlist = (): any => async (dispatch: any) => {
  console.log();

  try {
    const res = await GetWishlistData();
    console.log("detail res in slice function", res);
    dispatch(WishlistSuccess(res));
  } catch (error) {
    console.log(error);
  }
};

export const AddWishlist =
  (prod_id: any): any =>
  async (dispatch: any) => {
    console.log("prod id", prod_id);
    const res = await AddProductToWishlist(prod_id);

    try {
      // const res = await AddProductToWishlist(prod_id);
      console.log("detail res in slice function add", res);

      // if(res.msg === "success") {
      //     console.log("in success")
      // }
      //   dispatch(WishProductSuccess(prod_id));
      if (res.data.message.msg === "success") {
        console.log("wishh");
        dispatch(WishlistSuccess(res));
      }

      console.log("hee");
    } catch (error) {
      console.log(error);
    }

    try {
      // const res = await AddProductToWishlist(prod_id);
      console.log("ress", res);
      if (res.msg === "success") {
        console.log("id del dispatch");
        console.log("res d", res.msg);
        dispatch(WishProductSuccess(prod_id));
      }
    } catch (err) {
      console.log(err);
    }
  };

export const DeleteWishlist =
  (prod_id: any): any =>
  async (dispatch: any) => {
    console.log("delete middleware slice prod id", prod_id);
    const res = await DeleteProductfromWishlist(prod_id);

    try {
      console.log("res", res);
      console.log("prod id", prod_id);
      // dispatch(DeleteWishProduct(prod_id));
      if (res.data.msg === "success") {
        dispatch(WishlistSuccess(res));
        console.log("delete");
      }
    } catch (error) {
      console.log(error);
    }
    try {
      console.log("ress", res);
      if (res.msg === "success") {
        console.log("id del dispatch");
        console.log("res d", res.msg);
        dispatch(DeleteWishProduct(prod_id));
      }
    } catch (err) {
      console.log(err);
    }
  };

const {
  WishlistSuccess,
  WishlistFailed,
  WishProductSuccess,
  DeleteWishProduct,
} = WishlistScreen.actions;
export default WishlistScreen.reducer;
