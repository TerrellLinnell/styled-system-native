import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';

export const CarouselPaginationBar = props => {
	const { width } = Dimensions.get('window');

	return (
		<TouchableOpacity
			onPress={() => {
				props.carouselRef.current.snapToItem(props.index);
			}}
		>
			<View
				width={width / 9}
				marginHorizontal={4}
				height={3}
				backgroundColor={
					props.inactive ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.90)'
				}
			></View>
		</TouchableOpacity>
	);
};
