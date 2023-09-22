import { useState, useEffect } from "react";
export function UsePoke() {

    const [pokemones, setPokemones] = useState([])
    const [siguienteUrl, setSiguienteUrl] = useState("")
    const URL_DEFAULT = "https://pokeapi.co/api/v2/pokemon?limit=18&offset=0"
    const [verMas, setVerMas] = useState(true)


    const getPokemones = async (url = URL_DEFAULT) => {
        //Recuperamos listado de pokemones 
        const response = await fetch(url)
        const listaPokemones = await response.json()
        const { next, results } = listaPokemones

        const newPokemones = await Promise.all(
            results.map(async (pokemon) => {

                const response = await fetch(pokemon.url)
                const poke = await response.json()



                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other.dream_world.front_default || poke.sprites.front_default,



                }
            })
        )



        //
        return { next, newPokemones }
    }

    const obtenerPokemones = async () => {
        const { next, newPokemones } = await getPokemones()
        setPokemones(newPokemones)
        setSiguienteUrl(next)
    }

    const masPokemones = async () => {
        const { next, newPokemones } = await getPokemones(siguienteUrl)
        setPokemones(prev => [...prev, ...newPokemones])
        next === null && setVerMas(false)
        setSiguienteUrl(next)
    }

    useEffect(() => {
        obtenerPokemones()
    }, [])
    return { pokemones, masPokemones, verMas }
}
