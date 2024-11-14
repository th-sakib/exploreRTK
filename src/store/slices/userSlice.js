import { createSlice } from "@reduxjs/toolkit";

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
    deleteUsers(state, action) {},
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
