import {StyleSheet, View, Image, Text} from 'react-native';
import React from 'react';
import {colors, typography} from '../../themes';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../_molecules';

const WelcomeLayout = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.imageBackground}>
      <View style={styles.container}>
        <Image source={require('../../assets/work.png')} />
        <View>
          <Text
            style={{
              color: '#1F41BB',
              textAlign: 'center',
              fontSize: typography.sizes['3xl'],
            }}>
            Discover Your Dream Job here
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#000',
              fontSize: 14,
            }}>
            Explore all the existing job roles based on your interest and study
            major
          </Text>
        </View>
        <View style={styles.buttonsWrapper}>
          <Button
            text="Login"
            variant="primary"
            containerStyle={styles.signinButton}
            onPress={() => navigation.navigate('signin')}
          />
          <Button
            text="Register"
            containerStyle={styles.signinButton}
            onPress={() => navigation.navigate('registration')}
          />
        </View>
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
    justifyContent: 'center',
    backgroundColor: '#ECECEC'
  },
  imageBackground: {
    flex: 1,
  },
  logoWrapper: {
    alignItems: 'center',
    gap: 20,
  },
  buttonsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 35,
    gap: 20,
  },

  signinButton: {
    color: colors.white,
    fontSize: typography.sizes['5xl'],
    fontWeight: '500',
    paddingVertical: 1,
    backgroundColor: '#1F41BB',
    boxShadow: '0px 10px 20px 0px #CBD6FF',
    borderRadius: 10,
    marginVertical: 10,
    width: 150,
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
