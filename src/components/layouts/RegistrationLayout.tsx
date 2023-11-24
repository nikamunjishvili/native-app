import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useCallback, useEffect, useMemo, useState } from "react";
import AuthContentLayout from "./AuthContentLayout";
import { RegisterForm } from "../_organisms";

const RegistrationLayout = () => {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>

			<AuthContentLayout title="registration" height="85%">
				<RegisterForm />
			</AuthContentLayout>
		</KeyboardAvoidingView>
	);
};

export default RegistrationLayout;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
	},
});
