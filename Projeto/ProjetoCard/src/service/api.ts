import axios from "axios";


export const Api = axios.create({
    baseURL : 'http://10.0.2.2:8080/api'
})


export const listaColaborador = async () => {
    return Api.get('/colaborador/listar')
}