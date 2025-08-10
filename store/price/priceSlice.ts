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
        setNone: (state) => {
            state.order = ''
        }
    }
})

export const {setAsc, setDesc, setNone} = priceSlice.actions;
export default priceSlice.reducer;