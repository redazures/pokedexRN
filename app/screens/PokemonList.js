import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, FlatList } from 'react-native';

import PokemonListItem from '../components/PokemonListItem'
import getMons from '../api/getMons'

list=[
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
    const [ search, setSearch ] = useState("")

    useEffect(() => {
        console.log("this is useeffect")
        populate()
      },[]);

    const populate = async () =>{
        const response = await getMons()
        console.log("this is response",response.data)
    }

    const digitize =({item})=>{
        const { url } = item
        const digimon ={}
        digimon.id = url.substring(34, url.length - 1)
        digimon.name = item.name.charAt(0).toUpperCase() + item.name.slice(1)
        return(
            <PokemonListItem key={digimon.id} id={digimon.id} name={digimon.name}/>
        )
    }
    
    // console.log(pokemons)

    return(
        <SafeAreaView>
            <FlatList
                keyExtractor={(digimon, index) => index.toString()}
                data={pokemons}
                renderItem={digitize}
            />
        </SafeAreaView>
    )
}

export default PokemonList

//<PokemonListItem image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} name='bulba'/>
