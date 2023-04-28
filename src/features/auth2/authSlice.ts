//Imports
import { createSlice } from '@reduxjs/toolkit';

//Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: { token: null, user: null },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logOut: (state) => {
            state.token = null;
            state.user = null;
        },
    },
});

export const { setToken, logOut } = authSlice.actions;
export default authSlice.reducer;

//Selectors
export const selectToken = (state: any) => state.auth.token;
export const selectUser = (state: any) => state.auth.user;
