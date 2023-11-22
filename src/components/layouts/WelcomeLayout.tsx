import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../themes';

const WelcomeLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity onPress={() => console.log('loginStepOne')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('userTypesChooser')}>
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