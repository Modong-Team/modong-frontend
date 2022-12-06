import styled from 'styled-components';
import MainBoardHeader from './MainBoardHeader';
import MainBoardKanban from './MainBoardKanban';

export default function MainBoard() {
	return (
		<S.BoardContainer>
			<S.BoardWrapper>
				<MainBoardHeader />
				<MainBoardKanban />
			</S.BoardWrapper>
		</S.BoardContainer>
	);
}

namespace S {
	export const BoardContainer = styled.div`
		height: 100%;
		overflow: scroll;
	`;

	export const BoardWrapper = styled.div`
		height: 100%;
		width: 69vw;
		min-width: 99.6rem;
		max-width: 131.6rem;
		margin: 0 auto;
	`;
}
