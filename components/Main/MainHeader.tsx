import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { HeaderContainer, HeaderLogo } from '../../constants/styled';
import { svgModong, svgDown } from '../../constants/svgs';

export default function MainHeader() {
	return (
		<MainHeaderContainer>
			<HeaderLogo>{svgModong}</HeaderLogo>
			<HeaderProfile>
				<ProfileInitial>h</ProfileInitial>
				<ProfileDropDown>{svgDown}</ProfileDropDown>
			</HeaderProfile>
		</MainHeaderContainer>
	);
}

const MainHeaderContainer = styled(HeaderContainer)`
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 10;
`;

const HeaderProfile = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

const ProfileInitial = styled.div`
	${Fonts.heading18bold}
	background-color: ${Colors.blue500};
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${Colors.white};
`;

const ProfileDropDown = styled.div`
	display: flex;
`;
