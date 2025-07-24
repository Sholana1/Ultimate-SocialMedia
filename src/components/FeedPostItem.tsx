import { View, Text, Image } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Post } from "@/types/models";

dayjs.extend(relativeTime);

type FeedPostItemProps = {
  post: Post;
};

const FeedPostItem = ({ post }: FeedPostItemProps) => {
  return (
    <View className="flex-row gap-3 p-4 border-b border-gray-200">
      <Image
        source={{ uri: post.author.avatar }}
        className="w-12 h-12 rounded-full"
      />
      <View className="gap-2 flex-1">
        <View className="flex-row gap-1">
          <Text className="font-semibold">{post.author.name}</Text>
          <Text className="text-gray-500">{post.author.handle}</Text>
          <Text className="text-gray-500">.</Text>
          <Text className="text-gray-500">{dayjs(post.created_at).fromNow(true)}</Text>
        </View>
        <Text className="leading-5">{post.content}</Text>
        <View className="flex-row gap-5">
            <View className="flex-row gap-2 items-center">
                <MaterialCommunityIcons name="message-outline" size={20} color="gray"/>
            <Text className="text-gray-500">{post.replies_count}</Text>
            </View>
            <View className="flex-row gap-2 items-center">
                <MaterialCommunityIcons name="repeat" size={20} color="gray"/>
            <Text className="text-gray-500">{post.retweets_count}</Text>
            </View>
            <View className="flex-row gap-2 items-center">
                <MaterialCommunityIcons name="heart-outline" size={20} color="gray"/>
            <Text className="text-gray-500">{post.likes_count}</Text>
            </View>
        </View>
      </View>
    </View>
  );
};

export default FeedPostItem;
