import styled, { css } from 'styled-components';
import { space, layout, variant, border } from 'styled-system';
import { Image as RNImage } from 'react-native';

export const Image = styled(RNImage)(
	css`
		margin: 0;
		padding: 0;
	`,
	space,
	layout,
	border,
	variant({
		circle: {
			width: '400px',
		},
	}),
);
