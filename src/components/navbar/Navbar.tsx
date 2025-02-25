import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full bg-cyan-500 text-white flex justify-center py-4'>
            <div className="container flex justify-between text-lg">
                <Link to='/' className='text-2xl font-bold uppercase'>FarMais</Link>

                <div className='flex gap-4'>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadcategorias' className='hover:underline'>Cadastrar Categoria</Link>
                    <Link to='/produto' className='hover:underline'>Produtos</Link>
                    <Link to='/cadproduto' className='hover:underline'>Cadastrar Produto</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
