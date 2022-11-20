import styled from 'styled-components';
import Colors from '../../constants/colors';
import { NewApplicationHeaderProps } from './props';
import { svgModong } from '../../constants/svgs';
import Fonts from '../../constants/fonts';
import { HeaderButtonProps } from './styled';

export default function NewApplicationHeader({
	onSave,
	onDone,
	isComplete,
}: NewApplicationHeaderProps) {
	return (
		<HeaderContainer>
			<HeaderLogo>{svgModong}</HeaderLogo>
			<HeaderButton isComplete={isComplete}>
				<SaveBtn onClick={onSave}>저장하기</SaveBtn>
				<SubmitBtn onClick={onDone}>작성완료</SubmitBtn>
			</HeaderButton>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	background: ${Colors.white};
	border-bottom: 0.1rem solid ${Colors.gray200};
	height: 8rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2.4rem;
`;

const HeaderLogo = styled.h1``;

const HeaderButton = styled.div<HeaderButtonProps>`
	display: flex;
	gap: 1.2rem;
	visibility: ${(props) => props.isComplete && 'hidden'};
`;

const SaveBtn = styled.button`
	${Fonts.button14bold}
	background-color: ${Colors.gray200};
	padding: 1.4rem 2rem;
	border-radius: 0.8rem;
	border: 0.1rem solid ${Colors.gray300};
	color: ${Colors.gray900};
`;

const SubmitBtn = styled(SaveBtn)`
	background-color: ${Colors.blue500};
	border-color: ${Colors.blue700};
	color: ${Colors.white};
`;
