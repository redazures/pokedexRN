import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import PokemonList from '../screens/PokemonList'
import PokemonShow from '../screens/PokemonShow'

const Stack = createStackNavigator();



export default PokemonStackNavigatotr =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="List" component={PokemonList} options={{headerShown:false}}/>
            <Stack.Screen name="Show" component={PokemonShow} />
        </Stack.Navigator>
    )
}