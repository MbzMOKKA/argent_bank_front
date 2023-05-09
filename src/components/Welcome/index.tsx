//Imports
import React, { useState } from "react";
import { StyledWelcome } from "./style";
import { formatUserName } from "../../utils/formatStrings";
import { selectUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import EditProfile from "../EditProfile";

//Component of the welcome section of the profile page
export default function Welcome() {
    const user = useSelector(selectUser);
    const [editing, setEditing] = useState<boolean>(false);

    function startEditing() {
        setEditing(true);
    }

    return (
        <StyledWelcome>
            <h1>
                Welcome back
                {editing === false ? (
                    <>
                        <br />
                        {user === null
                            ? "..."
                            : formatUserName(user.firstName, user.lastName)}
                        !
                    </>
                ) : null}
            </h1>
            {editing && user ? (
                <EditProfile
                    setEditing={setEditing}
                    firstName={user.firstName}
                    lastName={user.lastName}
                />
            ) : (
                <button onClick={startEditing}>Edit Name</button>
            )}
        </StyledWelcome>
    );
}
