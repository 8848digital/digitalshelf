import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getCarouselList from "../../../services/api/home_page_api/carousel_api";
// import { AppState } from "../store";
import { RootState } from "../../root_reducer";
interface RepoCarouselState {
    items: any,
    error: any
}

const initialState: RepoCarouselState = {
    items: [],
    error: ''
}

const CarouselScreen = createSlice({
    name: "carousel",
    initialState,
    reducers: {
        carouselSuccess(state, action: PayloadAction<RepoCarouselState>) {
            state.items = action.payload;
            state.error = "";
        },
        carouselFailed(state) {
            console.log("carousel undefined");
            state.error = "An Error Occured";
        }

    }
})

export const carousel_state = (state: RootState) => state.carousel;

export const carouselAPI = (): any => async (dispatch: any) => {
    try {
        const res = await getCarouselList();
        console.log("carousel slice ",res);

        if(typeof res === "undefined")
        {
            dispatch(carouselFailed())
        }
        else
        {
            dispatch(carouselSuccess(res));
        }
    } catch (error) {
        console.log(error);
    }
}

const { carouselSuccess, carouselFailed } = CarouselScreen.actions;
export default CarouselScreen.reducer;