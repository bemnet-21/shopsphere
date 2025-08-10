import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice"
import priceReducer from "./price/priceSlice"
import cartReducer from './cart/cartSlice'
import searchReducer from './search/searchSlice'

const store = configureStore({
    reducer: {
        categoriesState: categoryReducer,
        priceState: priceReducer,
        cartState: cartReducer,
        searchState: searchReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;