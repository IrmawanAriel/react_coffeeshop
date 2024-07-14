import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string ;
  uuid: string ;
  image : null | undefined | File | string;
}

const initialState: AuthState = {
  token: '',
  uuid: '', 
  image: undefined,
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
    setIMG: (state, action: PayloadAction<null | File | undefined>) => {
      state.image = action.payload;
    },
    deleteUuid: (state) => {
      state.uuid = '';
    }
  },
});

export const { setToken, deleteToken, setUuid, deleteUuid, setIMG } = authSlice.actions;
export default authSlice.reducer;
