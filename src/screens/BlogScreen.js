import React, { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";

import BlogContext from "../context/BlogContext";

const BlogScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default BlogScreen;
