import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import getBrandsList from "../../../services/api/home_page_api/brands_api";
// import { AppState } from "../store";
import { RootState } from "../../root_reducer";
interface RepoBrandsState {
    items: any,
    error: string
}

const initialState: RepoBrandsState = {
    items: [],
    error: ''
}

const BrandsScreen = createSlice({
    name: "brands",
    initialState,
    reducers: {
        brandsSuccess(state, action: PayloadAction<RepoBrandsState>) {
            console.log("action payload res", action.payload)
            state.items = action.payload;
            state.error = '';
            console.log('response ', state);
        },
        brandsFailed(state, action: PayloadAction<RepoBrandsState>) {
            state.error = "No brands Found";
        }
    }, 
    extraReducers: {
        [HYDRATE]: (state, action: PayloadAction<any>) => {
            // console.log("Hydrate from action ", action)
            if(action.payload['brands']) {
                state.items = action.payload['brands'];
                state.error = ""
            }else{
                return state
            }
        }
    }
});

export const brand_state = (state: RootState) => state.brands;


export const BrandsApi = (): any => async (dispatch: any) => {
    console.log("kuch bhi likho")
    try {
        const res = await getBrandsList();
        console.log("brand screen api call", res);
        dispatch(brandsSuccess(res));
    } catch (error) {
        console.log(error);
    }
}

const { brandsSuccess, brandsFailed } = BrandsScreen.actions;
export default BrandsScreen.reducer;

