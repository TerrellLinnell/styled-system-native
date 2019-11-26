import React from 'react';
import { H1, H2, H3 } from './styles';
import Text from 'react-native';

export const Typography = props => {
	switch (props.type) {
		case 'h1':
			return (
				<H1 id="th1" {...props} fontSize={6} fontWeight={'bold'}>
					{props.children}
				</H1>
			);
		case 'h2':
			return (
				<H2 id="th2" {...props} fontSize={5} fontWeight={'bold'}>
					{props.children}
				</H2>
			);
		case 'h3':
			return (
				<H3 id="th3" {...props} fontSize={4} fontWeight={'bold'}>
					{props.children}
				</H3>
			);
		default:
			console.warn('ERROR: please specify a valid font type prop');
			return <H3>{props.children}</H3>;
	}
};
