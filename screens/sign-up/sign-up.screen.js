import React, {useState} from 'react';
import {Text, ToastAndroid, View} from "react-native";
import CommonStyles from "../../utils/common-styles";
import TextInputComponent from "../../component/text-input/text-input.component";
import CustomButton from "../../component/button/button.component";
import BottomContainerComponent from "../../component/bottom-container/bottom-container.component";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {ASYNC_STORAGE_KEYS, STATUSES} from "../../utils/constants";

const SignUpScreenComponent = ({navigation, route}) => {
	const [userData, setUserData] = useState({username: "", emailAddress: "", password: ""});
	const {setItem: setUserDataStore} = useAsyncStorage(ASYNC_STORAGE_KEYS.USER_DATA);
	const {setStatus} = route.params;

	const navigate = () => {
		navigation.navigate("loginScreen");
	};

	const handleInputChange = (text, type) => {
		setUserData({...userData, [type]: text});
	};

	const signUpHandler = () => {
		if (!userData.username) {
			ToastAndroid.show("Username must not be empty ", ToastAndroid.SHORT);
		} else if (!userData.emailAddress) {
			ToastAndroid.show("Email Address must not be empty ", ToastAndroid.SHORT);
		} else if (!userData.password) {
			ToastAndroid.show("Password must not be empty ", ToastAndroid.SHORT);
		} else {
			setUserDataStore(JSON.stringify(userData));
			setStatus(STATUSES.LOGGED_IN);
		}
	};

	return (
		<>
			<View style={{...CommonStyles.container, ...CommonStyles.card}}>
				<View>
					<Text style={{...CommonStyles.margin, marginBottom: 0}}>Username</Text>
					<TextInputComponent value={userData.username} placeholder="Username" onChangeText={handleInputChange}
															keyboardType="default" name="username"/>
				</View>
				<View>
					<Text style={{...CommonStyles.margin, marginBottom: 0}}>Email Address</Text>
					<TextInputComponent value={userData.emailAddress} placeholder="Email Address" onChangeText={handleInputChange}
															keyboardType="email-address" name="emailAddress"/>
				</View>
				<View>
					<Text style={{...CommonStyles.margin, marginBottom: 0}}>Password</Text>
					<TextInputComponent value={userData.password} placeholder="Password" onChangeText={handleInputChange}
															keyboardType="default" name="password" secureTextEntry={true}/>
				</View>
				<View>
					<View style={{...CommonStyles.margin, marginBottom: 0}}>
						<CustomButton buttonText="Create Account" colorB="royalblue" width={280} height={50}
													textColor="white" handlePress={signUpHandler}/>
					</View>
				</View>
				<BottomContainerComponent handlePress={navigate} textColor="royalblue" colorB="white" buttonText="Login"
																	topText="Already have an account? Sign in here"/>
			</View>
		</>
	);
};

export default SignUpScreenComponent;
