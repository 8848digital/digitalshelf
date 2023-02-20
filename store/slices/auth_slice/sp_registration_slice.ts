import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SpRegistrationApi from "../../../services/api/auth_api/sp_registration-api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoSpRegisterState{
    user: any,
    error: any
}
// email:any,
// name:any,
// contact_no:number,
// address:any,
// gst_number:any,
// password:any,
// state:string,
// city:any,

const initialState: RepoSpRegisterState = {
    user: {},
    error: ''

}

const SpRegistrationScreen =  createSlice({
    name: "SpRegistration",
    initialState,
    reducers: {
        SpRegisterSuccess(state, action: PayloadAction<RepoSpRegisterState>) {
            console.log(action.payload);
            // localStorage.setItem("token", JSON.stringify(action.payload));
            state.user = action.payload;
            state.error = "";
            window.location.href="/"
           
        },
        SpRegisterFailed(state) {
            state.error = "Incorrect Email ID or Password"
        }
    }
})

export const Sp_Register_User = (state:RootState) => state.SpRegistration
console.log("ts customer address", Sp_Register_User)

export const SpRegisterUserApi = (request: any): any => async (dispatch: any) => {
    console.log(request);
    try {
        const res = await SpRegistrationApi(request);
        console.log(res);
        if (res.data.message.msg === "success") {
            dispatch(SpRegisterSuccess(res.data.message.data));
        }
        else {
            dispatch(SpRegisterFailed());
        }
    } catch (error) {
        console.log(error);
    }
}

const {  SpRegisterSuccess,  SpRegisterFailed } = SpRegistrationScreen.actions;
export default SpRegistrationScreen.reducer