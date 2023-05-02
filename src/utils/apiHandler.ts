//Imports
import axios from "axios";

export async function userLogin(email: string, password: string) {
    try {
        const response = await axios.post(
            "http://localhost:3001/api/v1/user/login",
            {
                email,
                password,
            }
        );
        return response.data.body.token;
    } catch (error) {
        console.error("Error logging in:", error);
        return null;
    }
}

export async function userGetInfos(token: string | null) {
    try {
        const response = await axios.post(
            "http://localhost:3001/api/v1/user/profile",
            {},
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data.body;
    } catch (error) {
        console.error("Error fetching user infos:", error);
        return null;
    }
}
