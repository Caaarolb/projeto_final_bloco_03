import axios from "axios"

// Definindo a instância do axios
export const api = axios.create({
  baseURL: "https://farmacia-nest-t0o5.onrender.com/"
})

// Tipo genérico T para dados, para ser reutilizado
type SetDados<T> = (dados: T) => void;

// Função para listar dados
export const listar = async <T>(url: string, setDados: SetDados<T>) => {
  const resposta = await api.get<T>(url)
  setDados(resposta.data)
}

// Função para cadastrar dados
export const cadastrar = async <T>(url: string, dados: T, setDados: SetDados<T>) => {
  const resposta = await api.post<T>(url, dados)
  setDados(resposta.data)
}

// Função para atualizar dados
export const atualizar = async <T>(url: string, dados: T, setDados: SetDados<T>) => {
  const resposta = await api.put<T>(url, dados)
  setDados(resposta.data)
}

// Função para deletar dados
export const deletar = async (url: string) => {
  await api.delete(url)
}
