import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

let arr = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    //== add service ==
    addItem(state, action) {
      const newItem = action.payload;

      arr.push(newItem.id);

      state.totalQuantity++;

      state.cartItems.push({
        id: arr.length - 1,
        nombre: newItem.nombre,
        precio: newItem.precio,
        totalPrice: newItem.precio,
      });

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.precio), 0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  
    //== delete service ==
    deleteItem(state, action) {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      state.totalQuantity = state.totalQuantity - 1;

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.precio), 0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const cartActions = cartSlice.actions;