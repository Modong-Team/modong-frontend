import styled from 'styled-components';
import Colors from '../../constants/colors';

export default function NewApplicationHeader() {
	return (
		<HeaderContainer>
			<HeaderLogo>모동</HeaderLogo>
			<SubmitBtn>작성완료</SubmitBtn>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	background: ${Colors.white01};
	border-bottom: 0.1rem solid ${Colors.border01};
	height: 10rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2.4rem;
`;

const HeaderLogo = styled.h1`
	color: ${Colors.highlight01};
	font-size: 2.8rem;
	font-weight: 700;
	margin-left: 1.2rem;
`;

const SubmitBtn = styled.button`
	background-color: ${Colors.background03};
	padding: 2rem 2.4rem;
	border-radius: 0.8rem;
	border: 0.15rem solid ${Colors.border02};
	font-size: 2.05rem;
	font-weight: 700;
	color: ${Colors.black01};
`;
