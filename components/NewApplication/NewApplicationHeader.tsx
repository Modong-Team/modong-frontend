import styled from 'styled-components';
import Colors from '../../constants/colors';
import { NewApplicationHeaderProps } from './props';
import { svgModong } from '../../constants/svgs';
import Fonts from '../../constants/fonts';
import { HeaderButtonProps } from './styled';
import { SC } from '../../constants/styled';

export default function NewApplicationHeader({
	onSave,
	onDone,
	isComplete,
}: NewApplicationHeaderProps) {
	return (
		<SC.HeaderContainer>
			<SC.HeaderLogo>{svgModong}</SC.HeaderLogo>
			<S.HeaderButton isComplete={isComplete}>
				<S.SaveBtn onClick={onSave}>저장하기</S.SaveBtn>
				<S.SubmitBtn onClick={onDone}>작성완료</S.SubmitBtn>
			</S.HeaderButton>
		</SC.HeaderContainer>
	);
}

namespace S {
	export const HeaderButton = styled.div<HeaderButtonProps>`
		display: flex;
		gap: 1.2rem;
		visibility: ${(props) => props.isComplete && 'hidden'};
	`;

	export const SaveBtn = styled.button`
		${Fonts.button14bold}
		background-color: ${Colors.gray200};
		padding: 1.4rem 2rem;
		border-radius: 0.8rem;
		border: 0.1rem solid ${Colors.gray300};
		color: ${Colors.gray900};
	`;

	export const SubmitBtn = styled(SaveBtn)`
		background-color: ${Colors.blue500};
		border-color: ${Colors.blue700};
		color: ${Colors.white};
	`;
}
