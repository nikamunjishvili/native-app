import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import TermsAndConditions from './TermsModal';
import {Button, InputFiels} from '../_molecules';

const CompanyRegisterForm = () => {
  // const navigation = useNavigation<OnBoardingNavigationProp<"registration">>();

  const [isRulesAccepted, setIsRulesAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const schema = yup
    .object({
      FirstName: yup.string().required(),
      LastName: yup.string().required(),
      Email: yup.string().required(),
      PhoneNumber: yup.string().required(),
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
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : "height"}
      keyboardVerticalOffset={Platform.select({ios: 10, android: 100})}>
      <View style={styles.container}>
        <ScrollView style={styles.contentWrapper}>
          <InputFiels
            name="FirstName"
            control={control}
            label="FirstName"
            required
            containerStyle={styles.inputContainerStyle}
          />
          <InputFiels
            name="LastName"
            control={control}
            label="LastName"
            required
            containerStyle={styles.inputContainerStyle}
          />
          <InputFiels
            name="Email"
            control={control}
            label="Email"
            required
            containerStyle={styles.inputContainerStyle}
          />

          <InputFiels
            name="PhoneNumber"
            control={control}
            label="PhoneNumber"
            required
            containerStyle={styles.inputContainerStyle}
          />
          <InputFiels
            name="Password"
            control={control}
            label="Password"
            required
            containerStyle={styles.inputContainerStyle}
          />
        </ScrollView>

        <View style={styles.checkboxWrapper}>
          <TermsAndConditions
            isChecked={isRulesAccepted}
            onAccept={useCallback(
              (bool: boolean) => setIsRulesAccepted(bool),
              [],
            )}
          />
          <Button
            variant="next"
            text="Register"
            isLoading={isLoading}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
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
  inputContainerStyle: {marginBottom: 20},
  checkboxWrapper: {marginVertical: 16},
});
