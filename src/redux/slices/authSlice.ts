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
    setUuid: (state, action: PayloadAction<string>) => {
      state.uuid = action.payload;
    },
    deleteUuid: (state) => {
      state.uuid = '';
    }
  },
});

export const { setToken, deleteToken, setUuid, deleteUuid } = authSlice.actions;
export default authSlice.reducer;
