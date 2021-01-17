import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';

import PokemonListItem from '../components/PokemonListItem'
import getMons from '../api/getMons'

const PokemonList = ()=>{
    const [ pokemons, setPokemons ] = useState([])
    
    // const mapPokemons = ()=>{
    //     pokemons.map(el=>{
    //         let { url } = pokemon
    //         pokemon.id = url.substring(34, url.length - 1)
    //         pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    //         return pokemon
    //     })
    // }

    // useEffect(() => {
    //     console.log("this is useeffect")
    //     mapPokemons()
    //     console.log(pokemons)
    //   },[]);

    console.log(mapPokemons(),"this is my consolelog")
    return(
        <SafeAreaView>
            <PokemonListItem image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} name='bulba'/>
            {mapPokemons()}
        </SafeAreaView>
    )
}

export default PokemonList

//<PokemonListItem image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} name='bulba'/>
