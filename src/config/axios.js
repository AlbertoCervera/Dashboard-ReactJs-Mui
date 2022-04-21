import axios from "axios";


const clientAxios = axios.create({
    baseURL: "http://172.26.0.229:8008",
    timeout: 40000,
    
}
)


export default clientAxios;