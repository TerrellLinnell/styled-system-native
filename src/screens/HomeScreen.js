import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, View, TextInput } from 'react-native';

import { Box, Image, Typography, Button, Shelf } from '../components';
import Carousel, {
	Pagination,
	getInputRangeFromIndexes,
} from 'react-native-snap-carousel';

import { layout } from 'styled-system';
import styled from 'styled-components';

const { height, width } = Dimensions.get('window');

export default function HomeScreen({
	screenProps: { chooseMode, mode },
	...props
}) {
	const [activeSlide, setActiveSlide] = useState(0);

	const getPagination = () => (
		<Pagination
			dotsLength={data.length}
			activeDotIndex={activeSlide}
			containerStyle={{
				backgroundColor: 'white',
				paddingVertical: 8,
			}}
			dotElement={
				<Box width={width / 9} mx={1} height={3} bg="rgba(0, 0, 0, 0.92)"></Box>
			}
			inactiveDotElement={
				<Box width={width / 9} mx={1} height={3} bg="rgba(0, 0, 0, 0.4)"></Box>
			}
			inactiveDotOpacity={0.4}
			inactiveDotScale={0.6}
		/>
	);

	const scrollInterpolator = (index, carouselProps) => {
		const range = [5, 4, 3, 2, 1, 0, -1];
		const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
		const outputRange = range;

		return { inputRange, outputRange };
	};

	const animatedStyles = (index, animatedValue, carouselProps) => {
		const sizeRef = carouselProps.vertical
			? carouselProps.itemHeight
			: carouselProps.itemWidth;
		const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

		return {
			transform: [
				{
					translateX: animatedValue.interpolate({
						inputRange: [-1, 0, 1, 2, 3, 4, 5],
						outputRange: [0.5, 0, 1, 2, 3, 4, 5],
						extrapolate: 'clamp',
					}),
				},
			],
		};
	};

	return (
		<View>
			<Box bg="white" variant={['full']} pt={35} scroll>
				{getPagination()}
				<Box
					bg="#F0FFF0"
					flexDirection="row"
					justifyContent="space-between"
					p={1}
				>
					<Button variant={['skeleton']} onPress={chooseMode}>
						<Typography type="h3">{'<'}</Typography>
					</Button>
					<Button variant={['skeleton']} onPress={chooseMode}>
						<Typography type="h3">cancel</Typography>
					</Button>
				</Box>
				<Carousel
					data={data}
					renderItem={item => item.item}
					sliderWidth={width}
					sliderHeight={height}
					itemWidth={width}
					activeSlideAlignment={'start'}
					onSnapToItem={index => setActiveSlide(index)}
					scrollInterpolator={scrollInterpolator}
					slideInterpolatedStyle={animatedStyles}
				/>
			</Box>
		</View>
	);
}
const Input = styled(TextInput)(layout);

const data = [
	<Box id={'0'} width={width} height={height} bg="red">
		<Input
			width={1 / 2}
			height={40}
			placeholder={'Useless Placeholder'}
			textContentType={'countryName'}
		/>
	</Box>,
	<Box id={'1'} width={width} height={height} bg="orange"></Box>,
	<Box id={'2'} width={width} height={height} bg="yellow"></Box>,
	<Box id={'3'} width={width} height={height} bg="green"></Box>,
	<Box id={'4'} width={width} height={height} bg="blue"></Box>,
	<Box id={'5'} width={width} height={height} bg="indigo"></Box>,
	<Box id={'5'} width={width} height={height} bg="violet"></Box>,
];

HomeScreen.navigationOptions = {
	header: null,
};
