import React from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import CommonStyles from '../../../utils/common-styles'
import CustomButton from "../../button/button.component";
import {List} from 'react-native-paper';

const IMAGE_PERCENTAGE = 35;
const TITLE_PERCENTAGE = 55;

const ProductItemComponent = ({navigationHandler, ...props}) => {
	const dimensions = useWindowDimensions();

	const forImage = (dimensions.width * IMAGE_PERCENTAGE) / 100;
	const forTitle = (dimensions.width * TITLE_PERCENTAGE) / 100;
	const titleMargin = (dimensions.width * 3) / 100;

	return (
		<View style={{...CommonStyles.container, ...CommonStyles.margin, flex: 0}}>
			<View style={{...styles.mainContainerProduct}}>
				<View>
					<Image
						source={{
							uri: props.imageURL
						}}
						style={{width: forImage, height: forImage}}
					/>
				</View>
				<View style={{width: forTitle, marginLeft: titleMargin, justifyContent: "center"}}>
					<View style={{flex: 1}}>
						<Text ellipsizeMode="tail" numberOfLines={2}
									style={{...styles.text, fontWeight: "bold"}}>{props.title}</Text>
						<Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>{props.description[0].point}</Text>
					</View>
					<View style={{flex: 0.4}}>
						<CustomButton buttonText="Read More" colorB="royalblue" width={135} height={40}
													textColor="white" handlePress={navigationHandler}
													icon={<List.Icon style={{width: 20}} color="white" icon="arrow-right"/>} borderRadius={5}/>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainerProduct: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		fontSize: 17,
		textAlign: "justify",
		marginBottom: 10
	}
});

export default ProductItemComponent;
