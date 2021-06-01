import React from 'react';
import CommonStyles from '../../utils/common-styles'
import {ScrollView, View} from "react-native";
import ProductItemComponent from "./product-item/product-item.component";
import {PRODUCTS} from "../../utils/data";
import {createStackNavigator} from "@react-navigation/stack";
import ProductDetailsComponent from "./product-details/product-details.component";
import {NavigationContainer} from "@react-navigation/native";

const ProductsComponent = () => {
	const Stack = createStackNavigator();

	const ProductScreen = ({navigation}) => {
		const navigate = (key) => {
			navigation.navigate("productDetailScreen", {record: PRODUCTS.find(product => product.key === key)});
		};

		return (
			<>
				<View style={{...CommonStyles.container}}>
					<ScrollView>
						{PRODUCTS.map(product => {
							return (
								<View style={{margin: 10}} key={product.key}>
									<ProductItemComponent
										title={product.title}
										description={product.description}
										imageURL={product.imageURL}
										navigationHandler={() => {
											navigate(product.key)
										}}
									/>
								</View>
							);
						})}
					</ScrollView>
				</View>
			</>
		);
	};

	const ProductAndProductDetails = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="allProductsScreen"
					component={ProductScreen}
					options={{
						headerShown: true,
						headerTitle: "Products List"
					}}
				/>
				<Stack.Screen
					name="productDetailScreen"
					component={ProductDetailsComponent}
					options={{
						headerShown: true,
						headerTitle: "Product Details Screen",
					}}
				/>
			</Stack.Navigator>
		);
	}

	return (
		<NavigationContainer>
			<ProductAndProductDetails/>
		</NavigationContainer>
	);
};

export default ProductsComponent;
