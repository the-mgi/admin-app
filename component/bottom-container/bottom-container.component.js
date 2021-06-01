import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import CustomButton from "../button/button.component";

const BottomContainerComponent = ({buttonText, colorB, textColor, topText, handlePress}) => {
	return (
		<>
			<View style={styles.bottomContainer}>
				<View style={styles.line}/>
				<View>
					<Text style={{width: 30, textAlign: 'center'}}>OR</Text>
				</View>
				<View style={styles.line}/>
			</View>
			<View style={{marginTop: 50}}>
				<Text style={styles.text}>{topText}</Text>
			</View>
			<View>
				<CustomButton buttonText={buttonText} colorB={colorB} textColor={textColor} width={280}
											height={50} style={{marginTop: 20}} borderColor="royalblue" handlePress={handlePress}/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	line: {
		flex: 1,
		height: 1,
		backgroundColor: 'gray'
	},
	bottomContainer: {
		marginTop: 50,
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		fontSize: 16,
		color: "black"
	}
});

export default BottomContainerComponent;
