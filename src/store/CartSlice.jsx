import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.name === action.payload);
      if (itemIndex !== -1) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    incrementItem: (state, action) => {
      const item = state.items.find(item => item.name === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const item = state.items.find(item => item.name === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(i => i.name !== action.payload);
        } else {
          item.quantity -= 1;
        }
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem } = CartSlice.actions;
export default CartSlice.reducer;
