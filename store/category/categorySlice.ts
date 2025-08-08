import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Category {
    selected: string[]
}
const initialState: Category = {
    selected: []
}
const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategory: (state, action:PayloadAction<string[]>) => {
            state.selected = action.payload;
        }
    }
});

export const { addCategory } = categorySlice.actions;
export default categorySlice.reducer;