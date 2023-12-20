import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';

import {colors, typography} from '../../themes';
import {Icon} from '../_atoms';

interface PropsTypes {
  text: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'linear'
    | 'next'
    | 'text'
    | 'redirection';
  onPress: any;
  disabled?: boolean;
  label?: string;
  containerStyle?: ViewStyle;
  isLoading?: boolean;
  error?: boolean;
}

const Button = ({
  text,
  variant = 'primary',
  onPress,
  disabled = false,
  label,
  containerStyle,
  isLoading = false,
  error = false,
}: PropsTypes) => {
  let wrapperStyle: ViewStyle = styles.primaryButtonWrapper;
  let textStyle: TextStyle = styles.primaryBtnText;

  switch (variant) {
    case 'primary': {
      wrapperStyle = styles.primaryButtonWrapper;
      break;
    }
    case 'secondary': {
      textStyle = styles.linearBtnText;
      wrapperStyle = styles.secondaryButtonWrapper;
      break;
    }
    case 'linear': {
      wrapperStyle = styles.linearButtonWrapper;
      textStyle = styles.linearBtnText;
      break;
    }
    case 'next': {
      wrapperStyle = styles.nextButtonWrapper;
      break;
    }
    case 'text': {
      wrapperStyle = styles.textButtonWrapper;
      textStyle = styles.textBtnText;
      break;
    }
    case 'redirection': {
      wrapperStyle = styles.redirecButtonWrapper;
      textStyle = styles.redirectBtnText;
      break;
    }
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.labelStyle}>{label}</Text>}

      <TouchableOpacity
        disabled={disabled || isLoading}
        onPress={onPress}
        style={[
          styles.buttonWrapper,
          wrapperStyle,
          disabled && styles.disabledButton,
          error && styles.btnError,
        ]}>
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={[styles.textGeneralStyle, textStyle]}>{text}</Text>
        )}

        {(variant === 'next' || variant === 'redirection') && !isLoading && (
          <Icon
            iconName="rightAngle"
            color={variant === 'redirection' ? colors.textDark : ''}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {width: '100%', gap: 10},

  labelStyle: {
    fontSize: typography.sizes.s,
    fontWeight: '400',
    color: colors.textGray,
  },

  buttonWrapper: {
    paddingVertical: 14,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonWrapper: {
    borderStartColor: '#1F41BB',
    boxShadow: '0px 10px 20px 0px #CBD6FF',
  },
  secondaryButtonWrapper: {
    backgroundColor: colors.bgGray,
  },
  linearButtonWrapper: {
    borderWidth: 1,
    borderColor: colors.borderGray,
  },
  nextButtonWrapper: {
    backgroundColor: colors.main,
    borderStartColor: '#1F41BB',
    boxShadow: '0px 10px 20px 0px #CBD6FF',
    flexDirection: 'row',
    gap: 10,
  },
  textButtonWrapper: {width: 'auto'},
  redirecButtonWrapper: {
    backgroundColor: colors.bgGray,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textGeneralStyle: {fontSize: typography.sizes.m, fontWeight: '500'},
  primaryBtnText: {
    borderStartColor: '#1F41BB',
    color: colors.white
  },
  linearBtnText: {
    color: colors.textDark,
    fontSize: typography.sizes.base,
    fontWeight: '400',
  },
  textBtnText: {
    color: colors.main,
    backgroundColor: colors.bgGray,
    fontSize: typography.sizes.m,
    fontWeight: '400',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 14,
  },
  redirectBtnText: {
    color: colors.textDark,
    fontSize: typography.sizes.base,
    fontWeight: '400',
  },

  disabledButton: {opacity: 0.7},
  btnError: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
