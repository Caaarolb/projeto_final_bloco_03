import { useEffect, useState } from "react"
import { DNA } from "react-loader-spinner"
import Categoria from "../../../models/Categorias"
import { listar } from "../../../services/Service"
import CardCategorias from "../cardcategorias/CardCategorias"

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function buscarCategorias() {
    setIsLoading(true)

    try {
      await listar("/categorias", setCategorias)
    } catch (error) {
      // Logando o erro, caso queira utilizá-lo
      console.log("Erro ao listar as Categorias:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [categorias.length])

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
        <div className="container flex flex-col mx-4 my-8">
          {!isLoading && categorias.length === 0 && (
            <span className="my-8 text-3xl text-center">Nenhuma categoria foi encontrada</span>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListarCategorias
