import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, ScrollView, Text, View, TextInput } from 'react-native';
import { Box, Button } from '../components';
import { layout } from 'styled-system';
import styled from 'styled-components';

const CarouselComponent1 = ({
	handleBlur,
	handleChange,
	handleSubmit,
	values,
	...props
}) => {
	const { height, width } = Dimensions.get('window');

	return (
		<Box
			id={'6'}
			width={width}
			height={height - 200}
			bg="violet"
			justifyContent="flex-end"
		>
			<Button onPress={handleSubmit} variant="borderLarge">
				<Text>Submit</Text>
			</Button>
		</Box>
	);
};

const Input = styled(TextInput)(layout);

CarouselComponent1.propTypes = { values: PropTypes.object };

export default CarouselComponent1;
