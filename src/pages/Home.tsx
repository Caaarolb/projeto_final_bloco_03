import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="bg-slate-50 flex justify-center  h-screen">
                <div className="grid grid-cols-2 text-black">
                    <div className="flex flex-col gap-3 items-center justify-center py-1">
                        <h2 className="text-5xl font-bold">Seja bem vindo!</h2>
                        <p className="text-2xl text-red-400">Aqui você encontra os produtos mais baratos!</p>
                        <div className="flex justify-around gap-4">
                            {/* Aqui, adicione o Link ao invés do button */}
                            <Link to="/cadproduto">
                                <button className="rounded text-red-400 border-stone-950 border-solid border-1 py-1 px-5 transition-transform duration-200 hover:scale-110">
                                    Novo Produto
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTh6ZzlxejBvdjk4dHJxMzhiN2JseXM5bm8zbHF1NDRkM2JqZ2lzcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WGDYDUYVGMwqiwt1z2/giphy.gif"
                            alt="Animação"
                            className="w4/3"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
