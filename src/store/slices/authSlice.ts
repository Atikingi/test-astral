import { createSlice } from '@reduxjs/toolkit';

type Props = {
  isAuth: boolean;
  name: string;
};

const initialState: Props = {
  isAuth: false,
  name: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isAuth = true;
      state.name = action.payload.name;
    },
    signOut: (state) => {
      state.isAuth = false;
      state.name = '';
    }
  }
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
