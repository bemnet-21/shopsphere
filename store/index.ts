import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice"

const store = configureStore({
    reducer: {
        categoriesState: categoryReducer,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
export default store;