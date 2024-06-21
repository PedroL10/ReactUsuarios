import axios from "axios";


export const axiosInstance = axios.create({
    baseURL : "http://localhost:8080"
})

export class UsuarioService {
    listarTodos(){
        return axiosInstance.get("/usuario");
    }
}