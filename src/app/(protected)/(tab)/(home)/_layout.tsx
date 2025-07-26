import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{title: "Feed"}}/>
        <Stack.Screen name='post/[id]' options={{title: "Post"}}/>
    </Stack>
  )
}

export default HomeLayout