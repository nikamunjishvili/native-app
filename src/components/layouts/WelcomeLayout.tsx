import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../themes';
import IconComponent from '../_atoms/icons';
import { Icon } from '../_atoms';
import { RegisterForm } from '../_organisms';
import { useNavigation } from '@react-navigation/native';

const WelcomeLayout = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity onPress={() => console.log('loginStepOne')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("registration")}>
          <Text style={styles.buttonText}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  
  );
};

export default WelcomeLayout;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'center',backgroundColor: colors.bgGray
  },

  logoWrapper: {
    alignItems: 'center',
    gap: 20,
  },
  buttonsWrapper: {
    gap: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 10,
    backgroundColor: colors.blue,
    borderRadius: 10,
    marginVertical: 5,
    width: 250,
    textAlign: 'center',
  },

  textUnderLogo: {
    color: colors.main,
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },

});
