import axios from 'axios';
import { BASE_URL } from '.';


export const AuthApi = {

    singUp: async (data) => {
        console.log('data', data);
        const url = `${BASE_URL}/signUp`
        try {
            const response = await axios.post(url,data);
            console.log('response', response)
        return response
    } catch (error) {
        // Handle network errors
        console.log('Error', 'An error occurred. Please try again later.', error)
        return error.response.data
}   
    },

    singIn: async (data) => {
        const url = `${BASE_URL}/signIn`
        try {
            const response = await axios.post(url,data);
        return response
    } catch (error) {
        // Handle network errors
        console.log('Error', 'An error occurred. Please try again later.')
        return error.response.data
}   
    },

}