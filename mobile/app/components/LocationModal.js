import React, { useRef } from "react";
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Animated,
	PanResponder,
	TouchableOpacity,
} from "react-native";

import LocationCard from "./LocationCard";

export default function App() {
	const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderMove: (_, gestureHandler) => {
				pan.setValue({
					x: 0,
					y: gestureHandler.dy < 0 ? 0 : gestureHandler.dy,
				});
			},
			onPanResponderRelease: (_, gestureHandler) => {
				const threshold = 0.2;
				const deltaValue = gestureHandler.vy;
				// console.log(deltaValue)
				if (deltaValue > threshold) {
					Animated.timing(pan, {
						toValue: { x: 0, y: 300 },
						duration: 500,
						useNativeDriver: false,
					}).start();
				} else if (deltaValue < threshold) {
					// pan.setValue({x: 0, y: 0})
					Animated.timing(pan, {
						toValue: { x: 0, y: 0 },
						duration: 200,
						useNativeDriver: false,
					}).start();
				}
			},
		})
	).current;

	const showBottomSheet = () => {
		Animated.timing(pan, {
			toValue: { x: 0, y: 0 },
			useNativeDriver: false,
		}).start();
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.textField} onPress={showBottomSheet}>
					{" "}
					Click Me
				</Text>
			</TouchableOpacity>
			<Animated.View
				{...panResponder.panHandlers}
				style={[
					styles.animatedContainer,
					{
						transform: [{ translateX: pan.x }, { translateY: pan.y }],
					},
				]}
			>
				<LocationCard />
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	CarouselCard_container: {
		flex: 1,
		paddingTop: StatusBar.currentHeight,
	},
	container: {
		flex: 1,
		backgroundColor: "lightblue",
		paddingTop: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	animatedContainer: {
		width: "100%",
		position: "absolute",
		bottom: 0,
	},
	button: {
		padding: 10,
		backgroundColor: "#fff",
		marginRight: "auto",
		marginLeft: "auto",
	},
});
