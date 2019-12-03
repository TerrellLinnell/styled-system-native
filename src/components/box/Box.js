import React from 'react';
import styled from 'styled-components';
import { ScrollView, Animated, View } from 'react-native';

import {
	space,
	color,
	layout,
	flexbox,
	border,
	fontSize,
	lineHeight,
	variant,
	shadow,
} from 'styled-system';

export const Box = ({ scroll, animated, children, ...props }) => (
	<CustomBox
		as={
			scroll && !Animated
				? ScrollView
				: scroll && Animated
				? Animated.ScrollView
				: !scroll && Animated
				? Animated.View
				: View
		}
		{...props}
	>
		{children}
	</CustomBox>
);

const CustomBox = styled(View)(
	space,
	color,
	layout,
	flexbox,
	border,
	fontSize,
	lineHeight,
	shadow,
	variant({
		variants: {
			rounded: {
				borderRadius: '10px',
			},
			spaced: {
				padding: 100,
			},
			full: {
				width: '100%',
				height: '100%',
			},
		},
	}),
);

Box.defaultProps = {
	color: 'text',
	boxSizing: 'border-box',
	minWidth: 0,
};
