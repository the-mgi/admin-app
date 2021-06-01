import React, {useState} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const CustomButton = ({
												buttonText, handlePress, width, colorB,
												height = 80, borderRadius = 8, icon, ...styleProps
											}) => {

	const [isButtonPressed, setButtonPressed] = useState(false);
	const touchConfiguration = {
		onHideUnderlay: () => {
			setButtonPressed(false)
		},
		onShowUnderlay: () => {
			setButtonPressed(true)
		}
	};

	return (
		<TouchableHighlight
			{...touchConfiguration}
			onPress={() => handlePress(buttonText)}
			style={{
				...styles.button,
				backgroundColor: isButtonPressed ? styleProps.textColor : colorB,
				width: width,
				height: height,
				borderRadius: borderRadius,
				borderColor: !isButtonPressed ? styleProps.borderColor || "royalblue" : "white",
				...styleProps.style
			}}
		>
			<View style={styles.textContainer}>
				<Text style={{...styles.buttonText, color: isButtonPressed ? colorB : styleProps.textColor}}>
					{buttonText}
				</Text>
				{icon || null}
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		height: 80,
		borderWidth: 1
	},
	buttonText: {
		fontSize: 18
	},
	textContainer: {
		flexDirection: "row",
		alignItems: "center",
	}
});

export default CustomButton;
