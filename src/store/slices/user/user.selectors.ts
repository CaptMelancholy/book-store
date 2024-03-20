/* eslint-disable max-len */
import { RootState } from '../../index';
import ESliceNames from '../../store.types';

export const activationEmailSelector = (state: RootState) => state[ESliceNames.USER_SLICE_NAME].activation_email;
export const authStatusSelector = (state: RootState) => state[ESliceNames.USER_SLICE_NAME].auth;
export const tokensSelector = (state: RootState) => state[ESliceNames.USER_SLICE_NAME].tokens;
export const userSelector = (state: RootState) => state[ESliceNames.USER_SLICE_NAME].user;
