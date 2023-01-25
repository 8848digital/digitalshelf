
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { string } from "yup";
import getCartList from "../../../services/api/cart_page_api/get_cart_listing_api";
import getClearCartApi from "../../../services/api/cart_page_api/clear_cart_api";
// import { AppState } from "../store";
import {RootState} from "../../root_reducer";
interface RepoCartListing {
    item: any,
    cartCount: number,
    grand_total: null | number;
}

const initialState: RepoCartListing = {
    item: [],
    cartCount: 0,
    grand_total:0
}

const CartListingScreen = createSlice({
    name: "Cart-Listing",
    initialState,
    reducers: {
        cartListing(state, action: PayloadAction<RepoCartListing>) {
            console.log(' cart lsiting action payload - ', action)
            
            state.item = action.payload;
            state.cartCount = state.item.length;
            state.grand_total = Number(localStorage.getItem("grand_total"));
           
        },
        clearCartSuccess(state, action) {
            console.log(' clear cart action payload - ', action)
            state.item = [];
            state.cartCount = 0;
            state.grand_total = 0 ;
         
        }
    }
})

export const Cart_Listing = (state: RootState) => state.cart

export const CartListingApi = (id?: any): any => async (dispatch: any) => {
    console.log("cart listing id",id);
    try {
        const res = await getCartList(id);
        console.log("cart list api - ",res);
        dispatch(cartListing(res))
    } catch (error) {
        console.log(error);
    }
}


// export const Cart_Cart = (state: AppState) => state.
export const ClearCartApi = (id:any):any =>async (dispatch:any) => {
    console.log("clear cart slice",id)
    
    const res = await getClearCartApi(id);
    console.log("clear cart",res);
    dispatch(clearCartSuccess(res));

}
const { cartListing,clearCartSuccess } = CartListingScreen.actions
export default CartListingScreen.reducer
