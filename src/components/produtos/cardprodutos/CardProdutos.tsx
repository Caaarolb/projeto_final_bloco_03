import { Pencil, Trash } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import Produto from "../../../models/Produto"

interface CardProdutoProps {
  produto: Produto
  //curtir: (id: number) => void
}

function CardProdutos({ produto}: CardProdutoProps) {

  

  return (
    <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-white my-10'>
      <div className="flex justify-end items-end pt-2 pr-2">

        <Link to={`/editarproduto/${produto.id}`}>
          <Pencil size={24} className="mr-1 hover:fill-red-600" />
        </Link>

        <Link to={`/deletarproduto/${produto.id}`}>
          <Trash size={24} className="mr-1 hover:fill-red-700" />
        </Link>

        {}
      </div>

      <div className='py-4'>

        <img src={produto.foto} className='mt-1 h-44 max-w-75 mx-auto' alt={produto.nome} />

        <div className='p-4'>
          <p className='text-sm text-center uppercase'>{produto.nome}</p>
          <h3 className='text-xl text-center font-bold uppercase'>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(produto.preco)}
          </h3>
          <p className='text-sm italic text-center'>Categoria: {produto.categoria?.nome}</p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <button className='w-full text-white bg-red-600 hover:bg-red-600 flex items-center justify-center py-2'>
          Comprar
        </button>
      </div>
    </div >
  )
}

export default CardProdutos