import type { Contact } from './contactsTypes';
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

type ContactsState = {
    contacts: Contact[];
    loading: boolean;
    error?: string;
};

const initialState: ContactsState = {
    contacts: [],
    loading: false,
    error: undefined
};

// Async thunk to fetch contacts
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await fetch('/api/contacts');
    if (!response.ok) throw new Error('Failed to fetch contacts');
    return (await response.json()) as Contact[];
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchContacts.fulfilled, (state, action: PayloadAction<Contact[]>) => {
                state.contacts = action.payload;
                state.loading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default contactsSlice.reducer;