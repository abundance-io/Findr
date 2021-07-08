import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import IconButton from "./IconButton";

const DATA = [
	{
		id: "0",
		currency: "currency",
		icon: "cash",
	},
	{
		id: "1",
		currency: "crypto",
		icon: "currency-btc",
	},
	{
		id: "2",
		currency: "Naira",
		icon: "currency-ngn",
	},
	{
		id: "3",
		currency: "Dollar",
		icon: "currency-usd",
	},
	{
		id: "4",
		currency: "pounds",
		icon: "currency-jpy",
	},
	{
		id: "5",
		currency: "Naira",
		icon: "currency-ngn",
	},
	{
		id: "6",
		currency: "Dollar",
		icon: "currency-usd",
	},
	{
		id: "7",
		currency: "pounds",
		icon: "currency-jpy",
	},
];

export default function InputDropdown() {
	const [currency, setCurrency] = useState({
		id: null,
		currency: "currency",
		icon: "cash",
	});

	const [showOptions, setShowOptions] = useState(false);

	const handleSelect = (currency_value) => {
		setCurrency(currency_value);
		setShowOptions((value) => !value);
	};

	const handleShow = () => {
		setShowOptions((value) => !value);
	};

	const itemSeperator = () => (
		<View
			style={{
				backgroundColor: "#d3d3d3",
				width: "100%",
				height: 1,
			}}
		/>
	);

	const renderItem = ({ item }) => (
		<IconButton
			icon={item.icon}
			size={28}
			horizontal
			style={{ backgroundColor: "#f3f3f3", marginVertical: 0 }}
			handleClick={() => handleSelect(item)}
		>
			{item.currency}
		</IconButton>
	);

	return (
		<View>
			<IconButton
				icon={currency.icon}
				rightIcon="chevron-down"
				size={28}
				horizontal
				style={{ backgroundColor: "#f3f3f3" }}
				handleClick={() => handleShow()}
			>
				{currency.currency}
			</IconButton>
			{showOptions && (
				<View style={styles.options}>
					<FlatList
						data={DATA}
						renderItem={renderItem}
						keyExtractor={(item) => item.id}
						ItemSeparatorComponent={itemSeperator}
						showsVerticalScrollIndicator={false}
					/>
					<View style={styles.scrollAvaliable}>
						<MaterialCommunityIcons
							name="chevron-down"
							size={28}
							color="#000"
						/>
					</View>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	options: {
		position: "absolute",
		width: "100%",
		height: 200,
		top: 10,
		left: 0,
		// opacity: 0.2,
	},
	scrollAvaliable: {
		// backgroundColor: "dodgerblue",
		justifyContent: "center",
		alignItems: "center",
	},
});
