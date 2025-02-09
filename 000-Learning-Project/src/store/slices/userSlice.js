import { createSlice } from "@reduxjs/toolkit";
import { deleleUsers } from "../actions";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {
      state.splice(action.payload, 1);
    },
    // deleteUsers(state, action) {
    //   state.splice(0, state.length);
    // },
  },
  extraReducers(builder) {
    builder.addCase("user/deleteUsers", () => {
      return [];
    });
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, deleteUsers } = userSlice.actions;
