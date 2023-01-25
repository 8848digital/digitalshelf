import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getHomeCategories from "../../../services/api/home_page_api/home_categories_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";

interface RepoHomeCategoriesState {
    items: any,
    error: string
}

const initialState: RepoHomeCategoriesState = {
    items: [],
    error: ''
}

const HomeCategories = createSlice({
    name: "Home Categories",
    initialState,
    reducers: {
        homeCategoriesSuccess(state, action: PayloadAction<RepoHomeCategoriesState>) {
            state.items = action.payload;
            state.error = ""
        },
        homeCategoriesFailed(state) {
            state.error = "No Items Found";
            
        }
    }
})

export const homecategories_state = (state: RootState) => state.homeCategories;

export const HomeCategoriesApi = (): any => async (dispatch: any) => {
    try {
        const res = await getHomeCategories();
        console.log("home categories response",res);
        if(res.msg === "error")
        {
            dispatch(homeCategoriesFailed());
        }
        else
        {
            dispatch(homeCategoriesSuccess(res));
        }

    } catch (error) {

        console.log(error);
    }

}

const { homeCategoriesSuccess, homeCategoriesFailed } = HomeCategories.actions
export default HomeCategories.reducer