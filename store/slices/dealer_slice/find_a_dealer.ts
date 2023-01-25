import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getFindaDealer from "../../../services/api/dealer_api/find_a_dealer_api";
import getFindDealerData from "../../../services/api/dealer_api/find_a_dealer_api";
import { RootState } from "../../root_reducer";
// import { AppState } from "../store";
interface RepoFindaDealer {
  cityData: any;
  dealerData:any
}

const initialState: RepoFindaDealer = {
  cityData: [],
  dealerData:[]
};

const FindaDealerScreen = createSlice({
  name: "Find_a_Dealer",
  initialState,
  reducers: {
    findaDealers(state, action) {
      state.cityData = action.payload;
      state.dealerData = []
    },
    dealerData(state,action)
    {
        state.dealerData=action.payload;
        // state.cityData = []
    }
  },
});

export const findDealer_state = (state:RootState) => state.FindDealer

export const findaDealerApi =
  (state: any): any =>
  async (dispatch: any) => {
    let arrayOfCities: string[] = [];
    let arrayOfBrands: string[] = [];
    console.log("find Dealer ts", state);

    try {
      const res = await getFindaDealer(state);
      console.log("find dealer api res in ts", res);
      res.map((item: any) => {
        arrayOfCities.push(item.city);
        item.Brands.map((brandName: any) => {
          arrayOfBrands.push(brandName);
        });
      });
      const finddeal = [
        { name: "city", value: arrayOfCities },
        { name: "brands", value: arrayOfBrands },
      ];
      console.log("find dealer cities data", arrayOfCities);
      console.log("find dealer brands data", arrayOfBrands);
      console.log("find dealer data append", finddeal);
      dispatch(findaDealers(finddeal));
    } catch (error) {
      console.log(error);
    }
  };

export const getDealerResponse =
  (state: any, city: any, brand: any): any =>
  async (dispatch: any) => {
    console.log("fetching dealer data");
    try {
      const res = await getFindDealerData(state);
      console.log("find dealer response",res);
      dispatch(dealerData(res))
    } catch (error) {
      console.log(error);
    }
  };
const { findaDealers,dealerData } = FindaDealerScreen.actions;
export default FindaDealerScreen.reducer;
