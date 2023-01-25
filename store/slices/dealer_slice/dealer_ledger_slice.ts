import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getDleaerLedger from "../../../services/api/dealer_api/dealer_ledger_api";
import {RootState} from "../../root_reducer";

interface RepoDealerLedger {
    item:any
}

const initialState: RepoDealerLedger = {
item: {}
}

const DealerLegerScreen = createSlice({
    name: "dealerLedger",
    initialState,
    reducers: {
        DealerLedgerSuccess(state, action: PayloadAction<RepoDealerLedger>) {
            console.log('ledger dealer  action payload post- ', action.payload)  
            state.item ={...action.payload};
           
        }
    }
})

export const dealerledger_state = (state: RootState) => state.dealerLedger;

export const dealerLedgerApi = (party:any,month?:any,from_date?:any,to_date?:any) :any=> async (dispatch:any) =>
{
    console.log("slice function post slice", party,month,from_date , to_date)
    const res = await getDleaerLedger (party,month,from_date , to_date);
    console.log("dealer ledger dispatch", res);
    dispatch(DealerLedgerSuccess(res));
}


const { DealerLedgerSuccess} = DealerLegerScreen.actions;
export default DealerLegerScreen.reducer