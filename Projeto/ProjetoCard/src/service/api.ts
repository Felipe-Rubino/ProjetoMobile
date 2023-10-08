import axios from "axios";


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

