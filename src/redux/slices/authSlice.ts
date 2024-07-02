// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  id: string | null | number;
}

const initialState: AuthState = {
  token: null,
  id: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = null;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    deleteId: (state) => {
      state.id = null;
    },
  },
});

export const { setToken, deleteToken, setId, deleteId } = authSlice.actions;
export default authSlice.reducer;
