import React, { useState, useRef } from 'react';
import { Dimensions, Text, View, TouchableOpacity } from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';

const { height, width } = Dimensions.get('window');

const data = [
	<View id={'1'} width={width} height={height} backgroundColor="orange">
		<Text style={{ fontSize: 32, color: 'red' }}>1</Text>
	</View>,
	<View id={'2'} width={width} height={height} backgroundColor="yellow">
		<Text style={{ fontSize: 32, color: 'red' }}>2</Text>
	</View>,
	<View id={'3'} width={width} height={height} backgroundColor="green">
		<Text style={{ fontSize: 32, color: 'red' }}>3</Text>
	</View>,
	<View id={'4'} width={width} height={height} backgroundColor="blue">
		<Text style={{ fontSize: 32, color: 'red' }}>4</Text>
	</View>,
	<View id={'5'} width={width} height={height} backgroundColor="indigo">
		<Text style={{ fontSize: 32, color: 'red' }}>5</Text>
	</View>,
	<View id={'6'} width={width} height={height} backgroundColor="violet">
		<Text style={{ fontSize: 32, color: 'red' }}>6</Text>
	</View>,
];

const CarouselPaginationBar = props => {
	return (
		<TouchableOpacity
			onPress={() => {
				props.carouselRef.current.snapToItem(props.index);
			}}
		>
			<View
				width={props.width}
				marginHorizontal={4}
				height={3}
				backgroundColor={
					props.inactive ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.90)'
				}
			></View>
		</TouchableOpacity>
	);
};

const HomeScreen = ({ screenProps: { chooseMode, mode }, ...props }) => {
	const [activeSlide, setActiveSlide] = useState(0);
	const carouselRef = useRef(null);

	const getPagination = () => (
		<Pagination
			dotsLength={data.length}
			activeDotIndex={activeSlide}
			containerStyle={{
				backgroundColor: 'white',
				paddingVertical: 8,
			}}
			dotElement={
				<CarouselPaginationBar width={width / 9} carouselRef={carouselRef} />
			}
			inactiveDotElement={
				<CarouselPaginationBar
					width={width / 9}
					carouselRef={carouselRef}
					inactive
				/>
			}
		/>
	);

	return (
		<View>
			{getPagination()}

			<View>
				<Carousel
					ref={carouselRef}
					data={data}
					renderItem={item => item.item}
					sliderWidth={width}
					sliderHeight={height}
					itemWidth={width}
					activeSlideAlignment={'start'}
					onSnapToItem={index => setActiveSlide(index)}
				/>
			</View>
		</View>
	);
};

export default HomeScreen;
