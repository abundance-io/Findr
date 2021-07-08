import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input({ placeholder, style }) {
	const [text, setText] = useState("");
	return (
		<TextInput
			style={[styles.input, style]}
			onChangeText={setText}
			placeholder={placeholder}
			value={text}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		// width: "100%",
		height: 50,
		padding: 10,
		backgroundColor: "#f3f3f3",
		borderRadius: 4,
		fontSize: 16,
	},
});
