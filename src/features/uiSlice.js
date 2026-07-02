import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";
  const storedTheme = window.localStorage.getItem("business-dashboard-theme");
  return storedTheme === "dark" ? "dark" : "light";
};

const initialState = {
  theme: getInitialTheme()
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  }
});

export const { toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;
