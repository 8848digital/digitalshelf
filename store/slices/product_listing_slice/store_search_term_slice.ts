import {createSlice} from "@reduxjs/toolkit";
import { RootState } from "../../root_reducer";

const initialState = {
    searchTerm : ""
}

const SearchTermScreen = createSlice({
    name:"Searh Term",
    initialState,
    reducers:{
        setSearchTerm(state:any, action:any)
        {
            console.log("search slice");
            state.searchTerm = action.payload
        }
    }
})

// export const StoreSearchTerm  =
// (
//   search_val?:any
// ): any =>
//    (dispatch: any) => {
//    console.log("search term in middleware", search_val);
//    dispatch()
//   };

export const search_data = (state: RootState) => state.searchTerm; 

export const {setSearchTerm} = SearchTermScreen.actions
export default SearchTermScreen.reducer