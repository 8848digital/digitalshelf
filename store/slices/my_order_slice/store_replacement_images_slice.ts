import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import storeReplacementImagesAPI from "../../../services/api/my_order_api/store_replacement_images_api";
import { RootState } from "../../root_reducer";


interface RepoStoreReplacementImages {
  images: any;

}

let initialState:any[] = []


const StoreReplacementImages = createSlice({
  name: "StoreReplacementImages",
  initialState,
  reducers: {
    StoreReplacementImagesSuccess(state, action:any) {
      console.log("my orders store replacement images slice ",action.payload);
      // const testObj = {...action.payload};
      // console.log("my orders test obj",testObj);
      state.push(action.payload);
      console.log("my orders final obj", state);
    },
    EmptyReplacementImagesStore(state)
    {
      state = [];
    }
  },
});

export const storedReturnReplacementImages = (state:RootState) => state.storeReplacementImages;

export const StoreReplacementImagesAPI =
  (request: any): any =>
  async (dispatch: any) => {
    console.log("my orders slice ",request);
    // console.log("my orders slice url", URL.createObjectURL(request))
    try {
      const imagesRes = await storeReplacementImagesAPI(request);
      console.log("my orders images res",imagesRes);
      dispatch(StoreReplacementImagesSuccess(imagesRes))
    } catch (error) {
      console.log(error)
    }
  };

  export const EmptyStoreReplacementImagesAPI  =
  (): any =>
  async (dispatch: any) => {
    dispatch(EmptyReplacementImagesStore())
  }

const {StoreReplacementImagesSuccess, EmptyReplacementImagesStore} = StoreReplacementImages.actions
export default StoreReplacementImages.reducer;
