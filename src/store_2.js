import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", // state 이름
  initialState: "kim" // state 값
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12]
})

export default configureStore({
  reducer: {
    user: user.reducer, // 작명: createSlice만든거.reducer
    stock: stock.reducer
  }
})