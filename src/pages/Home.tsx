import Footer from "../components/footer/Footer"
import ListarProdutos from "../components/produtos/listarprodutos/ListarProdutos"


function Home() {
    return (
        <>
            <div className="flex justify-center bg-sky-900">
                <div className='grid grid-cols-2 text-white container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h2 className='font-bold text-5xl'>
                            Seja bem vindo(a)!
                        </h2>
                        <p className='text-xl'>Aqui você encontra os remédios mais baratos.</p>
                        <p className='text-xl'>Aproveite nossas promoções!!</p>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="images\remedios.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListarProdutos />
            <Footer />
            
        </>
    )
}

export default Home