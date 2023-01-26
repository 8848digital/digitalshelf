import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import storeCustomerAddressPost from "../../../services/api/customer_addresses_api/store_customer_address_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoStoreCustomerAddress {
    data : any , 
    error : any,
    customer_id:any
}

const initialState : RepoStoreCustomerAddress = {
    data : [] ,
    error : "",
    customer_id:""
}

const StoreCustomerAddressScreen = createSlice({
    name :"StoreCustomerAddress",
    initialState , 
    reducers : {
        StoreCustomerAddressSuccess(state , action:PayloadAction<RepoStoreCustomerAddress>) {  
            // let guestId = action.payload;
            // console.log("store action payload", guestId.customer_id);
            localStorage.setItem("guestId", action.payload.customer_id);
            state.data = action.payload,
            state.error = ""
            
        },
        
        StoreCustomerAddressFailed(state ) {
            state.data = ""
        }
    }
})

export const Customer_address = (state:RootState) => state.StoreCustomerAddress
export const storeVisitorCustomerAddressApi = (request:any, check?:any):any => async(dispatch:any) => 
{
    console.log("form  values", request);

    const res =  await storeCustomerAddressPost(request, check);
    console.log("form store address api response  ", res);
    if(res.msg === "success"){
        dispatch(StoreCustomerAddressSuccess(res.data));
    }else{
        dispatch(StoreCustomerAddressFailed())
    }
}

const { StoreCustomerAddressSuccess ,StoreCustomerAddressFailed } = StoreCustomerAddressScreen.actions;
export default StoreCustomerAddressScreen.reducer

