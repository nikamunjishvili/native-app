import { Dimensions, StyleSheet, View } from "react-native";

import { AuthContentHeaderContainer } from "../containers";
import { colors } from "../../themes";

const { height } = Dimensions.get("window");

interface PropsType {
	title: string;
	height?: number | string;
	hasPaddingBottom?: boolean;
	hasPaddingHorizontal?: boolean;
	hasBackArrow?: boolean;
	onBackArrow?: () => void;
	children: React.ReactNode;
}

const AuthContentLayout = ({
	title,
	hasPaddingBottom = true,
	hasBackArrow = true,
	hasPaddingHorizontal = true,
	onBackArrow,
	children,
}: PropsType) => {
	return (
		<View style={[styles({ hasPaddingBottom, hasPaddingHorizontal }).content, { height }]}>
			<AuthContentHeaderContainer label={title} hasBackArrow={hasBackArrow} onBackArrow={onBackArrow} />

			{children}
		</View>
	);
};

export default AuthContentLayout;

interface StyleProps {
	hasPaddingBottom?: boolean;
	hasPaddingHorizontal?: boolean;
}

const styles = ({ hasPaddingBottom, hasPaddingHorizontal }: StyleProps) =>
	StyleSheet.create({
		content: {
			flex: 1,
			width: "100%",
			paddingHorizontal: hasPaddingHorizontal ? 24 : 0,
			paddingTop: 30,
			paddingBottom: hasPaddingBottom ? 30 : 0,
			borderTopLeftRadius: 40,
			borderTopRightRadius: 40,
			backgroundColor: colors.white,
			position: "absolute",
			bottom: 0,
			gap: 20,
			maxHeight: height * 0.8,
		},
	});
