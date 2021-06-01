import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreenComponent from "./screens/login/login.screen";
import SignUpScreenComponent from "./screens/sign-up/sign-up.screen";
import ForgotPasswordScreenComponent from "./screens/forgot-password/forgot-password.screen";
import {useAsyncStorage} from "@react-native-async-storage/async-storage";
import {ASYNC_STORAGE_KEYS, STATUSES} from "./utils/constants";
import {ActivityIndicator} from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import BottomNavigationComponent from "./component/bottom-navigation/bottom-navigation.component";
import {Text, View} from "react-native";
import CommonStyles from './utils/common-styles'

export default function App() {
	const [status, setStatus] = useState(STATUSES.IS_LOADING);
	const {getItem: getUserData, setItem: setUserData} = useAsyncStorage(ASYNC_STORAGE_KEYS.USER_DATA);

	useEffect(() => {
		setTimeout(() => {
			getUserData()
				.then(response => {
					if (!response) {
						setStatus(STATUSES.NOT_LOGGED_IN);
					} else {
						setStatus(STATUSES.LOGGED_IN);
					}
				});
		}, 3000);
	}, []);

	const Stack = createStackNavigator();

	const StackHistoryLoginSignUp = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="loginScreen"
					component={LoginScreenComponent}
					options={{
						headerShown: true,
						headerTitle: "Login to Account"
					}}
					initialParams={{setStatus}}
				/>
				<Stack.Screen
					name="signUpScreen"
					component={SignUpScreenComponent}
					options={{
						headerShown: true,
						headerTitle: "Sign up for your account"
					}}
					initialParams={{setStatus}}
				/>
				<Stack.Screen
					name="forgotPasswordScreen"
					component={ForgotPasswordScreenComponent}
					options={{
						headerShown: true,
						headerTitle: "Forgot Password"
					}}
				/>
			</Stack.Navigator>
		);
	};

	const Loader = () => {
		return (
			<View style={CommonStyles.container}>
				<ActivityIndicator size="large" animating={true} color="royalblue"/>
				<Text style={{marginTop: 20, fontSize: 18}}>Starting up the Application...</Text>
			</View>
		);
	};

	return (
		<>
			{status === STATUSES.IS_LOADING ?	<Loader/>
				 : status === STATUSES.LOGGED_IN ?
					<BottomNavigationComponent/> :
					<NavigationContainer>
						<StackHistoryLoginSignUp/>
					</NavigationContainer>
			}
		</>
	);
}
