import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getAddCartList from "../../../services/api/cart_page_api/add_cart_api";
import { RootState } from "../../root_reducer";
interface RepoAddCartState {
  item: any;
  msg: string;
  error: any;
}

const initialState: RepoAddCartState = {
  item: [],
  msg: "",
  error: "",
};

const AddCartScreen = createSlice({
  name: "Add-Cart",
  initialState,
  reducers: {
    AddCartSuccess(state, action) {
      console.log("add cart action payload", action.payload);
      state.item = action.payload;
      state.msg = action.payload.msg;
      state.error = "";
    },
    AddCartFailed(state, action) {
      console.log("add cart action payload", action.payload);
      state.item = action.payload;
      state.msg = action.payload.msg;
      state.error = action.payload.error;
    },
    ResetAddCartSuccess(state) {
      state.item = [];
      state.msg = "";
      state.error = "";
    },
  },
});
export const addcart = (state: RootState) => state.addcart;

const { AddCartSuccess, AddCartFailed, ResetAddCartSuccess } =
  AddCartScreen.actions;

export const AddCartApi =
  (id: any, quantity: number, size?: any, color?: any): any =>
  async (dispatch: any) => {
    console.log("add color", color);
    console.log("add id", id);
    console.log("add quantity", quantity);
    console.log("add size", size);

    try {
      if (size && color) {
        const res = await getAddCartList(id, quantity, size, color);
        console.log("add res", res);
        if (res.msg !== "error") {
          console.log("add cart Add to Cart Api store ", res);
          dispatch(AddCartSuccess(res));
        } else {
          console.log("add cart Add to Cart Api store fail ", res);
          dispatch(AddCartFailed(res));
        }
      } 
      // else {
      //   const res = await getAddCartList(id, quantity, size);
      //   if (res.msg !== "error") {
      //     console.log("add cart Add to Cart Api store ", res);
      //     dispatch(AddCartSuccess(res));
      //   } else {
      //     console.log("add cart Add to Cart Api store fail ", res);
      //     dispatch(AddCartFailed(res));
      //   }
      // } 
      else if(size ) 
      {
        const res = await getAddCartList(id, quantity, size);
        if (res.msg !== "error") {
          console.log("add cart Add to Cart Api store ", res);
          dispatch(AddCartSuccess(res));
        }
        else {
          console.log("add cart Add to Cart Api store fail ", res);
          dispatch(AddCartFailed(res));
        }
      }
      else {
        const res = await getAddCartList(id, quantity);
        if (res.msg !== "error") {
          console.log("add cart Add to Cart Api store ", res);
          dispatch(AddCartSuccess(res));
        }
        else {
          console.log("add cart Add to Cart Api store fail ", res);
          dispatch(AddCartFailed(res));
        }

      }
    } catch (error) {
      console.log(error);
    }
  };

export const ResetAddCart = (): any => async (dispatch: any) => {
  dispatch(ResetAddCartSuccess());
};

export default AddCartScreen.reducer;
