import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgLeft16, svgRight16 } from '../../constants/svgs';
export default function PageButtons() {
	return (
		<PageButtonsContainer>
			{svgLeft16}
			<PageNumber>1</PageNumber>
			<PageNumber>2</PageNumber>
			{svgRight16}
		</PageButtonsContainer>
	);
}

const PageButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
`;

const PageNumber = styled.div`
	${Fonts.button14medium}
	border-radius: 0.4rem;
	width: 2.4rem;
	height: 2.4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	line-height: normal;

	&:first-of-type {
		color: ${Colors.blue500};
		border: 0.14rem solid ${Colors.blue500};
	}
`;
