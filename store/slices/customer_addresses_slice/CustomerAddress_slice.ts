import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import getCustomerAddress from "../../../services/api/customer_addresses_api/getCustomerAddress_api";
import storeCustomerAddress from "../../../services/api/customer_addresses_api/storeCustomer_address_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";


interface RepoGetCustomerAddress {
    data : any , 
    error : any
}

const initialState : RepoGetCustomerAddress = {
    data : [] ,
    error : ""
}


const CustomerAddressScreen = createSlice({
    name :"StoreCustomerAddress",
    initialState , 
    reducers : {
        CustomerAddressSuccess(state , action:PayloadAction<RepoGetCustomerAddress>) {
            state.data = action.payload,
            state.error = ""
            console.log("store customer adr", action.payload)
        },
        
        CustomerAddressFailed(state ) {
            state.data = ""
        }
    }
})

export const Customer_address = (state:RootState) => state.StoreCustomerAddress
console.log("ts customer address",Customer_address)


export const AddressPageApi = (request:any):any => async(dispatch:any) => {
    try {
        const res = await storeCustomerAddress(request)
        console.log("store address api res",res)

        if(res.data.message.msg === "success"){
            dispatch(CustomerAddressSuccess(res));
        }else{
            dispatch(CustomerAddressFailed())
        }
        
    }catch(error) {
        console.log(error)
    }
}


const { CustomerAddressSuccess ,CustomerAddressFailed } = CustomerAddressScreen.actions;
export default CustomerAddressScreen.reducer;