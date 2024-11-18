import axios from 'axios';


class LoginService {
    async login(username: string, password: string) {
        try {
            // DOCUMENT: Use import.meta.env to access environment variables
            const response = await axios.post(`${import.meta.env.VITE_DEEP_BRAIN_API_URL}/api/v2/auth/login`, { username, password });
            return response.data;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }
}

export default new LoginService();
