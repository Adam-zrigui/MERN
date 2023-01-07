import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Edit {
id: number;
text: string;
}
const initialState: Edit[] = [];
const editSlice = createSlice({
name: "edit",
initialState,
reducers: {
editTask: (state, action: PayloadAction<Edit>) => {
return state.map((task) =>
task.id === action.payload.id ? action.payload : task
);
},
deleteTask: (state, action) => {
    return state.filter((post) => post.id !== action.payload.id);
  },
},
});
export const { editTask , deleteTask } = editSlice.actions;
export default  editSlice.reducer 