import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductDetailList from "../../../services/api/product_detail_api/product_detail_api";
import { AddProductToWishlist, GetWishlistData } from "../../../services/api/general_api/wishlist_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoDetailState {
    item: any
}

const initialState: RepoDetailState = {
    item: []
}

const WishlistScreen = createSlice({
    name: "Product-Detail",
    initialState,
    reducers: {
        WishlistSuccess(state, action: PayloadAction<RepoDetailState>) {
            console.log("detail action payload", action.payload);
            state.item = action.payload;
        },
        WishlistFailed(state)
        {
            
        }
    },
})

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
}

export const AddWishlist = (prod_id: any): any => async (dispatch: any) => {
    console.log(prod_id);
    try {
        const res = await AddProductToWishlist(prod_id);
        console.log("detail res in slice function", res);
        // dispatch(WishlistSuccess(res));
    } catch (error) {
        console.log(error);
    }
}

export const DeleteWishlist = (prod_id:any):any => async (dispatch:any) =>
{
    console.log("delete middleware slice prod id",prod_id);
    try {
        
    } catch (error) {
        
    }
}

const { WishlistSuccess, WishlistFailed } = WishlistScreen.actions
export default WishlistScreen.reducer

