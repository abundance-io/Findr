import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

import InfoCard from "../components/InfoCard";
import ProductListItem from "../components/ProductListItem";
import Screen from "../components/Screen";
import SecondaryNavigation from "../components/SecondaryNavigation";
import SectionSlider from "../components/SectionSlider";

const d =
	"M0,213c17.421,34.736,40.645,8.086,53.208-34.554S64.059,62.519,77.574,47.481s9.137,71.574,32.741,89.848,25.127-67.767,60.153,0,30.267-39.4,44.163-54.061,17.132-31.6,25.127-53.3,14.657,45.685,23.6,31.98-1.9-81.853,12.183-86.8,15.229,76.9,44.163,67.005S360,0,360,0";
const vWidth = 363.674;
const vHeight = 258.081;
const width = Dimensions.get("window").width - 20;
const height = (width * vHeight) / vWidth;

export default function BusinessTrackingScreen() {
	const renderItem = ({ item }) => (
		<ProductListItem
			name={item.product}
			alert={item.commentAlert}
			quantity={item.quantitySold}
			brand={item.brand}
			ranking={item.ranking}
		/>
	);

	return (
		<Screen>
			<SecondaryNavigation name="Accounting" />
			<View style={styles.main_container}>
				<Text style={styles.placeholder_dropdown}>product distribution</Text>
				<View style={styles.graph_container}>
					{/* <Text style={{ color: "#FFFF00" }}>lekan is a boss</Text> */}
					<Svg
						width={width}
						height={height}
						viewBox={[0, 0, vWidth, vHeight].join(" ")}
					>
						<Path
							transform="translate(1.788 27.083)"
							d={d}
							stroke="black"
							strokeWidth={3}
						/>
					</Svg>
				</View>
				<View style={styles.placeholder_container}>
					<Text style={styles.placeholder_moments}>1M</Text>
					<Text
						style={[
							styles.placeholder_moments,
							{
								backgroundColor: "#f3f3f3",
								borderRadius: 5,
							},
						]}
					>
						1W
					</Text>
					<Text style={styles.placeholder_moments}>1D</Text>
				</View>
				<View style={styles.placeholder_profit_container}>
					<View style={styles.placeholder_wrapper}>
						<Text style={styles.placeholder_money}>N32,438</Text>
						<Text style={styles.placeholder_category}>sales</Text>
					</View>
					<View style={styles.placeholder_wrapper}>
						<Text style={styles.placeholder_money}>N2,590</Text>
						<Text style={styles.placeholder_category}>profits</Text>
					</View>
				</View>
			</View>
			<View style={styles.placeholder_popup}>
				<View style={styles.placeholder_line} />
				<View style={styles.placeholder_section_container}>
					<Text style={styles.placeholder_section_text}>products</Text>
					<Text style={styles.placeholder_section_text}>logs</Text>
					<Text style={styles.placeholder_section_text}>comments</Text>
				</View>
			</View>
			{/* <View style={styles.info_container}>
				<InfoCard />
				<InfoCard />
				<InfoCard />
			</View> */}
			{/* <SectionSlider />
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				// showsVerticalScrollIndicator={false}
				style={styles.list}
			/> */}
		</Screen>
	);
}

const styles = StyleSheet.create({
	main_container: {
		flex: 1,
	},
	placeholder_dropdown: {
		fontSize: 18,
		// fontWeight: "bold",
		textTransform: "capitalize",
		alignSelf: "center",
		padding: 10,
	},
	placeholder_moments: {
		fontSize: 20,
		fontWeight: "bold",
		padding: 10,
		margin: 8,
		// backgroundColor: "red",
	},
	placeholder_container: {
		// backgroundColor: "dodgerblue",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 10,
		margin: 10,
		marginBottom: 0,
	},
	placeholder_profit_container: {
		// backgroundColor: "tomato",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		alignSelf: "center",
		// padding: 10,
		margin: 10,
	},
	placeholder_wrapper: {
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		// overflow: "visible",
	},
	placeholder_money: {
		// backgroundColor: "dodgerblue",
		width: 100,
		textAlign: "center",
		fontSize: 24,
		fontWeight: "bold",
	},
	placeholder_category: {
		// backgroundColor: "tomato",
		textAlign: "center",
		width: 100,
		fontSize: 18,
	},
	placeholder_popup: {
		backgroundColor: "lightgreen",
		padding: 10,
		borderTopLeftRadius: 15,
		borderTopRightRadius: 15,
		alignItems: "center",
	},
	placeholder_line: {
		marginTop: 10,
		width: 50,
		height: 5,
		borderRadius: 5,
		backgroundColor: "#000080",
	},
	placeholder_section_container: {
		flexDirection: "row",
		justifyContent: "space-between",
		// backgroundColor: "red",
		padding: 10,
		width: "100%",
	},
	placeholder_section_text: {
		width: 100,
		fontSize: 18,
		fontWeight: "bold",
		// backgroundColor: "gold",
		textTransform: "capitalize",
		textAlign: "center",
	},
	graph_container: {
		// height: 200,
		// flex: 1,
		height: Dimensions.get("window").height / 2,
		// backgroundColor: "#000080",
		// borderRadius: 2,
		// borderWidth: 3,
		borderColor: "black",
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 10,
		borderRadius: 5,
	},

	info_container: {
		// flex: 1,
		margin: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	list: {
		marginTop: 10,
		marginHorizontal: 10,
	},
});
