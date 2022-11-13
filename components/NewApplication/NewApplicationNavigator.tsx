import styled from 'styled-components';
import Colors from '../../constants/colors';

export default function NewApplicationNavigator() {
	return (
		<NavigatorContainer>
			<NavigatorElement>지원자 정보</NavigatorElement>
			<NavigatorElement>질문 페이지</NavigatorElement>
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

const NavigatorElement = styled.div`
	background-color: ${Colors.gray200};
	border: 0.1rem solid ${Colors.gray300};
	padding: 1.2rem 1.6rem;
	border-radius: 0.8rem;
	width: 17.4rem;
	color: ${Colors.gray500};
`;
