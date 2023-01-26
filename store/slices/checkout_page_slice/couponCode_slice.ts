import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getCouponCode from "../../services/api/couponCode_api";

interface RepoCouponCodeState {
  item: any;
  error: any;
}

const initialState: RepoCouponCodeState = {
  item: "",
  error: "",
};

const CouponCodeScreen = createSlice({
  name: "couponCode",
  initialState,
  reducers: {
    CouponCodeSuccess(state, action: PayloadAction<RepoCouponCodeState>) {
      (state.item = action.payload), (state.error = "");
    },
    CouponCodeFailed(state) {
      state.error = "";
    },
  },
});

const { CouponCodeSuccess, CouponCodeFailed } = CouponCodeScreen.actions;
export const CouponCodeApi = ({ item_code, coupon_code }: any) => async (dispatch: any) => {
    console.log("/////Item code", item_code)
  try {
    const res = await getCouponCode(item_code, coupon_code );
    console.log("coupon code api res",res)
    dispatch(CouponCodeSuccess(res.message.data))
  } catch (error) {
    console.log(error);
  }
};

export default CouponCodeScreen.reducer;
