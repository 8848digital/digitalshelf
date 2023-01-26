import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getShippingAddress from "../../../services/api/customer_addresses_api/shipping_address_api";
import { AppState } from "../../root_reducer";

interface CustomerShippingAddressState {
    items: any;
    error: any;
}

const initialState: CustomerShippingAddressState = {
    items: [],
    error: "",
};

const getCustomerShippingAddress = createSlice({
    name: "shippingAddress",
    initialState,
    reducers: {
        customerAddressSuccess(
            state,
            action: PayloadAction<CustomerShippingAddressState>
        ) {
            console.log("Shipping Address screen - ", action.payload);

            state.items = action.payload;
            state.error = "";
        },
    },
});

export const shipping_address_state = (state: AppState) => state.shippingAddress;


export const getCustomerShippingAddr = () => async (dispatch: any) => {
    try {
        // console.log("Id - ", id);
        const res = await getShippingAddress();
        // console.log("Shiping Address - ",res.data)
        dispatch(customerAddressSuccess(res));
    } catch (err: any) {
        console.log(err);
    }
};

const { customerAddressSuccess } = getCustomerShippingAddress.actions;
export default getCustomerShippingAddress.reducer;
