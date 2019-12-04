import React, { useState, useRef } from 'react';
import {
	Alert,
	Dimensions,
	ScrollView,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import { Box, Image, Typography, Button, Shelf } from '../components';
import Carousel, {
	Pagination,
	getInputRangeFromIndexes,
} from 'react-native-snap-carousel';

import { Formik } from 'formik';
import * as Yup from 'yup';
import CarouselComponent1 from './CarouselComponent1';
import CarouselComponentLast from './CarouselComponentLast';

import { CarouselPaginationBar } from './CarouselPaginationBar';

const { height, width } = Dimensions.get('window');

export default function HomeScreen({
	screenProps: { chooseMode, mode },
	...props
}) {
	const [activeSlide, setActiveSlide] = useState(0);
	const carouselRef = useRef(null);

	const scrollInterpolator = (index, carouselProps) => {
		const range = [5, 4, 3, 2, 1, 0, -1];
		const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
		const outputRange = range;

		return { inputRange, outputRange };
	};

	const animatedStyles = (index, animatedValue, carouselProps) => {
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

	const getPagination = () => {
		return (
			<Pagination
				dotsLength={data.length}
				activeDotIndex={activeSlide}
				containerStyle={{
					backgroundColor: 'white',
					paddingVertical: 15,
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
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
			/>
		);
	};

	return (
		<Formik
			initialValues={{ email: '' }}
			onSubmit={values => console.log(values)}
		>
			{({ handleChange, handleBlur, handleSubmit, values }) => (
				<View>
					<Box bg="white" variant={['full']} pt={35} scroll>
						{getPagination()}

						<Box
							bg="#F0FFF0"
							flexDirection="row"
							justifyContent="space-between"
							p={1}
						>
							<Button
								variant={['skeleton']}
								onPress={() =>
									Alert.alert(
										'Back button?',
										null,
										[{ text: 'Go Back', onPress: handleSubmit }],
										{
											cancelable: false,
										},
									)
								}
							>
								<Typography type="h3">{'<'}</Typography>
							</Button>
							<Button
								variant={['skeleton']}
								onPress={() =>
									Alert.alert(
										'Cancel / save progress',
										null,
										[
											{
												text: 'Save',
												onPress: handleSubmit,
												style: 'cancel',
											},
										],
										{ cancelable: false },
									)
								}
							>
								<Typography type="h3">cancel</Typography>
							</Button>
						</Box>

						<View>
							<Carousel
								ref={carouselRef}
								data={data}
								renderItem={item => {
									return React.cloneElement(item.item, {
										values,
										handleSubmit,
										handleBlur,
										handleChange,
									});
								}}
								sliderWidth={width}
								sliderHeight={height}
								itemWidth={width}
								activeSlideAlignment={'start'}
								onSnapToItem={index => setActiveSlide(index)}
								scrollInterpolator={scrollInterpolator}
								slideInterpolatedStyle={animatedStyles}
								firstItem={activeSlide}
							/>
						</View>
					</Box>
				</View>
			)}
		</Formik>
	);
}

const data = [
	<CarouselComponent1 />,
	<Box id={'1'} width={width} height={height} bg="orange">
		<Typography type="h2">2</Typography>
	</Box>,
	<Box id={'2'} width={width} height={height} bg="yellow">
		<Typography type="h2">3</Typography>
	</Box>,
	<Box id={'3'} width={width} height={height} bg="green">
		<Typography type="h2">4</Typography>
	</Box>,
	<Box id={'4'} width={width} height={height} bg="blue">
		<Typography type="h2">5</Typography>
	</Box>,
	<Box id={'5'} width={width} height={height} bg="indigo">
		<Typography type="h2">6</Typography>
	</Box>,
	<CarouselComponentLast />,
];

HomeScreen.navigationOptions = {
	header: null,
};
