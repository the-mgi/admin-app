import React, {useState} from 'react';
import {StyleSheet, Text, ToastAndroid, View} from "react-native";
import TextInputComponent from "../../component/text-input/text-input.component";
import CustomButton from "../../component/button/button.component";
import CommonStyles from '../../utils/common-styles';
import BottomContainerComponent from "../../component/bottom-container/bottom-container.component";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {ASYNC_STORAGE_KEYS} from "../../utils/constants";

const LoginScreenComponent = ({navigation, route}) => {
	const [userData, setUserData] = useState({email: "", password: ""});
	const {getItem: getUserDataStore} = useAsyncStorage(ASYNC_STORAGE_KEYS.USER_DATA);

	const handleInputChange = (text, type) => {
		setUserData({...userData, [type]: text});
	};

	const navigate = () => {
		navigation.navigate("signUpScreen");
	};

	const loginHandler = () => {
		(async () => {
			let jsObject = await getUserDataStore();
			if (!jsObject) {
				ToastAndroid.show("User does not exists", ToastAndroid.SHORT);
				return;
			}
			jsObject = JSON.parse(jsObject);
			if (
				userData.email.toLowerCase() === jsObject.email.toLowerCase() &&
				userData.password.toLowerCase() === jsObject.password.toLowerCase()) {
				ToastAndroid.show("You are successfully logged In", ToastAndroid.SHORT);
			} else {
				ToastAndroid.show("Email & Password combination does not match", ToastAndroid.SHORT);
			}
		})();
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
													textColor="white" handlePress={loginHandler}/>
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
