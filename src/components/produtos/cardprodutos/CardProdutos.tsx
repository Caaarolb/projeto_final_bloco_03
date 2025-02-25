import { Link } from "react-router-dom"
import Produto from "../../../models/Produto"

interface CardProdutoProps {
    produto: Produto
}

function CardProdutos({ produto }: CardProdutoProps) {
    return (
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between h-[70vh]'>
            <div className="flex w-full h-[70%] bg-neutral-700 py-2 px-4 items-center gap-4">
                <img src={produto.foto} className='h-full w-full' alt="" />
            </div>
            <div className='p-4 h-[30%] bg-blue-600'>
                <h3 className='text-2xl font-bold px-4 py-2 text-center uppercase '>{produto.nome}</h3>
                <p className="text-lg px-4 font-bold">Preço: {produto.preco}</p>

            </div>

            <div className="flex justify-center bg-green-400">
            <Link to={`/editarprodutos/${produto.id}`}
                    className='w-full text-slate-100 bg-teal-400 hover:bg-teal-700 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarprodutos/${produto.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                        flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProdutos