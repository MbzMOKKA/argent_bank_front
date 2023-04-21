//Imports
import axios from 'axios';

export async function userLogin(email: string, password: string) {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/user/login', {
            email,
            password,
        });
        return response.data.body.token;
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
}
