import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getCartHistoryApi from '../../../services/api/my_order_api/order_history';
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoCartHistory {
    item: any,
}

const initialState: RepoCartHistory = {
    item: [],
}

const CartHistoryScreen = createSlice({
    name: "Cart-Listing",
    initialState,
    reducers: {
        cartHistory(state, action: PayloadAction<RepoCartHistory>) {
            console.log('action payload - ', action)
            state.item = action.payload;
            // state.grand_total = action.payload.grand_total;
        }
    }
})

export const history = (state: RootState) => state.cartHistory;

export const cartHistoryApi = ( date?:any,id?:any): any => async (dispatch: any) => {
    // console.log(id);
    try {
        const res = await getCartHistoryApi(date);
        console.log("cart list api - ",res.data);
        dispatch(cartHistory(res))
    } catch (error) {
        console.log(error);
    }
}

const { cartHistory } = CartHistoryScreen.actions
export default CartHistoryScreen.reducer
