import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';

import PokemonListItem from '../components/PokemonListItem'

const poke=[
    {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
]
const PokemonList = ()=>{
    const [ pokemons, setPokemons ] = useState([])
    
    const mapPokemons = ()=>{
        pokemons.map(el=>{
            let { url } = pokemon
            pokemon.id = url.substring(34, url.length - 1)
            pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        })
    }

    useEffect(() => {
        console.log("this is useeffect")
        mapPokemons()
        console.log(pokemons)
      },[]);

    console.log(pokemons,"what")
    return(
        <SafeAreaView>
            <PokemonListItem image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} name='bulba'/>
        </SafeAreaView>
    )
}

export default PokemonList

//<PokemonListItem image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} name='bulba'/>
