import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductProperty {
    id: number
    price: number
    title: string
    thumbnail: string
}
interface Item {
    item: ProductProperty[]
}
const initialState: Item = {
    item: [
        {
            id: 1,
            price: 89.99,
            title: "Essence Mascara Lash Princess",
            thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
        }
    ]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductProperty>) => {
            state.item.push(action.payload);
        }
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer