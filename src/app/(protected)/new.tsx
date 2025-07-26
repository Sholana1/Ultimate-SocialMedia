import { router, Stack } from 'expo-router';
import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'

const NewPost = () => {
    const [content, setContent] = useState("");

    const handleCreate = () => {
        // save the post to the backend

        setContent("");
        router.back();
    }
  return (
    <View className='flex-1 p-4'>
        <Stack.Screen options={{headerLeft: () => <Text className='text-lg' onPress={() => router.back()}>Cancel</Text>, headerRight: () => <Button onPress={handleCreate} title='Post' disabled={content.trim().length === 0}/>}}/>
        <TextInput value={content} onChangeText={setContent} autoFocus className='text-lg min-h-40' placeholder="What's happening" multiline/>
    </View>
  )
}

export default NewPost