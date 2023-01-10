import {  createSlice, PayloadAction , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../components/db/Post";
const initialState = [] as User[];
export const editSlice = createSlice({
name: "edit",
initialState,
reducers: {
  addTask: (state, action: PayloadAction<User>) => {
    state.push(action.payload);
  },
editPost: (state, action: PayloadAction<User>) => {
return state.map((post) =>
post.uid === action.payload.uid ? action.payload : post
);
},
deletePost: (state, action :PayloadAction<User>) => {
    return state.filter((post) => post.uid !== action.payload.uid);
  },
},
});
export const { editPost , deletePost , addTask } = editSlice.actions;
export default  editSlice.reducer 