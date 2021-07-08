import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SectionSlider() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Products</Text>
			<Text style={styles.text}>Images</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
		flexDirection: "row",
		backgroundColor: "tomato",
		borderRadius: 5,
		padding: 1,
		// justifyContent: "space-around",
	},
	text: {
		margin: 1,
		flex: 1,
		backgroundColor: "gold",
		padding: 10,
		textAlign: "center",
		fontSize: 16,
		borderRadius: 5,
	},
});
