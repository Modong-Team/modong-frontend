import styled from 'styled-components';
import Fonts from '../../constants/fonts';
import Colors from '../../constants/colors';
import MainBoardHeader from './MainBoardHeader';
import MainBoardKanban from './MainBoardKanban';

export default function MainBoard() {
	return (
		<BoardContainer>
			<BoardWrapper>
				<MainBoardHeader />
				<MainBoardKanban />
			</BoardWrapper>
		</BoardContainer>
	);
}

const BoardContainer = styled.div`
	height: 100%;
	overflow: scroll;
`;

const BoardWrapper = styled.div`
	height: 100%;
	width: 69vw;
	min-width: 99.6rem;
	max-width: 131.6rem;
	margin: 0 auto;
`;
