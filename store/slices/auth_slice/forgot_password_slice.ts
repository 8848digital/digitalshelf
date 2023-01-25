import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import forgotpasswordapi from '../../../services/api/auth_api/forgot_password_api'



interface ReporesetPassword {
    password : any,
    error : any
}

const initialState : ReporesetPassword = {
    password : {},
    error : "",
    
}


const ResetPasswordScreen = createSlice({
    name : 'Resetpassword',
    initialState,
    reducers: {
        ResetpasswordSuccess(state, action:PayloadAction<ReporesetPassword>){
            state.password = action.payload;
            state.error = "success";
            console.log("Password - ",state.password)
        },

        ResetpasswordFailed(state){
            state.error = "password reset fail"
        }
    }
})


export const ResetpasswordApi = (res:any) => async(dispatch:any) => {
      console.log(res,"/////");
 
    try {
        const response = await forgotpasswordapi(res)
        console.log("Change password api dispatch",response)

        if(response.data.message.msg === "success"){
            dispatch( ResetpasswordSuccess(response.data.message.data))
            console.log("dispatch reset password",response.data.message.data)
        }
        else{
            dispatch(ResetpasswordFailed())
        }
    }catch(error){
        console.log(error)
    }
}




const { ResetpasswordSuccess ,ResetpasswordFailed } = ResetPasswordScreen.actions;
export default ResetPasswordScreen.reducer;