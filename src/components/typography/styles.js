import React from 'react';
import styled, { css } from 'styled-components';
import { Text, View } from 'react-native';
import { fontSize, fontWeight } from 'styled-system';

export const H1 = ({ children, ...props }) => {
	return (
		<H1Wrapper>
			<H1Text {...props}>{children}</H1Text>
		</H1Wrapper>
	);
};

const H1Wrapper = styled(View)({
	marginTop: '-12px',
	marginBottom: '-12px',
	marginRight: '-3px',
	marginLeft: '-2.8px',
});

const H1Text = styled(Text)(
	css`
		margin: 0;
		padding: 0;
	`,
	{
		color: props => props.theme.colors.text,
	},
	fontSize,
	fontWeight,
);

export const H2 = ({ children, ...props }) => {
	return (
		<H2Wrapper>
			<H2Text {...props}>{children}</H2Text>
		</H2Wrapper>
	);
};

const H2Wrapper = styled(View)({
	marginTop: '-8px',
	marginBottom: '-8px',
});

const H2Text = styled(Text)(
	css`
		margin: 0;
		margin-right: -2.7px;
		margin-left: -2.6px;
	`,
	{
		color: props => props.theme.colors.text,
	},
	fontSize,
	fontWeight,
);

export const H3 = ({ children, ...props }) => {
	return (
		<H3Wrapper>
			<H3Text {...props}>{children}</H3Text>
		</H3Wrapper>
	);
};

const H3Wrapper = styled(View)({
	marginTop: '-6px',
	marginBottom: '-6px',
});

const H3Text = styled(Text)(
	css`
		margin: 0;
		margin-right: -2.2px;
		margin-left: -2.6px;
	`,
	{
		color: props => props.theme.colors.text,
	},
	fontSize,
	fontWeight,
);
