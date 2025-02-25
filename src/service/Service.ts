import axios from "axios"

// Tipos para a função setDados
type SetDados<T> = React.Dispatch<React.SetStateAction<T>>;

export const api = axios.create({
  baseURL: "https://blog-pessoal-hp42.onrender.com"
})

// Service de Consulta (GET)
export const listar = async <T>(url: string, setDados: SetDados<T>) => {
  const resposta = await api.get(url)
  setDados(resposta.data)
}

export const buscar = async <T>(url: string, setDados: SetDados<T>) => {
  const resposta = await api.get(url)
  setDados(resposta.data)
}

// Service de Cadastro (POST)
export const cadastrar = async <T>(url: string, dados: object, setDados: SetDados<T>) => {
  const resposta = await api.post(url, dados)
  setDados(resposta.data)
}

// Service de Atualização (PUT)
export const atualizar = async <T>(url: string, dados: object, setDados: SetDados<T>) => {
  const resposta = await api.put(url, dados)
  setDados(resposta.data)
}

// Service de Exclusão (DELETE)
export const deletar = async (url: string) => {
  await api.delete(url)
}
