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
      const itemName = action.payload;
      const item = state.items.find(item => item.name === itemName);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(item => item.name !== itemName);
      }
    },
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find(item => item.name === name);
      if (item) {
        const difference = amount - item.quantity;
        item.quantity = amount;
        state.totalQuantity += difference;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.name !== name);
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
