import axios from "axios";
import { TokenType } from "../@types/auth";

export const Api = axios.create({
    baseURL : 'http://10.0.2.2:8080/api'
})
export const listaColaborador = async () => {
    return Api.get('/colaborador/listar')
}
export const cadastroColaborador = async (formData : FormData) => {
    return Api.post('/colaborador/inserir', formData)
}
export const listarImagem = async () => {
    return Api.get('/imagem/lista')
}
export const createSession = async (email : string, password : string) => {
    try {
      const response = await Api.post('/auth/signin', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
};
export const deleteColaborador = async (colaboradorId : number, token : TokenType) => {
    const response = await Api.delete(`/colaborador/${colaboradorId}`, {
        headers : {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data; 
}
export const atualizarColaborador = async(colaboradorId: number, token : TokenType, data : any) => {
    console.log(data)
    console.log(colaboradorId)
    const response = await Api.put(`/colaborador/atualizar/${colaboradorId}`, data ,{
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
    return response.data
}