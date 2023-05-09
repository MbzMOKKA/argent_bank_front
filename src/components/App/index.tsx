//Imports
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Profile from "../../pages/Profile";
import ErrorNotFound from "../../pages/ErrorNotFound";
import { StyledAppContainer } from "./style";
import Header from "../Header";
import Footer from "../Footer";
import RequireAuth from "../RequireAuth";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectToken, setUser } from "../../features/auth/authSlice";
import { userGetInfos } from "../../utils/apiHandler";

//Component of the web application
export default function App() {
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null);
    const token = useSelector(selectToken);

    async function fetchUserInfos() {
        const user = await userGetInfos(token, setError);
        if (user === null) {
            dispatch(logOut);
        } else {
            dispatch(setUser(user));
        }
    }

    useEffect(() => {
        if (token !== null) {
            fetchUserInfos();
        }
    }, [token]);

    return (
        <StyledAppContainer>
            <Header />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route element={<RequireAuth />}>
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Route>
                <Route path="*" element={<ErrorNotFound />} />
            </Routes>
            <Footer />
        </StyledAppContainer>
    );
}
