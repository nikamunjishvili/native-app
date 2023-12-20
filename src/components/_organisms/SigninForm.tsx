import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {Button, InputFiels} from '../_molecules';
import {Icon} from '../_atoms';
import {useNavigation} from '@react-navigation/native';

const SigninForm = () => {
  const navigation = useNavigation();
  const [isRulesAccepted, setIsRulesAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const schema = yup
    .object({
      FirstName: yup.string().required(),
      LastName: yup.string().required(),
      Email: yup.string().required(),
      Password: yup.string().required(),
    })
    .required();
  type FormDataType = yup.InferType<typeof schema>;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataType>({resolver: yupResolver(schema)});

  const onSubmit = (data: FormDataType) => {
    setIsLoading(true);
    console.log('registration');
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? undefined : 'height'}
      style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          height: '100%',
          paddingVertical: 50,
          paddingHorizontal: 30,
          gap: 30,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Text style={styles.headingLogo}>Login here</Text>
          <Text
            style={{
              fontSize: 14,
              alignContent: 'center',
              color: '#000',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Welcome back you’ve been missed!
          </Text>
        </View>
        <View style={styles.container}>
          <InputFiels
            placeholder="Email"
            name="Email"
            control={control}
            required
            containerStyle={styles.inputContainerStyle}
          />
          <InputFiels
            placeholder="Password"
            name="Password"
            control={control}
            required
            containerStyle={styles.inputContainerStyle}
          />
          <Text
            style={{
              color: '#1F41BB',
              fontWeight: 'bold',
              textAlign: 'right',
            }}>
            Forgot your password?
          </Text>
          <View style={{height: 20}} />
          <Button
            variant="next"
            text="Sign in"
            isLoading={isLoading}
            onPress={handleSubmit(onSubmit)}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('registration')}
            style={{padding: 20}}>
            <Text
              style={{
                color: '#494949',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Create new account
            </Text>
          </TouchableOpacity>

          <View style={{padding: 20}}>
            <Text
              style={{
                color: '#1F41BB',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Or continue with
            </Text>
          </View>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#ECECEC',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TouchableOpacity>
                <Icon iconName="facebook" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#ECECEC',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TouchableOpacity>
                <Icon iconName="google" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: '#ECECEC',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TouchableOpacity>
                <Icon iconName="apple" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SigninForm;

const styles = StyleSheet.create({
  container: {flex: 1},
  contentWrapper: {flex: 1},
  keyboardContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 20,
  },
  headingLogo: {
    color: '#1F41BB',
    fontWeight: 'bold',
    fontSize: 30,
  },
  inputContainerStyle: {marginBottom: 20},
  checkboxWrapper: {marginVertical: 16},
});
