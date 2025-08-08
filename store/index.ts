import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice"
import priceReducer from "./price/priceSlice"

const store = configureStore({
    reducer: {
        categoriesState: categoryReducer,
        priceState: priceReducer

    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;