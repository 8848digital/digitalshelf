import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getOrderSummaryList from "../../../services/api/checkout_page_api/order_summary_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface OrderSummaryState {
    message: any,
    error: any
}

const initialState: OrderSummaryState = {
    message: '',
    error: ''
}

const orderSummaryScreen = createSlice({
    name:"order-summary",
    initialState,
    reducers: {
        orderSummary(state, action: PayloadAction<OrderSummaryState>){
            console.log("checkout order listing", state.message)
            state.message = action.payload;
            state.error = ''
        }

    }
});

export const summary_state = (state:RootState) => state.orderSummary

const {orderSummary} = orderSummaryScreen.actions;

export const getOrderSummary = (id: any): any => async(dispatch: any) => {
    console.log("checkout quoatttion id here", id);
    const res = await getOrderSummaryList(id);
    dispatch(orderSummary(res));
}

export default orderSummaryScreen.reducer;
