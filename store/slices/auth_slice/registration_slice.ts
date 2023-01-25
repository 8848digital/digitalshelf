import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RegistrationApi from "../../../services/api/auth_api/registration-api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoRegisterState{
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

const initialState: RepoRegisterState = {
    user: {},
    error: ''

}

const RegistrationScreen =  createSlice({
    name: "registration",
    initialState,
    reducers: {
        RegisterSuccess(state, action: PayloadAction<RepoRegisterState>) {
            console.log(action.payload);
            localStorage.setItem("token", JSON.stringify(action.payload));
            state.user = action.payload;
            state.error = "";
           
        },
        RegisterFailed(state) {
            state.error = "Incorrect Email ID or Password"
        }
    }
})

export const Register_User = (state:RootState) => state.registration
console.log("ts customer address", Register_User)

export const RegisterUserApi = (request: any): any => async (dispatch: any) => {
    console.log(request);
    try {
        const res = await RegistrationApi(request);
        console.log(res);
        if (res.data.message.msg === "success") {
            dispatch(RegisterSuccess(res.data.message.data));
        }
        else {
            dispatch(RegisterFailed());
        }
    } catch (error) {
        console.log(error);
    }
}

const {  RegisterSuccess,  RegisterFailed } = RegistrationScreen.actions;
export default RegistrationScreen.reducer