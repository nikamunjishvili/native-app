import {StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';
import {colors, typography} from '../../themes';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../_molecules';

const WelcomeLayout = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../assets/social_media_.jpg')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.buttonsWrapper}>
          <Button
            text="Login"
            variant="primary"
            containerStyle={styles.buttonText}
            onPress={() => navigation.navigate('signin')}
          />
          <Button
            text="Register"
            variant="primary"
            containerStyle={styles.buttonText}
            onPress={() => navigation.navigate('registration')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeLayout;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
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
    fontSize: typography.sizes['5xl'],
    fontWeight: '500',
    paddingVertical: 5,
    backgroundColor: '#1F41BB',
    boxShadow: "0px 10px 20px 0px #CBD6FF",
    borderRadius: 10,
    marginVertical: 10,
    width: 250,
    textAlign: 'center',
  },

  textUnderLogo: {
    color: '#1F41BB',
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
});
