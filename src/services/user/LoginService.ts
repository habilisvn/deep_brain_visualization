import axios from 'axios';
import qs from 'qs';

class LoginService {
    async login(username: string, password: string) {
        try {
            // DOCUMENT: Use import.meta.env to access environment variables
            const response = await axios.post(
                `${import.meta.env.VITE_DEEP_BRAIN_API_URL}/api/v2/auth/login`,
                qs.stringify({ username, password }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            );
            return response.data;
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    }
}

export default new LoginService();
