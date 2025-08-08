import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface PriceOrder {
    order: string
}
const initialState: PriceOrder = {
    order : ""
}
const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {
        setAsc: (state, action:PayloadAction<string>) => {
            state.order = action.payload
        },
        setDesc: (state, action:PayloadAction<string>) => {
            state.order = action.payload
        },
        setNone: (state, action:PayloadAction<string>) => {
            state.order = action.payload
        }
    }
})

export const {setAsc, setDesc} = priceSlice.actions;
export default priceSlice.reducer;