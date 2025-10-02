import type { RootState } from '../index';
import type { Call } from './callsTypes';

export const selectCallsState = (state: RootState) => state.calls;

export const selectCalls = (state: RootState): Call[] => selectCallsState(state).calls;

export const selectCallsLoading = (state: RootState): boolean => selectCallsState(state).loading;

export const selectCallsError = (state: RootState): string | undefined => selectCallsState(state).error;