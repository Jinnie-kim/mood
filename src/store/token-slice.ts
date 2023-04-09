import { createSlice } from '@reduxjs/toolkit';

interface TokenState {
  accessToken: string;
}

const initialState = { accessToken: '' } as TokenState;

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    getToken(state, action) {
      const token = action.payload;
      console.log(token);
      state.accessToken = token;
    },
  },
});

export const tokenAction = tokenSlice.actions;
export default tokenSlice;
