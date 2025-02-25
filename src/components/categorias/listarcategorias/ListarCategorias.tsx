import { useEffect, useState } from "react";
import Categoria from "../../../models/Categorias";
import { listar } from "../../../service/Service";
import CardCategorias from "../cardcategorias/CardCategorias";
import { DNA } from 'react-loader-spinner';

function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias);
        } catch (error: unknown) {
            alert('Erro ao listar as Categorias');
            console.error(error);  // Isso pode ser útil para depuração
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="bg-gray-200 flex justify-center">
                <div className="my-4 container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListarCategorias;
