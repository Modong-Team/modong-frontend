import styled from 'styled-components';
import Colors from '../../constants/colors';
import Fonts from '../../constants/fonts';
import { svgPrev, svgNext } from '../../constants/svgs';

export default function NewApplicationButton() {
	return (
		<ButtonContainer>
			<Button>{svgPrev}이전</Button>
			<Button>다음{svgNext}</Button>
		</ButtonContainer>
	);
}

const ButtonContainer = styled.section`
	grid-column: 2/3;
	display: flex;
	justify-content: space-between;
`;

const Button = styled.button`
	${Fonts.button14bold}
	padding: 1.4rem 2rem;
	display: flex;
	gap: 0.6rem;
	border-radius: 0.8rem;
	border: 0.1rem solid ${Colors.gray200};
	background-color: ${Colors.white};

	& {
		svg {
			position: relative;
			top: 0.18rem;
			width: 0.7rem;
		}
	}
`;
