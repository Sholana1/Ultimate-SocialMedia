import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { Redirect, Slot } from 'expo-router'
import { useAuth } from '@/providers/AuthProvider'

const AuthLayout = () => {
    const {isLoading, session} = useAuth();

    if(isLoading) {
        return <ActivityIndicator/>;
    }

    if(session) {
        return <Redirect href={"/"}/>
    }
  return (
    <Slot/>
  )
}

export default AuthLayout