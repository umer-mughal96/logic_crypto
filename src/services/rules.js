import axios from "axios";


export const coinProgress = (data) => {
    return axios.post("Api url", data)
}