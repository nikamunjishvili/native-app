import { useState } from "react";
import { KeyboardType, Pressable, StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";
import { useController } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { Icon } from "../_atoms";
import { colors, typography } from "../../themes";

type VariantsType = "name" | "email" | "password" | "phone";

interface PropsTypes {
	name: string;
	variant?: VariantsType;
	label?: string;
	required?: boolean;
	active?: boolean;
	containerStyle?: ViewStyle;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	control?: any;
	value?: string;
	defaultValue?: string;
}

const InputField = ({
	name,
	variant,
	label,
	required = false,
	active = true,
	containerStyle,
	control,
	value,
	defaultValue,
}: PropsTypes) => {

	const [hiddenPassord, setHiddenPassord] = useState(true);

	const {
		field,
		formState: { errors },
	} = useController({ control, name, defaultValue: value || defaultValue || "" });

	let keyboardType: KeyboardType = "default";
	let labelText = null;

	switch (variant) {
		case "name": {
			labelText = "name";
			break;
		}
		case "email": {
			labelText = "ელ-ფოსტა";
			keyboardType = "email-address";
			break;
		}
		case "password": {
			labelText = "password"
			break;
		}
		case "phone": {
			labelText = "mobileNum"
			keyboardType = "phone-pad";
			break;
		}
		default: {
		}
	}

	return (
		<View style={[styles({}).container, containerStyle]}>
			{(label || labelText) && (
				<Text style={styles({}).label}>
					{label || labelText} {required && <Text style={{ color: colors.red }}>*</Text>}
				</Text>
			)}

			<View style={styles({ variant, active, error: errors[name] as unknown as string }).inputWrapper}>
				<TextInput
					value={value || field.value}
					defaultValue={defaultValue}
					secureTextEntry={variant === "password" && hiddenPassord}
					editable={active && !value}
					keyboardType={keyboardType}
					onChangeText={field.onChange}
					style={styles({ variant }).input}
					autoCorrect={false}
					autoCapitalize="none"
					autoComplete={"off"}
				/>

				{variant === "password" && (
					<View style={styles({}).eyeIcon}>
						<Pressable hitSlop={4} onPress={() => setHiddenPassord(prev => !prev)}>
							<Icon iconName="eye" />
						</Pressable>
					</View>
				)}
			</View>

			<ErrorMessage
				name={name}
				errors={errors}
				render={({ message }) => <Text style={styles({}).errorText}>{message}</Text>}
			/>
		</View>
	);
};

export default InputField;

interface StylesTypes {
	error?: string;
	active?: boolean;
	variant?: VariantsType;
}

const styles = (props: StylesTypes) =>
	StyleSheet.create({
		container: {
			width: "100%",
			gap: 10,
		},

		label: { color: colors.textGray, fontSize: typography.sizes.s, fontWeight: "400" },

		inputWrapper: {
			borderWidth: 1,
			borderColor: props.error ? colors.red : props.active ? colors.borderActive : colors.borderInactive,
			borderStyle: "solid",
			borderRadius: 4,
			position: "relative",
		},

		input: {
			paddingLeft: 16,
			paddingRight: props.variant === "password" ? 40 : 16,
			paddingVertical: 12,
			color: "black",
		},

		eyeIcon: {
			justifyContent: "center",
			alignItems: "center",
			position: "absolute",
			top: 0,
			right: 20,
			bottom: 0,
		},

		errorText: {
			color: colors.red,
			fontSize: typography.sizes.s,
		},
	});
