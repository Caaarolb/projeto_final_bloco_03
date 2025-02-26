import Categoria from "./Categorias";

export default interface Produto {
    id: number;
    nome: string;
    preco: number;
    foto: string;
    categoria: Categoria | null;
}