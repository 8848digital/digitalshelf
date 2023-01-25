import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import getChangePassword from '../../../services/api/auth_api/changepassword_api'



interface RepoChangePassword {
    password : any,
    error : any
    message: any
}

const initialState : RepoChangePassword = {
    password : "",
    error : "",
    message: ""
}


const ChangePasswordScreen = createSlice({
    name : 'Changepassword',
    initialState,
    reducers: {
        ChangePasswordSuccess(state, action:PayloadAction<RepoChangePassword>){
            state.password = action.payload;
            state.error = "";
            console.log("Password - ",state.password)
            state.message= ""
        },

        ChangePasswordFailed(state){
            // state.error = action.payload
        }
    }
})


export const ChangePasswordApi = (oldPassword:any,confirmPassword:any):any => async(dispatch:any) => {
      
    let data = {old_password: oldPassword, new_password :confirmPassword}  
    try {
        const res = await getChangePassword(data)
        console.log("Change password api dispatch",res)

        if(res.data.message.msg === "success"){
            dispatch(ChangePasswordSuccess(res.data.message.data))
            console.log("dispatch change password",res.data.message.data)
        }
        else{
            dispatch(ChangePasswordFailed())
        }
    }catch(error){
        console.log(error)
    }
}




const { ChangePasswordSuccess ,ChangePasswordFailed } = ChangePasswordScreen.actions;
export default ChangePasswordScreen.reducer;