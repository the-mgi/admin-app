import React from 'react';
import {StyleSheet, TextInput} from "react-native";

const TextInputComponent = ({placeholder, value, keyboardType, onChangeText, secureTextEntry = false, name}) => {
	return (
		<TextInput
			value={value}
			placeholder={placeholder}
			keyboardType={keyboardType}
			onChangeText={(text) => {onChangeText(text, name)}}
			style={{...styles.textInput, ...styles.margin}}
			secureTextEntry={secureTextEntry}
		/>
	);
};

const styles = StyleSheet.create({
	textInput: {
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		width: 280,
		height: 50
	},
	margin: {
		margin: 10
	},
});

export default TextInputComponent;
