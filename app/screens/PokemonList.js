import React, { useState, useEffect } from 'react'
import { SafeAreaView, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

import getMons from '../api/getMons'
import LoadingHook from '../components/LoadingHook'
import PokemonListItem from '../components/PokemonListItem'

const PokemonList = ()=>{
    const loadingApi = LoadingHook(getMons)
    const [ search, setSearch ] = useState("")

    useEffect(() => {
        loadingApi.request()
      },[]);

    const digitize =({item})=>{
        const { url } = item
        const digimon ={}
        digimon.id = url.substring(34, url.length - 1)
        digimon.name = item.name.charAt(0).toUpperCase() + item.name.slice(1)
        return(
            <PokemonListItem key={digimon.id} id={digimon.id} name={digimon.name}/>
        )
    }

    const filterSearch=()=>{
        return loadingApi.data?.results?.filter(el=>el.name.toLowerCase().includes(search.toLowerCase()))
    }

    console.log(filterSearch())
    return(
        <SafeAreaView style={{backgroundColor:'red', height:"100%"}}>
            <SearchBar 
                containerStyle={{backgroundColor:'red'}}
                onChangeText={setSearch} 
                placeholder={"Search For Your Pokemon Here"} 
                value={search} 
            />
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={filterSearch()}
                renderItem={digitize}
            />
        </SafeAreaView>
    )
}

export default PokemonList

//<PokemonListItem image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} name='bulba'/>
