import styled from 'styled-components';
import { FilterButtonProps } from './props';
import { svgDown8 } from '../../constants/svgs';
import Fonts from '../../constants/fonts';
import Colors from '../../constants/colors';

export default function FilterButton({ children, title, onClick, onBlur }: FilterButtonProps) {
	return (
		<FilterContainer onClick={onClick} onBlur={onBlur}>
			{title}
			{svgDown8}
			{children}
		</FilterContainer>
	);
}

const FilterContainer = styled.button`
	${Fonts.button14medium}
	display: flex;
	width: fit-content;
	padding: 0.6rem 1.4rem;
	align-items: center;
	gap: 0.6rem;
	border: 0.1rem solid ${Colors.gray200};
	border-radius: 1.6rem;
	cursor: pointer;
	position: relative;

	svg {
		position: relative;
		top: -0.1rem;
	}
`;
