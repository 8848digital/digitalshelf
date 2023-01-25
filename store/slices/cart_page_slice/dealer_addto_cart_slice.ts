import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getdealerAddCartList from "../../../services/api/dealer_api/dealer_add_cart_api";

interface RepoDealerAddCartState {
    item: any;
    error: any;
}    

const initialState: RepoDealerAddCartState = {
    item: [],
    error: "",
}

const DealerAddCartScreen = createSlice({
    name: "DealerAddCart",
    initialState,
    reducers: {
        DealerAddCartSuccess(state, action: PayloadAction<RepoDealerAddCartState>) {
            console.log("cart action payload", action.payload)
            state.item = action.payload;
            // state.grandTotal = action.payload.grandTotal
            state.error = ""
        },
        DealerAddCartFailed(state, action: PayloadAction<RepoDealerAddCartState>) {
            state.error = action.payload;
            state.item = []
        }
    }
})

export const dealerAddCartApi = (item_data:any): any => async (dispatch: any) => {

        const res = await getdealerAddCartList(item_data);
        if (res) {
            console.log("cart Add to Cart Api store ", res)
            dispatch(DealerAddCartSuccess(res));
        }
 
 
    // const token = localStorage.getItem('token');
    // console.log(token);size
    // let response = res.response;
    // let grandTotal = res.grandTotal;
}

const { DealerAddCartSuccess, DealerAddCartFailed } = DealerAddCartScreen.actions;
export default DealerAddCartScreen.reducer