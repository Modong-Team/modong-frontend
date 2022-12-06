import styled from 'styled-components';
import { FilterButtonProps } from './props';
import { svgDown8 } from '../../constants/svgs';
import Fonts from '../../constants/fonts';
import Colors from '../../constants/colors';
import { FilterContainerProps } from './styled';

export default function FilterButton({
	children,
	title,
	onClick,
	onBlur,
	isActive,
}: FilterButtonProps) {
	return (
		<S.FilterContainer onClick={onClick} onBlur={onBlur} isActive={isActive}>
			{title}
			{svgDown8}
			{children}
		</S.FilterContainer>
	);
}

namespace S {
	export const FilterContainer = styled.button<FilterContainerProps>`
		${Fonts.button14medium}
		display: flex;
		width: fit-content;
		padding: 0.6rem 1.4rem;
		align-items: center;
		gap: 0.6rem;
		background-color: ${(props) => props.isActive && Colors.blue300};
		border: 0.1rem solid ${(props) => (props.isActive ? Colors.blue500 : Colors.gray200)};
		border-radius: 1.6rem;
		cursor: pointer;
		position: relative;
		transition: 0.3s ease;

		svg {
			position: relative;
			top: -0.1rem;
		}
	`;
}
