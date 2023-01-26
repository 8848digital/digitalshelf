import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import getCustomerAddress from "../../services/api/getCustomerAddress_api";
import CustomerBillingAddress from "../../../services/api/customer_addresses_api/customer_billing_address_api";
// import { AppState } from "../store";
import {RootState} from "../../root_reducer";
interface getCustomerAddressState {
    data: any;
    initialBillingAddressID :any;
    error: any;
}


const initialState: getCustomerAddressState = {
    data: [],
    initialBillingAddressID:"",
    error: ""
}


const getCustomerAddressScreen = createSlice({
    name: "GetCustomerAddress",
    initialState,
    reducers: {
        CustomerBillingAddressSuccess(state, action: PayloadAction<any>) {
            console.log("checkout billing reducer payload", action.payload);
            state.data = action.payload;
            state.initialBillingAddressID = action.payload[0].address_id;
            state.error = ""
           
        },

        CustomerAddressFailed(state) {
            state.error = ""
        }
    }
})

export const customer_billing_address:any = (state:RootState) => state.customerBillingAddress;

export const CustomerBillingAddressAPi = ():any => async(dispatch:any) => {
    console.log("checkout billing slice");
    try{
        const res = await CustomerBillingAddress()
        console.log("checkout billing address response",res)

        dispatch(CustomerBillingAddressSuccess(res))
         
    }catch (error) {
        console.log(error)
    }
}


const { CustomerBillingAddressSuccess ,CustomerAddressFailed } = getCustomerAddressScreen.actions;

export default getCustomerAddressScreen.reducer;