import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface BuyModalState {
    productId: number | null;
}

const initialState: BuyModalState = {
    productId: null,
}

const buyModalSlice = createSlice({
    name: 'buyModal',
    initialState,
    reducers: {
        openBuyModal: (state, action: PayloadAction<number>) => {
            state.productId = action.payload;
        },
        closeBuyModal: (state) => {
            state.productId = null;
        }
    }
})

export const { openBuyModal, closeBuyModal } = buyModalSlice.actions;
export default buyModalSlice.reducer;