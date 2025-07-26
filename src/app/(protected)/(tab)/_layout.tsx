import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"

const BottomTab = () => {
  return (
    <Tabs screenOptions={{tabBarShowLabel: false}}>
        <Tabs.Screen name='(home)' options={{title: "Feed", tabBarIcon: ({color, size}) =><Ionicons name='home' color={color} size={size}/>, headerShown: false }}/>
        <Tabs.Screen name='search' options={{title: "Search", tabBarIcon: ({color, size}) => <Ionicons name='search' size={size} color={color}/>}}/>
        <Tabs.Screen name='notification' options={{title: "Notification", tabBarIcon: ({size, color}) => <Ionicons name='notifications' size={size} color={color}/>}}/>
        <Tabs.Screen name='profile' options={{title: "Profile", tabBarIcon: ({size, color}) => <Ionicons name='person' size={size} color={color}/>}}/>
    </Tabs>
  )
}

export default BottomTab