import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import deleteFromCartList from "../../../services/api/cart_page_api/delete_cart_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";


interface DeleteFromCartState {
  message: any;
  error: any;
}

const initialState: DeleteFromCartState = {
  message: "",
  error: "",
};

const deleteFromCart = createSlice({
  name: "delete_from_cart",
  initialState,
  reducers: {
    deleteFromCartSuccess(state, action: PayloadAction<DeleteFromCartState>) {
      state.message = action.payload
      state.error = ""
    },
    deleteFromCartFailed(state, action: PayloadAction<DeleteFromCartState>) {
      
       state.error = action.payload
       state.message = ""
    },
  },
});

export const deleteItemFromCart = (state: RootState) => state.deleteFromcart;
export const deleteCartApi = (id: any) => async (dispatch: any) => {
    try {
        console.log("Id - ", id);
        const res = await deleteFromCartList(id);
        dispatch(deleteFromCartSuccess(res));
    }
    catch(err:any) {
        console.log(err);
    }
};

const { deleteFromCartSuccess } = deleteFromCart.actions;
export default deleteFromCart.reducer;
