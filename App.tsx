import { StatusBar } from 'expo-status-bar';
import "./global.css"
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FeedPostItem from '@/components/FeedPostItem';
import dummyPost from '@/dummyPosts';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyPost}
        renderItem={({item}) => <FeedPostItem post={item}/>} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80
  },
});
