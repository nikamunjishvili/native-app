import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../themes';

interface Props {
  title: string;
  body: string;
}

const CardItem = ({title, body}: Props) => {
  return (
    <View style={{margin: 20}}>
    <View style={styles.card}>
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
    title: {
      fontSize: 15,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    body: {
      fontSize: 16,
      color: '#333'
    },
  });
  