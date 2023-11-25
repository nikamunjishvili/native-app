import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useCallback, useEffect, useMemo, useState } from "react";
import AuthContentLayout from "./AuthContentLayout";
import { RegisterForm } from "../_organisms";
import { AuthBackground } from "../_molecules";

const RegistrationLayout = () => {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
            <AuthBackground />

			<AuthContentLayout title="registration" >
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
