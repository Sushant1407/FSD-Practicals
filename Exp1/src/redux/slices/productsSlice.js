import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'MacBook Air M1', price: 50000 },
    { id: 2, name: 'iPhone 14', price: 54000 },
    { id: 3, name: 'AirPods', price: 12900 },
    { id: 4, name: 'Mac mini', price: 59900 }
  ]
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push({ ...action.payload, id: Date.now() });
    },
    updateProduct: (state, action) => {
      const { id, name, price } = action.payload;
      const existingProduct = state.items.find(item => item.id === id);
      if (existingProduct) {
        existingProduct.name = name;
        existingProduct.price = price;
      }
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addProduct, updateProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
