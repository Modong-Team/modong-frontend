import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgPrev, svgNext } from '../../constants/svgs';
import { NewApplicationButtonProps } from './propsTypes';
import { ButtonProps } from './styledTypes';

export default function NewApplicationButton({
	currentSection,
	sectionsLength,
	onNext,
	onPrev,
}: NewApplicationButtonProps) {
	return (
		<ButtonContainer>
			<Button onClick={onPrev} isHidden={currentSection === 0}>
				{svgPrev}이전
			</Button>
			<Button onClick={onNext}>
				{currentSection === sectionsLength - 1 ? '페이지 추가' : '다음'}
				{svgNext}
			</Button>
		</ButtonContainer>
	);
}

const ButtonContainer = styled.section`
	grid-column: 2/3;
	display: flex;
	justify-content: space-between;
`;

const Button = styled.button<ButtonProps>`
	${Fonts.button14bold}
	padding: 1.4rem 2rem;
	display: flex;
	gap: 0.48rem;
	border-radius: 0.8rem;
	border: 0.1rem solid ${Colors.gray200};
	background-color: ${Colors.white};
	visibility: ${(props) => (props.isHidden ? 'hidden' : '')};

	& {
		svg {
			position: relative;
			top: 0.18rem;
			width: 0.7rem;
		}
	}
`;
