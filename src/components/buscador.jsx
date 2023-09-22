import { IconSearch } from "./Icon";

export function Buscador() {
    return (

        <>
            <div className=" flex flex-col justify-center gap-5 p-6 items-center font-bold " >
                <div>
                    <h3 className="text-2xl">
                        Mas de 800 pokemones, elige tu favorito
                    </h3>
                </div>
                <section className="flex gap-4 items-center">
                    <label>
                        <input className="border px-10  text-center border-red-300 border-solid rounded-lg" type="text" placeholder="Pikachu, charmander ...." />
                    </label>

                    <button className=" flex gap-2 items-center bg-red-800 hover:bg-red-500 rounded-lg p-2 text-gray-100">
                        <i className="" ><IconSearch /></i>
                        <span className="hidden sm:flex">Buscar Pokemon</span>
                    </button>
                </section>
            </div >
        </>

    );
}

