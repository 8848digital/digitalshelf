import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductDetailList from "../../../services/api/product_detail_api/product_detail_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoDetailState {
    item: any
}

const initialState: RepoDetailState = {
    item: []
}

const ProductDetailScreen = createSlice({
    name: "Product-Detail",
    initialState,
    reducers: {
        ProductDetailSuccess(state, action: PayloadAction<RepoDetailState>) {
            console.log("detail action payload", action.payload);
            state.item = action.payload;
        }
    }
})

export const product_detail_state = (state: RootState) => state.productDetail;

export const ProductDetailApi = (slug: any): any => async (dispatch: any) => {
    console.log(slug);
    try {
        const res = await ProductDetailList(slug);
        console.log("detail res in slice function", res);
        dispatch(ProductDetailSuccess(res));
    } catch (error) {
        console.log(error);
    }
}

const { ProductDetailSuccess } = ProductDetailScreen.actions
export default ProductDetailScreen.reducer

