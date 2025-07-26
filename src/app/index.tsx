import FeedPostItem from "@/components/FeedPostItem";
import dummyPost from "@/dummyPosts";
import { Link } from "expo-router";
import { FlatList } from "react-native";


export default function App() {
  return (
    <FlatList
      data={dummyPost}
      renderItem={({ item }) => <Link href={`/post/${item.id}`}>
         <FeedPostItem post={item} />
      </Link>}
    />
  );
}
