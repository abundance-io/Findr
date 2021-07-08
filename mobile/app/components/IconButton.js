import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Button({
	children,
	style,
	icon,
	size = 20,
	handleClick,
	rightIcon,
	horizontal,
}) {
	const horizontalStyles = (value) => {
		if (horizontal) {
			switch (value) {
				case 1:
					return {
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						// backgroundColor: "red",
						width: "100%",
						borderRadius: 0,
						marginVertical: 2,
					};
				case 2:
					return {
						marginRight: "auto",
						marginLeft: 10,
						fontSize: 18,
					};
				case 3:
					return {
						top: 0,
					};
			}
		}
	};
	return (
		<TouchableOpacity
			style={[styles.button, horizontalStyles(1), style]}
			onPress={handleClick}
		>
			{icon && (
				<MaterialCommunityIcons
					style={[styles.icon_positioning, horizontalStyles(3)]}
					name={icon}
					size={size}
					color="#000"
				/>
			)}
			<Text style={[styles.button_text, horizontalStyles(2)]}>{children}</Text>
			{rightIcon && horizontal && (
				<MaterialCommunityIcons name={rightIcon} size={size} color="#000" />
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		borderRadius: 4,
		width: 50,
		// width: "100%",
		height: 50,
		flex: -1,
	},
	button_text: {
		fontSize: 12,
		textTransform: "capitalize",
	},
	icon_positioning: {
		position: "relative",
		top: 6,
	},
});
