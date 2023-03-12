import { configureStore } from "@reduxjs/toolkit";
import allBeerSlice from "./slice/all_beer.slice";
import myBeerSlice from "./slice/my_beer.slice";

const store = configureStore({
    reducer: {
        allBeer: allBeerSlice.reducer,
        myBeer: myBeerSlice.reducer
    }
});

export default store;