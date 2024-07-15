import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string;
  uuid: string;
  image: null | File | string;
}

const initialState: AuthState = {
  token: localStorage.getItem("token") || '',
  uuid: '',
  image: null, // Initial value should be set to null to match the interface
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', state.token);
    },
    deleteToken: (state) => {
      state.token = '';
      state.uuid = '';
      localStorage.removeItem('token');
    },
    setUuid: (state, action: PayloadAction<string>) => {
      state.uuid = action.payload;
    },
    setIMG: (state, action: PayloadAction<null | File | string>) => {
      state.image = action.payload;
    },
    deleteUuid: (state) => {
      state.uuid = '';
    },
  },
});

export const { setToken, deleteToken, setUuid, deleteUuid, setIMG } = authSlice.actions;
export default authSlice.reducer;
