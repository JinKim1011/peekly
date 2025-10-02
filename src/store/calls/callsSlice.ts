import type { Call } from '../calls/callsTypes';
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

type CallsState = {
    calls: Call[];
    loading: boolean;
    error?: string;
};

const initialState: CallsState = {
    calls: [],
    loading: false,
    error: undefined
};

// Async thunk to fetch calls
export const fetchCalls = createAsyncThunk('calls/fetchCalls', async () => {
    const response = await fetch('/api/calls');
    if (!response.ok) throw new Error('Failed to fetch calls');
    return (await response.json()) as Call[];
});

const callsSlice = createSlice({
    name: 'calls',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCalls.pending, state => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchCalls.fulfilled, (state, action: PayloadAction<Call[]>) => {
                state.calls = action.payload;
                state.loading = false;
            })
            .addCase(fetchCalls.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default callsSlice.reducer;