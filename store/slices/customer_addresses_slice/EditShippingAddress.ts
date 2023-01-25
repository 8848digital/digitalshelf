import { createSlice , PayloadAction } from "@reduxjs/toolkit";



interface RepoEditAddressState {
    data : any;
    error : any;
}


const initialState : RepoEditAddressState = {
    data : [],
    error : ""
}


const EditShippingAddressScreen = createSlice({
    name : "EditShippingAddress",
    initialState ,
    reducers : {
        EditAddressSuccess(state , action:PayloadAction<RepoEditAddressState>) {
            state.data = action.payload;
            state.error = ""
        },
        
        EditAddressFailed(state) {
            state.error = ""
        }
    }
})

const EditShippingAddressApi = (request:any):any => async(dispatch:any) => {

}


const { EditAddressSuccess , EditAddressFailed } = EditShippingAddressScreen.actions;
export default EditShippingAddressScreen.reducer;