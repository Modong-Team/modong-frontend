import styled from 'styled-components';
import Colors from '../../constants/colors';
import { NewApplicationHeaderProps } from './propsTypes';
import { svgModong } from '../../constants/svgs';

export default function NewApplicationHeader({ onDone }: NewApplicationHeaderProps) {
	return (
		<HeaderContainer>
			<HeaderLogo>{svgModong}</HeaderLogo>
			<HeaderButton>
				<SubmitBtn onClick={onDone}>저장하기</SubmitBtn>
				<SubmitBtn onClick={onDone}>작성완료</SubmitBtn>
			</HeaderButton>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.header`
	background: ${Colors.white01};
	border-bottom: 0.1rem solid ${Colors.border01};
	height: 8rem;
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

const HeaderButton = styled.div`
	display: flex;
	gap: 1.2rem;
`;

const SubmitBtn = styled.button`
	background-color: ${Colors.background03};
	padding: 1.4rem 2rem;
	border-radius: 0.8rem;
	border: 0.15rem solid ${Colors.border02};
	font-size: 1.4rem;
	font-weight: 700;
	color: ${Colors.gray02};
`;
