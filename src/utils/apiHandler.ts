//Imports
import axios from "axios";

//Send the email and password to the API and returns the token or null
export async function userLogin(
    email: string,
    password: string,
    setError: any
) {
    try {
        const response = await axios.post(
            "http://localhost:3001/api/v1/user/login",
            {
                email,
                password,
            }
        );
        return response.data.body.token;
    } catch (error: any) {
        setError(error.response.data.message);
        return null;
    }
}

//Send the token to the API and returns the user informations or null
export async function userGetInfos(token: string | null, setError: any) {
    try {
        const response = await axios.post(
            "http://localhost:3001/api/v1/user/profile",
            {},
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data.body;
    } catch (error: any) {
        setError(error.response.data.message);
        return null;
    }
}

//Send the token and the new name to the API and returns the user informations or null
export async function userEditName(
    token: string | null,
    firstName: string,
    lastName: string,
    setError: any
) {
    try {
        const response = await axios.put(
            "http://localhost:3001/api/v1/user/profile",
            {
                firstName,
                lastName,
            },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data.body;
    } catch (error: any) {
        setError(error.response.data.message);
        return null;
    }
}
