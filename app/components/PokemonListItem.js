import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

const PokemonListItem = ({ image, name, id })=>(
  <ListItem 
    rounded 
    bottomDivider
    onPress={()=>console.log("listitem")}
    Component={TouchableScale}
    friction={90}
    tension={100}
    activeScale={0.95}
    linearGradientProps={{
      colors: ['red', 'orange'],
      start: { x: 1, y: 0 },
      end: { x: 0.1, y: 0 },
    }}
    ViewComponent={LinearGradient}
  >
    <Avatar source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}} size={"large"}/>
    <ListItem.Content>
      <ListItem.Title style={{ color: 'yellow', fontWeight: 'bold', fontSize:20 }}>{name}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
)

export default PokemonListItem