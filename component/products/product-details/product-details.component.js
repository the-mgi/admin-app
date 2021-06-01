import React, {useLayoutEffect} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import CommonStyles from '../../../utils/common-styles';

const ProductDetailsComponent = ({navigation, route}) => {
	const {record} = route.params;
	const dimensions = useWindowDimensions();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: record.title.substr(0, 20) + "..."
		});
	});

	return (
		<View style={{...CommonStyles.container}}>
			<ScrollView>
				<View style={{paddingHorizontal: 15}}>
					<View>
						<Image
							source={{
								uri: record.imageURL
							}}
							style={{width: dimensions.width - 30, height: dimensions.width}}
						/>
					</View>
					<View style={{marginVertical: 10}}>
						<Text style={{...styles.heading, color: "royalblue", marginBottom: 10}}>Product Title</Text>
						<Text style={{...styles.heading, textAlign: "justify"}}>{record.title}</Text>
					</View>
					<View>
						<Text style={{...styles.heading, color: "royalblue", marginVertical: 10}}>Product Description</Text>
						<FlatList
							data={record.description}
							renderItem={({item}) => {
								return (
									<View style={{flexDirection: "row", marginBottom: 10}}>
										<View style={styles.circle}/>
										<Text style={{fontSize: 17}}>{item.point}</Text>
									</View>
								);
							}}
							keyExtractor={item => item.key}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	heading: {
		fontSize: 26,
		fontWeight: "bold"
	},
	circle: {
		width: 6,
		height: 6,
		backgroundColor: "#6988e7",
		borderRadius: 50,
		marginRight: 5,
		marginTop: 5
	}
});

export default ProductDetailsComponent;
