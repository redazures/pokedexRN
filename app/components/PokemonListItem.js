import React from 'react'
import { ListItem, Avatar } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

const PokemonListItem = ({ image, name })=>(
  <ListItem 
    rounded 
    bottomDivider
    Component={TouchableScale}
    friction={90}
    tension={100}
    activeScale={0.95}
    linearGradientProps={{
      colors: ['red', 'blue'],
      start: { x: 1, y: 0 },
      end: { x: 0.2, y: 0 },
    }}
    ViewComponent={LinearGradient}
  >
    <Avatar source={{uri: image}} size={"large"}/>
    <ListItem.Content>
      <ListItem.Title style={{ color: 'yellow', fontWeight: 'bold', fontSize:20 }}>{name}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
)

export default PokemonListItem