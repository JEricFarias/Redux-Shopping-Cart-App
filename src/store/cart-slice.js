import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.totalQuantity++;
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const removedItem = state.itemsList.find((item) => item.id === id);

      if (removedItem) {
        if (removedItem.quantity === 1) {
          state.totalQuantity--;
          state.itemsList = state.itemsList.filter((item) => item.id !== id);
        } else {
          removedItem.quantity--;
          removedItem.totalPrice -= removedItem.price;
        }
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
