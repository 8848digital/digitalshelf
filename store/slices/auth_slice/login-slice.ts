import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getLoginApi from "../../../services/api/auth_api/login_api";
import UserRoleGet from "../../../services/api/auth_api/user_role_api";
import LogoutList from "../../../services/api/auth_api/logout_api";
// import { AppState } from "../store";
import { useRouter } from "next/router";
import { RootState } from "../../root_reducer";
import storage from "redux-persist/lib/storage";
import { persistor, store } from "../../store";
import getGoogleLoginApi from "../../../services/api/auth_api/google-login-api";
interface RepoLoginState {
  user: any;
  error: any;
}

const initialState: RepoLoginState = {
  user: {},
  error: "",
};

const LoginScreen = createSlice({
  name: "Login",
  initialState,
  reducers: {
    LoginSuccess(state, action) {
      console.log("Loginpayload", action.payload);
      // let tokenData = action.payload.access_token;
      // tokenData = tokenData.split(" ");
      // console.log("login token data",tokenData[1]);
      //   console.log("login tokenData", tokenData);
      // localStorage.setItem("token", tokenData[1]);
      // localStorage.setItem("isDealer",action.payload.is_dealer);
      //   localStorage.setItem("token", JSON.stringify(action.payload));
      localStorage.setItem("isLoggedIn", "true")
      state.user = "LoggedIn";
      state.error = "";

      // OLD
      // console.log(action.payload);
      // localStorage.setItem("token", JSON.stringify(action.payload));
      // state.user = action.payload;
      // state.error = "";
    },
    LoginFailed(state, action) {
      console.log("login failed", action.payload);
      state.user = "";
      state.error = action.payload.message;
    },
    LogoutSuccess(state) {
      state.user = "";
      state.error = "";
      // localStorage.removeItem("token");
      // localStorage.removeItem("isDealer");
      // window.location.href="/";
      // localStorage.removeItem("persist:root");

      // persistor.pause();
      // persistor.flush().then(() => {
      //   return persistor.purge();
      // });
      // storage.removeItem("persist:root");
    },
  },
});

export const login_state = (state: RootState) => state.Login;

export const LoginUserApi =
  (request: any, isGoogleLogin: boolean, visitor?:boolean): any =>
  async (dispatch: any) => {
    try {

      if (isGoogleLogin) {
        const res = await getGoogleLoginApi(request, isGoogleLogin, visitor);
        console.log("login google slice", res)
        if (res === "success") {
          console.log("google login dispatch");
          dispatch(LoginSuccess(res.data));
        } else {
          dispatch(LoginFailed(res.data));
        }
      } else {
        const ifGuestTriestoLogin = localStorage.getItem("guest");
        console.log("google LOGIN", request);
        console.log("login visitor", visitor);
        const res = await getLoginApi(request, isGoogleLogin, visitor);

        const get_user_role = await UserRoleGet();

        console.log("login", res.data.message.data);
        console.log("handle response slice", get_user_role);
        // dispatch(LoginSuccess(res.data.message.data))
        console.log("visitor login", res);
        console.log(res.data.full_name);
        if (ifGuestTriestoLogin) {
          if (res.data.message.data.msg === "Logged In") {
            console.log("login dispatch");
            dispatch(LoginSuccess(res.data));
          } else {
            dispatch(LoginFailed(res.data));
          }
        } else {
          if (res.data.message === "Logged In") {
            console.log("login dispatch");
            dispatch(LoginSuccess(res.data));
          } else {
            dispatch(LoginFailed(res.data));
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
export const LogoutUserApi = (): any => async (dispatch: any) => {
  try {
    const res = await LogoutList();
    console.log("logout res slice", res);
    dispatch(LogoutSuccess());
  } catch (error) {
    console.log(error);
  }
};

const { LoginSuccess, LoginFailed, LogoutSuccess } = LoginScreen.actions;
export default LoginScreen.reducer;
