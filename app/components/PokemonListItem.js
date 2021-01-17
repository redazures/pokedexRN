import React from 'react'
import { Text } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const PokemonListItem = ({ image, name })=>(
  <ListItem bottomDivider>
    <Avatar source={{uri: image}} />
    <ListItem.Content>
      <ListItem.Title>{name}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
)

export default PokemonListItem