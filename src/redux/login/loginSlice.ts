import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  user: {},
  userAppointments: [],
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
  },
});

export const { setLogin, setUser, setUserAppointments } = loginSlice.actions;
export default loginSlice.reducer;
