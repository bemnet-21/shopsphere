import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice"
import priceReducer from "./price/priceSlice"
import cartReducer from './cart/cartSlice'
import searchReducer from './search/searchSlice'
import modalReducer from './modal/modalSlice'
import buyModalReducer from './modal/buyModalSlice'

const store = configureStore({
    reducer: {
        categoriesState: categoryReducer,
        priceState: priceReducer,
        cartState: cartReducer,
        searchState: searchReducer,
        modalState: modalReducer,
        buyModalState: buyModalReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;