import axios from "axios"

const http = axios.create({
    baseURL: "https://bis365.com.br/bid365"
})

export default http;