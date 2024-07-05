import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string ;
  uuid: string ;
}

const initialState: AuthState = {
  token: '',
  uuid: '', //
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
    },
    setId: (state, action: PayloadAction<string>) => {
      state.uuid = action.payload;
    },
    deleteId: (state) => {
      state.uuid = '';
    }
  },
});

export const { setToken, deleteToken, setId, deleteId } = authSlice.actions;
export default authSlice.reducer;
