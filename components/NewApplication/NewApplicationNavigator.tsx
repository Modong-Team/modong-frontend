import styled from 'styled-components';
import Colors from '../../constants/colors';
import { NewApplicationNavigatorProps } from './propsTypes';
import { NavigatorElementProps } from './styledTypes';
import { svgVertical } from '../../constants/svgs';

export default function NewApplicationNavigator({
	sections,
	currentSection,
	onRouteToSection,
}: NewApplicationNavigatorProps) {
	return (
		<NavigatorContainer>
			{sections.map((v, i) => (
				<NavigatorElement isCurrent={i === currentSection} key={i}>
					<span onClick={() => onRouteToSection(i)}>{v.title}</span>
					{i !== 0 && svgVertical}
				</NavigatorElement>
			))}
		</NavigatorContainer>
	);
}

const NavigatorContainer = styled.section`
	margin-left: 2rem;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
	grid-column: 3/4;
`;

const NavigatorElement = styled.div<NavigatorElementProps>`
	background-color: ${(props) => (props.isCurrent ? Colors.white : Colors.gray200)};
	border: 0.1rem solid ${(props) => (props.isCurrent ? Colors.gray200 : Colors.gray300)};
	color: ${(props) => (props.isCurrent ? Colors.gray900 : Colors.gray500)};
	padding: 1.2rem 1.6rem;
	padding-right: 1rem;
	border-radius: 0.8rem;
	width: 17.4rem;
	display: flex;
	justify-content: space-between;

	& {
		span,
		svg {
			cursor: pointer;
		}
	}
`;
