//Imports
import React, { useState } from "react";
import {
    StyledButtons,
    StyledErrorMessage,
    StyledForm,
    StyledInputs,
} from "./style";
import { userEditName } from "../../utils/apiHandler";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, setUser } from "../../features/auth/authSlice";

//Types
type EditProfileProps = {
    setEditing: React.Dispatch<React.SetStateAction<boolean>>;
    firstName: string;
    lastName: string;
};

//Component of the user name editor in the profile page
export default function EditProfile(props: EditProfileProps) {
    const { setEditing, firstName, lastName } = props;

    const [error, setError] = useState<string | null>(null);
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

    const emptyInputErrorMsg = "The name cannot be empty!";

    async function submitChanges(e: any) {
        e.preventDefault();
        if (inputFirstName.length === 0) {
            setError(emptyInputErrorMsg);
            return;
        }
        if (inputLastName.length === 0) {
            setError(emptyInputErrorMsg);
            return;
        }
        const updatedUser = await userEditName(
            token,
            inputFirstName,
            inputLastName,
            setError
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
            <StyledErrorMessage text={error} />
            <StyledButtons>
                <button onClick={submitChanges}>Save</button>
                <button onClick={cancelEditing}>Cancel</button>
            </StyledButtons>
        </StyledForm>
    );
}
