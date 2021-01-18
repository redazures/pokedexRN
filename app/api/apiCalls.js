import React from 'react'
import apiClient from './apiClient'

const DigimonsToGet = '?limit=1118'

const getPokemons =()=>(
    apiClient.get(DigimonsToGet)
)

const getPokemonDetils=id=>{
    apiClient.get(id)
}

export {
    getPokemons,
    getPokemonDetils,
}