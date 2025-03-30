import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const Location = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Location {id} </Text>
    </View>
  )
}

export default Location