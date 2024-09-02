import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/loginSlice";

// Define an interface for the user object
interface IAppointment {
  id: number;
  date: string;
  time: string;
  userId: number;
  status: string;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  birthdate: string;
  nDni: string;
}

// Update RootState to include the correct type for the user object
export type RootState = {
  login: {
    login: boolean;
    user: IUser;
    userAppointments: IAppointment[];
  };
};

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
