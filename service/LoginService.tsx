import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080"
})

export class LoginService{

    novoCadastro(usuario: Projeto.Usuario){
        return axiosInstance.post("/auth/novoUsuario", usuario);
    }

}