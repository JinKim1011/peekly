import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Contact = {
    id: string;
    name: string;
    phone: string;
}

type ContactsState = {
    items: Contact[];
}

const initialState: ContactsState = {
    items: []
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action: PayloadAction<Contact>) {
            state.items.push(action.payload);
        },
        setContacts(state, action: PayloadAction<Contact[]>) {
            state.items = action.payload;
        },
        removeContact(state, action: PayloadAction<string>) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        }
    }
});

export const { addContact, setContacts, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;