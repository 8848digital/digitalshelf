import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getNavbarList from "../../../services/api/home_page_api/navbar_api";
// import { AppState } from "../store";
import { useRouter } from 'next/router'
import { RootState } from "../../root_reducer";


interface RepoCategoryState {
  items: any;
  error: any;
}

const initialState: RepoCategoryState = {
  items: [],
  error: "",
};

const navbarScreen = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    navbarSuccess(state, action: PayloadAction<RepoCategoryState>) {
      state.items = action.payload;
      state.error = "";
    },
    navbarFailed(state) {
      
      // console.log("navbar failed");
      // window.location.pathname = "/login"
      // localStorage.removeItem("token");
      // localStorage.removeItem("isDealer");
      state.error = "No Items Found";

    },
  },
});

export const navbar_state = (state: RootState) => state.navbar;

export const navbarAPI = (): any => async (dispatch: any) => {
  // console.log("test")
  try {
    const res = await getNavbarList();
    console.log("navbar slice", res);
    console.log("navbar slice",typeof res);
    if(typeof res === "undefined")
    {
      console.log("undefined in slice")
      dispatch(navbarFailed());
    }
    else
    {
      dispatch(navbarSuccess(res));
     
    }
      
  } 
  catch (error) {
    console.log(error);
  }
};

const { navbarSuccess, navbarFailed } = navbarScreen.actions;
export default navbarScreen.reducer;
