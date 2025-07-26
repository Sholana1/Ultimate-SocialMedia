import FeedPostItem from "@/components/FeedPostItem";
import dummyPost from "@/dummyPosts";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FlatList, Pressable } from "react-native";

export default function FeedScreen() {
  return (
    <>
      <FlatList
        data={dummyPost}
        renderItem={({ item }) => (
          <Link href={`/post/${item.id}`}>
            <FeedPostItem post={item} />
          </Link>
        )}
      />
      <Link href="/new" asChild>
        <Pressable className="absolute right-5 bottom-5 bg-[#007AFF] rounded-full w-[60px] h-[60px] items-center justify-center shadow-lg">
          <AntDesign name="plus" size={24} color="white" />
        </Pressable>
      </Link>
    </>
  );
}
