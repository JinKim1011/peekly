import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';
import callsReducer from "./calls/callsSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        calls: callsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;