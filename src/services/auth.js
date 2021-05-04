import axios from 'axios'




export const registerUser =  (data) => {
        return axios.post('/auth/register',data)
    }