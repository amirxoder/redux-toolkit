import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: "AmirCoder" },
  { id: '1', name: "Reza" },
  { id: '2', name: "Mohamma" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
