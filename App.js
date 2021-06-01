import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreenComponent from "./screens/login/login.screen";
import SignUpScreenComponent from "./screens/sign-up/sign-up.screen";
import ForgotPasswordScreenComponent from "./screens/forgot-password/forgot-password.screen";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
	const Stack = createStackNavigator();

	const StackHistoryLoginSignUp = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="signUpScreen"
					component={SignUpScreenComponent}
					options={{
						headerShown: true,
						headerTitle: "Sign up for your account"
					}}
				/>
				<Stack.Screen
					name="loginScreen"
					component={LoginScreenComponent}
					options={{
						headerShown: true,
						headerTitle: "Login to Account"
					}}
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
	}

	return (
		<NavigationContainer>
			<StackHistoryLoginSignUp/>
		</NavigationContainer>
	);
}
