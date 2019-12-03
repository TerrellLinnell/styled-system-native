import React, { useEffect, useState } from 'react';
import { ScrollView, Animated, FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Box } from '../box';

import {
	space,
	color,
	layout,
	flexbox,
	border,
	fontSize,
	lineHeight,
	variant,
} from 'styled-system';

export const Shelf = ({ children, childWidth, drawerSpacing, ...props }) => {
	const [data, setData] = useState([...children]);
	const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 100 });

	let shadowWidth = new Animated.Value(200);
	const shadowHeight = new Animated.Value(0);

	console.log('shadowWidth', shadowWidth);
	console.log('shadowHeight', shadowHeight);

	const onViewRef = React.useRef(({ viewableItems, changed }) => {
		let tempArr = [];

		// console.log('viewableItems', viewableItems);

		console.log('shadowWidth', shadowWidth);
		console.log('shadowHeight', shadowHeight);

		Animated.timing(
			// Animate value over time
			shadowWidth, // The value to drive

			{
				toValue: 250, // Animate to final value of 1
				duration: 1350,
				delay: 1150,
			},
		).start();

		data.map(child => {
			// console.log('child props', child.props);
			console.log('shadowWidth', shadowWidth);
			console.log('shadowHeight', shadowHeight);
			tempArr.push(
				React.cloneElement(
					child,

					viewableItems[0] &&
						viewableItems[0].item &&
						viewableItems[0].item.props &&
						viewableItems[0].item.props.id &&
						viewableItems[0].item.props.id === child.props.id
						? {
								// boxShadow: '17px 17px black',
								// transition: 'border 2s',
								// transition: 'box-shadow 2s',
								// elevation: 4,
								shadowColor: 'gray',
								shadowOffset: { width: -7, height: 7 },
								shadowOpacity: 1,
								shadowRadius: 2,
								elevation: 3,
								border: '2px solid red',
								height: shadowWidth.interpolate({
									inputRange: [0, 1],
									outputRange: [0, 1.2],
								}),
						  }
						: {},
				),
			);
		});

		setData(tempArr);
		// Animated.timing(
		// 	// Animate value over time
		// 	shadowWidth, // The value to drive
		// 	{
		// 		toValue: 250, // Animate to final value of 1
		// 	},
		// ).start();
		// Animated.timing(
		// 	// Animate value over time
		// 	shadowHeight, // The value to drive
		// 	{
		// 		toValue: 7, // Animate to final value of 1
		// 	},
		// ).start();
	});

	return (
		<CustomShelf
			data={data}
			keyExtractor={item => item.props.id}
			onViewableItemsChanged={onViewRef.current}
			viewabilityConfig={viewConfigRef.current}
			horizontal
			showsHorizontalScrollIndicator={false}
			ItemSeparatorComponent={() => (
				<Box style={{ padding: (drawerSpacing || 32) / 2 }}></Box>
			)}
			renderItem={({ item }) => item}
			{...props}
			snapToInterval={childWidth + (drawerSpacing || 32)}
			snapToAlignment={'start'}
			decelerationRate={0}
			pagingEnabled
			contentContainerStyle={{
				padding: drawerSpacing || 32,
			}}
		/>
	);
};

const CustomShelf = styled(FlatList)(
	space,
	color,
	layout,
	flexbox,
	border,
	fontSize,
	lineHeight,
);

Shelf.propTypes = {
	childWidth: PropTypes.number.isRequired,
};
