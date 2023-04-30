import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@mui/material'

import Cards from '@/components/pokemonCard/Cards'
import { PokemonApiResponse } from '@/components/pokemonList/interface/pokemon.interface'

export const PokemonList = () => {
    const [pokeData, setPokeData] = useState<PokemonApiResponse[]>([])
    const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    const [nextUrl, setNextUrl] = useState<string>('')
    const [prevUrl, setPrevUrl] = useState<string>('')
    const [disable, setDisable] = useState<boolean>(true)

    const getPokemonData = async (res): Promise<PokemonApiResponse> => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData((state) => {
                state = [...state, result.data]
                return state
            })
        })
    }

    const pokeFunc = async (): Promise<any> => {
        const res = await axios.get(url)

        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        getPokemonData(res.data.results)

        console.log('PREV', res.data.previous)
        console.log('NEXT', res.data.next)

        if (res.data.previous != null) {
            setDisable(false)
        } else {
            setDisable(true)
        }
    }

    useEffect(() => {
        pokeFunc()
    }, [url])

    return (
        <>
            <Cards pokemon={pokeData}></Cards>

            <div>
                <Button
                    type="button"
                    onClick={() => {
                        setPokeData([])
                        setUrl(prevUrl)
                    }}
                >
                    Previous
                </Button>
                <Button
                    type="button"
                    onClick={() => {
                        setPokeData([])
                        setUrl(nextUrl)
                    }}
                >
                    Next
                </Button>
            </div>
        </>
    )
}
