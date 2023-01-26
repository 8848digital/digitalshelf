import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getProfileData from "../../../services/api/profile_page_api/profile_page_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";


interface RepoProfilePageState {
    data : any ,
    error : any
}

const initialState : RepoProfilePageState = {
    data : [] ,
    error: ""
}

const profilePageScreen = createSlice({
    name : "ProfilePage",
    initialState,
    reducers:{
        profilePage(state, action:PayloadAction<RepoProfilePageState>){
            state.data = action.payload
            console.log("profile page state",action.payload)
        }
    }
})

export const profile_page = (state: RootState) => state.ProfilePage;
console.log("ts profile",profile_page)


export const ProfilePageApi = (id?:any):any => async(dispatch:any) => {
    try {
        const res = await getProfileData(id)
        console.log("profile api",res)
        dispatch(profilePage(res))
        
    }catch(error){
        console.log(error)
    }
}


const { profilePage } = profilePageScreen.actions
export default profilePageScreen.reducer