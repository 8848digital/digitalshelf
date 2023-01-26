import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getProductVariantsList from "../../../services/api/product_detail_api/product_variant_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoVariantsState {
    variants: any,
    attributes: any,
    initialSize: string,
    initialColor: string
}

const initialState: RepoVariantsState = {
    variants: [],
    attributes: '',
    initialSize: "",
    initialColor: ""
}

const ProductVariantsScreen = createSlice({
    name: "Product-Variants",
    initialState,
    reducers: {
        ProductVariantsSuccess(state, action: PayloadAction<RepoVariantsState>) {
            console.log("detail product variants slice", action.payload);
            state.variants = action.payload;
            // console.log(" detail checking variants", action.payload.attributes.find((vary_obj: any) => "size_values" in vary_obj).size_values[0])
            const initSize = action.payload.attributes.find((vary_obj: any) => "size_values" in vary_obj).size_values[0];
            const initColor = action.payload.attributes.find((vary_obj: any) => "colour_values" in vary_obj).colour_values[0];
            // state.initialSize = action.payload.attributes[3].size_values[0];
            state.initialSize = initSize;
            state.initialColor = initColor
            // state.initialColor = action.payload.attributes[4].colour_values[0];
        }
    }
})

export const product_variant_state = (state: RootState) => state.productVariants;

export const ProductVariantsApi = (slug: any): any => async (dispatch: any) => {
    console.log(slug);

    try {
        const res = await getProductVariantsList(slug);
        console.log("detail variats from api", res)
        dispatch(ProductVariantsSuccess(res));
    } catch (error) {
        console.log(error);
    }

}

const { ProductVariantsSuccess } = ProductVariantsScreen.actions
export default ProductVariantsScreen.reducer
