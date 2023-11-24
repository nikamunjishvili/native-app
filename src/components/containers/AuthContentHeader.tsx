import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { typography } from "../../themes";
import { Icon } from "../_atoms";

interface PropsTypes {
	label: string;
	hasBackArrow?: boolean;
	onBackArrow?: () => void;
}

const AuthContentHeaderContainer = ({ label, hasBackArrow, onBackArrow }: PropsTypes) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			{hasBackArrow && (
				<TouchableOpacity
					onPress={() => {
						(onBackArrow && onBackArrow()) || navigation.goBack();
					}}
				>
					<Icon iconName="leftAngel" />
				</TouchableOpacity>
			)}

			<Text style={styles.label}>{label}</Text>
		</View>
	);
};

export default AuthContentHeaderContainer;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	label: {
		fontSize: typography.sizes["3xl"],
		textTransform: "uppercase",
		flex: 1,
		textAlign: "center",
	},
});
