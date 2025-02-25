import 'reactjs-popup/dist/index.css';
import './ModalProduto.css'

import Popup from 'reactjs-popup';
import FormProdutos from '../formprodutos/FormProdutos';


function ModalProduto() {
  return (
    <>
      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Novo Produto</button>} modal>
        <div>
          <FormProdutos />
        </div>
      </Popup>
    </>
  );
}

export default ModalProduto;