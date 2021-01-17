import { create } from 'apisauce'

const apiClient = create.apply({
    baseURL:"https://pokeapi.co/api/v2/pokemon/?limit=10",
})

export default apiclient