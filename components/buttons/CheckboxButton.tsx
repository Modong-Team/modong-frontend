import styled from 'styled-components';
import { svgChecked16, svgUnChecked16 } from '../../constants/svgs';
import { CheckboxButtonProps } from './props';
import { CheckboxContainerProps } from './styled';

export default function CheckboxButton({ isActive }: CheckboxButtonProps) {
	return (
		<CheckboxContainer isActive={isActive}>
			{isActive ? svgChecked16 : svgUnChecked16}
		</CheckboxContainer>
	);
}

const CheckboxContainer = styled.div<CheckboxContainerProps>`
	svg path {
	}
`;
