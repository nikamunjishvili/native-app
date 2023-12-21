import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const PostDataLayout = () => {
  const route: any = useRoute();

  const data = route.params.data;

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.postContainer}>
          <Text style={styles.title}>
            Title:
            <Text style={styles.body}>{item.title}</Text>
          </Text>
          <Text style={styles.title}>
            Description:
            <Text style={styles.body}>{item.body}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PostDataLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  postContainer: {
    marginBottom: 10,
    rowGap:30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  body: {
    fontSize: 14,
    color: 'grey',
  },
});
