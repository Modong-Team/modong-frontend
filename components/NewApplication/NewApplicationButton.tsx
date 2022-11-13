import styled from 'styled-components';
import Colors from '../../constants/colors';
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
	padding: 1rem 2rem;
	display: flex;
	gap: 0.6rem;
	border-radius: 0.8rem;
	border: 0.1rem solid ${Colors.border07};
	background-color: ${Colors.white01};
`;
