import {
  TypedStartListening,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { AppThunkDispatch, RootState } from '.';

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<
RootState,
AppThunkDispatch
>;
export const startAppListening = listenerMiddleware.startListening as AppStartListening;
