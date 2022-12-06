import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { SC } from '../../constants/styled';
import { svgModong, svgDown16 } from '../../constants/svgs';

export default function MainHeader() {
	return (
		<S.MainHeaderContainer>
			<SC.HeaderLogo>{svgModong}</SC.HeaderLogo>
			<S.HeaderProfile>
				<S.ProfileInitial>h</S.ProfileInitial>
				<S.ProfileDropDown>{svgDown16}</S.ProfileDropDown>
			</S.HeaderProfile>
		</S.MainHeaderContainer>
	);
}

namespace S {
	export const MainHeaderContainer = styled(SC.HeaderContainer)`
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 10;
	`;

	export const HeaderProfile = styled.div`
		display: flex;
		align-items: center;
		gap: 0.8rem;
	`;

	export const ProfileInitial = styled.div`
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

	export const ProfileDropDown = styled.div`
		display: flex;
	`;
}
