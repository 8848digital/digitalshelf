import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getDleaerLedgerSummery from "../../../services/api/dealer_api/dealer_ledger_summery_api";
import {RootState} from "../../root_reducer";

interface RepoDealerLedger {
    item:any
}

const initialState: RepoDealerLedger = {
item: []
}

const DealerLegerSummeryScreen = createSlice({
    name: "dealerLedgerSummery",
    initialState,
    reducers: {
        DealerLedgerSummerySuccess(state, action: PayloadAction<RepoDealerLedger>) {
            console.log('ledger dealer  action payload -slice ', action.payload)  
            state.item = action.payload;
           
        }
    }
})

export const dealerledgersummery_state = (state: RootState) => state.dealerLedgerSummery;

export const dealerLedgerSummeryApi = () : any => async (dispatch:any) =>
{
    const res = await getDleaerLedgerSummery();
    console.log("dealer ledger dispatch", res);
    dispatch(DealerLedgerSummerySuccess(res));
}


const { DealerLedgerSummerySuccess} = DealerLegerSummeryScreen.actions;
export default DealerLegerSummeryScreen.reducer