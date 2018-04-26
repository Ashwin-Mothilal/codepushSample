// import {AppRegistry} from "react-native";
// import App from "./App";
//
// AppRegistry.registerComponent("CodePushExample", () => App);

import React from "react";
import {AppRegistry, Text, View, Image} from "react-native";
import codePush from "react-native-code-push";

const LaunchScreen = () => (
	<View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
		<Text> This is test. </Text>
		<View
			style={{
				borderWidth: 1,
				borderColor: "green",
				height: 20,
				width: 20
			}}>
			<Image
				source={require("./images/back.png")}
				style={{
					height: 20,
					width: 20,
					resizeMode: "center",
					tintColor: "red"
				}}
			/>
		</View>
	</View>
);

LaunchScreen = codePush(LaunchScreen);
AppRegistry.registerComponent("CodePushExample", () => LaunchScreen);
