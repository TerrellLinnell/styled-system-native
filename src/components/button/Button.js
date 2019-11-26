import React from 'react';
import styled, { css } from 'styled-components';
import {
	space,
	fontSize,
	layout,
	border,
	position,
	variant,
} from 'styled-system';
import { TouchableOpacity } from 'react-native';

export const Button = props => {
	return (
		<CustomTouchableOpacity {...props}>{props.children}</CustomTouchableOpacity>
	);
};

const CustomTouchableOpacity = styled(TouchableOpacity)(
	{
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 0,
	},
	variant({
		variants: {
			skeleton: {
				border: props => `1px solid ${props.colors.text}`,
				background: 'transparent',
			},
			green: {
				background: 'green',
			},

			yellow: {
				background: 'yellow',
			},
			big: {
				width: 175,
				height: 135,
			},
			borderLarge: {
				border: props => `5px solid ${props.colors.text}`,
			},
		},
	}),
	fontSize,
	space,
	layout,
	border,
	position,
);

Button.defaultProps = {
	borderRadius: '5px',
	p: 2,
};
