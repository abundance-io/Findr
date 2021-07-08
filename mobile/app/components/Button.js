import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Button({
	children,
	type = "primary",
	style,
	icon,
	color,
}) {
	const getType = (val) => {
		switch (type) {
			case "primary":
				if (val === "container") {
					return { backgroundColor: color.primary };
				} else {
					return { color: color.secondary };
				}
			case "secondary":
				if (val === "container") {
					return { backgroundColor: color.secondary };
				} else {
					return { color: color.primary };
				}
		}
	};
	return (
		<TouchableOpacity
			style={[styles.button, getType("container"), style]}
			// onPress={onPress}
		>
			{icon && (
				<FontAwesome5
					style={{ marginRight: 8 }}
					name={icon}
					size={14}
					color="#fff"
				/>
			)}

			<Text style={[styles.button_text, getType()]}>{children}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		borderRadius: 4,
		width: "100%",
		height: 50,
		flex: -1,
		flexDirection: "row",
		// backgroundColor: "dodgerblue",
	},
	button_text: {
		fontSize: 16,
		textTransform: "capitalize",
	},
	primary_button: {
		backgroundColor: "dodgerblue",
	},
	primary_button_text: {
		color: "#fff",
	},
	secondary_button: {
		backgroundColor: "#fff",
	},
	secondary_button_text: {
		color: "dodgerblue",
	},
});
