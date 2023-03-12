import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    itemsList: []
}

const myBeerSlice = createSlice({
    name: 'myBeer',
    initialState,
    reducers: {
        addItems(state, action) { 
            state.itemsList.push(action.payload);
            console.log(action.payload, state.itemsList);
        }
    }
})

export const myBeerActions = myBeerSlice.actions;
export default myBeerSlice;