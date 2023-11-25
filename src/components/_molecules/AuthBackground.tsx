import { Image, StyleSheet, View } from "react-native";

const AuthBackground = () => {
	return (
		<View style={[styles.background, StyleSheet.absoluteFill]}>
			<Image
				source={require("../../assets/social_media_.jpg")}
				style={[StyleSheet.absoluteFill, styles.image]}
			/>
		</View>
	);
};

export default AuthBackground;

const styles = StyleSheet.create({
	background: {
		flex: 1,
	},
	image: { width: "100%",height: "100%",resizeMode: 'cover' },
});
