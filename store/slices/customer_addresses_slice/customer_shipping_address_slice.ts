import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import getCustomerAddress from "../../services/api/getCustomerAddress_api";
import CustomerShippingAddress from "../../../services/api/customer_addresses_api/customer_shipping_address_api";
// import { AppState } from "../store";
import {RootState} from  "../../root_reducer"
interface getCustomerAddressState {
    data: any;
    initialShippingAddressID :any;
    error: any;
}


const initialState: getCustomerAddressState = {
    data: [],
    initialShippingAddressID:"",
    error: ""
}


const getCustomerShippingAddressScreen = createSlice({
    name: "GetCustomerAddress",
    initialState,
    reducers: {
        CustomerShippingAddressSuccess(state, action: PayloadAction<any>) {
            console.log("checkout reducer payload", action.payload);
            state.data = action.payload;
            state.initialShippingAddressID = action.payload[0].address_id;
            state.error = ""
           
        },

        CustomerAddressFailed(state) {
            state.error = ""
        }
    }
})

export const customer_shipping_address:any = (state:RootState) => state.customerShippingAddress;

export const CustomerShippingAddressAPi = ():any => async(dispatch:any) => {
    console.log("checkout slice");
    try{
        const res = await CustomerShippingAddress()
        console.log("checkout shipping address response",res)

        dispatch(CustomerShippingAddressSuccess(res))
         
    }catch (error) {
        console.log(error)
    }
}


const { CustomerShippingAddressSuccess ,CustomerAddressFailed } = getCustomerShippingAddressScreen.actions;

export default getCustomerShippingAddressScreen.reducer;