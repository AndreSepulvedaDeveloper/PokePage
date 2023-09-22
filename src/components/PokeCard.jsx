
import { UsePoke } from "../hooks/usePoke";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Buscador } from "./buscador";

export function PokeCard() {

    const { pokemones, masPokemones, verMas } = UsePoke()

    return (
        <>
            <InfiniteScroll
                dataLength={pokemones.length}
                next={masPokemones}
                hasMore={verMas}
                loader={<h4> Cargando... </h4>}
                endMessage={
                    <h3> lo siento no ahi mas pokemones </h3>
                }
            >
                <div className=" ">
                    <Buscador />
                    <div className=" mx-auto max-w-2xl px-4 py-6  sm:px-6  lg:max-w-7xl lg:px-8">


                        <div className=" grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
                            {pokemones.map(pokemon => {
                                return (
                                    <a key={pokemon.id} href="/" className="group hover:opacity-80  text-white  bg-blue-950 p-2 rounded-3xl shadow-lg hover:shadow-none shadow-gray-700">

                                        <div className="rounded-full bg-red-700 m-3 text-center p-2 ">
                                            <p className="mt-1 text-lg font-medium 0">{pokemon.name} <span className="">{pokemon.id}</span></p>
                                        </div>

                                        <div className=" flex aspect-h-1 aspect-w-1 w-26 h-26 items-center rounded-full justify-center  xl:aspect-h-8 xl:aspect-w-7  p-3 ">
                                            <div className=" flex h-36 w-36 rounded-full bg-yellow-400 justify-center" >
                                                <img
                                                    src={pokemon.img}
                                                    alt={pokemon.name}
                                                    width={111}
                                                    height={120}
                                                    className=" logo object-contain object-center "
                                                />
                                            </div>
                                        </div>
                                        <h3 className="mt-4 text-sm  text-center mb-3">Tipo de Pokemon</h3>

                                    </a>
                                )
                            })}

                        </div>
                    </div>
                </div>

            </InfiniteScroll>
        </>
    );
}

