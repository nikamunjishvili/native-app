import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  body: string;
  date: string;
  created: string;
  imageUrl: string;
}

const CardItem = ({title, body, date, created, imageUrl}: Props) => {
  return (
    <View style={{margin: 20}}>
      <View style={styles.card}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <Text style={styles.body}>{created}</Text>
        <Text style={styles.title}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
  image: {
    width: 50,
    borderRadius: 50,
    height: 50,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  body: {
    fontSize: 16,
    color: '#333',
  },
});
