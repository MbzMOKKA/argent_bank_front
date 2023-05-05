//Imports
import React, { useState } from "react";
import { StyledButtons, StyledForm, StyledInputs } from "./style";
import { userEditName } from "../../utils/apiHandler";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, setUser } from "../../features/auth/authSlice";

//Types
type EditProfileProps = {
    setEditing: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    firstName: string;
    lastName: string;
};

//Component of the user name editor in the profile page
export default function EditProfile(props: EditProfileProps) {
    const { setEditing, firstName, lastName } = props;

    const [inputFirstName, setInputFirstName] = useState(firstName);
    const [inputLastName, setInputLastName] = useState(lastName);

    const token = useSelector(selectToken);
    const dispatch = useDispatch();

    const changeFirstName = (e: any) => {
        setInputFirstName(e.target.value);
    };
    const changeLastName = (e: any) => {
        setInputLastName(e.target.value);
    };

    function cancelEditing() {
        setEditing(false);
    }

    async function submitChanges(e: any) {
        e.preventDefault();
        if (inputFirstName.length === 0) {
            return;
        }
        if (inputLastName.length === 0) {
            return;
        }
        const updatedUser = await userEditName(
            token,
            inputFirstName,
            inputLastName
        );
        if (updatedUser !== null) {
            dispatch(setUser(updatedUser));
            setEditing(false);
        }
    }

    return (
        <StyledForm>
            <StyledInputs>
                <input
                    type="text"
                    value={inputFirstName}
                    onChange={changeFirstName}
                />
                <input
                    type="text"
                    value={inputLastName}
                    onChange={changeLastName}
                />
            </StyledInputs>
            <StyledButtons>
                <button onClick={submitChanges}>Save</button>
                <button onClick={cancelEditing}>Cancel</button>
            </StyledButtons>
        </StyledForm>
    );
}
