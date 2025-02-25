
import './App.css';
import Navbar from '../src/components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListarCategorias from '../src/components/categorias/listarcategorias/ListarCategorias';
import Home from './pages/Home';
import FormCategoria from './components/categorias/formcategorias/FormCategorias';
import DeletarCategoria from './components/categorias/deletar categorias/DeletarCategorias';
import ListarProdutos from './components/produtos/listarprodutos/ListarProdutos';
import FormProdutos from './components/produtos/formprodutos/FormProdutos';
import DeletarProdutos from './components/produtos/deletarprodutos/DeletarProdutos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[90vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategorias" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadprodutos" element={<FormProdutos />} />
            <Route path="/editarprodutos/:id" element={<FormProdutos />} />
            <Route path="/deletarprodutos/:id" element={<DeletarProdutos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;