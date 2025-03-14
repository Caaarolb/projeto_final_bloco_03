import { useEffect, useState } from "react"
import { DNA } from "react-loader-spinner"
import Produto from "../../../models/Produto"
import { listar } from "../../../services/Service"
import CardProdutos from "../cardprodutos/CardProdutos"

function ListarProdutos() {
	const [produtos, setProdutos] = useState<Produto[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function buscarProdutos() {
		setIsLoading(true)

		try {
			await listar("/produtos", setProdutos)
		} catch (error: any) {
			console.log("Erro ao listar todos os Produtos!", error)
		} finally {
			setIsLoading(false)
		}
	}

	
	useEffect(() => {
		buscarProdutos()
	}, []) 

	return (
		<>
			{isLoading && (
				<DNA
					visible={true}
					height="200"
					width="200"
					ariaLabel="dna-loading"
					wrapperStyle={{}}
					wrapperClass="dna-wrapper mx-auto"
				/>
			)}
			<div className="flex justify-center w-full">
				<div className="container flex flex-col m-4">
					{!isLoading && produtos.length === 0 && (
						<span className="my-8 text-3xl text-center">Nenhum produto foi encontrado</span>
					)}

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
						{produtos.map((produto) => (
							<CardProdutos key={produto.id} produto={produto} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default ListarProdutos
