import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Search {
    value: string
}
const initialState: Search = {
    value : ''
}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearchValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload.toLowerCase()
        }
    }
})

export const {updateSearchValue} = searchSlice.actions;
export default searchSlice.reducer;