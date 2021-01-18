import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import LinearGradient from 'react-native-linear-gradient'

const PokemonListItem = ({ name, id })=>(
  <ListItem 
    activeScale={0.95}
    bottomDivider
    Component={TouchableScale}
    friction={90}
    linearGradientProps={{
      colors: ['red', 'orange'],
      start: { x: .2, y: 0 },
      end: { x: 0.8, y: 0 },
    }}
    onPress={()=>console.log("listitem")}
    rounded 
    tension={100}
    ViewComponent={LinearGradient}
  >
    <Avatar 
      size={"large"}
      source={{
        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
      }} 
      />
    <ListItem.Content>
      <ListItem.Title 
        style={{ 
          color: 'yellow', 
          fontSize:20,
          fontWeight: 'bold', 
          }}
        >
          {name}
        </ListItem.Title>
    </ListItem.Content>
  </ListItem>
)

export default PokemonListItem