import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getCustomerAddress from "../../../services/api/customer_addresses_api/getCustomerAddress_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";


interface getCustomerAddressState {
    data: any;
    error: any;
}


const initialState: getCustomerAddressState = {
    data: [],
    error: ""
}


const getCustomerAddressScreen = createSlice({
    name: "GetCustomerAddress",
    initialState,
    reducers: {
        getCustomerAddressSuccess(state, action: PayloadAction<getCustomerAddressState>) {
            state.data = action.payload 
            state.error = ""
            console.log("get customer address in slice",action.payload)
        },

        getCustomerAddressFailed(state) {
            state.error = ""
        }
    }
})

export const getCustomer_Address = (state:RootState) => state.GetCustomerAddress;



export const getCustomerAddressApi = (id?:any):any => async(dispatch:any) => {
    
    try{
        const res = await getCustomerAddress(id)
        console.log("get customer address api success res",res)

        dispatch(getCustomerAddressSuccess(res))
         
    }catch (error) {
        console.log(error)
    }
}


const { getCustomerAddressSuccess , getCustomerAddressFailed } = getCustomerAddressScreen.actions;

export default getCustomerAddressScreen.reducer;