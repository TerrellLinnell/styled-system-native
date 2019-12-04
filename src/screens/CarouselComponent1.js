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
		<Box id={'0'} width={width} height={height} bg="red">
			<Input
				height={40}
				placeholder={'Useless Placeholder'}
				textContentType={'countryName'}
				onChangeText={handleChange('email')}
				onBlur={handleBlur('email')}
				value={values.email}
			/>
		</Box>
	);
};

const Input = styled(TextInput)(layout);

CarouselComponent1.propTypes = { values: PropTypes.object };

export default CarouselComponent1;
