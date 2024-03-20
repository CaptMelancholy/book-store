import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserAuthorization, IUserRegistration } from '../../../utils/User/user.types';

import EAPIs from '../../../api/api-client';
import { setActivationEmail, setTokens, setUser } from '../../slices/user/user.slice';
import API from '../../../api';

export const fetchSignUp = createAsyncThunk<void, { auth: IUserRegistration }>(
  'user/SignUp',
  async ({ auth }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios
        .post(`${EAPIs.AUTH_API}/users/`, auth)
        .then(({ data }) => data.email);
      dispatch(setActivationEmail(response));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const fetchSignIn = createAsyncThunk<void, { auth: IUserAuthorization }>(
  'user/SignIn',
  async ({ auth }, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios
        .post(`${EAPIs.AUTH_API}/jwt/create/`, auth)
        .then(({ data }) => data);
      dispatch(setTokens(response));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);

export const fetchUserMe = createAsyncThunk<void, void>(
  'user/Me',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await API.get(`${EAPIs.AUTH_API}/users/me`).then(({ data }) => data);
      dispatch(setUser(response));
    } catch (e) {
      rejectWithValue(e);
    }
  },
);
