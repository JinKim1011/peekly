import type { RootState } from '../index';
import type { Contact } from './contactsTypes';

export const selectContactsState = (state: RootState) => state.contacts;

export const selectContacts = (state: RootState): Contact[] => selectContactsState(state).contacts;

export const selectContactsLoading = (state: RootState): boolean => selectContactsState(state).loading;

export const selectContactsError = (state: RootState): string | undefined => selectContactsState(state).error;
