//Imports
import { createSlice } from "@reduxjs/toolkit";

//Types
type User = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
};

type AuthState = {
    token: string | null;
    user: User | null;
};

//Slice
const initialState: AuthState = {
    token: null,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state) => {
            state.token = null;
            state.user = null;
        },
    },
});

export const { setToken, setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

//Selectors
export const selectToken = (state: any) => state.auth.token;
export const selectUser = (state: any) => state.auth.user;
