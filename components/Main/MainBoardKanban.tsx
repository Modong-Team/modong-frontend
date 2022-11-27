import styled from 'styled-components';
import FilterButton from '../buttons/FilterButton';
import MainBoardKanbanColumn from './MainBoardKanbanColumn';

export default function MainBoardKanban() {
	return (
		<KanbanContainer>
			<section>
				<FilterButton title='모든 지원자' />
				<FilterButton title='가나다 순' />
			</section>
			<section>
				<MainBoardKanbanColumn />
				<MainBoardKanbanColumn />
				<MainBoardKanbanColumn />
				<MainBoardKanbanColumn />
			</section>
		</KanbanContainer>
	);
}

const KanbanContainer = styled.div`
	> section:first-of-type {
		padding: 1.6rem 0;
		display: flex;
		gap: 0.6rem;
	}

	> section:nth-of-type(2) {
		display: flex;
		justify-content: space-between;
		padding-bottom: 3.2rem;
	}
`;
