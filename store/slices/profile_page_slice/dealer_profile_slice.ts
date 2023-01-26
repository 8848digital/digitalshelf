import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getDealerprofile from "../../../services/api/profile_page_api/profile_page_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";


interface RepoDealerProfilePageState {
    data : any ,
    error : any
}

const initialState : RepoDealerProfilePageState  = {
    data : [] ,
    error: ""
}

const DealerprofilePageScreen = createSlice({
    name : "dealerprofilePage",
    initialState,
    reducers:{
        dealerprofilePage(state, action:PayloadAction<RepoDealerProfilePageState >){
            state.data = action.payload
            console.log("profile page ",state.data)
        }
    }
})

export const dealerprofile_page = (state: RootState) => state.dealerprofilePage;


export const dealerProfilePageApi = ()=> async(dispatch:any) => {
    try {
        const res = await getDealerprofile()
        console.log("dealerprofile api",res)
        dispatch(dealerprofilePage(res))
        
    }catch(error){
        console.log(error)
    }
}


const { dealerprofilePage } = DealerprofilePageScreen.actions
export default DealerprofilePageScreen.reducer