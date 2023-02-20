import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getLoginApi from "../../../services/api/auth_api/login_api";
import UserRoleGet from "../../../services/api/auth_api/user_role_api";
import LogoutList from "../../../services/api/auth_api/logout_api";
// import { AppState } from "../store";
import { useRouter } from "next/router";
import { RootState } from "../../root_reducer";
import storage from "redux-persist/lib/storage";
import { persistor, store } from "../../store";
import getTokenLoginApi from "../../../services/api/auth_api/token_login_api";

interface RepoTokenLoginState {
  user: any;
  error: any;
}

const initialState: RepoTokenLoginState = {
  user: {},
  error: "",
};

const TokenLoginScreen = createSlice({
  name: "TokenLogin",
  initialState,
  reducers: {
    LoginSuccess(state, action) {
      console.log(" token Loginpayload", action.payload);
      // let tokenData = action.payload.access_token;
      // tokenData = tokenData.split(" ");
      // console.log("login token data",tokenData[1]);
      //   console.log("login tokenData", tokenData);
      // localStorage.setItem("token", tokenData[1]);
      // localStorage.setItem("isDealer",action.payload.is_dealer);
      //   localStorage.setItem("token", JSON.stringify(action.payload));
      localStorage.setItem("isLoggedIn", "true");
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

export const token_login_state = (state: RootState) => state.TokenLogin;

export const TokenLoginUserApi =
  (
    request: any,
  ): any =>
  async (dispatch: any) => {
    try {
        console.log("login for dealer");
        const res = await getTokenLoginApi(request);
        console.log("login token slice", res);
        if (res === "success") {
          console.log("token login dispatch");
          dispatch(LoginSuccess(res.data));
        } else {
          dispatch(LoginFailed(res.data));
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

const { LoginSuccess, LoginFailed, LogoutSuccess } = TokenLoginScreen.actions;
export default TokenLoginScreen.reducer;
