import axios from "axios";


const clientAxios = axios.create({
    baseURL: "http://localhost:8008",
    timeout: 40000,
    
}
)


export default clientAxios;