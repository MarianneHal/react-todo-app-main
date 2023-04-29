import { IRoute } from '@/router/routes/routePublic'

import { PokemonPage } from '@/pages/pokemonPage/PokemonPage'

export const routePokemonPage: IRoute[] = [{ path: '/pokemons', element: PokemonPage, auth: false }]
