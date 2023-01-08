import {  createSlice, PayloadAction , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface Edit {
  username: string;
  age: number;
  email: string;
  skill: string;
  description: string;
  url:string;
  discord: string;
  twitter: string;
  linkedIn: string;
  github: string;
  uid: number;
  status: string;

}
export const FetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    try {
      const response = await axios.get('http://localhost:5500/getdb');
  return [...response.data.message]
    } catch (error : any) {
      return error.message
    }
  }
  );
const initialState = [] as Edit[];
export const editSlice = createSlice({
name: "edit",
initialState,
reducers: {
  addTask: (state, action: PayloadAction<Edit>) => {
    state.push(action.payload);
  },
editPost: (state, action: PayloadAction<Edit>) => {
return state.map((post) =>
post.uid === action.payload.uid ? action.payload : post
);
},
deletePost: (state, action :PayloadAction<Edit>) => {
    return state.filter((post) => post.uid !== action.payload.uid);
  },
},
extraReducers(builder) {
  builder.addCase(FetchPosts.pending , (state  , action) => {
    state = state.map(edit => {
      edit.status = 'loading';
      return edit;
    });
  
  })
.addCase(FetchPosts.fulfilled , (state , action) => {
  // TODO: finish the addCase method
})
},

});
export const { editPost , deletePost , addTask } = editSlice.actions;
export default  editSlice.reducer 