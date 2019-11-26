import styled from 'styled-components';
import { space, fontSize, color, layout, textAlign } from 'styled-system';
import { Text } from 'react-native';

export const Heading = styled(Text)(fontSize, space, color, layout, textAlign);
