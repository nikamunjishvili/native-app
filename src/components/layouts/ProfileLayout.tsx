import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useAppDispatch} from '../../store/store/hooks/hooks';
import {logout} from '../../store/slices/auth/AuthSlice';
import {updateOnboard} from '../../store/slices';
import {colors} from '../../themes';

const ProfileScreenLayout = () => {
  const dispatch = useAppDispatch();

 const handleLogout = () => {
		dispatch(logout());
		dispatch(updateOnboard({ isOnboarded: true }));
	};
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          width: 130,
          height: 50,
          backgroundColor: colors.blue,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10
        }}>
        <Text style={{fontSize: 18, color: 'white'}}>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreenLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
