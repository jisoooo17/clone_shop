import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12]
})

let cart = createSlice({
  name: "cart",
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ], 
  reducers: {
    addCount(state, action){
      let findId = state.findIndex((q)=>{return q.id === action.payload});
      state[findId].count++

      // console.log(action.payload)
      // console.log(findId)
    }, 
    minusCount(state, action){
      let findId = state.findIndex((q)=>{return q.id === action.payload});
      state[findId].count--;

      // console.log(action.payload)
      // console.log(findId)
    }, 
    addItem(state, action){
      state.push(action.payload);
      console.log(action.payload);
    },
  }
})

export let {addCount, minusCount, addItem} = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer, // 작명: createSlice만든거.reducer
    stock: stock.reducer,
    cart: cart.reducer
  }
})