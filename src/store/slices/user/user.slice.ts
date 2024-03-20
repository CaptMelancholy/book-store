import { createSlice } from '@reduxjs/toolkit';
import { ITokens, IUser } from '../../../utils/User/user.types';
import ESliceNames from '../../store.types';
import { storageUserDefaultState } from './user.types';

const userSlice = createSlice({
  name: ESliceNames.USER_SLICE_NAME,
  initialState: storageUserDefaultState,
  reducers: {
    setActivationEmail: (state, action: { payload: string }) => ({
      ...state,
      activation_email: action.payload,
    }),
    setTokens: (state, action: { payload: ITokens }) => ({
      ...state,
      tokens: action.payload,
    }),
    setUser: (state, action: { payload: IUser }) => ({
      ...state,
      user: action.payload,
    }),
    setAuth: (state, action: { payload: boolean }) => ({
      ...state,
      auth: action.payload,
    }),
    setLogOut: (state) => ({
      ...state,
      storageUserDefaultState,
    }),
  },
});

export const {
  setActivationEmail, setTokens, setUser, setAuth, setLogOut,
} = userSlice.actions;

export default userSlice.reducer;
