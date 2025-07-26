import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import dummyPost from '@/dummyPosts'
import FeedPostItem from '@/components/FeedPostItem'

const PostDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>()
    const post = dummyPost.find((p)=> p.id === parseInt(id))

    if(!post){
      return <Text>Post Not Found</Text>
    }
  return (
    <FeedPostItem post={post}/>
  )
}

export default PostDetails