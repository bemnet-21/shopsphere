import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Modal {
    isVisible: boolean
}

const initialState: Modal = {
    isVisible: false
}

const modalSlice = createSlice({
    name : 'modal',
    initialState,
    reducers: {
        setVisibility: (state, action: PayloadAction<boolean>) => {
            state.isVisible = action.payload
        } 
    }
})

export const { setVisibility } = modalSlice.actions;
export default modalSlice.reducer;