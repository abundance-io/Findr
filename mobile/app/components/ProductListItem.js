import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const DATA = [
	{
		id: "1",
		product: "milo malta fresh",
		commentAlert: true,
		quantitySold: 25,
		brand: "3 Crowns",
		ranking: true,
	},
	{
		id: "2",
		product: "milo malta fresh",
		commentAlert: false,
		quantitySold: 25,
		brand: "3 Crowns",
		ranking: true,
	},
	{
		id: "3",
		product: "milo malta fresh",
		commentAlert: true,
		quantitySold: 25,
		brand: "3 Crowns",
		ranking: null,
	},
	{
		id: "4",
		product: "milo malta fresh",
		commentAlert: false,
		quantitySold: 25,
		brand: "3 Crowns",
		ranking: false,
	},
	{
		id: "7",
		product: "milo malta fresh",
		commentAlert: false,
		quantitySold: 25,
		brand: "3 Crowns",
		ranking: true,
	},
	{
		id: "5",
		product: "milo malta fresh",
		commentAlert: false,
		quantitySold: 25,
		brand: "3 Crowns",
		ranking: null,
	},
	{
		id: "6",
		product: "milo malta fresh",
		commentAlert: false,
		quantitySold: 25,
		brand: "3 Crowns",
		ranking: false,
	},
];

export default function ProductListItem({
	name,
	alert,
	quantity,
	brand,
	ranking,
}) {
	const handleRating = () => {
		switch (ranking) {
			case true:
				return { name: "triangle-up", color: "lightgreen" };

			case false:
				return { name: "triangle-down", color: "tomato" };

			default:
				return { name: "dash", color: "grey" };
		}
	};
	return (
		<View style={styles.item_container}>
			<Text style={styles.productName}>{name}</Text>
			<View style={styles.icon_container}>
				{alert && (
					<MaterialCommunityIcons
						name="comment-alert"
						color="tomato"
						size={20}
					/>
				)}
			</View>
			<Text>{quantity}</Text>
			<Text>{brand}</Text>
			<View style={styles.icon_container}>
				<Octicons
					name={handleRating().name}
					color={handleRating().color}
					size={20}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	item_container: {
		padding: 10,
		backgroundColor: "#f3f3f3",
		marginVertical: 2,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	productName: {
		textTransform: "capitalize",
		fontSize: 16,
	},
	icon_container: {
		width: 20,
		height: 20,
		// backgroundColor: "dodgerblue",
		justifyContent: "center",
		alignItems: "center",
	},
});
