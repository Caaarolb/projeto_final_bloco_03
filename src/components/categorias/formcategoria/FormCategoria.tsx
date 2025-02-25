import { useState, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import Categoria from "../../../models/Categorias";
import { RotatingLines } from "react-loader-spinner";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  // Função de busca da categoria por id
  const buscarPorId = async (id: string) => {
    try {
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error: unknown) {
      if (error instanceof Error) {
        ToastAlerta(`Erro ao buscar categoria: ${error.message}`, 'erro');
      } else {
        ToastAlerta('Categoria não encontrada!', 'erro');
      }
      retornar();
    }
  }

  // Efeito para buscar a categoria ao carregar a página ou alterar o id
  useEffect(() => {
    if (id) {
      buscarPorId(id);
    }
  }, [id]);

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  const gerarNovaCategoria = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria);
        ToastAlerta('Categoria atualizada com sucesso', 'sucesso');
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        ToastAlerta('Categoria cadastrada com sucesso', 'sucesso');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        ToastAlerta(`Erro ao processar a categoria: ${error.message}`, 'erro');
      } else {
        ToastAlerta('Erro ao processar a categoria', 'erro');
      }
    }

    setIsLoading(false);
    retornar();
  }

  const retornar = () => {
    navigate("/categorias");
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2 ">
          <label htmlFor="categoria">Categoria</label>
          <input
            type="text"
            placeholder="nome da categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            required
            value={categoria.nome}
            onChange={atualizarEstado}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 
          hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
