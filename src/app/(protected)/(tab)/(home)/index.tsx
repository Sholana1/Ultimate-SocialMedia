import FeedPostItem from "@/components/FeedPostItem";
import dummyPost from "@/dummyPosts";
import { useAuth } from "@/providers/AuthProvider";
import { Link } from "expo-router";
import { Button, FlatList } from "react-native";


export default function App() {
  const {signOut} = useAuth()
  return (
    <FlatList
      data={dummyPost}
      renderItem={({ item }) => <Link href={`/post/${item.id}`}>
         <FeedPostItem post={item} />
      </Link>}
      ListFooterComponent={() => <Button onPress={signOut} title="Sign out"/>}
    />
  );
}
