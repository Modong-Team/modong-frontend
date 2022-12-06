import styled from 'styled-components';
import { KanbanMoreButtonProps } from './props';
import { MoreContainerProps } from './styled';
import { svgMore24 } from '../../constants/svgs';
import Colors from '../../constants/colors';

export default function KanbanMoreButton({
	children,
	isActive,
	onClick,
	onBlur,
	isDisabled,
}: KanbanMoreButtonProps) {
	return (
		<S.MoreContainer isActive={isActive} onClick={onClick} onBlur={onBlur} isDisabled={isDisabled}>
			{svgMore24}
			{children}
		</S.MoreContainer>
	);
}

namespace S {
	export const MoreContainer = styled.button<MoreContainerProps>`
		position: relative;
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 0.6rem;
		background-color: ${(props) => props.isActive && Colors.gray200};
		transition: 0.3s ease;

		svg circle {
			fill: ${(props) => props.isDisabled && Colors.gray600};
			stroke: ${(props) => props.isDisabled && Colors.gray600};
		}
	`;
}
