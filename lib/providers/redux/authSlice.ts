import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  uname: string | null;
  role: string | null;
}

const initialState: AuthState = {
  uname: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ uname: string; role: string }>
    ) => {
      state.uname = action.payload.uname;
      state.role = action.payload.role;
    },
    clearUser: (state) => {
      state.uname = null;
      state.role = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
