import { createSlice } from "@reduxjs/toolkit"
import _ from "lodash";

const initialState = {
    itemsList: [],
    page: 1,
    perPage: 10
}

const allBeerSlice = createSlice({
    name: 'allBeer',
    initialState,
    reducers: {
        loadItems(state) {
            state.page++;
        },
        setItems(state, action){
            const uniqData = _.differenceWith(action.payload, state.itemsList, _.isEqual);
            state.itemsList = [...state.itemsList, ...uniqData];
        }
    }
})

export const allBeerActions = allBeerSlice.actions;
export default allBeerSlice;