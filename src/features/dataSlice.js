import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
  "data/fetchUsers",
  async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return res.data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    users: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = "success";
    });
  },
});

export default dataSlice.reducer;
