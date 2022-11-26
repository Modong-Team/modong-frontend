import styled from 'styled-components';
import { HeaderContainer, HeaderLogo } from '../../constants/styled';
import { svgModong } from '../../constants/svgs';

export default function MainHeader() {
	return (
		<MainHeaderContainer>
			<HeaderLogo>{svgModong}</HeaderLogo>
		</MainHeaderContainer>
	);
}

const MainHeaderContainer = styled(HeaderContainer)`
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;
`;
