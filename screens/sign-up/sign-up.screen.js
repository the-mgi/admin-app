import React, {useState} from 'react';
import {Text, View} from "react-native";
import CommonStyles from "../../utils/common-styles";
import TextInputComponent from "../../component/text-input/text-input.component";
import CustomButton from "../../component/button/button.component";
import BottomContainerComponent from "../../component/bottom-container/bottom-container.component";

const SignUpScreenComponent = ({navigation, route}) => {
	const [userData, setUserData] = useState({username: "", emailAddress: "password"});

	const navigate = () => {
		navigation.navigate("loginScreen");
	};

	const handleInputChange = (text, type) => {
		setUserData({...userData, [type]: text});
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
					<TextInputComponent value={userData.username} placeholder="Email Address" onChangeText={handleInputChange}
															keyboardType="email-address" name="email"/>
				</View>
				<View>
					<Text style={{...CommonStyles.margin, marginBottom: 0}}>Password</Text>
					<TextInputComponent value={userData.username} placeholder="Password" onChangeText={handleInputChange}
															keyboardType="default" name="email" secureTextEntry={true}/>
				</View>
				<View>
					<View style={{...CommonStyles.margin, marginBottom: 0}}>
						<CustomButton buttonText="Create Account" colorB="royalblue" width={280} height={50}
													textColor="white" handlePress={() => {}}/>
					</View>
				</View>
				<BottomContainerComponent handlePress={navigate} textColor="royalblue" colorB="white" buttonText="Login" topText="Already have an account? Sign in here"/>
			</View>
		</>
	);
};

export default SignUpScreenComponent;
