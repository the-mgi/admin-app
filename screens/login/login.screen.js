import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import TextInputComponent from "../../component/text-input/text-input.component";
import CustomButton from "../../component/button/button.component";
import CommonStyles from '../../utils/common-styles';
import BottomContainerComponent from "../../component/bottom-container/bottom-container.component";

const LoginScreenComponent = ({navigation, route}) => {
	const [userData, setUserData] = useState({email: "", password: ""});

	const handleInputChange = (text, type) => {
		setUserData({...userData, [type]: text});
	};

	const navigate = () => {
		navigation.navigate("signUpScreen");
	};

	return (
		<>
			<View style={{...CommonStyles.container, ...CommonStyles.card}}>
				<View>
					<Text style={{...CommonStyles.margin, marginBottom: 0}}>Email Address</Text>
					<TextInputComponent value={userData.username} placeholder="Email Address" onChangeText={handleInputChange}
															keyboardType="email-address" name="email"/>
				</View>

				<View>
					<Text style={{...CommonStyles.margin, marginBottom: 0}}>Password</Text>
					<TextInputComponent value={userData.password} onChangeText={handleInputChange} keyboardType="default"
															placeholder="Password" secureTextEntry={true} name="password"/>
				</View>
				<View>
					<View style={CommonStyles.margin}>
						<CustomButton buttonText="Login" colorB="royalblue" width={280} height={50}
													textColor="white" handlePress={() => {
						}}/>
					</View>
				</View>
				<View style={styles.forgotSignUp}>
					<View>
						<Text style={{marginTop: 10, color: "red", fontSize: 16}}>Forgot Password?</Text>
					</View>
				</View>
				<BottomContainerComponent handlePress={navigate} buttonText="Create new Account"
																	topText="Don't have an account yet?" textColor="royalblue"/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	forgotSignUp: {
		flexDirection: "row",
		justifyContent: "flex-end",
		width: 250
	}
});

export default LoginScreenComponent;
