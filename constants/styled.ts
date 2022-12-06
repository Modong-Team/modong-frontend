import styled from 'styled-components';
import Colors from './colors';
import { Styles } from './styles';

export namespace SC {
	export const HeaderContainer = styled.header`
		background: ${Colors.white};
		border-bottom: 0.1rem solid ${Colors.gray200};
		height: ${Styles.headerHeight};
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 2.4rem;
	`;

	export const HeaderLogo = styled.h1``;
}
