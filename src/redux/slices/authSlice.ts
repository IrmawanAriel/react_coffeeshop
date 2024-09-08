import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string;
  uuid: string;
  image: any;
}

const initialState: AuthState = {
  token: '', 
  uuid: '',
  image: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.token = '';
      state.uuid = '';
    },
    setUuid: (state, action: PayloadAction<string>) => {
      state.uuid = action.payload;
    },
    setIMG: (state, action: PayloadAction<any>) => {
      state.image = action.payload;
    },
    deleteUuid: (state) => {
      state.uuid = '';
    },
  },
});

export const { setToken, deleteToken, setUuid, deleteUuid, setIMG } = authSlice.actions;
export default authSlice.reducer;
