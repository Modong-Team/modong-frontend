import styled from 'styled-components';
import { svgChecked16, svgUnChecked16 } from '../../constants/svgs';
import { CheckboxButtonProps } from './props';
import { CheckboxContainerProps } from './styled';

export default function CheckboxButton({ isActive }: CheckboxButtonProps) {
	return (
		<S.CheckboxContainer isActive={isActive}>
			{isActive ? svgChecked16 : svgUnChecked16}
		</S.CheckboxContainer>
	);
}

namespace S {
	export const CheckboxContainer = styled.div<CheckboxContainerProps>`
		svg path {
		}
	`;
}
