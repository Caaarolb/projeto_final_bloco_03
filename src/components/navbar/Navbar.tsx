import { User, ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div className='flex justify-center bg-red-700 h-15 p-1 w-full text-white'>
                <div className="flex justify-between  text-lg container">
                    <Link to='/home'>
                        <img
                            src="images\Design sem nome (1).png"
                            alt="Logo"
                            className='w-50 h-auto mt-[-72px] absolute left-0 ml-0'
                        />
                    </Link>

                    <div className="relative flex justify-center items-center w-1/3 text-black">
                        <form className='flex justify-center items-center w-full'>
                            <input className="px-4 py-4 border border-stone-950 bg-white rounded-lg w-10/12 h-9 focus:outline-none"
                                type="search"
                                placeholder="Pesquisar produto"
                                id="busca"
                                name="busca"
                                required
                            />
                            <button type="submit"
                                className="bg-stone-50 border-stone-950 hover:bg-transparent hover:border-slate-600 border-1 rounded-lg w-10 h-10 font-medium text-sm text-black ms-2 flex items-center justify-center"
                            >
                                <MagnifyingGlass size={20} weight="thin" className="hover:fill-black" />
                            </button>
                        </form>
                    </div>

                    <div className='flex items-center gap-6 py-3'>
                        <Link to='/produtos' className="hover:underline transition-transform duration-200 hover:scale-110">Produtos</Link>
                        <Link to='/categorias' className="hover:underline transition-transform duration-200 hover:scale-110">Categorias</Link>
                        <Link to='/cadcategoria' className="hover:underline transition-transform duration-200 hover:scale-110">Cadastrar Categoria</Link>
                        <Link to='#' className="hover:underline transition-transform duration-200 hover:scale-110">Sair</Link>
                        <Link to='#' ><User size={30} weight='thin' className="transition-transform duration-200 hover:scale-110" /></Link>
                        <Link to='#' ><ShoppingCart size={30} weight='thin'className="transition-transform duration-200 hover:scale-110" /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar