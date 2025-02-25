import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { buscar, deletar } from "../../../service/Service";
import Produto from "../../../models/Produto";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: unknown) {
      ToastAlerta('Erro ao buscar produto!', 'Erro');
      console.error(error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornarManipulação() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    try {
      if (id) {
        await deletar(`/produtos/${id}`);
        ToastAlerta('Produto apagado com sucesso', 'Sucesso');
      }
    } catch (error: unknown) {
      ToastAlerta('Erro ao apagar o Produto', 'Erro');
      console.error(error);
    }
    retornarManipulação();
  }

  return (
    <div className="bg-cyan-600 min-h-[80vh]">
      <div className="w-1/3 h-1/3 mx-auto">
        <h1 className="text-4xl text-center py-4">Deletar produto</h1>
        <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar o produto a seguir?</p>
        <div className="border-slate-900 border-2 flex flex-col rounded-2xl overflow-hidden justify-between">
          <header className="py-2 px-6 bg-neutral-700 text-white font-bold text-2xl">Produto</header>
          <div className="bg-green-500 p-4">
            <p className="text-2xl h-full text-center">{produto.nome}</p>
          </div>
          <div className="flex">
            <button onClick={retornarManipulação} className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2">Não</button>
            <button className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center" onClick={deletarProduto}>
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
