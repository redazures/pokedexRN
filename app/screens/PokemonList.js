import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, } from 'react-native';

import PokemonListItem from '../components/PokemonListItem'

const PokemonList = ()=>{
    
    return(
        <SafeAreaView>
            <PokemonListItem image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} name='bulba'/>
        </SafeAreaView>
    )
}

export default PokemonList

