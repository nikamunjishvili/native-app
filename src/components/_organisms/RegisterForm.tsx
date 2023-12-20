import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {Button, InputFiels} from '../_molecules';
import {Icon} from '../_atoms';
import {useNavigation} from '@react-navigation/native';
import {useRegisterUserMutation} from '../../services';
import {useAppSelector, useAppDispatch} from '../../store/store/hooks/hooks';
import {updateOnboard} from '../../store/slices';

const CompanyRegisterForm = () => {
  const [registerUser] = useRegisterUserMutation();
  const {token, user} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const schema = yup
    .object({
      userName: yup.string().required(),
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
    const formData = new FormData();
    formData.append('name', data.userName);
    formData.append('email', data.userName);
    formData.append('password', data.userName);

    registerUser(formData as never)
      .unwrap()
      .then(() => {
        Alert.alert('User Registered successfully!!', '', [
          {
            text: 'OK',
            onPress: () => {
              if (token) {
                dispatch(updateOnboard({isOnboarded: false}));
              }
            },
          },
        ]);
      })
      .catch(err => Alert.alert('User Registered successfully!!',"", [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate("wellcome")
          },
        },
      ]))
      .finally(() => {
        setIsLoading(false);
      });
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
          <Text style={styles.headingLogo}>Create Account</Text>
          <Text
            style={{
              fontSize: 14,
              alignContent: 'center',
              color: '#000',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Create an account so you can explore all the existing jobs
          </Text>
        </View>
        <View style={styles.container}>
          <InputFiels
            variant="name"
            name="userName"
            control={control}
            required
            containerStyle={styles.inputContainerStyle}
          />
          <InputFiels
            variant="email"
            name="Email"
            control={control}
            required
            containerStyle={styles.inputContainerStyle}
          />
          <InputFiels
            name="Password"
            variant="password"
            control={control}
            required
            containerStyle={styles.inputContainerStyle}
          />
          <Button
            variant="next"
            text="Sign up"
            isLoading={isLoading}
            onPress={handleSubmit(onSubmit)}
          />
          <View style={{padding: 20}}>
            <TouchableOpacity onPress={() => navigation.navigate('signin')}>
              <Text
                style={{
                  color: '#494949',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Already have an account
              </Text>
            </TouchableOpacity>
          </View>
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

export default CompanyRegisterForm;

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
