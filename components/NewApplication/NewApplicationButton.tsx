import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgPrev, svgNext } from '../../constants/svgs';
import { NewApplicationButtonProps } from './props';
import { ButtonProps } from './styled';
import { useFormsValue } from '../../contexts/FormsProviders';

export default function NewApplicationButton({
	currentPage,
	onNext,
	onPrev,
}: NewApplicationButtonProps) {
	const forms = useFormsValue();

	return (
		<S.ButtonContainer>
			<S.Button onClick={onPrev} isHidden={currentPage === -1}>
				{svgPrev}이전
			</S.Button>
			<S.Button onClick={onNext}>
				{currentPage === forms.length - 1 ? '페이지 추가' : '다음'}
				{svgNext}
			</S.Button>
		</S.ButtonContainer>
	);
}

namespace S {
	export const ButtonContainer = styled.section`
		grid-column: 2/3;
		display: flex;
		justify-content: space-between;
	`;

	export const Button = styled.button<ButtonProps>`
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
}
