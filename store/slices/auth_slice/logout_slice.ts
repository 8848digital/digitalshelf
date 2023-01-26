
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LogoutList from "../../../services/api/auth_api/logout_api";

interface RepoLogoutState {
    data: any
}

const initialState: RepoLogoutState = {
    data: []
}

const LogoutScreen = createSlice({
    name: "Logout",
    initialState,
    reducers: {
        LogoutSuccess(state) {
            state.data = '';
        }
    }
})

export const LogoutApi = (): any => async (dispatch: any) => {
    try {
        const res = await LogoutList();
        console.log(res);
        dispatch(LogoutSuccess());
    } catch (error) {
        console.log(error);
    }
}

const { LogoutSuccess } = LogoutScreen.actions
export default LogoutScreen.reducer