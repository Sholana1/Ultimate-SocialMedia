import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@/providers/AuthProvider'

const ProfileScreen = () => {
    const {signOut} = useAuth();
  return (
    <View>
      <Text className='p-10 text-center text-xl'>ProfileScreen</Text>
      <Button onPress={signOut} title="Sign out" />
    </View>
  )
}

export default ProfileScreen