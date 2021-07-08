import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Input from "../components/Input";
import IconButton from "../components/IconButton";
import InputDropdown from "../components/InputDropdown";

export default function BusinessCreateScreen() {
	return (
		<Screen style={{ padding: 20 }}>
			<Text>lekan</Text>
			<Input placeholder="Business Name" />
			<View style={styles.address_container}>
				<Input placeholder="Location" style={{ flex: 1 }} />
				{/* <Input placeholder="Business Name" /> */}
				<IconButton icon="google-maps" style={{ marginLeft: 10 }} />
			</View>
			<Input placeholder="Postal Address" />
			<InputDropdown placeholder="select location" />
		</Screen>
	);
}

const styles = StyleSheet.create({
	address_container: {
		flexDirection: "row",
		paddingVertical: 10,
		width: "100%",
	},
});
