import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InfoCard() {
	return (
		<View style={styles.container}>
			{/* <View style={styles.circle} /> */}
			<View style={styles.amount_container}>
				<Text style={{ textAlign: "center", fontSize: 16 }}>1500</Text>
			</View>
			<View style={styles.text_container}>
				<Text style={{ textAlign: "center", fontSize: 14 }}>
					Product Sold Distribution
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "31.5%",
		// backgroundColor: "tomato",
		borderRadius: 5,
		padding: 10,
		alignItems: "center",
	},
	amount_container: {
		backgroundColor: "gold",
		// width: "100%",
		height: 75,
		width: 75,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 50,
		marginBottom: 8,
	},
	text_container: {
		// backgroundColor: "white",
		width: "100%",
	},
});
